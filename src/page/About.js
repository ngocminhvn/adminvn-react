import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

class About extends React.Component {
  render()  {
    return (
      <>
      <div>
        <Header></Header>
        <div id="main" className="main">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="section-breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="https://admin.vn">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="https://admin.vn/post/gioi-thieu.html">GIỚI THIỆU ADMIN VIETNAM</a>
                    </li>
                    </ol>
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div className="template-1-single-article bg-white rounded-sm border p-md-4 p-3">
                <div className="title">
                GIỚI THIỆU ADMIN VIETNAM
                </div>
                <div className="content">
                <h1>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>&nbsp; &nbsp;</strong> &nbsp; &nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Giới Thiệu</h1>
                <h2>Sự ra đời Admin.vn :</h2>
                <p>
                    Mục đích mà mình muốn lập ra trang <strong>website</strong> này để cho các bạn có thể&nbsp;check admin dễ dàng hơn trong việc giao dịch đảm bảo sự <strong>hài lòng cho bên mua</strong> và
                    <strong>thỏa mãn&nbsp;cho bên bán </strong>,cụ thể từng admin có mức <strong>quỹ bảo hiểm</strong> được phân bổ ,mức thế chấp ,lĩnh vực khác nhau trong các nền tảng mạng xã hội&nbsp;. Truy cập
                    trang&nbsp;<strong>website</strong>&nbsp;lợi ích cho bạn&nbsp;có thể kiểm tra được <strong>admin chính hãng </strong>được <strong>Qũy bảo hiểm admin</strong> đảm bảo uy tín an toàn giao dịch dưới mọi hình thức . Khi xãy
                    ra sự cố không mong muốn , số tiền quỹ bảo hiểm sẽ được phân chia&nbsp;hoàn trả lại cho những nạn nhân .
                </p>
                <h2>Ý tưởng của mình:</h2>
                <p><strong>Phân tích:</strong></p>
                <ul>
                    <li>Thuật toán Facebook luôn hạn chế việc tìm kiếm những thông tin, dữ liệu kiểu STK ngân hàng, Số CMT, SĐT….</li>
                    <li>
                    Bạn sẽ không thể tìm thấy kết quả gì khi search những từ khóa liên quan đến thông tin cá nhân trên Fb, trừ khi bạn là thành viên trong Gr có bài tố cáo đó, hoặc có một chút gì đó liên quan đến STK đã bị tố cáo đó .
                    thì bạn mới có thể nhìn thấy bài bài phốt
                    </li>
                    <li>
                    Cho dù bạn có phốt, tố cáo một ai đó lên các Group trên FB thì 1, 2 ngày sau Admin thường sẽ xóa bài đó của bạn, vì nội dung vi phạm chính sách, gây ảnh hưởng đến Group của họ. hoặc nếu admin không gỡ, thì kẻ lừa đảo
                    bạn chỉ cần dùng một vài tut, trick fb là có thể khiến bài của bạn bị Facebook báo vi phạm vè gỡ ngay sau đó.
                    </li>
                </ul>
                <p><strong>Mục đích:</strong></p>
                <ul>
                    <li>Tạo ra một Website lưu trữ dữ liệu lừa đảo trên mxh mà không chịu bất kỳ hạn chế seach của một thuật toán nào trên Facebook</li>
                    <li>Là nơi bạn có thể tố cáo kẻ lừa đảo, và phát tán thông tin kẻ lừa đảo đó lên Google, Facebook giúp người dùng có thể tìm kiếm 1 cách dễ dàng những thông tin lừa đảo</li>
                    <li>Là nơi giới thiệu cho bạn biết những người chuyên làm dịch vụ trên mxh, link Fb chuẩn, thông tin chuẩn của một người làm dv nào đó.</li>
                    <li>Là nơi lưu trữ bằng chứng lừa đảo, cung cấp góp phần nào thúc đẩy quá trình thu thập dữ liệu phục vụ cho công tác điều tra của “Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao”</li>
                </ul>
                <p><strong>Lời khuyên:</strong></p>
                <ul>
                    <li>Facebook thì có thể do bị hack rồi mang đi lừa đảo, hoặc dùng Facebook clone, Via, Fake trung gian….</li>
                    <li>Chứng minh nhân dân, giấy tờ tùy thân có thể dùng Photoshop chỉnh sửa</li>
                    <li>SĐT thì sim rác rất nhiều, không thiếu</li>
                    <li>Chúng thậm chí có thể Fake cả 1 trang facebook tĩnh rồi quay lại video log acc, đọc tn cho bạn xem..</li>
                    <li>Người thân nhắn tin chuyển tiền hộ vào 1 STK lạ thì đừng vội chuyển, hãy nhấc đt lên và gọi trực tiếp cho người thân để xác thực nhé ..!</li>
                </ul>
                <p>
                    Vậy nên đừng bao giờ tin những gì mà người đối diện đưa cho bạn xem qua trên màn hình máy tính. Mắt thấy tay sờ, tai nghe vẫn còn bị lừa, huống chi là mấy cái hình ảnh trên mạng. Chỉ có 1 thông tin duy nhất và chuẩn xác
                    nhất mà chúng ta có thể xác định được kẻ lừa đảo là ai đó chính là&nbsp;<strong>“Số Tài Khoản Ngân Hàng”</strong>&nbsp;mà kẻ Scam dùng để nhận tiền.
                </p>
                <h2>Hệ thống website bao gồm 4 Mục:</h2>
                <ul>
                    <li>Mục 1: Ô tìm kiếm&nbsp;<strong>“STK Ngân Hàng”</strong>&nbsp;kiểm tra dữ liệu Scam</li>
                    <li>Mục 2: Nút&nbsp;<strong>“Gửi đơn tố cáo”</strong>&nbsp;những kẻ Scam</li>
                    <li>Mục 3: Danh sách những&nbsp;<strong>“Tài khoản Scam cập nhật mới nhất”</strong>&nbsp;trong ngày</li>
                    <li>Mục 4: “<strong>Chi tiết thông tin Scam”</strong>&nbsp;bao gồm: Chủ tài khoản, STK ngân hàng, Bằng chứng, TT người tố cáo, Link nguồn phốt</li>
                </ul>
                <h2>Hoạt động dựa trên:</h2>
                <ul>
                    <li>Sự đóng góp hỗ trợ của mọi người trên MXH</li>
                    <li>Lưu trữ thông tin chính là “<strong>Chủ tài khoản</strong>“, “<strong>STK Ngân hàng</strong>”&nbsp;của kẻ lừa đảo.</li>
                    <li>
                    Chức năng&nbsp;<strong><a href="/scam/create">Tố cáo</a>&nbsp;</strong>để đưa thông tin của những kẻ lừa đảo lên website
                    </li>
                    <li>Chức năng tìm kiếm thông tin người giao dịch dựa theo&nbsp;&nbsp;<strong>“STK Ngân hàng”</strong></li>
                </ul>
                <p>
                    Các bạn hãy hình thành cho mình thói quen&nbsp;<strong>“Kiểm tra STK Ngân hàng, SĐT “</strong>&nbsp;trên website <strong><a href="http://admin.vn">Admin.vn</a> </strong>để tránh bị Scam, mất tiền oan các bạn nhé….!
                </p>
                <ol>
                    <li>
                    <strong>Checkscam.info</strong>&nbsp;là website để người dùng<strong>&nbsp;tố cáo &amp; kiểm tra những dữ liệu Scam</strong>&nbsp;được chia sẻ bởi nhiều người dùng trong cộng đồng&nbsp;<strong>MXH Facebook</strong>
                    </li>
                    <li>Những bài do Admin đăng đều có Link nguồn phốt trên Facebook, và Profile người đăng phốt</li>
                    <li>Những bài đăng do thành viên tố cáo thì&nbsp;<strong>người đăng nội dung tố cáo sẽ chịu trách nhiệm</strong>&nbsp;về tính xác thực của nội dung mình đăng lên.</li>
                    <li>Chỉ có SĐT tố cáo nằm ở mục liên hệ của bài phốt, nhắn tin SMS cho admin mới có thể xóa được đơn tố cáo</li>
                    <li>
                    Website luôn luôn có khâu&nbsp;<strong>kiểm chứng với những nội đăng lên</strong>, nhưng&nbsp;<strong>không thể chắc chắn 100%</strong>&nbsp;thông tin là hoàn toàn chính xác, Vậy nên người bị tố cáo có thể
                    <strong>&nbsp;<a href="https://admin.vn">Liên Hệ</a></strong>&nbsp;với người tố cáo hoặc Admin để được giải quyết
                    </li>
                </ol>
                <h2>Lời muốn nói:</h2>
                <ul>
                    <li>
                    <strong>Mọi thứ trên Website đều miễn phí</strong>. Nếu nhờ website bạn đã có lần&nbsp;<strong>Phát hiện và né tránh được Scam</strong>&nbsp;hoặc giúp ích 1 phần nào đó cho bạn<strong>.&nbsp;</strong>Hãy&nbsp;
                    <strong>ủng hộ mình&nbsp;</strong>bằng những&nbsp;<strong>chia sẻ, gim nhóm, gửi bài tố cáo, gửi data scam..&nbsp;</strong>như vậy sẽ giúp được cộng đồng nhiều hơn… Cám ơn. Cám ơn các bạn rất nhiều”
                    </li>
                    <li><strong>Website phát triển</strong>&nbsp;phần lớn&nbsp;<strong>nhờ vào sự ủng hộ&nbsp;</strong>và&nbsp;<strong>truyền thông</strong>&nbsp;của các bạn&nbsp;<strong>Admin Group.</strong></li>
                    <li>
                    <strong>Những AE làm DV uy tín được mình tin tưởng và giới thiệu</strong>&nbsp;trên Website có thể&nbsp;<strong>ủng hộ</strong>&nbsp;mình bằng những bài pots<strong>&nbsp;Giới thiệu website</strong>&nbsp;với ae bạn
                    bè trên<strong>&nbsp;FB cá nhân</strong>&nbsp;hoặc&nbsp;<strong>Group ae quản lý</strong>&nbsp;.. Mình cám ơn!
                    </li>
                    <li>
                    Mình tạo ra website, và mình cũng hiểu những hạn chế, điểm yếu của nó. Mình mong các&nbsp;<strong>AE cao thủ trong giới Coder, MMO, Trick FB, bên công an, ban ngành các cấp</strong>…&nbsp; ủng hộ mình, ủng hộ website
                    để loại bỏ những thành phần K làm mà đòi có ăn, Scam, Lừa đảo trên mxh.
                    </li>
                    <li>Website tạo ra dựa trên ý tưởng giúp ích cho cộng đồng xanh sạch, vậy nên mong mình mọi người cùng xây dựng chứ&nbsp;<strong>đừng sân si, phá hoại</strong></li>
                    <li>
                    Nội dung trên website được kiểm duyệt dựa trên kinh nghiệm phân tích của mình nên vẫn sẽ có thể có những sai sót, nhầm lẫn, Vậy nên mọi vấn đề về sai sót, nhầm lẫn thông tin các bạn vui lòng liên hệ với mình để được
                    giải quyết
                    </li>
                    <li>
                    <strong>Admin.vn</strong> tự tạo ra&nbsp;<strong>lợi nhuận</strong>&nbsp;và dùng chính<strong>&nbsp;lợi nhuận</strong>&nbsp;đó để&nbsp;<strong>duy trì website</strong>&nbsp;và&nbsp;
                    <strong>trả tiền cho CTV thu thập dữ liệu lừa đảo</strong>&nbsp;bổ sung vào data
                    </li>
                    <li>Cam kết 100% Code website wp đơn giản, dễ sử dụng.&nbsp;<strong>không yêu cầu, thu thập, lưu trữ</strong>&nbsp;<strong>bất kì thông</strong>&nbsp;</li>
                    <li><strong>Nguồn bài viết&nbsp;</strong>: <a href="http://CEHCKSCAM.INFO">CHECKSCAM.INFO&nbsp;</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        <Footer></Footer>
        <div className="float-buttons">
          <a href="https://admin.vn/scam/create" className="btn-theme btn-theme_primary">TỐ CÁO <span /></a>
          <a href="https://admin.vn/trust-services" className="btn-theme btn-theme_success">CHECK UY TÍN<span /></a>
        </div>
      </div>
    </>
    );
  }
}
export default About;