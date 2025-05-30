import {Outlet, Link} from "react-router-dom"; /* outlet = 헤더와 본문을 구분하는 경계선 */

const Header = () => {
    return(
        <>
        <nav>
            <ul className="nav bg-warning">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-dark fw-bold">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/container" className="nav-link text-white fw-bold">BootStrap Container</Link>
                </li>
                <li className="nav-item">
                    <Link to="/typo" className="nav-link text-primary fw-bold">TypoGraphic</Link>
                </li>
                <li className="nav-item">
                    <Link to="/color" className="nav-link text-success fw-bold">BootStrap Basic Color</Link>
                </li>
                <li className="nav-item">
                    <Link to="/table" className="nav-link text-info fw-bold">Table</Link>
                </li>
                <li className="nav-item">
                    <Link to="/img" className="nav-link text-danger fw-bold">Img</Link>
                </li>
                <li className="nav-item">
                    <Link to="/jumbo" className="nav-link text-secondary fw-bold">Jumbo</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alerts" className="nav-link text-dark fw-bold">Alerts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/btn" className="nav-link text-white fw-bold">Btn</Link>
                </li>
                <li className="nav-item">
                    <Link to="/badges" className="nav-link text-blue fw-bold">Badges</Link>
                </li>
                <li className="nav-item">
                    <Link to="/progress" className="nav-link text-danger fw-bold">Progress</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cards" className="nav-link text-dark fw-bold">Cards</Link>
                </li>
                <li className="nav-item">
                    <Link to="/layer" className="nav-link text-dark fw-bold">모달창</Link>
                </li>
                <li className="nav-item">
                    <Link to="/toastm" className="nav-link text-white fw-bold">Toastm</Link>
                </li>
                
            </ul>
        </nav>
        <Outlet/>{/* 선언하지 않으면 제대로 작동하지 않음*/}

        </>
    )
}
export default Header;