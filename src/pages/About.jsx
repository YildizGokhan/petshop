import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img
                src="https://i.hizliresim.com/6f8brbh.png"
                width={100}
                className="rounded-circle"
                alt="ab"
              />
            </div>
            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="mt-2 mb-0">Gökhan YILDIZ</h5>
              <span>FrontEnd Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                "Merhaba! Ben bir Frontend Developer'ım ve tutkulu bir pet severim. Hayvan dostlarımızın mutluluğu ve sağlığına adanmış bir petshop sitesi oluşturmak için buradayım. Yaratıcı düşünceyle kod yazmayı seviyor, kullanıcı deneyimini geliştirmek ve estetik tasarımlar oluşturmak için çabalıyorum. Teknoloji dünyasında yeni trendleri takip etmeyi ve kullanıcılar için en iyi çözümleri sunmayı hedefliyorum. Burada, tüylü dostlarınızın mutluluğu için en iyisini sunmak için çalışıyorum."
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook" /></a>

                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-dribbble" /></a>

                </li>
                <li><a href="https://www.instagram.com/gyildizz">
                  <i className="fa-brands fa-instagram" />
                </a>

                </li>
                <li>
                  <a href="https://www.linkedin.com/in/gyildizz/"><i className="fa-brands fa-linkedin" />
                  </a>

                </li>
                <li><a href="https://www.google.com.tr/?hl=tr"><i className="fa-brands fa-google" /></a>

                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-black "
                    href="https://github.com/YildizGokhan"
                    target="_blank" rel="noopener noreferrer">
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://www.linkedin.com/in/gokhan-a-yildiz-/"
                    target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
