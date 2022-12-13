import './App.css';
import { useState } from 'react';
function App() {
  const [Pass, CheckPass] = useState("")
  const [Statement, UpdateStatement] = useState("")
  function HandlePassword(pass){
    CheckPass(pass.target.value)
  }
  function HandlePass(){
    var Strlen = Pass.length;
    if (Strlen <=2) {
      UpdateStatement(
        function(){
        return "weak Password"
      }
      )
    } else {
      if (Strlen <=6) {
        UpdateStatement(
          function(){
          return "Medium Password"
        }
        ) 
      } else {
        if (Strlen > 6) {
          
        UpdateStatement(
          function(){
            return "Strong Password"
            }
          )
        } 
        }
      }
      
      
    
  }
  

  return (
    <div className="App">
     <input type = "String" value = {Pass} onChange = {HandlePassword}/>
     <button onClick={HandlePass}>Submit</button>
    <p>{Statement}</p>
    </div>
  );
}

export default App;
