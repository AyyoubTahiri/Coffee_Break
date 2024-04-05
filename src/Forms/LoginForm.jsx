
import '../assets/css/login.css'
import "bootstrap/dist/css/bootstrap.min.css";
import google from  "../assets/google.png";
import bg from "../assets/BackCafe.png";

export default function LoginForm() {
  return (
    <div className='bady'>
    { /*--------------------- Main Container ------------------------*/ }
     <div className="container d-flex justify-content-center align-items-center min-vh-100">
    { /*--------------------- Login Container ------------------------*/ }
       <div className="row border rounded-5 p-3 bg-white shadow box-area">
    { /*------------------------- Left Box ---------------------------*/ }
       <div className="col-md-6 rounded-4 d-flex  flex-column  p-0 m-0" style={{ background: "#8b4513" }} >
         <img src={bg} className="img-fluid  h-100 rounded-4 d-flex  align-items-center w-100 left-box py-0"/>
       </div> 
    { /*------------------ ------ Right Box --------------------------*/ }
        
       <div className="col-md-6 right-box">
          <div className="row align-items-center">
                <div className="header-text mb-4">
                     <h2>Hello,Again</h2>
                     <p>We are happy to have you back.</p>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
                </div>
                <div className="input-group mb-1">
                    <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" />
                </div>
                <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="formCheck" />
                        <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                    </div>
                    <div className="forgot">
                        <small><a href="#">Forgot Password?</a></small>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-lg  w-100 fs-6 text-light" style={{ background: "#8b4513" }}>Login</button>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-lg btn-light w-100 fs-6"><img src={google} style={{ width: 20 }} className="ms-2 mt-auto" /><small className=''>Sign In with Google</small></button>
                </div>
                <div className="row">
                    <small>Dont have account? <a href="#">Sign Up</a></small>
                </div>
          </div>
       </div> 
      </div>
    </div>
</div>

  )
}
