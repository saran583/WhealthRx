import react from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";

function Login(){

    return(
        <div>
            <section class="login py-5 border-top-1">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-8 align-item-center">
                <div class="border">
                    <h3 class="bg-gray p-4">Login Now</h3>
                    <form action="#">
                        <fieldset class="p-4">
                            <input type="text" placeholder="Username" class="border p-3 w-100 my-2"></input>
                            <input type="password" placeholder="Password" class="border p-3 w-100 my-2"></input>
                            <div class="loggedin-forgot">
                                    <input type="checkbox" id="keep-me-logged-in" style={{marginRight:"10px"}}></input>
                                    <label for="keep-me-logged-in" class="pt-3 pb-2">Keep me logged in</label>
                            </div>
                            <button type="submit" style={{margin:"auto"}} class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3">Log in</button>
                            <a class="mt-3 d-block  text-primary" href="#">Forgot Password?</a>
                            <a class="mt-3 d-inline-block text-primary" href="/register">Register Now</a>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Login;