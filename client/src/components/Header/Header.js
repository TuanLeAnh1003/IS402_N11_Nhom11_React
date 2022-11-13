import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-bg">
      <div className="header">
        <div className="header__logo">logo</div>

        <ul className="header__items">
          <li>Giới Thiệu</li>
          <li>Bản Đồ 3D</li>
          <li>Chương Trình Biểu Diễn</li>
          <li>Liên Hệ</li>
          <li>Đăng Nhập</li>
          <li>Đăng Ký</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
