import html from "../score_todo.js";
import { connect } from "../store.js";
const connector = connect()
 export function App({props}){
     console.log(props)
     return html`
     <ul>HAKAKAK</ul> `
 }

 export default connector(App)