import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}   
class Scamer extends React.Component {
    state = {
        m: []
    }
    componentDidMount() {
        const { id } = this.props.params;
        axios.get(`https://checkscam77.com/backend/api.php?type=getinfoscam&id=${id}`)
        .then(res => {
          const m = res.data;
          this.setState({ m });
        });
    }

    render() {
        return (
            <>
            {this.state.m.map(f => 
                <div key={f.id}>
                    <div id="main" className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="/">Trang chủ</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="/">Lừa đảo</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="/">{f.name}</a>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-gap section-scammer">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                        <div className="scammer-box">
                                            <div className="scammer-box_title">
                                                <i className="fas fa-exclamation" />
                                                Cảnh báo lừa đảo
                                            </div>
                                            <div className="scammer-box_wrap">
                                                <div className="scammer-item">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-user-alt" />
                                                        Họ và tên:
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        {f.name}
                                                    </div>
                                                </div>
                                                <div className="scammer-item">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-phone-alt" />
                                                        Số điện thoại:
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        {f.phone}
                                                    </div>
                                                </div>
                                                <div className="scammer-item">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-credit-card" />
                                                        Số tài khoản
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        {f.stk}
                                                    </div>
                                                </div>
                                                <div className="scammer-item">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-university" />
                                                        Ngân hàng
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        {f.bank}
                                                    </div>
                                                </div>
                                                <div className="scammer-item flex-wrap flex-md-nowrap">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-images" />
                                                        Ảnh chụp bằng chứng
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        <div className="scammer-item_content__image">
                                                            <div className="scammer-item_content__image-item">
                                                                <a href={`https://checkscam77.com${f.image}`} data-fancybox="image-scammer">
                                                                    <img src={`https://checkscam77.com/${f.image}`} alt="" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="scammer-item flex-wrap flex-md-nowrap">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-pen-square" />
                                                        Mô tả hình thức
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        Scam
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="scammer-box">
                                            <div className="scammer-box_title">
                                                <i className="fas fa-user-alt" />
                                                Người tố cáo
                                            </div>
                                            <div className="scammer-box_wrap">
                                                <div className="scammer-item">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-user-alt" />
                                                        Họ và tên:
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        {f.np_name}
                                                    </div>
                                                </div>
                                                <div className="scammer-item">
                                                    <div className="scammer-item_icon">
                                                        <i className="fas fa-phone-alt" />
                                                        Liên hệ:
                                                    </div>
                                                    <div className="scammer-item_content">
                                                        {f.np_phone}
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
            )}
            </>
        )
    }
}
export default withParams(Scamer);
