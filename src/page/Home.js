import React from "react";
import Scam from "../component/Scam";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render()  {
    return (
      <>
      <div>
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
                      <form method="POST">
                        <div className="form-group position-relative">
                          <input type="text" className="form-control" name="search" placeholder="Nhập số điện thoại, số tài khoản ngân hàng ..." />
                          <button type="submit">
                          <i className="fa fa-search"></i>
                          </button>
                        </div>
                        <Link to="/report" className="btn-theme btn-theme_primary">
                          Gửi Tố Cáo Scam
                          <span />
                        </Link>
                        <Link to="/service" className="btn-theme btn-theme_success">
                          Check Quỹ Bảo Hiểm
                          <span />
                        </Link>
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
                    <Scam></Scam>
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="service-card">
                        <div className="service-bg_main" />
                        <div className="service-bg_before" />
                        <div className="service-bg_after" />
                        <div className="service-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="service-content">
                          <Link to="/" className="service-content_title">
                            Check scammer
                          </Link>
                          <div className="service-content_desc">
                            Bạn chỉ cần nhập SDT, STK ngân hàng, thông tin của scammer vào trong ô tìm kiếm sẽ được phơi bày
                          </div>
                        </div>
                        <div className="service-action">
                          <Link to="/" className="btn-theme btn-theme_white">
                            Check ngay
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="service-card">
                        <div className="service-bg_main" />
                        <div className="service-bg_before" />
                        <div className="service-bg_after" />
                        <div className="service-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="service-content">
                          <Link to="/report" className="service-content_title">
                            Tố cáo lừa đảo
                          </Link>
                          <div className="service-content_desc">
                            Bạn muốn tố cáo một ai đó đang lừa đảo bạn ,đã đủ chứng cứ để kẻ lừa đảo phải chịu hình phạt
                          </div>
                        </div>
                        <div className="service-action">
                          <Link to="/report" className="btn-theme btn-theme_white">
                            Tố cáo
                            <span />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="service-card">
                        <div className="service-bg_main" />
                        <div className="service-bg_before" />
                        <div className="service-bg_after" />
                        <div className="service-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="service-content">
                          <Link to="/service" className="service-content_title">
                            Check quỹ bảo hiểm
                          </Link>
                          <div className="service-content_desc">
                            Check quỹ bảo hiểm được Admin VietNam đảm bảo xác nhận uy tín trên từng giao dịch an toàn
                          </div>
                        </div>
                        <div className="service-action">
                          <Link to="/service" className="btn-theme btn-theme_white">
                            Check quỹ
                            <span />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}
export default Home;
