import { createStore } from "./core.js";
import { reducer } from "./reducer.js";

const {attach,connect,dispatch}=createStore(reducer)
// createStore return ra: attach,connect,dispatch
window.dispatch=dispatch

export{
    attach,
    connect
}



