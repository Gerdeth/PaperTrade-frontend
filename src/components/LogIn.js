import React from "react";


function LogIn() {
    return(
    <div className="log-in-page">
       
        <form className="log-in-form">
            <h1 className="welcome">Welcome to stocks-O</h1>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput" placeholder="email address"/>
            </div>

            
            <div className="mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="password"/>
            </div>
            <div className="reset">
                <a href="#"> Forgot Password?</a>
            </div>
            <div  className= "log-in-button">
                <button type="submit" className="log-in"> <a href= "./MyPortfolio">Sign In</a></button>
            </div>
            
        </form>
    </div>   
   
);
}
export default LogIn;
