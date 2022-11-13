import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3 style={{ fontSize: "48px" }}>Logo footer</h3>

      <p>
        In hac habitasse platea dictumst. Morbi ornare metus ex, viverra <br />
        sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.{" "}
      </p>

      <ul className="footer__items">
        <li>Giới Thiệu</li>
        <li>Bản Đồ 3D</li>
        <li>Chương Trình Biểu Diễn</li>
        <li>Liên Hệ</li>
        <li>Đăng Nhập</li>
        <li>Đăng Ký</li>
      </ul>

      <p>Copyrights © All right Reserved By Nhom11 </p>
    </div>
  );
}

export default Footer;
