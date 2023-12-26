import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, testimonial } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 pt-lg-5 pt-3">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg={6}>
              <h1 className="mb-4">
                Temukan <br /> <span>Bakat Kreatifmu</span> <br /> bersama kami!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt ad laborum maiores repellat eos deserunt.
              </p>
              <button className="btn btn-danger me-2">Lihat Kelas</button>
              <button className="btn btn-outline-danger me-2">
                Lihat Promo
              </button>
            </Col>
            <Col lg={6} className="pt-lg-0 pt-4">
              <img src={HeroImage} alt="hero-png" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row className="text-center">
            <h1 className="fw-bold">Kelas Terbaru</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Row>
          <Row className="px-4">
            {kelasTerbaru.map((item) => (
              <Col key={item.id} className="shadow-sm rounded">
                <img
                  src={item.image}
                  alt="unsplash.com"
                  className="rounded-top"
                />
                <div className="mx-3 mt-4">
                  <i className={item.star1}></i>
                  <i className={item.star2}></i>
                  <i className={item.star3}></i>
                  <i className={item.star4}></i>
                  <i className={item.star5}></i>
                </div>
                <h5 className="mx-3 mt-3 fw-bold">{item.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center mx-3 ">
                  <p className="text-primary fw-bold">{item.price}</p>
                  <button className="btn btn-danger">{item.buy}</button>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="text-center">
            <div className="see-more">
              <button
                className="btn btn-success btn-lg rounded-pill"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua Kelas
                <i className="fa-solid fa-chevron-right ms-2"></i>
              </button>
            </div>
          </Row>
        </Container>
      </div>
      <div className="testimonial w-100 min-vh-100">
        <Container>
          <Row className="text-center">
            <h1 className="fw-bold text-lg">Testimonial</h1>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonial.map((item) => (
                <SwiperSlide key={item.id} className="shadow-sm">
                  <p>{item.desc}</p>
                  <div className="people">
                    <img src={item.image} />
                    <div className="d-flex flex-column align-items-start ms-3">
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="fw-bold">{item.skill}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default HomePage;
