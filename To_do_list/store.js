import { createStore } from "./score_todo.js";
import reducer  from "./reducer.js";


const {attach, connect,dispatch} = createStore(reducer)

window.dispatch

export {attach,connect}
