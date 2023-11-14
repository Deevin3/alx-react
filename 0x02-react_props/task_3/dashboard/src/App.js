import HolbertonLogo from "./Holberton.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={HolbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email:</label>
        <input type="email" name="email"></input>
        <label for="password">Password:</label>
        <input type="password" name="password"></input>
        <button type="button"> OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
