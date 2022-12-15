import html from "../core_todo.js";
import { connect } from "../store.js";
const connector = connect()
 export function TodoItem({todo,index}){
     return html`
		<li class="${todo.completed && 'completed'}">
			<div class="view">
				<input class="toggle"
				 type="checkbox" 
				 ${todo.completed && 'checked'}
				 onchange="dispatch("toggle",${index})"
				 >
				<label>${todo.title}</label>
				<button class="destroy"></button>
			</div>
			<input class="edit" value="${todo.title}">
		</li>
		`
 }
 export default connector(TodoItem)
//  khi click vào ô sẽ bắt sự kiện onchange, khi dispatch phải biết dispatch trên todos có index là gì  (index ni bên todolist qua)
// kiểm tra (vô element xem code trên devtool)