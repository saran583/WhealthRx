import logo from './logo.svg';
import './App.css';
import "./css/bootstrap.min.css";
import "./css/style.css";
import whealthrxlogo from "./images/wealthrx_logo.png"
import Login from './components/Login';
import Register from"./components/Register";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/header';


function App() {
  return (
    <div className="App">
     
	 	<Header></Header>

		<BrowserRouter>
			
			<Routes>

				<Route path="/login" element={<Login/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/" element={<Register/>}></Route>
			
			</Routes>
		
		</BrowserRouter>
    
	</div>
  );
}

export default App;
