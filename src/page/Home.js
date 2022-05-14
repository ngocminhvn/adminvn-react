import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Home extends React.Component {
  render()  {
    return (
      <>
      <div>
        <Header></Header>
        <div id="main" className="main">
          <div className="section-gap section-intro">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <div className="title">
                      KIỂM TRA &amp; TỐ CÁO SCAMMER
                    </div>
                    <div className="line" />
                    <div className="desc">
                      <p>
                        Check&nbsp;<strong>"SĐT, STK Ngân Hàng..."</strong>&nbsp;trước khi giao dịch, bằng cách nhập vào&nbsp;<strong>"ô Tìm Kiếm"</strong>.<br />
                        Với hơn&nbsp;<strong>16.000 dữ liệu Scam trên MXH &amp; hàng trăm đơn tố cáo gửi lên mỗi ngày</strong>, sẽ giúp bạn mua bán an toàn hơn khi online !!!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <form action="https://admin.vn/scam/search" method="POST">
                        <div className="form-group position-relative">
                          <input type="text" className="form-control" name="search" placeholder="Nhập số điện thoại, số tài khoản ngân hàng ..." />
                          <button type="submit">
                            <i className="far fa-search" />
                          </button>
                        </div>
                        <a href="https://admin.vn/scam/create" className="btn-theme btn-theme_primary">
                          Gửi Tố Cáo Scam
                          <span />
                        </a>
                        <a href="https://admin.vn/trust-services" className="btn-theme btn-theme_success">
                          Check Quỹ Bảo Hiểm
                          <span />
                        </a>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <div className="intro-image">
                        <img src="https://admin.vn/storage/userfiles/images/bg-scam.png" className="w-100 img-fluid h-auto" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="scam-list">
                    <div className="scam-item d-flex align-items-center py-3 px-4 border bg-white">
                      <div className="scam-title">
                        <span className="scam-title_icon">
                          <i className="fas fa-user" />
                        </span>
                        <a href="https://admin.vn/scams/to-truong-giang-286.html" className="scam-title_link">
                          Tô Trường Giang
                        </a>
                      </div>
                      <div className="scam-info ml-auto w-auto">
                        <span className="scam-info_time">
                          <i className="fas fa-clock" />
                          09-05-2022 17:06
                        </span>
                        <span className="scam-info_phone">
                          <i className="fas fa-money-bill-alt" />
                          0800002592006 : 0334940776
                        </span>
                        <span className="scam-info_eye">
                          <i className="fas fa-eye" />
                          399 lượt xem
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-gap section-service">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <div className="title">
                      Dịch Vụ Nổi Bật
                    </div>
                    <div className="line" />
                    <div className="desc">
                      Các tin tức nổi bật về tình trạng scam hiện nay. Hãy đọc tin tức để phòng hờ các kẻ xấu lợi dụng scam
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row row-col-10">
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="service-card">
                        <div className="service-bg_main" />
                        <div className="service-bg_before" />
                        <div className="service-bg_after" />
                        <div className="service-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="service-content">
                          <a href="/" className="service-content_title">
                            Check scammer
                          </a>
                          <div className="service-content_desc">
                            Bạn chỉ cần nhập SDT, STK ngân hàng, thông tin của scammer vào trong ô tìm kiếm sẽ được phơi bày
                          </div>
                        </div>
                        <div className="service-action">
                          <a href="/" className="btn-theme btn-theme_white">
                            Check ngay
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="service-card">
                        <div className="service-bg_main" />
                        <div className="service-bg_before" />
                        <div className="service-bg_after" />
                        <div className="service-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="service-content">
                          <a href="/scam/create" className="service-content_title">
                            Tố cáo lừa đảo
                          </a>
                          <div className="service-content_desc">
                            Bạn muốn tố cáo một ai đó đang lừa đảo bạn ,đã đủ chứng cứ để kẻ lừa đảo phải chịu hình phạt
                          </div>
                        </div>
                        <div className="service-action">
                          <a href="/scam/create" className="btn-theme btn-theme_white">
                            Tố cáo
                            <span />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="service-card">
                        <div className="service-bg_main" />
                        <div className="service-bg_before" />
                        <div className="service-bg_after" />
                        <div className="service-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="service-content">
                          <a href="/trust-services" className="service-content_title">
                            Check quỹ bảo hiểm
                          </a>
                          <div className="service-content_desc">
                            Check quỹ bảo hiểm được Admin VietNam đảm bảo xác nhận uy tín trên từng giao dịch
                          </div>
                        </div>
                        <div className="service-action">
                          <a href="/trust-services" className="btn-theme btn-theme_white">
                            Check quỹ
                            <span />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="service-card">
                        <div className="service-bg_main" />
                        <div className="service-bg_before" />
                        <div className="service-bg_after" />
                        <div className="service-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="service-content">
                          <a href="https://napthe1s.vn" className="service-content_title">
                            Dịch vụ Đổi Thẻ Cào
                          </a>
                          <div className="service-content_desc">
                            Website đổi thẻ cào thành tiền mặt ,uy tín tự động rút tiền về momo ,atm 24/24 được đảm bảo bởi Admin VietNam
                          </div>
                        </div>
                        <div className="service-action">
                          <a href="https://napthe1s.vn" className="btn-theme btn-theme_white">
                            Liên hệ
                            <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
export default Home;