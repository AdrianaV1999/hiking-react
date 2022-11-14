
import StarRating from "./StarRating";


function log(value) {
  console.log(value);
}
const style={
    backgroundColor: 'white',
    opacity: 0.95,
    textAlign: 'center',
    borderRadius: "25px",
    border: "2px solid #73AD21",
    marginTop: "20px",
    marginBottom: "80x",
    marginRight: "550px",
    marginLeft: "550px"
    
    }
function Provera() {


  return (

<div style={style}>
<div className="input-container">
    <h3>Zlatibor</h3>
    <StarRating onChange={log} />
    <img src="https://www.srbijapodlupom.com/wp-content/uploads/2021/02/zlatibor.jpg" className="photo"  alt="Zlatibor" />
  </div>
  <div className="input-container">
    <h3>Black Forest</h3>
    <StarRating onChange={log} />
  <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200902175412/iStock-521383509.jpg" className="photo"  alt="Black Forest" />
  </div>
  <div className="input-container">
  <h3>Alvao</h3>
  <StarRating onChange={log} />
  <img src="https://i0.wp.com/quilometroinfinito.com/wp-content/uploads/2020/05/Alvao.jpg?fit=1500%2C1000&ssl=1" className="photo"  alt="Alvao" />
  </div>
 </div>
  )
}

  
export default Provera;

