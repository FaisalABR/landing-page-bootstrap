import { Container, Row, Col } from "react-bootstrap";

import { testimonial } from "../data";

import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <>
      <div className="testipage">
        <div className="w-100 min-vh-100">
          <Container>
            <Row className="text-center">
              <h1 className="fw-bold">Semua Testimoni</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Row>
            <Row>
              {testimonial.map((item) => (
                <Col key={item.id} className="card shadow-sm rounded">
                  <p>{item.desc}</p>
                  <div className="people">
                    <img src={item.image} />
                    <div className="d-flex flex-column align-items-start ms-3">
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="fw-bold">{item.skill}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <FaqComponent />
    </>
  );
};

export default TestimonialPage;
