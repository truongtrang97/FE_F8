// định nghĩa funtion validation (bản thân Validation là 1 object)
// option ni là object ---> option.form = '#form-1'
function Validation(options){
           
  var seclectorRule = {}// sau vòng lặp chạy sẽ lưu hết tất cả những rule vào {} ni
    // console.log(options.form)
   function validation(rule,inputElement){
            var errorElement =inputElement.parentElement.querySelector('.form-message')
            // var errorMessage = rule.test(inputElement.value) //đoạn ni viết trong function, ngoài k k dk???
            var errorMessage
            // lấy ra các rules của seclector
            var rules = seclectorRule[rule.selector]
            // lặp qua từng rule và check
            // nếu 2 rule của email, khi rule đầu có lỗi sẽ dừng lại không kiểm tra rule tiếp theo
            for(var i = 0;i<rules.length;i++){
               errorMessage=rules[i](inputElement.value)
               if(errorMessage){ break}
            }
            // xem lại đoạn rules ni
            if(errorMessage){
            // console.log(errorMessage)
            errorElement.innerText = errorMessage    
            inputElement.parentElement.classList.add('invalid')                                  
            }
            else{
            //   console.log(errorMessage)
            errorElement.innerText ='';
            inputElement.parentElement.classList.remove('invalid')                                  
            }                 
   }
//  lấy element của form cần validate
  var formElement = document.querySelector(options.form)
  
  if(formElement){

    //  bỏ qua hành vi mặc định khi submit form
     formElement.onsubmit =function(e){
       e.preventDefault()
     
    // lặp qua từng rule và validate
    options.rules.forEach(function(rule){
      var inputElement =formElement.querySelector(rule.selector)
       validation(rule,inputElement)//rule.selector = id của input--> lấy ra từng element của mỗi input ứng với id
    })

  }

    //lặp qua mỗi rule và xử lý(lắng nghe sự kiện  blur, input)
      options.rules.forEach(function(rule){
        var inputElement =formElement.querySelector(rule.selector)
      //lưu lại các rule sau mỗi input--> nếu là undefined thì sẽ gán thành 1 cái mảng
      if(Array.isArray(seclectorRule[rule.selector])){
                seclectorRule[rule.selector].push(rule.test)
      }
      else{
        seclectorRule[rule.selector]=[rule.test]
      }
      // seclectorRule[rule]=[rule.test]

      
      if(inputElement){
            //  value của input : inputElement.value
            // test function : lấy ra từ rule.test
              inputElement.onblur = function(){
                validation(rule,inputElement)
              }
          }
      }
      )
      console.log(seclectorRule)
    
    }
  }

// Định nghĩa về rules:
// Nguyên tắc về rules
// 1. Khi có lỗi trả về messege lỗi
// 2. Khi hợp lệ-> không trả cái gì cả (undefined)

// 2. tạo 2 phương thức isRequired() và isEmail()





Validation.isRequired= function(selector){
  return {
      selector: selector,
      test: function(value){//kiểm tra người dùng nhập chưa
       return value.trim() ? undefined :'Vui lòng nhập trường này'//trim() loại bỏ những dấu cách 2 bên khi nhập value
      }
  }
}

Validation.isEmail= function(selector){
  return {
      selector:selector,
      test:function(value){//kiểm tra có phải email không
        var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       return regex.test(value)? undefined : 'Trường này là email'
      }
  }
}

Validation.minLength= function(selector,min){
  return {
      selector: selector,
      test: function(value){
       return value.length>=min ? undefined : `Vui lòng nhập mật khẩu ít nhất ${min} kí tự`
  }
}
}

Validation.confirmpassword= function(selector,Cofirmed,messeges){
  return {
      selector: selector,
      test: function(value){
       return value===Cofirmed() ? undefined : messeges || 'Giá trị nhập vào không đúng'
  }
}
}


//  tìm ra element con của  form-1
// cần :blur ra input báo lỗi 
// 1.get ra được element của những input, xong mới nghe được sự kiện onbur trên nó
