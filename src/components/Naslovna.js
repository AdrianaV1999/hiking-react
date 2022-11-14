import React, { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { BsBorderBottom, BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


class  Naslovna extends Component{

    render() {
        const myStyle={

            height:'0vx',
            //fontSize:'20px',
            marginTop:'80px',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            AnimationEffect: 'pop 0.4s',
            textAlign: 'center',
         
  
    

        };
        const style={
          backgroundColor: 'white',
          opacity: 0.7,
          textAlign: 'center',
          borderRadius: "25px",
          border: "2px solid #73AD21",
          marginTop: "50px",
          marginBottom: "80x",
          marginRight: "479px",
          marginLeft: "479px"
          
          }
          const myystyle = {
            color: "white",
            padding: "10px",
            fontFamily: "Arial"
          };
      
      
    
 
    return(
        <div>
        
        <div style={myStyle}>
          <h1>MOUNTAIN HIKING</h1>
          <h4 style={style}>
          <h3>Hiking is a general word for traveling on foot in wilderness or countryside. Day hikers return before nightfall.</h3>
        Hello people! For all hiking fans, this is a great place. We offer hiking in the mountains at the best prices! You have a choice of several mountains in the Balkans where we organize hiking. All you have to do is log in to our site and choose one of the mountains you want to visit. We will inform you if there are enough places. Each hike allows a maximum of ten people. The price of each route is 15 euros and you get free hiking equipment. They hike all day. It starts early in the morning at 7 a.m. and ends at 7 p.m. Also, you get free breakfast, lunch and dinner. Hurry and register as soon as possible before the places run out! Best regards!
        
 </h4>
        </div>
        <div style={{alignItems:"center"}}>
            <button className="btn1">
          <CgInstagram />
        </button>

        <button className="btn2">
          <BsFacebook />
        </button>
        <button className="btn3">
          <BsYoutube />
        </button>
        
        </div>
        
    </div>
    );
    }
    
 }
export default Naslovna;