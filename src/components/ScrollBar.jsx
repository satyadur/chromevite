import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const ScrollBar = () => {
  return (
    <> 
     {/* <div className='scroll'>
        <div>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp" alt="" />
        </div>    
        <div>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp" alt="" />
        </div>
        <div>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp" alt="" />
        </div>
        <div >
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp" alt="" />
        </div>
        <div>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp" alt="" />
        </div>
  </div> */}
  <Carousel data-bs-theme="light" style={{height:"500px",zIndex:"100",width:'57%',overflow:"hidden",justifyContent:"center",display:'flex',alignContent:"center",marginLeft:"360px",color:"#fff",backgroundColor:"#fff"}}>
      <Carousel.Item style={{color:"#fff",backgroundColor:"#fff"}}>
        <img
          className="d-block "
          src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp"
          alt="First slide"
          style={{
            height:"500px",
            // zIndex:"1"
            
          }}
        />
      </Carousel.Item>
      <Carousel.Item style={{color:"#fff",backgroundColor:"#fff"}}>
        <img
          className="d-block "
          src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp"
          alt="Second slide"
          style={{
            height:"500px",
            // zIndex:"1"
          }}
        />
      </Carousel.Item>
      <Carousel.Item style={{color:"#fff",backgroundColor:"#fff"}}>
        <img
          className="d-block"
          src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp"
          alt="Third slide"
          style={{
            height:"500px",
            // zIndex:"1"
          }}
        />
      </Carousel.Item>
    </Carousel>
  </>

    // <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    
  )
}

export default ScrollBar