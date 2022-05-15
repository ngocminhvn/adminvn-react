import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Admin from "../component/Admin";

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
                                            <Admin></Admin>
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