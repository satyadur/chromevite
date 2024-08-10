import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import { GoArrowUpRight } from "react-icons/go";

const secHeight=1500;
const Image1 = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:'',
        offset:["0 1","1.03 10"]
    })
   
  return (
    <>
    <div style={{position:"sticky",top:'0px'}}>
       
   <motion.section ref={ref}
   style={{
    scale:scrollYProgress,
    opacity:scrollYProgress,
    background:"url(https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches.webp)",
    height:"800px",
    position:"sticky",
    top:"0px",
    marginTop:"-100px",
   }}
   >

   </motion.section>
  
<Set1/>
  <Set2/>
   </div> 
  <Dd2/>
  <Dd1/>
  <Dd3/>
  <Dd4/>
  <Dd5/>
  <Dd6/>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   </>
  )
}

export default Image1

const Set1=()=>{
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:'',
        offset:["0 1","1.03 10"]
    })
   
    return(
        <motion.section ref={ref}
        style={{
         scale:scrollYProgress,
         opacity:scrollYProgress,
         height:"800px",
         // background:"url(https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches.webp)",
         width:"100%",
         marginLeft:"0px",
         position:"sticky",
         top:"0px",
         marginTop:"0px",
        //  border:"2px solid",
         backgroundColor:"#fff"
        }}
        >
     <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1.webp" alt="" style={{height:"800px",width:"1000px",marginTop:"-104px"}} />
        </motion.section>
    )
}

const Set2=()=>{
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:'',
        offset:["0 0","1.03 10"]
    })
    return(
        <motion.section ref={ref}
        style={{
         scale:scrollYProgress,
         opacity:scrollYProgress,
         height:"800px",

         // background:"url(https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches.webp)",
         width:"100%",
         marginLeft:"0px",
         position:"sticky",
         top:"0px",
         background:"#fff",
        
        }}
        >
     <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp" alt="" style={{height:"800px",width:"1000px",marginTop:"-105px"}} />
        </motion.section>
    )
}
const Dd1=()=>{
    return(
        <div id='dd1'>
           <div style={{textAlign:"start",position:"relative",left:"450px"}}>
            <h1 style={{marginTop:"50px",width:"500px"}}>Extend your <br /> experience</h1> <br />
            <p>From shopping and entertainment to <br /> productivity, find extensions to improve your <br /> experience in the Chrome Web Store.</p>
            <button style={{backgroundColor:" #D2E3FC",color:"#1967D2",fontSize:"16px",fontWeight:"500",borderRadius:"24px",border:"none",height:"48px",width:"209px"}}>Explore extensions <GoArrowUpRight/></button>
           </div>
            <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp" alt="" style={{height:"608px",position:"relative",bottom:"80px",width:"1020px",left:"280px"}}/>
        </div>
    )
}

let Dd2=()=>{
    return(
        <>
        <div data-aos="fade-down" style={{width:"150px",height:"150px",borderRadius:"50%",position:"relative",top:"80px",left:"1200px",zIndex:"1",backgroundImage:"url(https://www.google.com/chrome/static/images/dev-components/extensions-icon.png)",objectFit:"contain"}}></div>
        </>
    )
}
let Dd3=()=>{
    return(
        <div data-aos="fade-right" style={{width:"90px",height:"100px",borderRadius:"50%",position:"relative",bottom:"350px",left:"600px",zIndex:"1",backgroundImage:"url(https://www.google.com/chrome/static/images/dev-components/extensions-shop.png)",objectFit:"contain",backgroundRepeat:"no-repeat"}}></div>

    )
}
let Dd4=()=>{
    return(
        <>
        <div data-aos="fade-left"  style={{width:"90px",height:"100px",borderRadius:"50%",position:"relative",bottom:"350px",left:"1325px",zIndex:"1",backgroundImage:"url(https://www.google.com/chrome/static/images/dev-components/extensions-video.png)",objectFit:"contain",backgroundRepeat:"no-repeat"}}></div>
        </>
    )
}
let Dd5=()=>{
    return(
        <>
        <div data-aos="fade-up-right" style={{width:"100px",height:"100px",borderRadius:"50%",position:"relative",bottom:"260px",left:"645px",zIndex:"1",backgroundImage:"url(https://www.google.com/chrome/static/images/dev-components/extensions-person.png)",objectFit:"contain",backgroundRepeat:"no-repeat"}}></div>
        </>
    )
}

let Dd6=()=>{
    return(
        <>
        <div data-aos="fade-up-left" style={{width:"100px",height:"150px",borderRadius:"30%",position:"relative",bottom:"360px",left:"1245px",zIndex:"1",backgroundImage:"url(https://www.google.com/chrome/static/images/dev-components/extensions-paint.png)",objectFit:"contain",backgroundRepeat:"no-repeat"}}></div>
        </>
    )
}