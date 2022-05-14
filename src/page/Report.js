import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Report extends React.Component {
  render()  {
    return (
      <>
      <div>
        <Header></Header>
        <div id="main" className="main">
            <div className="section-gap section-report">
            <form method="POST" action="https://admin.vn/scam/save" className="form-theme" encType="multipart/form-data">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                    <div className="section-heading">
                        <div className="title">
                        THÔNG TIN KẺ LỪA ĐẢO
                        </div>
                        <div className="line" />
                    </div>
                    </div>
                    <div className="col-md-10 col-lg-8">
                    <div className="row row-col-10">
                        <div className="col-md-6 col-12">
                        <div className="form-theme_item">
                            <input type="text" name="name" className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor> Họ và tên <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="form-theme_item">
                            <input type="text" className="form-theme_item__input" name="phone" />
                            <label className="form-theme_item__label" htmlFor>
                            Số điện thoại
                            </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="form-theme_item">
                            <input type="text" className="form-theme_item__input" name="account_num" />
                            <label className="form-theme_item__label" htmlFor> Số tài khoản <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="form-theme_item">
                            <input type="text" className="form-theme_item__input" name="account_bank" />
                            <label className="form-theme_item__label" htmlFor> Ngân hàng <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-theme_item">
                            <div className="form-theme_item__upload">
                            <div className="form-theme_item__upload-images">
                                <div id="dropzone_files" className="dropzone">
                                <div className="dz-message needsclick">
                                    <p style={{fontSize: '13px'}}>Kéo hoặc click vào đây để upload</p>
                                </div>
                                <input type="file" name="file" style={{display: 'none'}} />
                                </div>
                                <ul id="file-upload-list" className="list-unstyled" />
                            </div>
                            <div className="form-theme_item__upload-desc">
                                <i className="far fa-images" />
                                Upload Bill chuyển tiền &amp; ảnh đoạn chát lừa đảo.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 py-0">
                        <div className="form-theme_item">
                            <div className="form-theme_item__desc px-1 text-muted">
                            LƯU Ý: Chờ khoảng 15s để Upload ảnh lên sever, bài tố cáo sẽ bị gỡ nếu không đủ bằng chứng thuyết phục,
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-theme_item">
                            <textarea className="form-theme_item__input" name="description" rows={4} />
                            <label className="form-theme_item__label" htmlFor> Nội dung tố cáo <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="form-line" />
                    <div className="col-12">
                    <div className="section-heading">
                        <div className="title">
                        NGƯỜI XÁC THỨC
                        </div>
                        <div className="line" />
                    </div>
                    </div>
                    <div className="col-md-10 col-lg-8">
                    <div className="row row-col-10">
                        <div className="col-md-6 col-12 py-md-0">
                        <div className="form-theme_item">
                            <input type="text" className="form-theme_item__input" name="reporter_name" />
                            <label className="form-theme_item__label" htmlFor> Họ &amp; tên <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12 py-md-0">
                        <div className="form-theme_item">
                            <input type="text" className="form-theme_item__input" name="reporter_phone" />
                            <label className="form-theme_item__label" htmlFor>
                            Liên hệ zalo
                            </label>
                            <div className="form-theme_item__desc p-1 pb-0 text-muted">
                            Đơn tố cáo sẽ bị gỡ nếu zalo ảo.
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-theme_item">
                            <input type="text" className="form-theme_item__input" name="link_report" />
                            <label className="form-theme_item__label" htmlFor>
                            Link phốt trên group (nếu có)
                            </label>
                        </div>
                        </div>
                        <div className="col-12 mt-4">
                        <div className="form-theme_item text-center">
                            <button type="submit" className="btn-theme btn-theme_primary">
                            GỬI DUYỆT
                            <span />
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
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
export default Report;