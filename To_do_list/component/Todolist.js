import html from "../score_todo.js";
import { connect } from "../store.js";
import TodoItem from "./TodoItem.js";
const connector = connect()
 export function Todolist({todos}){
	// truyền vô props trả về object của init
	// dùng dustructuring để lấy value của object {key của object}
	
     return html`
     <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
				${todos.map((todo,index)=>TodoItem({todo,index}))}
				</ul
			</section>`
      }

 export default connector(Todolist)