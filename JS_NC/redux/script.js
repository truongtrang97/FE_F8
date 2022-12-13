import {attach} from "./store.js";
import App from "./component/App.js"
//chỗ ni truyền component nên là function 
attach(App,document.querySelector('#root'))
