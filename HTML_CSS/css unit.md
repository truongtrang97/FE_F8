## css units
+ absolute units: đơn vị tuyệt đối
- px tên css tương ứng 1px điểm thực trên màn hình( độ phân giải thấp), còn độ phân giải cao thì 1px tương ứng với nhiều điểm ảnh 
- KÍch thước cố định không bị thay đổi khi yếu tố khác xung quanh tác động lên 
+ relative units: đơn vị tương đối
- %
- vd: 50% , 50% đối với thẻ cha chứa nó
- rem : phụ thuộc vào thẻ html 
- vd
        ` html{
            font-size: 20px;
        }
        h1{
            font-size: 1 rem ;
        }
        `
- tương ứng 1 rem =20px (tùy ta định nghĩa bao nhiêu ở thẻ html)
- em : phụ thuộc vào thẻ cha gần nhất có cùng thuộc tính đang css.
- vw(viewport-width) - vh (viewport-height)
- vd: 50vw: 50% trình duyệt theo chiều ngang

## css pseudo-class___lớp giả
``
- :root--> để đặt biến
- :hover--> css khi hover vào
- :first-child-> css cho element đầu tiên
- :last-child-> css cho element cuối
``
## css pseudo- element_ element giả:
``
- ::after
- ::before
+ --> mỗi element chỉ tồn tại 1 after và 1 before

``content:"",
display: block
``

- ::first-letter--> css cho chữ cái đầu tiên
- ::first-line--> css cho dòng đầu tiên
- ::seclection --> khi bôi chọn mới hiện css
``



