1. document.createElement() để làm gì?
- phương thức này để tạo ra Element và có thể thêm được Element này vào trong Dom giúp trình duyệt tạo ra giao diện người dùng
- (js tương tác với DOM)
- Học cái ni để hiểu tại sao thư viện Reactjs có thể render ra thư viện người dùng
- bản chất của mọi thư viện đều code thuần dưới cấu trúc của nó 
+ node element được get ra từ DOM là object (muốn biết là type gì thì đưa console.dir())


# cách thư viện JS lưu trữ và phân phôi
- github : cái ni chỉ lưu trữ mã nguồn thư viện Reactjs 
- NPMJS : Là nơi công bố dự án lên cho cộng động sử dụng và tải về (nơi lưu trữ sản phẩm của mã nguồn)
- user dùng bằng npm -i react
- npm: node package manager (cái ni là quản lý gói cho node)) hỉu đơn giản là quản lý thư viện cho js
- UNPKG : giúp lâý thư viện bên npmjs dưới dạng cdn (tức url)
- cdn (content delivery network) có mạng lưới các máy chủ trên toàn thế giới , khi 1 file được up lên 1 địa chỉ cdn bất kì, thì nó có cơ chế đồng bộ hết tất cả máy chủ trên toàn thế giới, nên khi 1 user truy cập vào file thì nó sẽ định tuyến đến cái máy chủ gần nhất vz user để nó tải về nhanh nhất


## video ni là nhúng thẳng npmjs vào file js xài, không tải về 