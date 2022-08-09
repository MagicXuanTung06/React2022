// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// EX1
import React from 'react';  
import './App.css';  
import Toggle from "./components/Toggle";  
import Child from "./components/Child";  
function App() {  
  return (  
    <div className="App">  
      <Toggle title="Show Child">  
                <Child />  
            </Toggle>  
     
    </div>  
  );  
}  
  
export default App;  