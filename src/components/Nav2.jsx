import React from 'react'
import { Link } from 'react-scroll'
const Nav2 = () => {
  let links=[
    {
      id:1,
      title:"Updates"
    },
    {
      id:2,
      title:"Yours"
    },
    {
      id:3,
      title:"Safe"
    },
    {
      id:4,
      title:"Fast"
    },
    {
      id:5,
      title:"ByGoogle"
    }
  ];
  return (
    
    <>
 <nav id='hero'>
        <ul>
          {
            links.map((data)=>(
              <>
               <li>
        <Link to={data.title} key={data.title} spy={true} smooth={true} offset={-100} duration={400} style={{width:"80px"}}>{data.title}</Link>
        </li>
              </>
            ))
          }
     
        </ul>
    </nav> 
        

        <p style={{marginInline:"630px",width:"500px"}}>Need the Chrome installer? <a href="#"> Download here </a></p>
{/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </>
  )
}

export default Nav2