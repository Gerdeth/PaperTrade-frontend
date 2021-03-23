import React from "react";


function SignUp() {
    return(
    <div className="sign-up-page">
       
        <form className="sign-up-form">
            <h1 className="welcome">Welcome to stocks-O</h1>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput" placeholder="email address"/>
            </div>

            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Username</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="username"/>
            </div>
            <div className="mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="password"/>
            </div>
            <div  className= "sign-up-button">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
            <div className="already-have-account">
                <span>
                    Already have an account?<a href="/login"> Log in</a>
                </span>
            </div>
            
        </form>
    </div>   
   
);
}
export default SignUp;
