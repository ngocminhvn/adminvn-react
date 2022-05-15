import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Service extends React.Component {
  render()  {
    return (
      <>
      <div>
        <Header></Header>
        <div id="main" class="main">
            <div class="section-gap section-shield">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading">
                                <div class="title">
                                    QUỸ BẢO HIỂM MMO
                                </div>
                                <div class="line"></div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="tab-content">
                                <div class="tab-pane active show" id="tab-1">
                                    <div class="shield-inner">
                                        <div class="shield-list">
                                            <div class="shield-title">
                                                <i class="fas fa-star"></i>
                                                ADMINISTRATOR VIETNAM:
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div class="shield-item">
                                                <a href="https://admin.vn/trust-service/le-vu-truong-12.html" class="shield-item_link">
                                                    <img src="https://admin.vn/storage/userfiles/imageupload/397363-0E6F36EC-D8FE-468E-B764-F45979214732.jpeg" alt="" />
                                                    1. Lê Vũ Trường
                                                </a>
                                            </div>
                                            <div class="shield-item">
                                                <a href="https://admin.vn/trust-service/le-thanh-hiep-11.html" class="shield-item_link">
                                                    <img src="https://admin.vn/storage/userfiles/imageupload/415865-DA0A3BAC-07C8-4EBA-87C1-39394375976D.jpeg" alt="" />
                                                    2. Lê Thanh Hiệp
                                                </a>
                                            </div>
                                            <div class="shield-item">
                                                <a href="https://admin.vn/trust-service/le-van-thai-13.html" class="shield-item_link">
                                                    <img src="https://admin.vn/storage/userfiles/imageupload/681286-A31E0ADA-3603-4A4D-81D4-96AFBB54EC20.jpeg" alt="" />
                                                    3. Lê Văn Thái
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
        </div>
        <Footer></Footer>
      </div>
    </>
    );
  }
}
export default Service;