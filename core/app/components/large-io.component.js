System.register(["angular2/core", "../i18n/locale-data", "../i18n/locale-en", "../i18n/locale-ja", "../i18n/locale-manager"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, locale_data_1, locale_en_1, locale_ja_1, locale_manager_1;
    var LargeIOBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (locale_en_1_1) {
                locale_en_1 = locale_en_1_1;
            },
            function (locale_ja_1_1) {
                locale_ja_1 = locale_ja_1_1;
            },
            function (locale_manager_1_1) {
                locale_manager_1 = locale_manager_1_1;
            }],
        execute: function() {
            "use strict";
            LargeIOBox = (function () {
                function LargeIOBox(localeData) {
                    this.localeData = localeData;
                    this.exportSvgEvent = new core_1.EventEmitter();
                    this.exportPngEvent = new core_1.EventEmitter();
                    this.exportJpgEvent = new core_1.EventEmitter();
                    this.exportWebpEvent = new core_1.EventEmitter();
                    this.exportParameterEvent = new core_1.EventEmitter();
                    this.importParameterEvent = new core_1.EventEmitter();
                }
                LargeIOBox.prototype.exportParameter = function () {
                    this.exportParameterEvent.emit(null);
                };
                LargeIOBox.prototype.exportSvg = function () {
                    this.exportSvgEvent.emit(null);
                };
                LargeIOBox.prototype.exportPng = function () {
                    this.exportPngEvent.emit(null);
                };
                LargeIOBox.prototype.exportJpg = function () {
                    this.exportJpgEvent.emit(null);
                };
                LargeIOBox.prototype.exportWebp = function () {
                    this.exportWebpEvent.emit(null);
                };
                LargeIOBox.prototype.selectParameterFile = function (obj) {
                    this.lastSelectFile = obj.target.files[0];
                    this.importParameterEvent.emit(null);
                };
                LargeIOBox.prototype.selectEn = function () {
                    new locale_manager_1.LocaleManager().changeLocale(this.localeData, new locale_en_1.LocaleEnData());
                };
                LargeIOBox.prototype.selectJa = function () {
                    new locale_manager_1.LocaleManager().changeLocale(this.localeData, new locale_ja_1.LocaleJaData());
                };
                LargeIOBox = __decorate([
                    core_1.Component({
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
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], LargeIOBox);
                return LargeIOBox;
            }());
            exports_1("LargeIOBox", LargeIOBox);
        }
    }
});
//# sourceMappingURL=large-io.component.js.map