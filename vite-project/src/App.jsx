import "../src/App.css"

function App(){
 
 return(
  <div clasName="form">
  <form >
    <label clasName="lab">Full Name:</label>
    <input placeholder="full name" className="inp"/>
     <label clasName="lab">User Name:</label>
    <input placeholder="user name" className="inp"/>
     <label clasName="lab">Email:</label>
    <input type="email" placeholder="email" className="inp"/>
     <label clasName="lab">Password</label>
    <input type="password" placeholder="password" className="inp"/>
    <button clasName="inp">Sign Up/Register</button>
  </form>
  </div>

 )
    

  
    
}
export default App;

  