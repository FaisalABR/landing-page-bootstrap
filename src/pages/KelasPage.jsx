import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data";
import FaqComponent from "../components/FaqComponent";

const KelasPage = () => {
  return (
    <>
      <div className="kelaspage">
        <div className="w-100 min-vh-100">
          <Container>
            <Row className="text-center">
              <h1 className="fw-bold">Semua Kelas</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Row>
            <Row className="px-4">
              {semuaKelas.map((item) => (
                <Col key={item.id} className="shadow-sm rounded ">
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
          </Container>
        </div>
      </div>
      <FaqComponent />
    </>
  );
};

export default KelasPage;
