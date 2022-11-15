import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom"
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

function Header() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const handleOpenLogin = () => {
    setShowSignup(false)
    setShowLogin(true)
  }

  const handleOpenSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
  }

  return (
    <div className="header-bg">
      <div className="header">
        <div className="header__logo">logo</div>

        <ul className="header__items">
          <Link to="/">Trang chủ</Link>
          <Link to="/map-screen">Bản Đồ 3D</Link>
          <Link to="/show">Chương Trình Biểu Diễn</Link>
          <Link to="/visit">Tham quan</Link>
          <Link to="/introduce">Giới Thiệu</Link>
          <Link to="/contact">Liên Hệ</Link>
          <div>
            <button onClick={handleOpenLogin}>Đăng Nhập</button>
            <button onClick={handleOpenSignup}>Đăng Ký</button>
          </div>
        </ul>
      </div>
      {
        showLogin &&
        <Login setShowLogin={setShowLogin} handleOpenSignup={handleOpenSignup} />
      }
      {
        showSignup &&
        <Signup setShowSignup={setShowSignup} handleOpenLogin={handleOpenLogin} />
      }
    </div>
  );
}

export default Header;
