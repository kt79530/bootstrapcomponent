import { Container, Row, Col } from "react-bootstrap";

const Cards = () => {
    return(
        <>
        <Container>
            <Row>
                <Col sm={3}>
                <h1>Basic</h1>
                <div className="card">
                    <div className="card-body">Basic card</div>
                    
                </div>
                </Col>
                <h1>header and footer</h1>
                <div className="card">
                <div className="card-header">Header</div>
                <div className="card-body">Body</div>
                <div className="card-footer">Footer</div>
                </div>
                <Col sm={3}>
                <h1 className="h3">title text and links</h1>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Card</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="#" className="card-link">card-link</a>
                        <a href="#" className="card-link">another-link</a>
                    </div>
                </div>
                </Col>
                <Col sm={3}>
                <h1>Card image</h1>
                <div className="card">
                    <img src="./img/2.jpg" alt="" className="card-img-top rounded" />
                    <div className="card-body">
                        <h4 className="card-title">kkt</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#" className="btn btn-outline-primary">more</a>
                    </div>
                    <img src="./img/1.jpg" alt="" className="card-img-top" />
                </div>
                </Col>
                <Col sm={3}>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Cards;