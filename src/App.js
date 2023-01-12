import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import MenuList from './components/MenuList';
import DisplayDifficulty from './components/DisplayDifficulty';

function App() {

  const [currentDifficulty, setCurrentDifficulty] = useState('');
  
  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div className='app-container'>
      <h3>Choose your difficulty</h3>
      <div className='container-items'>
        <MenuList onItemClick={onMenuListItemClick}/>
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>

  );
}

export default App;
