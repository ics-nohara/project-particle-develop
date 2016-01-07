/**
 * Created by nyamogera on 2015/12/29.
 * アプリケーションルートです。
 */

class App {
  public stage:createjs.Stage;
  private drawingLayer:DrawingLayer;
  private stampLayer:StampLayer;
  private toolbar:Toolbar;
  private layer:ILayer[];
  private canvas:HTMLCanvasElement;

  constructor() {

    this.layer = [];

    this.toolbar = new Toolbar();

    this.canvas = <HTMLCanvasElement>document.getElementById("canvas_drawing");

    this.canvas.width = 1024;
    this. canvas.height = 512;

    this.stage = new createjs.Stage(this.canvas);

    // 円を作成します
    var shape = new createjs.Shape();
    shape.graphics.beginFill("white"); // 赤色で描画するように設定
    shape.graphics.drawRect(0, 0, 1024, 512); //半径 100px の円を描画

    this.stage.addChild(shape); // 表示リストに追加

    createjs.Ticker.addEventListener("tick", this.update);

    this.toolbar.addEventListener('change_tab', this.changeTab);
    this.toolbar.addEventListener('change_tool', this.changeTool);

    this.stage.addEventListener("pressmove", this.handleMouseDown);
  }

  handleMouseDown = () => {

    console.log("handleMouseDown" + this.toolbar.toolId);

    if( !(this.layer.length == 0 || this.layer[this.layer.length-1].isExit() )) {
      return ;
    }

    switch (this.toolbar.toolId) {
      case tool.TOOL_SELECT:
        break;

      case  tool.TOOL_PEN  :

        var container = new createjs.Container();
        this.stage.addChild(container);

        this.drawingLayer = new DrawingLayer(this.stage, container, this.canvas.width, this.canvas.height, "#000");
        this.drawingLayer.updateSetting(this.toolbar.drawingSetting);

        this.layer.push( this.drawingLayer );

        this.drawingLayer.start();
        break;

      case  tool.TOOL_STAMP  :

        var stamp = new Star();
        this.stampLayer = new StampLayer(this.stage,stamp);
        this.stampLayer.updateSetting(this.toolbar.shapeSetting);

        this.stage.addChild(this.stampLayer.stamp.shape);

        this.layer.push( this.stampLayer );

        this.stampLayer.start();
        break;


      case  tool.TOOL_TEXT  :

        var stamp = new Star();
        this.stampLayer = new StampLayer(this.stage,stamp);
        this.stampLayer.updateSetting(this.toolbar.shapeSetting);

        this.stage.addChild(this.stampLayer.stamp.shape);

        this.layer.push( this.stampLayer );

        this.stampLayer.start();
        break;
    }
  }


  changeTab = () => {
    console.log("tabChanged");

    if( this.toolbar.toolId == tool.TOOL_SELECT) {
      this.stage.mouseChildren = true;
    } else {
      this.stage.mouseChildren = false;
    }
  }

  changeTool = () => {

    /*
    if( this.layer.length == 0 )
    {
      return ;
    }
    var currentLayer:ILayer = this.layer[this.layer.length-1];
    if ( currentLayer === this.drawingLayer ) {
      this.updateDrawSetting();
    }

    if ( currentLayer === this.stampLayer ) {
      this.updateShapeSetting();
    }*/
  }

  update = () => {
    if( this.layer.length >= 1 && !this.layer[this.layer.length-1].isExit() ) {
      this.layer[this.layer.length-1].update();
    }
    // Stageの描画を更新します
    this.stage.update();
  }

  updateDrawSetting = () => {
    this.drawingLayer.updateSetting(this.toolbar.drawingSetting);
  }
  updateShapeSetting = () => {
    this.stampLayer.updateSetting(this.toolbar.shapeSetting);
  }
}