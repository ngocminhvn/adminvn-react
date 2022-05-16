import React from "react";
import Admin from "../component/Admin";

class Service extends React.Component {
  render()  {
    return (
      <>
      <div>
        <div id="main" className="main">
            <div className="section-gap section-shield">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <div className="title">
                                    QUỸ BẢO HIỂM MMO
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="shield-inner">
                                        <div className="shield-list">
                                            <div className="shield-title">
                                                <i className="fas fa-star"></i>
                                                ADMINISTRATOR VIETNAM:
                                                <i className="fas fa-star"></i>
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
      </div>
    </>
    );
  }
}
export default Service;