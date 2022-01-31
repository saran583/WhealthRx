import logo from './logo.svg';
import './App.css';
import "./css/bootstrap.min.css";
import "./css/style.css";
import whealthrxlogo from "./images/wealthrx_logo.png"
import Login from './components/Login';
import Register from"./components/Register";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/header';
import Diagnostics from './components/Diagnostics/Diagnostics';
import Consulting from './components/Consulting/Consulting';
import Pharmacy from './components/Pharmacy/Pharmacy';
import Fitness from './components/Fitness/Fitness';
import HealthTalks from './components/HealthTalks/HealthTalks';
import Services from './components/Services/Services';
import Reports from './components/Reports/Reports';
import HealthBot from './components/HealthBot/HealthBot';


function App() {
  return (
    <div className="App">
     
	 	<Header></Header>

		<BrowserRouter>
			
			<Routes>

				<Route path="/login" element={<Login/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/" element={<Register/>}></Route>
				<Route path="/diagnostics" element={<Diagnostics/>}></Route>
				<Route path="/consulting" element={<Consulting/>}></Route>	
				<Route path="/pharmacy" element={<Pharmacy/>}></Route>	
				<Route path="/fitness" element={<Fitness/>}></Route>	
				<Route path="healthtalks" element={<HealthTalks/>}></Route>	
				<Route path="/services" element={<Services/>}></Route>	
				<Route path="/reports" element={<Reports/>}></Route>	
				<Route path="/healthbot" element={<HealthBot/>}></Route>	
				

			</Routes>
		
		</BrowserRouter>
    
	</div>
  );
}

export default App;
