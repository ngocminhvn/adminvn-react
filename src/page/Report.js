import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

class Report extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            name:'',
            phone:'',
            stk:'',
            bank:'',
            note:'',
            image:[]
        }
       
    }

    handleHtmlControlChange = (event) => {
        this.setState({ [event.target.name]:event.target.value })
    }
    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        axios.post('https://reqres.in/api/users',this.state).
        then(response => {
            console.log(response)
        }).catch( error => {
            console.log(error)
        })
    }

  render()  {
    const { name,phone,stk,bank,note,image,report_name,report_phone } = this.state
    return (
      <>
      <div>
        <Header></Header>
        <div id="main" className="main">
            <div className="section-gap section-report">
            <form method="POST" className="form-theme" encType="multipart/form-data"  onSubmit={this.handleSubmit}>
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
                            <input type="text" name="name" value={name} onChange={this.handleHtmlControlChange} className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor> Họ và tên <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="form-theme_item">
                            <input type="text" name="phone" value={phone} onChange={this.handleHtmlControlChange} className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor>
                            Số điện thoại
                            </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="form-theme_item">
                            <input type="text" name="stk" value={stk} onChange={this.handleHtmlControlChange} className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor> Số tài khoản <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="form-theme_item">
                            <input type="text" name="bank" value={bank} onChange={this.handleHtmlControlChange} className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor> Ngân hàng <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-theme_item">
                            <input type="text" name="image" value={image} onChange={this.handleHtmlControlChange} className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor> Ảnh bằng chứng <span className="font-weight-bold text-danger">*</span> </label>
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
                            <textarea name="note" value={note} onChange={this.handleHtmlControlChange} className="form-theme_item__input" rows={4} />
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
                            <input type="text" name="report_name" value={report_name} onChange={this.handleHtmlControlChange} className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor> Họ &amp; tên <span className="font-weight-bold text-danger">*</span> </label>
                        </div>
                        </div>
                        <div className="col-md-6 col-12 py-md-0">
                        <div className="form-theme_item">
                            <input type="text" name="report_phone" value={report_phone} onChange={this.handleHtmlControlChange} className="form-theme_item__input" />
                            <label className="form-theme_item__label" htmlFor>
                            Liên hệ zalo
                            </label>
                            <div className="form-theme_item__desc p-1 pb-0 text-muted">
                            Đơn tố cáo sẽ bị gỡ nếu zalo ảo.
                            </div>
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
      </div>
    </>
    );
  }
}
export default Report;