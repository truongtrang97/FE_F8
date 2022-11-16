# 1. Khái niệm hàm
+ Có 2 loại hàm:
- Hàm built-in
- Hàm tự định nghĩa
## Tính chất của hàm:
- Không thực thi khi định nghĩa
- Sẽ thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về 1 giá trị .

+ Tạo hàm : function + tên hàm + () +{}
```
function tenHam(){
    <!-- code -->
    alert()
}
```

+ Gọi hàm, dùng toán tử call: () sau tên. 
tênHam();

# Tham số trong hàm:
+ Là giá trị truyền vào, khi gọi một function.
+ Có thể truyền vào bất cứ Kiểu dữ liệu nào của JS vào.
+ Một function có nhiều tham số, ta truyền đối số nào thì sử dụng tham số đó, không thì tham số đó không được sử dụng, không lỗi
+ < Khi định nghĩa hàm , thì tham số được truyền vào và sử dụng trong hàm, còn khi gọi tới hàm đó và truyền 1 giá trị vào thì giá trị đó được gọi là đối số>
+ Tính private (riêng tư) -- khi đối số truyền vào nó chỉ sủ dụng được trong phạm vi hàm đó 

## Đối tượng argument trong hàm:
+ Là đối tượng biến chứa tất cả các tham số truyền vào
+ Đối tượng argument (chỉ được định nghĩa bên trong hàm , bên ngoài hàm gọi sẽ lỗi)
+ argument là 1 array
```
```
+ Template string : dùng để nối chuỗi với biến ${prama}
## Vòng for of :
- Số lần chạy bằng số phần tử tham số truyền vào
# Return trong hàm:
- Hàm không có return mặc định trả về undefined
- Có thể trả về bất kì kiểu dữ liệu nào
- 1 biến được định nghĩa trong function thì nó chỉ sử dụng được trong phạm vi function đó thôi
- Hàm được định nghĩa trong hàm
# Các loại function
- declaration function 
`function AC(){

}`
- expresstion function
`var EXfun= function(){
}
--> Cách gọi EXfun(): note : gọi bình thường như declaration function
 setTimeout(function(){

 })
 
 var myobject={
     newfunction: function(){ 

     }
 }
`
+ Khác nhau giữa declaration function và expression function :
- hosting:
- declaration function: có thể gọi trước khi định nghĩa
- expression function : thì không gọi trước được
- arrow function
### Polyfill
- Tạo ra cách lm để trình duyệt cũ vẫn chạy dk??
<xem lại đoạn ni ?>


