import React from 'react'
import one from "../../public/images/desing.png";
import two from "../../public/images/develop.png";
import three from "../../public/images/deploy.png";


function Service() {
  return (
    <>
    
    <div className="container service mt-20" id='service'>
        <h1 className='text-center serveice_heading'><span className='text-yellow-500 font-bold text-5xl'>What </span> <span className='text-white font-bold text-3xl'>I do</span></h1>

        <p className='text-center new_pra text-white text-md mt-5'>I have a Experience of Core and latest Technologies like MVC patrans.</p>

        <div className="skills">
          <div className='desing_img'>
              <img src={one} alt="" width={100} height={100} />
          </div>
          <div className="desing">
            <p><span className='text-yellow-600 text-xl'>Desingning</span> is the basic part of our website.</p>
          </div>
        </div>

        <div className="skills">
          <div className='develop_img'>
              <img src={two} alt="" width={100} height={100} />
          </div>
          <div className="desing">
            <p><span className='text-yellow-600 text-xl'>Development</span> is an importent section of our projects </p>
          </div>
        </div>


        <div className="skills">
          <div className='deploy'>
              <img src={three} alt="" width={100} height={100} />
          </div>
          <div className="desing">
            <p><span className='text-yellow-600 text-xl'>Deployment</span> is an last part of our section of project</p>
          </div>
        </div>


    </div>
    
    
    </>
  )
}

export default Service
