### IIFE:
+ IIFE - Immediately Invoked Function Expression 
- Hiểu đơn giản là 1 function expression được gọi lập tức (hay 1 biểu thức tạo ra 1 hàm và hàm ni được gọi ngay lập tức )
- self-invoked function : hàm tự gọi    
+++
- Expression: biểu thức
- Invoked : gọi 
### Scope:
+ Khi khai báo biến thì phải  hiểu rõ phạm vi truy cập, sử dụng của biến đó 
- Các loại phạm vi :
- Global - toàn cầu;
- Code block : khối mã : let, const
- Local scope - Hàm : var, function 
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo 
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó 
+ Cách thức 1 biến được truy cập 
- Khi nào biến bị xóa khỏi bộ nhớ ?
  - Biến toàn cầu 
  - Biến trong code block & trong hàm 
  - Biến trong hàm được tham chiếu bởi 1 hàm 


+ note:
- console.dir()--> log ra dưới dạng object

+ THIS KEYWORD:
- Đặc tính;
- Trong 1 phương thức "this" tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
- Đứng ngoài phương thức "this" tham chiếu tới đối tượng global  (window) --> note this trong hàm (hàm đứng ở ngoài không), khi hàm đó không phải là phương thức thì this đó là window
  - lưu ý
  + this trong hàm tạo là đại diện cho đối tượng được tạo  ( là từ this trong function contructor)
  + this trong 1 hàm là undefine khi ở strict mode 

  +  note : this khi ở trong arrow function thì this không phải window, mà nó sẽ trỏ ra đối tượng ở ngoaif gần nó nhất

  + Các phương thức call(),bind(),apply() có thể tham chiếu this tới đối tượng khác  


  - element.closest(.class): kiểm tra element đó hay cha nó có chứa class ni không
  - <element data-index="index"></element>
  - cách lấy ra value index: element.dataset.index2

   
