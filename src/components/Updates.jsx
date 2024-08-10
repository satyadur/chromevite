import React from 'react'
import { RxCountdownTimer } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

const Updates = () => {
  return (
    <div id='Updates'>
      
       <h1 style={{textAlign:"center",color:" #202124",fontSize:"60px",fontWeight:"700",letterSpacing:"-1.25px"}}>Discover the latest</h1><br /><br /><br />
      <div style={{display:"flex",textAlign:"center",justifyContent:"center",bottom:"40px",position:"relative",gap:"20px"}}>
      <h1 style={{color:"#1967D2",background:" #E8F0FE",fontSize:"60px",fontWeight:"700",position:"relative",height:"72px",width:"332px",bottom:"40px",alignItems:"center",padding:"0px 10px 0px 10px",justifyContent:"center",textAlign:"center",borderRadius:"50px",placeContent:"center",justifyItems:"center",textJustify:"center"}}><RxCountdownTimer style={{fontSize:"50px"}}/> updates &nbsp;</h1>
      <h1 style={{fontSize:"60px",fontWeight:"700",letterSpacing:"-1.25px",position:"relative",bottom:"40px"}}> from Chrome</h1>
      </div>
      <div id='updatesdiv'>
        <div id='up1' style={{background:"#93c2e7"}}>
          <div style={{backgroundColor:"#93c2e7"}}>
          <p style={{position:"relative",top:"50px",fontWeight:"500"}}>UPDATES</p>
          <h2 style={{fontSize:"48px",fontWeight:"700", color:"#202124",position:"relative",top:"40px"}}>Automatic updates</h2>
          <p style={{position:"relative",top:"40px"}}>There’s a new Chrome release every four weeks, making it <br /> easy to have the newest features and a faster, safer web <br /> browser.</p>
          <a href="#" style={{textDecoration:"none",fontSize:"18px",fontWeight:'500',position:"relative",top:"40px"}}>Learn about automatic updates</a><br /><br /><br />
          </div>
          <img src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png" alt="" />
       
        </div>
        <div id='up2'>
          <div>
          <p style={{position:"relative",top:'50px',fontWeight:"500"}}>LATEST</p>
          <h2 style={{fontSize:"48px",fontWeight:"700", color:"#202124",position:"relative",top:"50px"}}>New from Chrome</h2>
          <p style={{position:"relative",top:"50px"}}>Chrome regularly updates with tools and features that <br /> make it faster and easier to use.</p>
          <a href="#" style={{textDecoration:"none",fontSize:"18px",fontWeight:'500',position:"relative",top:"50px"}}>Learn what’s new on Chrome <MdArrowOutward/></a>
          </div>
          <div>
            <img style={{height:"160px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1024px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updates