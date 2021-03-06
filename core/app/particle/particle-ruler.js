System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ruler;
    return {
        setters:[],
        execute: function() {
            /**
             * キャンバスに表示するルーラーの制御クラスです。
             */
            Ruler = (function () {
                function Ruler(_data) {
                    var _this = this;
                    this._data = _data;
                    this.FONT_COLOR = "#444";
                    this._isMouseDown = false;
                    this.container = new createjs.Container();
                    this._shapeBg = new createjs.Shape();
                    this.container.addChild(this._shapeBg);
                    this._shapeMouse = new createjs.Shape();
                    this.container.addChild(this._shapeMouse);
                    this._thumb = new createjs.Shape();
                    this._thumb.cursor = "crosshair";
                    this._thumb.graphics.setStrokeStyle(3)
                        .beginStroke("white").drawRect(-8, -8, 16, 16).endStroke()
                        .beginStroke("black").drawRect(-6, -6, 12, 12).endStroke()
                        .beginFill("rgba(0, 0, 0, 0.01)").drawRect(-24, -24, 48, 48);
                    this.container.addChild(this._thumb);
                    this.container.on("mousedown", function () {
                        _this._isMouseDown = true;
                    });
                    this.container.on("pressmove", this.handleThumbMouseMove, this);
                    this.container.on("pressup", function () {
                        _this._isMouseDown = false;
                    });
                    this._verticalTextList = [];
                    this._horizontalTextList = [];
                }
                Ruler.prototype.handleThumbMouseMove = function (event) {
                    var stage = this.container.stage;
                    var point = this.container.globalToLocal(stage.mouseX, stage.mouseY);
                    this._thumb.x = point.x;
                    this._thumb.y = point.y;
                    // データに反映
                    this._data.startX = point.x;
                    this._data.startY = point.y;
                };
                Ruler.prototype.setSize = function (ws, hs) {
                    this._width = ws;
                    this._height = hs;
                    var graphics = this._shapeBg.graphics;
                    graphics.clear();
                    graphics.setStrokeStyle(1);
                    graphics.beginStroke(this.FONT_COLOR);
                    // 枠線を描く
                    graphics.drawRect(-0.5, -0.5, ws + 1.0, hs + 1.0);
                    var distance = 35;
                    var w = Math.floor(this._width / distance);
                    var h = Math.floor(this._height / distance);
                    for (var i = 0; i < w; i++) {
                        var ii = (i);
                        if (this._horizontalTextList.length <= ii) {
                            this._horizontalTextList.push(new createjs.Text((i * distance) + "", "Arial 20px", this.FONT_COLOR));
                        }
                        this._horizontalTextList[ii].visible = true;
                        this._horizontalTextList[ii].x = (i * distance);
                        this._horizontalTextList[ii].y = -20;
                        this._horizontalTextList[ii].rotation = -90;
                        this._horizontalTextList[ii].textAlign = "center";
                        this._horizontalTextList[ii].textBaseline = "middle";
                        this.container.addChild(this._horizontalTextList[ii]);
                        graphics.moveTo((i * distance), -5);
                        graphics.lineTo((i * distance), 0);
                    }
                    for (var i = w; i < this._horizontalTextList.length; i++) {
                        this._horizontalTextList[i].visible = false;
                    }
                    for (var i = 0; i < h; i++) {
                        var ii = (i);
                        if (this._verticalTextList.length <= ii) {
                            this._verticalTextList.push(new createjs.Text((i * distance) + "", "Arial 20px", this.FONT_COLOR));
                        }
                        this._verticalTextList[ii].visible = true;
                        this._verticalTextList[ii].y = (i * distance);
                        this._verticalTextList[ii].x = -20;
                        this._verticalTextList[ii].textAlign = "right";
                        this._verticalTextList[ii].textBaseline = "middle";
                        this.container.addChild(this._verticalTextList[ii]);
                        graphics.moveTo(-5, (i * distance));
                        graphics.lineTo(0, (i * distance));
                    }
                    for (var i = h; i < this._verticalTextList.length; i++) {
                        this._verticalTextList[i].visible = false;
                    }
                };
                Ruler.prototype.update = function () {
                    var stage = this.container.stage;
                    var mousePt = this.container.globalToLocal(stage.mouseX, stage.mouseY);
                    var graphics = this._shapeMouse.graphics;
                    graphics.clear()
                        .setStrokeStyle(2)
                        .beginStroke("#6699ff");
                    var isInHorizontal = 0 <= mousePt.x && mousePt.x <= this._width;
                    var isInVertical = 0 <= mousePt.y && mousePt.y <= this._height;
                    if (isInHorizontal == true) {
                        graphics.moveTo(mousePt.x, 0);
                        graphics.lineTo(mousePt.x, -16);
                    }
                    if (isInVertical == true) {
                        graphics.moveTo(-16, mousePt.y);
                        graphics.lineTo(0, mousePt.y);
                    }
                    // ドラッグ中でなければ、かっこ良く目盛りを表示する
                    if (this._isMouseDown == true) {
                        var mx = Math.floor(mousePt.x) - 0.5;
                        var my = Math.floor(mousePt.y) - 0.5;
                        graphics
                            .setStrokeStyle(1)
                            .beginStroke(createjs.Graphics.getRGB(255, 255, 255, 0.5));
                        if (isInHorizontal == true) {
                            graphics.moveTo(mx, 0);
                            graphics.lineTo(mx, this._data.height);
                        }
                        if (isInVertical == true) {
                            graphics.moveTo(0, my);
                            graphics.lineTo(this._data.width, my);
                        }
                    }
                    else {
                        // ドラッグ中でなければ、データを反映
                        this._thumb.x = this._data.startX;
                        this._thumb.y = this._data.startY;
                    }
                };
                return Ruler;
            }());
            exports_1("Ruler", Ruler);
        }
    }
});
//# sourceMappingURL=particle-ruler.js.map