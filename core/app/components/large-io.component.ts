import {Component, EventEmitter} from "angular2/core";
import {LocaleData} from "../i18n/locale-data";
import {LocaleEnData} from "../i18n/locale-en";
import {LocaleJaData} from "../i18n/locale-ja";
import {LocaleManager} from "../i18n/locale-manager";
import {PlatformData} from "../data/platform-data";

"use strict";

@Component({
  selector: "large-io-box",
  templateUrl: "app/components-html/large-io-box.html",
  inputs: ["drawingData", "platformData"],
  events: [
    "exportSvgEvent",
    "exportPngEvent",
    "exportJpgEvent",
    "exportWebpEvent",
    "exportParameterEvent",
    "importParameterEvent"
  ]
})

export class LargeIOBox {
  private exportSvgEvent = new EventEmitter();
  private exportPngEvent = new EventEmitter();
  private exportJpgEvent = new EventEmitter();
  private exportWebpEvent = new EventEmitter();
  private exportParameterEvent = new EventEmitter();
  private importParameterEvent = new EventEmitter();

  private drawingData:particlejs.DrawingData;
  private platformData:PlatformData;
  public lastSelectFile:any;

  constructor(private localeData:LocaleData) {
  }

  private exportParameter():void {
    this.exportParameterEvent.emit(null);
  }

  private exportSvg():void {
    this.exportSvgEvent.emit(null);
  }

  private exportPng():void {
    this.exportPngEvent.emit(null);
  }

  private exportJpg():void {
    this.exportJpgEvent.emit(null);
  }

  private exportWebp():void {
    this.exportWebpEvent.emit(null);
  }

  private selectParameterFile(obj:any):void {
    this.lastSelectFile = obj.target.files[0];

    this.importParameterEvent.emit(null);
  }

  private selectEn():void {
    new LocaleManager().changeLocale(this.localeData, new LocaleEnData());
  }

  private selectJa():void {
    new LocaleManager().changeLocale(this.localeData, new LocaleJaData());
  }

}
