import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {PropertyPanel} from "./property.component";
import {DesktopIOBox} from "./desktop-io.component";
import {MobileIOBox} from "./mobile-io.component";
import {PropertyShapePanel} from "./property-shape.component.ts";
import {StageComponent} from "./stage.component";
import {ViewChild} from "angular2/core";
import {ElementRef} from "angular2/core";

@Component({
  selector: `my-app`,
  templateUrl: "app/components/template/app.html",
  directives: [StageComponent, PropertyPanel, DesktopIOBox, MobileIOBox]
})

export class AppComponent {
  protected drawingData:DrawingData;
  @ViewChild("stageComponent") stageComponent:StageComponent;
  @ViewChild("propertyPanel") propertyPanel:PropertyPanel;
  @ViewChild("desktopIOBox") desktopIOBox:DesktopIOBox;
  @ViewChild("mobileIOBox") mobileIOBox:MobileIOBox;

  constructor(element:ElementRef) {
    this.drawingData = new DrawingData();
  }

  protected handleSVGClick() {
    this.stageComponent.exportSVG().then(() => {
      this.openSVGExportWindow();
    });
  }

  protected handleJPEGClick() {
    var dataUrl = this.stageComponent.toDataURL('image/jpeg', "0.8");
    window.open(dataUrl);
  }

  protected handlePNGClick() {
    var dataUrl = this.stageComponent.toDataURL('image/png', null);
    window.open(dataUrl);
  }

  protected openSVGExportWindow() {
    window.open("data:image/svg+xml,\n" + encodeURIComponent(this.stageComponent.getParticleSVGString()));
  }

  protected handleExportParamaterClick() {
    window.open("data:text/plain;charset=UTF-8,\n" + encodeURIComponent(JSON.stringify(this.drawingData)));
  }
}