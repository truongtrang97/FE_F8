# Array in JS
+ Các phần tử trong mảng có thể có các kiểu dữ liệu khác nhau(số, null, function, object, undefined)
+ Kiểu dữ liệu của array là object, nếu dùng typeof giống như {}
+ Array.isArray(tên_biến) trả về true nếu array
+ Index của mảng là số nguyên không âm(array[-1]=undefined)

# Phương thức sử dụng với mảng
+ 'toString(),join() : chuyển array to string(ngược với split ở string), tự động ngăn cách dấu , ; còn join() có thể thay đổi dấu ngăn cách tuỳ ý
+ `pop()` : xoá phần tử cuối mảng trả về phần tử đã xoá, xoá hết trả về undefined
+ `push()`: thêm với 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng

+ `shift()`: xoá phần tử đầu mảng và trả về phần tử xoá.
+ `unshift()`: thêm 1 hay nhiều phần tử vào đầu mảng và trả về độ dài mảng

+ `splice(index(xoá các phần tử từ vị trí này), số lượng xoá)` : xoá 1 hay nhiều phần tử từ index
+ `splice(index, số lượng xoá, phần tử chèn 1, phần tử chèn 2,...)` : chèn hoặc vừa chèn vừa xoá phần tử trong mảng. Ứng dụng để thay thế 1 phần tử trong mảng language.splice(1,1,'Dart')
+ `array1.concat(array2)`: nối 2 array (array2 và array1)
+ `slice(vị trí bắt đầu cắt, số lượng cắt)`: tách mảng thành mảng con. trả về mảng con đã cắt, mảng bị cắt không thay đổi.

# Phương thức sử dụng tham số là hàm (callback)
## Các method of array
- forEach()-> dùng để duyệt qua từng phần tử của mảng
- every()--> kiểm tra tất cả các phần tử của mảng thỏa mãn 1 điều kiện nào đó--> trả về true, false
- some()--> kiểm tra mảng tồn tại 1 phần tử  thỏa mãn 1 điều kiện nào đó-> trả về true, false
- find()--> kiểm tra mảng có tồn tại phần tử nào thỏa mãn 1 điều kiện nào đó không và trả về phần tử đầu tiên đó
- filter()--> kiểm tra mảng có  phần tử nào thỏa mãn 1 điều kiện nào đó không và trả về tất cả các phần tử  đó (phần tử đó được chứa trong mảng)
- map()
- reduce ()