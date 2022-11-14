import { useState } from "react";
import ReactDOM from "react-dom";
import Combobox from "react-widgets/Combobox";
function FormaPrijava(props){
    const [ime, setIme]= useState('');
    const [prezime, setPrezime]= useState('');
    const [nickname, setNickname]= useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
   

    
      
    const style={
        backgroundColor: 'white',
          textAlign: 'center',
          borderRadius: "25px",
          border: "2px solid #73AD21",
          marginTop: "50px",
          marginBottom: "80x",
          marginRight: "700px",
          marginLeft: "700px"
    }
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
 
     const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
      };

    function handleIme(e){
        setIme(e.target.value);
    }

    function handlePrezime(e){
        setPrezime(e.target.value);
    }   

    function handleNickname(e){
        setNickname(e.target.value);
       
    }

    return (
       
        <div style={style}>
          <h1>{props.naslov}</h1>
        <div className="form">
        <form>
          <div className="input-container">
            <label>Name </label>
            <input type="text" value={ime} onChange={handleIme} name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="input-container">
            <label>Choose a mountain</label>
            <Combobox
  defaultValue="Zlatibor"
  data={["Zlatibor", "Black Forest", "Alvao"]}
/>
          </div>
            

          <div className="button-container">
            <input type="submit" />
            
          </div>
        </form>
      </div>
      </div>
        
        
    );

}
export default FormaPrijava;