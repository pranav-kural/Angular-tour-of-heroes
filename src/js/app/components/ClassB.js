"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declare function require(name:string) : any;
var ClassC_1 = require("./ClassC");
var ClassB = (function () {
    function ClassB() {
        // instantiate ClassC object
        //let ClassC = require('./ClassC');
        console.log(ClassC_1.ClassC.TEST); // in this scope ClassC is an empty object with no properties
    }
    return ClassB;
}());
exports.ClassB = ClassB;
//# sourceMappingURL=ClassB.js.map