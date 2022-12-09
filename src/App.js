import './App.css';
import Cards from './components/Card';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">

      <Cards title='Component with image' text='This component have an image'>
        <img src={logo} className="card-img-top" alt="some" />
      </Cards>

      <Cards title='Component without image' text='This component not have an image'/>

    </div>
  );
}

export default App;
