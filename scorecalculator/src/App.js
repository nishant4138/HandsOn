import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div >
      <CalculateScore Name={"Nishant"}
      School={"JNV"}
      total={"500"}
      goal={"3"}
      />

    </div>
  );
}

export default App;
