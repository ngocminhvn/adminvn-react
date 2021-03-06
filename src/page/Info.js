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
        axios.get(`/backend/api.php?type=fetchservice&code=${code}`)
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
                                    Th??ng tin li??n h???
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
                                    Qu??? B???o Hi???m
                                  </div>
                                  <div className="profile-box_content__desc">
                                    <p>Kh??ch h??ng s??? ???????c <b>ch??ng t??i b???o hi???m an to??n giao d???ch</b> v???i s??? ti???n trong qu??? b???o hi???m <strong><NumberFormat value={a.money} displayType={'text'} thousandSeparator={true} /> VND</strong> c???a <strong>{a.username}</strong></p>
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
                                Vui l??ng ki???m tra k??? th??ng tin tr?????c khi giao d???ch tr??nh Fake:
                              </div>
                              <div className="profile-box_content__subtitle">
                                TK ng??n h??ng
                              </div>
                              <ul className="pl-3 mb-0">
                                <li><strong>MBBANK:</strong> {a.phone}</li>
                              </ul>
                              <div className="profile-box_content__subtitle">
                                M?? t???
                              </div>
                              <div className="mb-3">
                                <p><strong>D???CH V??? TRUNG GIAN&nbsp;:</strong></p>
                                <ul>
                                  <li><strong>10 - 199 :&nbsp;</strong>ph?? 5k</li>
                                </ul>
                                <ul>
                                  <li><strong>200 - 1.000,000&nbsp;&nbsp;:&nbsp;</strong>ph?? 10k</li>
                                </ul>
                                <ul>
                                  <li><strong>1.000,000&nbsp;- 2.000,000&nbsp;:&nbsp;</strong>ph?? 20k</li>
                                </ul>
                                <ul>
                                  <li><strong>2.000,000 - 5.000,000 :&nbsp;</strong>ph?? 30k</li>
                                </ul>
                                <ul>
                                  <li><strong>5.000,000 tr??? l??n : Tu??? ph??</strong></li>
                                </ul>
                              </div>
                              <div className="profile-box_content__desc">
                                <p>
                                  <strong>L??u ??:</strong> Tr??nh tr?????ng h???p Nick Fake, ???nh Fake, Link Fake, R???a Ti???n???. Ng?????i d??ng h??y nh??? Ch??t ????ng Facebook, G???i ????ng S??T, Chuy???n kho???n ????ng nh???ng STK c?? ??? trong trong link b???o hi???m
                                  n??y Checkscam cam k???t b???n s??? an to??n trong m???i giao d???ch..!!!
                                </p>
                              </div>
                              <div className="profile-box_content_watermark">
                                <img src="https://i.imgur.com/kKW9Fn8.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-desc">
                          M???i giao d???ch c???a b???n v???i <b style={{color: '#ff225c'}}>"{a.username}"</b> s??? ???????c <b>ch??ng t??i B???o v???</b> v???i s??? ti???n n???m trong <strong style={{color: '#ff225c'}}>Qu??? b???o hi???m <NumberFormat value={a.money} displayType={'text'} thousandSeparator={true} /> VND</strong> khi b???n
                          tu??n theo
                          <a href="/post/dieu-khoan.html">??i???u Kho???n S??? D???ng</a>
                          c???a ch??ng t??i
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
