import html from "../core.js";
import {connect} from "../store.js";
const connector=connect(state=>({
    car:state.cars[0],
    cars:state.cars
}))
function App({cars}){
   //dùng destrusturing để lấy ra cars
    return html`
    <ul>
    ${cars.map(car=>`<li>${car}</li>`)}
    </ul>
    <button onclick=dispatch('ADD','{merchede}')>ADD_CAR</button>
    `
}
export default connector(App)