import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";


const Footer = () => {
  const [activeInfo, setActiveInfo] = React.useState(false);
  const [activePC, setActivePC] = React.useState(false);
  const [activeDesktop, setActiveDesktop] = React.useState(false);
  const [activeLaptop, setActiveLaptop] = React.useState(false);
  const [activeAddress, setActiveAddress] = React.useState(false);
  const toggleClass = (name) => {
    if (name === "info") {
      setActiveInfo(!activeInfo);
    }
    if (name === "PC") {
      setActivePC(!activePC);
    }
    if (name === "Desktop") {
      setActiveDesktop(!activeDesktop);
    }
    if (name === "Laptop") {
      setActiveLaptop(!activeLaptop);
    }
    if (name === "Address") {
      setActiveAddress(!activeAddress);
    }
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__SignUpNews">
          <div className="Footer__SignUpNews--title">
            <h2>Đăng ký vào trang của chúng tôi.</h2>
            <p>Hãy là người đầu tiên nghe về các ưu đãi mới nhất.</p>
          </div>
          <div className="Footer__SignUpNews--form">
            <Input className="input--email" placeholder="Nhập email của bạn..." />
            <Button
              className="btn--subscribe"
              type="primary"
              shape="round"
              size={14}
            >
              Đăng ký
            </Button>
          </div>
        </div>
        <div className="Footer__information">
          <div className="Footer__information--about">
            <div className="wrap__title" onClick={() => toggleClass("info")}>
              <h2>TRUY CẬP NHANH</h2>
              <CaretDownOutlined
                className={`hide ${
                  !activeInfo
                    ? "show-md transformArrowDown-md"
                    : "show-md transformArrowUp-md"
                }`}
              />
              <hr style={{width: '100px', display: 'float', float: 'left'}}/>
            </div>
            <ul className={`show ${!activeInfo ? "hide-md" : "show-md"}`}>
              <li>Bộ phận hỗ trợ</li>
              <li>Hướng dẫn sử dụng</li>
            </ul>
          </div>
          <div className="Footer__information--address">
            <div className="wrap__title" onClick={() => toggleClass("Address")}>
              <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
              <CaretDownOutlined
                className={`hide ${
                  !activeAddress
                    ? "show-md transformArrowDown-md"
                    : "show-md transformArrowUp-md"
                }`}
              />
              <hr style={{width: '100px', display: 'float', float: 'left'}}/>
            </div>
            <ul className={`show ${!activeAddress ? "hide-md" : "show-md"}`}>
              <li>Địa chỉ: Đh Duy Tân, 254 NVL, Q.Thanh khê, TP. Đà Nẵng</li>
              <li>
                Điện thoại: <a>(84) 0976 459 539</a>
              </li>
              <li>Giờ làm việc: Thứ 2 - Thứ 7: 8:00 AM - 5:30 PM</li>
              <li>
                E-mail hỗ trợ: <a>nguyentuankiet0105@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__social">
          <div className="Footer__social--socialNetwork">
            <FacebookOutlined className="iconFacebook" />
            <InstagramOutlined className="iconInstagram" />
          </div>
          <div className="Footer__social--copyright">
            <span>Copyright © 2021 C2.SE01</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
