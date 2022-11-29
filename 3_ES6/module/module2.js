// export const type_log ='log'
// export const type_info ='info'
// export const type_warn ='warn'

import {
    type_log
    } from "../module3.js"


function module2(log,type=type_log){
    console[type](log)
}

export default module2