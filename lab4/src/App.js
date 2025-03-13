import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import MyAlert from './components/MyAlert';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';
import MyDropdown from './components/MyDropdown';

function App() {
  return (
    <Container fluid style={{margin: 3}}>
<MyAlert/>
<MyModal/>
<MyRadioButton/>
<MyDropdown/>
    </Container>
  );
}

export default App;
