import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import {useState} from 'react'
import Results from './components/Results/Results';

const name = require('@rstacruz/startup-name-generator');

const App = () => {

  const [header, setHeader] = useState('NaamKaran !');
  const [headerExpand, setHeaderExpand] = useState(true);
  const [textExpand, setTextExpand] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const inputChangeHandler = (inputText) =>{
    setHeaderExpand(!inputText);
    setTextExpand(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  }

  return (

    <div className="App">
      <Header headTitle={header} headExpand={headerExpand} textExpand={textExpand}/>
      <SearchBox onInputChange={inputChangeHandler}/>
      <Results suggestedNames={suggestedNames}/>
    </div>
  );
}

export default App;
