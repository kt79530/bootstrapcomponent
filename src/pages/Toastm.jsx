import React,{useState} from "react";
import { Container, Row, Col, Toast, Button } from "react-bootstrap";


const Toastm = () => {
    
    const [showA, setShowA] = useState(true)
    const [showB, setShowB] = useState(true)

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                <h1>show</h1>
                <div className="toast show">
                    <div className="toast-header">
                        <strong className="me-auto">
                            issac toast
                        </strong>
                        <button className="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                    <div className="toast-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </div>
                </div>
                </Col>
                <h2>리액트에서 스크립트를 사용할때는 알고있는 방식과 다르다</h2>
                <button className="btn btn-warning" id="toast-btn">show toast</button>
                <div className="toast ">
                    <div className="toast-header">
                        <strong className="me-auto">
                            issac toast
                        </strong>
                        <button className="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                    <div className="toast-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </div>
                </div>
                {/*<script> 리액트에서 기존에 html하는 스크립트 넣은 방법으로는 리액트에서 스크립트를 사용할 수 없다
                    document.getElEmentById("toastbtn").onclick= function() {
                        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
                    } 
                </script>*/}
                <Col md={3}>
                </Col>

                <Col md={3}>
                <h1>최초 리액트 부트스트랩 사용</h1>
                <Button 
                variant="success"
                onClick={toggleShowA}
                className="mb-2"
                >toggle toast <strong>with</strong> Animation
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <h2>헤더입니다</h2>
                    </Toast.Header>
                    <Toast.Body>lorem adsfasdgah</Toast.Body>
                </Toast>
                </Col>

                <Col md={3}>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Toastm;