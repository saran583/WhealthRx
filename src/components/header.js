import React, { useEffect } from "react";
import "../css/bootstrap.min.css";
// import "../plugins/jQuery/jquery.min.js"
import whealthrxlogo from "../images/wealthrx_logo.png"


function Header(){
    // useEffect(() => {
    //     const script = document.createElement('script')
    //     script.src = "../plugins/jQuery/jquery.min.js";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     const script1 = document.createElement('script')
    //     script1.src = "../plugins/bootstrap/js/popper.min.js";
    //     script1.async = true;
    //     document.body.appendChild(script1);

    //     const script2 = document.createElement('script')
    //     script2.src = "../plugins/bootstrap/js/bootstrap.min.js";
    //     script2.async = true;
    //     document.body.appendChild(script2);

    //     const script3 = document.createElement('script')
    //     script3.src = "../plugins/bootstrap/js/bootstrap-slider.js";
    //     script3.async = true;
    //     document.body.appendChild(script3);

    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);
    return(
    
<section>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<nav class="navbar navbar-expand-lg navbar-light navigation">
					<a class="navbar-brand" href="index.html">
						<img src={whealthrxlogo} alt="" width="130px"></img>
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{console.log("thi is the collapse style",document.getElementById("navbarSupportedContent").style.display==="block"?document.getElementById("navbarSupportedContent").style.display="none":document.getElementById("navbarSupportedContent").style.display="block")}}>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto main-nav ">
                        <li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/login">Assessments<span><i class="fa fa-angle-down"></i></span>
								</a>

								{/* <!-- Dropdown list --> */}
								<div class="dropdown-menu">
									<a class="dropdown-item" href="/login">HRA</a>
									<a class="dropdown-item" href="/login">Mind Spark</a>
									
								</div>
							</li>
							<li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="">Diagnostics<span><i class="fa fa-angle-down"></i></span>
								</a>

								{/* <!-- Dropdown list --> */}
								<div class="dropdown-menu">
									<a class="dropdown-item" href="/login">Immunization</a>
									<a class="dropdown-item" href="/login">Vaccination</a>
									<a class="dropdown-item" href="/login">Health check-ups</a>
									
								</div>
							</li>
							<li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Consulting <span><i class="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list --> */}
								<div class="dropdown-menu">
									<a class="dropdown-item" href="/login">Talk to a Doctor</a>
									<a class="dropdown-item" href="/login">Speak with a Counselor</a>
									

								</div>
							</li>
							<li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Pharmacy <span><i class="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list -- */}
								<div class="dropdown-menu">
									<a class="dropdown-item" href="/login">Prescription</a>
									<a class="dropdown-item" href="/login">General / OTC</a>
								</div>
							</li>
                            <li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Fitness <span><i class="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list -- */}
								<div class="dropdown-menu">
									<a class="dropdown-item" href="/login">Nutrition</a>
									<a class="dropdown-item" href="/login">Workout Videos</a>
                                    <a class="dropdown-item" href="/login">Gym</a>
									<a class="dropdown-item" href="/login">Hire a Fitness Coach</a>
								</div>
							</li><li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Health Talks <span><i class="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list -- */}
								<div class="dropdown-menu">
									<a class="dropdown-item" href="/login">Webinars</a>
									<a class="dropdown-item" href="/login">Downloads</a>
								</div>
							</li><li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Services <span><i class="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list -- */}
								<div class="dropdown-menu">
									<a class="dropdown-item" href="/login">Treatment Costs</a>
									<a class="dropdown-item" href="/login">Out Patient</a>
									<a class="dropdown-item" href="/login">Home Care</a>
								</div>
							</li><li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Reports <span><i class="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list -- */}
								
							</li><li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Health Bot <span><i class="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list -- */}
								
							</li>
						</ul>
						<ul class="navbar-nav ml-auto mt-10">
							<li class="nav-item">
								<a class="nav-link login-button" href="/login">Login</a>
							</li>
							
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</section>


    )
}


export default Header;