import React from 'react';
import './resources/styles.css';

//Components
import Header from './components/header_footer/Header'
import Featured from './components/featured';
import Info from './components/info';

function App() {
  return (
    <div className="App" style={{ height:"1500px", background:'cornflowerblue' }}>
      <Header />
      <Featured />
      <Info />
    </div>
  );
}

export default App;
