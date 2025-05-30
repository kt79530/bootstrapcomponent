import { Container, Row, Col } from "react-bootstrap";

const Layer = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                <h1>basic</h1>
                <button className="btn btn-primary" 
                data-bs-toggle="modal"
                data-bs-target="#one"
                > 기본 모달 열기</button>
                <div className="modal" id="one">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">...
                                <h4 className="modal-title">heading</h4>
                                <button className="btn-close"data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                ....
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal">close</button>
                        
                            </div>
                        </div>
                    </div>
                </div>
                </Col>

                <Col md={3}>
                <h1>Add animation</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ani">
                애니메이션 모달 열기</button>

                <div className="modal fade" id="ani">
                    <div className="modal-dialog">
                         <div className="modal-content">
                            <div className="modal-header">...
                                <h4 className="modal-title">heading</h4>
                                <button className="btn-close"data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                ....
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal">close</button>
                        
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                
                <Col md={3}>
                <h1>Fullscreen</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#full">
                full 모달 열기</button>

                <div className="modal fade" id="full">
                    <div className="modal-dialog modal-fullscreen">
                         <div className="modal-content">
                            <div className="modal-header">...
                                <h4 className="modal-title">heading</h4>
                                <button className="btn-close"data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                ....
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal">close</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                
                <Col md={3}>
                <h1>Centered</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#center">
                센터 모달 열기</button>

                <div className="modal fade" id="center">
                    <div className="modal-dialog modal-dialog-centered">
                         <div className="modal-content">
                            <div className="modal-header">...
                                <h4 className="modal-title">heading</h4>
                                <button className="btn-close"data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                ....
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal">close</button>
                        
                            </div>
                        </div>

                    </div>
                </div>

                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <h1>scrollable</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lorem">
                스크롤 모달 열기</button>

                <div className="modal fade" id="lorem">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                         <div className="modal-content">
                            <div className="modal-header">...
                                <h4 className="modal-title">heading</h4>
                                <button className="btn-close"data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis officia est in velit rem expedita voluptatem? Ea, recusandae possimus voluptatibus nostrum doloremque beatae eaque soluta libero nulla iure impedit vitae natus numquam facilis similique voluptatum amet nemo fugiat eius vero molestiae a praesentium velit? Soluta voluptatum ipsam necessitatibus.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis officia est in velit rem expedita voluptatem? Ea, recusandae possimus voluptatibus nostrum doloremque beatae eaque soluta libero nulla iure impedit vitae natus numquam facilis similique voluptatum amet nemo fugiat eius vero molestiae a praesentium velit? Soluta voluptatum ipsam necessitatibus.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis officia est in velit rem expedita voluptatem? Ea, recusandae possimus voluptatibus nostrum doloremque beatae eaque soluta libero nulla iure impedit vitae natus numquam facilis similique voluptatum amet nemo fugiat eius vero molestiae a praesentium velit? Soluta voluptatum ipsam necessitatibus.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis officia est in velit rem expedita voluptatem? Ea, recusandae possimus voluptatibus nostrum doloremque beatae eaque soluta libero nulla iure impedit vitae natus numquam facilis similique voluptatum amet nemo fugiat eius vero molestiae a praesentium velit? Soluta voluptatum ipsam necessitatibus.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis officia est in velit rem expedita voluptatem? Ea, recusandae possimus voluptatibus nostrum doloremque beatae eaque soluta libero nulla iure impedit vitae natus numquam facilis similique voluptatum amet nemo fugiat eius vero molestiae a praesentium velit? Soluta voluptatum ipsam necessitatibus.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis officia est in velit rem expedita voluptatem? Ea, recusandae possimus voluptatibus nostrum doloremque beatae eaque soluta libero nulla iure impedit vitae natus numquam facilis similique voluptatum amet nemo fugiat eius vero molestiae a praesentium velit? Soluta voluptatum ipsam necessitatibus.
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal">close</button>
                        
                            </div>
                        </div>

                    </div>
                </div>

                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Layer;