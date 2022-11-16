// định nghĩa funtion validation (bản thân Validation là 1 object)
// option ni là object ---> option.form = '#form-1'
function Validation(options){
           
  var seclectorRule = {}
    // console.log(options.form)
   function validation(rule,inputElement){
            var errorElement =inputElement.parentElement.querySelector('.form-message')
            console.log(errorElement)
            var errorMessage = rule.test(inputElement.value) //đoạn ni viết trong function, ngoài k k dk???
            var rules=seclectorRule[rule.selector]
            for(var i=0; i<rules.length;i++){
             
              
            }

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

  var formElement = document.querySelector(options.form)
  console.log(options.rules)
  if(formElement){
      options.rules.forEach(function(rule){
      var inputElement =formElement.querySelector(rule.selector)//rule.selector = id của input--> lấy ra từng element của mỗi input ứng với id
      console.log(rule.selector)
      var inputElement =formElement.querySelector(rule.selector)//rule.selector = id của input--> lấy ra từng element của mỗi input ứng với id
      console.log(inputElement)
      
      
      if(inputElement){
            //  value của input : inputElement.value
            // test function : lấy ra từ rule.test
              inputElement.onblur = function(){
                validation(rule,inputElement)
              }
          }
      }
      )
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
