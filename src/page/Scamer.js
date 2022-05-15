import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";

function Scamer() {
    const info = useParams();
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
                                            <a href="/">Trang chủ</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="/">Lừa đảo</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="/">{info.scamID}</a>
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
                                                    1111
                                                </div>
                                            </div>
                                            <div className="scammer-item">
                                                <div className="scammer-item_icon">
                                                    <i className="fas fa-phone-alt" />
                                                    Số điện thoại:
                                                </div>
                                                <div className="scammer-item_content">
                                                    1111   
                                                </div>
                                            </div>
                                            <div className="scammer-item">
                                                <div className="scammer-item_icon">
                                                    <i className="fas fa-credit-card" />
                                                    Số tài khoản
                                                </div>
                                                <div className="scammer-item_content">
                                                    0334940776
                                                </div>
                                            </div>
                                            <div className="scammer-item">
                                                <div className="scammer-item_icon">
                                                    <i className="fas fa-university" />
                                                    Ngân hàng
                                                </div>
                                                <div className="scammer-item_content">
                                                    0800002592006
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
                                                            <a href="/storage/scams//8aaeae49-7203-4ca1-823a-50b44a02a1c4-6278e78cd8d70.jpeg" data-fancybox="image-scammer">
                                                                <img src="/storage/scams//8aaeae49-7203-4ca1-823a-50b44a02a1c4-6278e78cd8d70.jpeg" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="scammer-item_content__image-item">
                                                            <a href="/storage/scams//4e3d63a0-1e56-4205-bf7c-b30db33494f1-6278e78cf29c2.jpeg" data-fancybox="image-scammer">
                                                                <img src="/storage/scams//4e3d63a0-1e56-4205-bf7c-b30db33494f1-6278e78cf29c2.jpeg" alt="" />
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
                                                    Dương ******* ******
                                                </div>
                                            </div>
                                            <div className="scammer-item">
                                                <div className="scammer-item_icon">
                                                    <i className="fas fa-phone-alt" />
                                                    Liên hệ:
                                                </div>
                                                <div className="scammer-item_content">
                                                    093478****
                                                </div>
                                            </div>
                                            <div className="scammer-item">
                                                <div className="scammer-item_icon">
                                                    <i className="fas fa-link" />
                                                    Link phốt MXH
                                                </div>
                                                <div className="scammer-item_content" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Scamer;