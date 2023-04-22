import React from "react";

//include images into your bundle
//create your first component
import Navbar from "./Navbar.jsx"
import Menu from "./Menu.jsx"
import Tarjetas from "./Tarjetas.jsx"
import Footer from "./Footer.jsx";


const Home = () => {
	return (
		
		<>
		 <Navbar/>
		 <Menu/>
		 <Tarjetas/>
		 <Footer/>
		
		</>





	)}


export default Home;

// 		<nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary "  data-bs-theme="dark">
// 		  <div className="container-fluid d-flex flex-grow-1">
// 			<a className="navbar-brand text-light" href="#">Navbar</a>
// 			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
// 			  <span className="navbar-toggler-icon"></span>
// 			</button>
// 			<div className="collapse navbar-collapse flex-grow-1 text-right " id="navbarNavDropdown">
// 			  <ul className="navbar-nav  ml-auto flex-nowrap">
// 				<li className="nav-item">
// 				  <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
// 				</li>
// 				<li className="nav-item">
// 				  <a className="nav-link text-light" href="#">Features</a>
// 				</li>
// 				<li className="nav-item">
// 				  <a className="nav-link text-light" href="#">Pricing</a>
// 				</li>
			
// 			  </ul>
// 			</div>
// 		  </div>
// 		</nav>




// 	);
// };


// export const Card = () => {
// 	return (
// <div className="card" style="width: 18rem;">
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>
// </div> 

// );
// };
