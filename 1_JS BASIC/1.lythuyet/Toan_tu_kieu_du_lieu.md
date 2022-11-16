# 1. Toán tử số học (Arithmetic)
+,-,*,/,%(chia lấy dư), ** (luỹ thừa), ++,--
+ prefix : tiền tố (++a)
+ postfix : hậu tố (a++)
- 2 cái ni khác nhau và khác nhau ở thời điểm thực thi
# 2. Toán tử gán (Assigment)
=,+=,-=,/=,*=,**=
var a=1 ( 1 được gán cho a) <vế phải được gán cho vế trái>
x+=y <=> x=x+y
# 3. Toán tử so sánh(Comparison)
- toán tử so sánh luôn trả về giá trị boolean
==,<=,>=,<,>,!= (không bằng)
NOTE: khi so sánh == -> so sánh ni chỉ quan tâm đến value không so sánh data types
vd : var a=1;
     var b='1'
     console.log(a==b)/ ->true
+ toán tử === so sánh tuyệt đối cả value và data type
+ tương tự giữa != (chỉ ss value) và !== (ss data type và value)
# 4. Toán tử logic(Logical)
- AND (&&)_tất cả đúng-> đúng (duyệt từ trái sang phải nếu gặp 1 trong 6 giá trị false sẽ dừng lại trả về giá trị false đó, k thì sẽ trả về giá trị cuối cùng bên phải)
- OR (||)_ chỉ cần 1 gtri đúng(duyệt từ trái sang phải nếu là 1 trong 6 gtri false thì sẽ bỏ qua, kiểm tra tiếp đến khi gặp giá trị khác false thì dừng kiếm tra trả về giá trị đó)
- !()_ phủ định lại
###### NOTE: Toán tử logic không trả về giá trị boolean (vd bên test) 
# 5. Toán tử chuỗi (String operator)
vd : 'Trang'+'Trương'
'Trang'+='Trương'
- Chỉ cần 1 trong 2 vế không phải là số thì toán tử "+" ni là toán tử nối chuỗi
# 6. Kiểu dữ liệu boolean (true, false)
- Khi so sánh luôn cho kết quả kiểu dữ liệu boolean (true,false)
- Khi console.log ra kiểu dữ liệu màu xanh
# 7. Câu lệnh if _else
if(){

}else{

}
- Tất cả dữ liệu đưa vào () đều được convert (chuyển đổi) sang kiểu dữ liệu boolean (true, false)
+ có 6 giá trị sau khi convert sang giá trị boolean là false, còn tất cả các giá trị còn lại đều là true
    1. False
    2. NaN
    3. null
    4. 0
    5. " " - '' (chuỗi trỗng)
    6. undefined
# 8. Kiểu dữ liệu:
- Dữ liệu nguyên thuỷ (primitive data)_ kiểu dữ liệu được tạo ra lưu vào vùng nhớ và không sửa lại được vùng nhớ đó, khi gán giá trị mới vào thì tạo ra 1 vùng nhớ khác để lưu giá trị
    + number
    + string__ chuỗi ""
    + boolean__ thường biến có is trk, vd: var isSuccess= true
    + underfined__Vd: var age
    + null _ vd: var isNull= null //nothing
    + symbol__vd: var id=symbol('id') //unique
                  var id2=symbol('id') //unique
                  console.log(id===id2) // trả về false do đặc tính unique
- Dữ liệu phức tạp (complex data)
    + function _hàm
    vd: var myfunction= function(){
        alert('Hi chao mn')
    }
    --> chỉ chạy khi dk gọi
    myfuntion()
    + object types có 2 type Object và Array
     vd: var myObject={
        key: value,
     }
      + key có kiểu dữ liệu string
    vd myArray =[ value1, value2]
     có key là 0,1,2....
    ++ Kiểm tra kiểu dữ liệu gì??
    - console.log(typeof myArray)
    + NOTE 
    - console.log(typeof isNull)// trả về Object
    
vd : var a=1
< khi chương trình thực thi nó tạo ra giá trị 1 và lưu vào 1 vùng nhớ lưu tạm trong RAM, và ta không sửa dk giá trị trong vùng nhớ đó nữa>
- CPU để xử lý
- RAM để lưu lại dữ liệu khi phần mềm thực thi
+ khi muốn thay đổi ta gán giá trị khác vào a
var a=2, 1 vùng nhớ mới được tạo ra