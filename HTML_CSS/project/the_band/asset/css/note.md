- Các bước làm 1 website:
+ phân tích
+ Dựng base
+ Xây dựng từng thành phần theo phân tích 
+ fix_bug_hoàn thiện

## Những thành phần chính trên giao diên website:
1. Header
2. Navigation (điều hướng)
3. Breadcrumb (phần hiện mình đang ở chỗ nào web (trang nay->trang này))
4. Sidebar(thanh chi tiết 1 bên)
5. Slider
6. Content
7. Banner(ảnh quảng cáo)
7. Footer(chân trang)

+ The band_
- Header
- navigation
- sider
- content
 + about
 + tour
 + contact
 + img
 + footer
- footer


+ Tính chất inline-block:
- Có 1 phần tính chất khối có thẻ xét được chiều dọc 
- Có tính chất inline nó không kế thừa chiều ngang của thẻ chứa nó 
+ Tính chất : position: fixed;
- nó sẽ nổi lên 1 tầng trên khác với các thẻ cùng cấp với nó
- và k kế thừa chiều ngang 
- khi thẻ phía dưới thẻ có tính chất position: fixed; thì sẽ bị thẻ này chồng lên thẻ phía dưới đó ==> dùng margin_top: chiều cao thẻ phía trên để tách ra

+ có 2 cách cho khi hover vào sẽ hover hết cả chữ chỗ subnav:
- cho width:100%, theo ul
- cho display: block

+ note khi css vd:
- #nav li {} thì tất cả con của li kể cả của li subnav đều kế thừa css ni



+ bỏ dấu . ở thẻ li:
- list-style-type: none

+ Note : khi dùng px nên dùng những số chia hết cho 4

+ Quan sát:
- khoảng cách,
- phần hiện lên mờ mờ --> bóng đổ (khi nó nằm trên nền trắng vẫn thấy được )
- Những phần có thẻ click vào trên web phải đổi trỏ chuột thành bàn tay (cursor:pointer )
- nội dung web lớn hơn chiều cao của trình duyệt sẽ tự hiện ra thanh cuộn


+ cách search _google: css+ thuộc tính cần search + property
+ Thuộc tính cần note:
- box-shadow: trục x/trục y/độ radius/bóng đổ blur (độ mờ)
- text-transform: uppercase; thay đổi chữ in_chữ  thường

+ Khi hover: phải xác định hover vào gì và hiện lên cái gì
- hover vào li và hiện ul (con của nó)

+ khi css: con thì lấy top:100% (nó sẽ lấy top = đúng chiều cao của cha chứa nó)
+ khi chữ sát với icon thì phải viết html icon trong thẻ chứa chữ để khỏi nhảy



+ thẻ ul có tính chất block nên kế thừa hết chiều ngang của header 
- sửa thành display: inline-block sẽ có mất tính chất kế thừa chiều ngang bằng chính nội dung của thẻ thôi
+ khi thẻ cha có thẻ con là div, vì div có tính chất block nên sẽ k nằm trong phạm vi thẻ cha, mà sẽ bay ra ngoài và chiếm hết chiều ngang như thẻ cha của nó==> dùng foat: left nó sẽ bay lên trong thẻ cha và nằm bên  


+ note !important
- padding-top: 50% : kích thước tỉ lệ theo chiều ngang của chính nó (chiều dài= 50% chiều ngang)
- backgrounf img : có tính chất đổ nền ảnh tính từ lớp padding 
- cách viết gộp: background: background-img background-position / background size background-repeat


+ Cách canh giữa div trong 1 div khác:
- margin-left: auto;
- margin-right: auto;


+ Thuộc tính float: làm cho các thẻ chứa thuộc tính ni trồi lên trên thẻ cha chứa nó ==> dùng clear:both

