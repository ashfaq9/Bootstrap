import logo from './logo.svg';
import './App.css';
import Registration from './registration';
import Boootsrap from './boootsrap';
import Autocomplete from './autocomplete/autocomplete';
import ComboBox from './autocomplete/combobox';
import CountrySelect from './autocomplete/countryselect';
import Grouped from './autocomplete/grouped';
import Router from './router';
import { useEffect } from 'react';
function App() {
  return (
    <>
    <Router/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
