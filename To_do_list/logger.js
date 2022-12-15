export default function logger(reducer){
    return (prevstate,action,args)=>{
        console.group(action)
        console.log("prevstate", prevstate)
        console.log("action args", args)

        const nextstate= reducer(prevstate,action,args) 
         console.log("nextstate",nextstate)
        return nextstate
    }
}
// Bình thường chưa chạy là underfined
// Khi ứng dụng chạy thì sẽ get default state là init
