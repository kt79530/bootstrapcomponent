import {Container, Row, Col} from "react-bootstrap";

const Typo = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <p className="text-break">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur eligendi dolores earum illo asperiores possimus id amet perspiciatis laudantium perferendis officia incidunt, ex, voluptas excepturi et fugit delectus nemo!</p>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="border">
                <h1>abbr</h1>
                <p>약어 마우스를 올리면 물음표가 있는 커서모양을 지정한다</p>
                <section>the<abbr title="월드 헬스 조직">WHO</abbr>was founded in 1948.</section>
                </Col>
                <Col lg={3} className="border">
                <h1>blockquote</h1>
                <p>인용문은 짧은 인용과 긴 인용이 있는데</p>
                <blockquote className="blockquote">
                    <p>존시나가 현재는 악연인 스토리 라인.....</p>
                    <footer className="blockquote-footer">From WWE</footer>
                </blockquote>
                </Col>
                <Col lg={3} className="border">
                <h1>그 외</h1>
                <p className="text-start">왼쪽</p>
                <p className="text-end">오른쪽</p>
                <p className="text-center">가운데</p>
                <p className="text-nowrap">감싸지 않음</p>
                <p>
                    .lead : 글씨들 사이에서 크기변화가 생겨서 돋보이게..<br/>
                    .text-start : 왼쪽<br/>
                    .text-break : 가로폭에 맞게 글씨를 줄 넘김<br/>
                    .text-center : 가운데 정렬<br/>
                    .text-decoration-none : a태그에서 밑줄 방지<br/>
                    .text-end : 오른쪽<br/>
                </p>
                </Col>
                <Col lg={3} className="border">
                <h1>그 외2</h1>
                <p>
                    .text-nowrap : 가공을 하지 않은 상태 그래로
                    .text-lowercase : 소문자
                    .text-uppercase : 대문자
                    .text-capitalize : 각 워딩에  첫 글자만 대문자로
                    .initialism : 좀더 폰트를 작게
                    .list-unstyled : 목록에 여백을 제거하는데 단 클래스 바로 아랫부분만
                    .list-inline : ul,ol 이런 태그에 li를 block이 아닌 inline으로
                </p>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    Typography
                </h1>
                <div className="d-flex">
                <p className="h1">h1</p>
                <p className="h2">h2</p>
                <p className="h3">h3</p>
                <p className="h4">h4</p>
                <p className="h5">h5</p>
                <p className="h6">h6</p>
                </div>
                </Col>
                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    h시리즈보다 좀 더 큰 글씨를 사용할때는 .display
                </h1>
                </Col>
                <Col lg={3} className="border">
                <div className="">
                    <h1 className="display1">Display1</h1>
                    <h1 className="display2">Display2</h1>
                    <h1 className="display3">Display3</h1>
                    <h1 className="display4">Display4</h1>
                    <h1 className="display5">Display5</h1>
                    <h1 className="display6">Display6</h1>
                </div>
                </Col>
                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    키보드 태그
                </h1>
                <p>use <kbd>ctrl+p</kbd>to open</p>
                </Col>
                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                정의 리스트
                </h1>
                <dl>
                    <dt>coffee</dt>
                    <dd>커피는 라떼</dd>
                </dl>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Typo;