import { Container, Row, Col } from "react-bootstrap";

const Img = () => {
    return(
       <>
       <Container>
        <Row>
            <Col md={4}>
            <img src="../img/1.jpg" alt="이미지입니다" className="rounded"/>
            </Col>

            <Col md={4}>
            <img src="../img/1.jpg" alt="이미지입니다" className="rounded-circle"/>
            </Col>

            <Col md={4}>
            <img src="../img/1.jpg" alt="이미지입니다" className="img-thumbnail"/>
            </Col>
        </Row>
       </Container>
       </> 
    );
}
export default Img;