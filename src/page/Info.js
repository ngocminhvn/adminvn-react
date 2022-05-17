import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NumberFormat from 'react-number-format';


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
class Info extends React.Component {
    state = {
        i: []
    }
    componentDidMount() {
        const { code } = this.props.params;
        axios.get(`https://${process.env.REACT_APP_SERVER_NAME}/backend/api.php?type=fetchservice&code=${code}`)
            .then(res => {
                const i = res.data;
                this.setState({ i });
            });
    }

    render() {
        return (
            <>
            {this.state.i.map(a => 
            <div id="main" className="main">
              <div className="section-gap section-profile">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                      <div className="profile-inner">
                        <div className="profile-avatar">
                          <img src={`https://graph.facebook.com/${a.facebook}/picture?width=500&height=500&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640`} alt="" />
                        </div>
                        <div className="profile-title">
                          {a.username}
                        </div>
                        <div className="profile-buttons">
                          <a href={`https://www.messenger.com/t/${a.facebook}/`} className="btn-theme btn-theme_primary btn-radius">
                            <i className="fab fa-facebook-messenger" />
                            Check Mess
                            <span />
                          </a>
                          <a href={`tel:${a.phone}`} className="btn-theme btn-theme_primary btn-radius">
                            <i className="fas fa-phone-alt" />
                            Check Phone
                            <span />
                          </a>
                        </div>
                        <div className="profile-boxs">
                          <div className="row row-col-15">
                            <div className="col-md-6">
                              <div className="profile-box">
                                <div className="profile-box_content">
                                  <div className="profile-box_content__title">
                                    Thông tin liên hệ
                                  </div>
                                  <div className="profile-box_content__list">
                                    <p>
                                      <span>
                                        <i className="fab fa-facebook-f" />
                                      </span>
                                      Check Facebook:
                                      <a href={`https://www.facebook.com/t/${a.facebook}/`}>
                                        {a.facebook}
                                      </a>
                                    </p>
                                    <p>
                                      <span>
                                        <img src="https://i.imgur.com/7TAVaGy.png" alt="" />
                                      </span>
                                      Check Zalo:
                                      <a href={`https://zalo.me/${a.phone}`}>
                                        {a.phone}
                                      </a>
                                    </p>
                                    <p>
                                      <span>
                                        <i className="fa fa-globe" />
                                      </span>
                                      Website:
                                      <a href={`https://${a.website}`}>
                                        {a.website}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="profile-box_content__image">
                                    <img src="https://i.imgur.com/UFsiNlH.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="profile-box">
                                <div className="profile-box_content">
                                  <div className="profile-box_content__title">
                                    Quỹ Bảo Hiểm
                                  </div>
                                  <div className="profile-box_content__desc">
                                    <p>Khách hàng sẽ được <b>chúng tôi bảo hiểm an toàn giao dịch</b> với số tiền trong quỹ bảo hiểm <strong><NumberFormat value={a.money} displayType={'text'} thousandSeparator={true} /> VND</strong> của <strong>{a.username}</strong></p>
                                  </div>
                                  <div className="profile-box_content__image">
                                    <img src="https://i.imgur.com/YvQTtnY.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-boxs">
                          <div className="profile-box profile-box_nopr">
                            <div className="profile-box_content">
                              <div className="profile-box_content__title">
                                Vui lòng kiểm tra kỹ thông tin trước khi giao dịch tránh Fake:
                              </div>
                              <div className="profile-box_content__subtitle">
                                TK ngân hàng
                              </div>
                              <ul className="pl-3 mb-0">
                                <li><strong>MBBANK:</strong> {a.phone}</li>
                              </ul>
                              <div className="profile-box_content__subtitle">
                                Mô tả
                              </div>
                              <div className="mb-3">
                                <p><strong>DỊCH VỤ TRUNG GIAN&nbsp;:</strong></p>
                                <ul>
                                  <li><strong>10 - 199 :&nbsp;</strong>phí 5k</li>
                                </ul>
                                <ul>
                                  <li><strong>200 - 1.000,000&nbsp;&nbsp;:&nbsp;</strong>phí 10k</li>
                                </ul>
                                <ul>
                                  <li><strong>1.000,000&nbsp;- 2.000,000&nbsp;:&nbsp;</strong>phí 20k</li>
                                </ul>
                                <ul>
                                  <li><strong>2.000,000 - 5.000,000 :&nbsp;</strong>phí 30k</li>
                                </ul>
                                <ul>
                                  <li><strong>5.000,000 trở lên : Tuỳ phí</strong></li>
                                </ul>
                              </div>
                              <div className="profile-box_content__desc">
                                <p>
                                  <strong>Lưu Ý:</strong> Tránh trường hợp Nick Fake, Ảnh Fake, Link Fake, Rửa Tiền…. Người dùng hãy nhớ Chát đúng Facebook, Gọi đúng SĐT, Chuyển khoản đúng những STK có ở trong trong link bảo hiểm
                                  này Checkscam cam kết bạn sẽ an toàn trong mọi giao dịch..!!!
                                </p>
                              </div>
                              <div className="profile-box_content_watermark">
                                <img src="https://i.imgur.com/kKW9Fn8.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-desc">
                          Mọi giao dịch của bạn với <b style={{color: '#ff225c'}}>"{a.username}"</b> sẽ được <b>chúng tôi Bảo vệ</b> với số tiền nằm trong <strong style={{color: '#ff225c'}}>Quỹ bảo hiểm <NumberFormat value={a.money} displayType={'text'} thousandSeparator={true} /> VND</strong> khi bạn
                          tuân theo
                          <a href="/post/dieu-khoan.html">Điều Khoản Sử Dụng</a>
                          của chúng tôi
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
export default withParams(Info);
