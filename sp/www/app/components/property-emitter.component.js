System.register(["angular2/core", "./input-range.component"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, input_range_component_1;
    var PropertyEmitterPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_range_component_1_1) {
                input_range_component_1 = input_range_component_1_1;
            }],
        execute: function() {
            PropertyEmitterPanel = (function () {
                function PropertyEmitterPanel() {
                }
                PropertyEmitterPanel = __decorate([
                    core_1.Component({
                        selector: "emitter-property-panel",
                        templateUrl: "app/components/template/property-emitter.html",
                        inputs: ["drawingData", "shapeIdList"],
                        directives: [input_range_component_1.InputRangeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyEmitterPanel);
                return PropertyEmitterPanel;
            })();
            exports_1("PropertyEmitterPanel", PropertyEmitterPanel);
        }
    }
});
//# sourceMappingURL=property-emitter.component.js.map