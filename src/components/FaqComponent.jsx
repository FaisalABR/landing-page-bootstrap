import { Container, Row, Col, Accordion } from "react-bootstrap";

import { faq } from "../data";

const FaqComponent = () => {
  return (
    <div className="faq pb-4">
      <Container>
        <Row className="text-center pb-5">
          <Col>
            <h2 className="fw-bold">Frequently Ask Question</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3">
          {faq.map((item) => (
            <Col key={item.id}>
              <Accordion>
                <Accordion.Item eventKey={item.eventKey}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.desc}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
