const init={
   cars:['BMV']
}

export function reducer(state=init,action,agrs){
   console.log(action,agrs)
   switch(action){
      case 'ADD':
         const [newCar] = agrs
         return{
            ...state,
            cars: [...state.cars,newCar]
         }
          
    default:
        return state
      //   khi các case không thực hiện nó sẽ return phần dưới của default
   }
}