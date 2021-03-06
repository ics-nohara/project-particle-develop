System.register([], function(exports_1) {
    ///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
    "use strict";
    var ParticleExporter;
    return {
        setters:[],
        execute: function() {
            /**
             * Export SVG
             */
            ParticleExporter = (function () {
                function ParticleExporter(drawLayerContainer) {
                    this.drawLayerContainer = drawLayerContainer;
                }
                ParticleExporter.prototype.runExport = function (width, height) {
                    var _this = this;
                    this.width = width;
                    this.height = height;
                    return new Promise(function (onResolve, onReject) {
                        _this.exporter = new SVGExporter(_this.drawLayerContainer, _this.width, _this.height);
                        _this.exporter.run();
                        setTimeout(function () {
                            onResolve();
                        }, 1);
                    });
                };
                ParticleExporter.prototype.runExportSP = function (cavas) {
                    return new Promise(function (onResolve, onReject) {
                        var base64 = cavas.toDataURL();
                        cordova.base64ToGallery(base64, 'img_', function (msg) {
                            onResolve();
                        }, function (err) {
                            onReject();
                        });
                    });
                };
                ParticleExporter.prototype.getSVGString = function () {
                    var serializer = new XMLSerializer();
                    return serializer.serializeToString(this.exporter.svg);
                };
                return ParticleExporter;
            })();
            exports_1("ParticleExporter", ParticleExporter);
        }
    }
});
//# sourceMappingURL=particle-exporter.js.map