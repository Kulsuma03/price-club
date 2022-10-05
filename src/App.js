import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Priceing from './component/Priceing/Priceing';
import AssignmentMark from './component/AssignmentMark/AssignmentMark';
import PhoneBar from './component/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold '>hello</h1>
      <p>Lorem ipsum dolor sit,</p>
      <Priceing></Priceing>
      <AssignmentMark></AssignmentMark>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
