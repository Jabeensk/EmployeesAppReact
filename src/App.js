import './App.css';
import HomePage from './components/HomePage';


function App() {
  const employees=[{name:'James King', position:'President and CEO'}, 
  {name:'Julie Taylor', position:'VP of Marketing'},
  {name:'Eugene Lee', position:'CFO'},
  {name:'John Williams', position:'VP of Engineering'},
  {name:'Ray Moore', position:'VP of Sales'},
  {name:'Paul Jones', position:'QA Manager'}]
  return (
    <div className="App">
      <h1>Employees App</h1>
      <HomePage employees={employees} />
    </div>
  );
}

export default App;
