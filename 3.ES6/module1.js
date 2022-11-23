import module2 from "./module/module2.js";
import {type_log,type_info,type_warn} from "./module3.js";
import * as constants from "./module3.js";
console.log(constants)

console.log(module2(123,constants.type_warn))