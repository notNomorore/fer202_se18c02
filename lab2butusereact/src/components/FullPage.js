import { Container, Navbars } from "react-bootstrap";
import Header from "./Header";
import NaveBar from "./NaveBar";
import Contents from "./Contents";
import Footers from "./Footers";
import ContentsP2 from './ContentsP2';
function FullPage() {
    return (
        <Container fluid>
            <NaveBar />
            <Header />
            <Contents/>
            <ContentsP2/>
            <Footers/>
        </Container>
    );
}
export default FullPage;