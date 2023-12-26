import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={5}>
            <h1 className="fw-bold">Ngobar.</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae perspiciatis nisi in commodi magni possimus?
            </p>
            <div>
              <Link>
                <i className="fa-brands fa-whatsapp"></i>
                <p>+62 822-2313-9766</p>
              </Link>
            </div>
            <div>
              <Link>
                <i className="fa-regular fa-envelope"></i>
                <p>person@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col lg={3} className="d-flex flex-column text-left pt-lg-0 pt-4">
            <h5 className="fw-bold">Menu</h5>
            <div className="links">
              <Link>Home</Link>
              <Link>Kelas</Link>
              <Link>Testimonial</Link>
              <Link>FAQ</Link>
              <Link>Syarat dan Ketentuan</Link>
            </div>
          </Col>
          <Col lg={4} className="pt-lg-0 pt-4">
            <div>
              <h5 className="fw-bold">Subscribe untuk Info Menarik</h5>
              <div>
                <input
                  type="text"
                  placeholder="Your email.."
                  className="py-1"
                />
                <button className="btn btn-danger">Subscribe</button>
              </div>
              <div className="social-group mt-3">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
