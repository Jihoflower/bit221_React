import logo from './logo.svg';
import './App.css';
import FirstComponent from './component/FirstComponent';
import { SecondComponent } from './component/SecondComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
