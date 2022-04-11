import { Doughnut } from 'react-chartjs-2';
import './App.css';
import BarChart from './ChartComponent/BarChart';
//import DoughChart from './ChartComponent/DoughChart';
//import LineChart from './ChartComponent/LineChart';
//import PieChart from './ChartComponent/PieChart';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
     <BarChart/>
   </div>
    
    </>
  );
}

export default App;
