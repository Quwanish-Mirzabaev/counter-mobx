import "../App.css"
import User from "./User.png"
function Main(){
    return(
        <>
<div className="main">
<p>Sign</p>
< img src={User} alt="" width="70px" height="70px"/>
<form className="form1">
  <input className="username" type="text" placeholder="Username" />
  <input className="password" type="password" placeholder="Password" />
  <a href="#" className="sumbit">
    Sign in
  </a>
  <p>
    <a href="#">Forgot Password?</a>
  </p>
</form>
</div>
        </>
    )
}
 export default Main;