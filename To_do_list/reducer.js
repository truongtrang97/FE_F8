import storage from "./util/storage.js"
// const init={
// //    todos: [
// //     {
// //         title:"Learn HTML",
// //         completed:true,
// //     },
// //     {
// //         title:"Learn css",
// //         completed:false,
// //     },
// //    ]
// // mảng ni để test
// }

const init={
    todos: storage.get()
}
// cách 1:
const actions={
    add({todos},title){
        // click vào không nhập enter nó vẫn add
        if(title){
            todos.push({title,completed:false})
            storage.set(todos)
        }
    },
    toggle({todos},index){
        const todo=todos[index]
        todo.completed=!todo.completed
        storage.set(todos)
        console.log(todo)
    }
    // object trong js có tính chất tham chiếu, nên không nhất thiết trả ra state mới nên dùng dustrusturing cho todos ?? chỗ tham chiếu
}

export default function reducer(state=init, action,args){
    actions[action] && actions[action](state,...args)
    // action ni là add, actions[add] là funcion 
    return state
}
// xem lại đoạn ni phút 34
// cách 2:
// export default function reducer(state=init, action,args){
//     switch(action){
//         case "add":
//             const [title]=args;//chỗ ni hơi?
//             return {
//                 ...args,//chỗ ni nữa
//                 todos:[...state.todos,{
//                     title,
//                     completed:false
//                 }]
//             }
//             // đoạn ni : ...args: state ban đầu
//             // state nhiều, ta . đến phần todos , phần todos ni cần thêm phần tử {mới title}
//         default:
//             return state

// }
// }