import React from "react";
import { Link } from "react-router-dom";

function Header(){
    function CloseHeader() {
        var Body = document.getElementById("my-body");
        Body.classList.remove("is-show_navigation");
    }
    return(
        <>
        <header className="header bg-white position-relative z-index-10" id="header">
            <div className="header-main">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-3">
                    <div className="header-bar d-flex align-items-center">
                    <div className="header-hamburger d-block d-lg-none">
                        <button type="button" className="no-animation" id="header-hamburger">
                        <span />
                        <span />
                        <span />
                        </button>
                    </div>
                    <div className="header-logo">
                        <Link to="/">
                            <img src="https://i.imgur.com/dOUNkAK.png" height={42} alt="logo" />
                        </Link>
                    </div>
                    <div className="header-button d-lg-none ml-auto d-flex align-items-center justify-content-end">
                        <div className="header-button_items position-relative">
                        <button type="button" className="btn-theme btn-theme_gray btn-collapse_search btn-call_search">
                            <i className="fa fa-search"></i>
                        </button>
                        <div className="header-search">
                            <form method="POST">
                            <div className="form-group position-relative">
                                <input type="text" className="form-control" name="search" placeholder="Nhập số điện thoại, số tài khoản ngân hàng ..." />
                                <button type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div className="header-button_items position-relative">
                        <Link to="/report" role="button" className="btn-theme btn-theme_primary">
                            <div className="d-block d-sm-none">
                            <i className="fas fa-exclamation" />
                            </div>
                            <div className="d-sm-block d-none">
                            Tố cáo lừa đảo
                            </div>
                            <span />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div id="header-navigation" className="header-navigation d-lg-flex align-items-center justify-content-end">
                    <ul>
                        <li className="d-block d-lg-none header-navigation_logo">
                        <Link to="/">
                            <img src="https://i.imgur.com/dOUNkAK.png" height={42} alt="logo" />
                        </Link>
                        <button type="button" className="header-navigation_close" id="header-navigation_close" onClick={CloseHeader}>&times;</button>
                        </li>
                        <li>
                        <Link to="/home">HOME</Link>
                        </li>
                        <li>
                        <Link to="/about">GIỚI THIỆU</Link>
                        </li>
                        <li>
                        <Link to="/term">ĐIỀU KHOẢN</Link>
                        </li>
                        <li>
                        <Link to="/service">QUỸ BẢO HIỂM ADMIN</Link>
                        </li>
                        <li>
                        <Link to="/report">TỐ CÁO LỪA ĐẢO</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="header-button d-none d-lg-flex align-items-center justify-content-end">
                    <div className="header-button_items position-relative">
                        <button type="button" className="btn-theme btn-theme_gray btn-collapse_search btn-call_search">
                            <i className="fa fa-search"></i>
                        </button>
                        <div className="header-search">
                        <form method="POST">
                            <div className="form-group position-relative">
                            <input type="text" className="form-control" name="search" placeholder="Nhập số điện thoại, số tài khoản ngân hàng ..." />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="header-button_items position-relative">
                        <Link to="/report" role="button" className="btn-theme btn-theme_primary">
                        TỐ CÁO LỪA ĐẢO
                        <span />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="header-overlay" id="header-overlay" />
        </header>
        </>
    );
}
export default Header;
