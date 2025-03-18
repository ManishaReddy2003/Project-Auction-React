import React from 'react'
import { menuItems } from '../Data/MenuItems'
import "./style.css"


function Headers () {


    return(
    <>
     <div className='header'>
          <img className='imglogo' height={100} weight={200} src="https://logomakerr.ai/uploads/output/2023/12/30/0196db5ef3d1a3fd38a78512e2e67d1a.jpg"></img>
        <nav className='navbar'>
            <ul>
                {
                    menuItems.map((menuItems , index) => (      
                   <>
                   <li key={index}><a  href= {menuItems.url}>{menuItems.name}</a></li>
                  
                   
                   </>
                    

                    ))
                }
               
            </ul>
        </nav>
        </div> 
     </>
    )
}

export default Headers