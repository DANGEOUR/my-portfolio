import React from 'react'
import image from "../../public/images/three.png";
function Hero() {
  return (
    <>
    
    <div className="container main" id='main'>
        <div className="text">
            <h1 className='heading1'><span className='text-yellow-500 font-bold text-5xl'>Hello</span>  <span className='text-white font-bold text-3xl'>World</span></h1>
            <h1>It's Me <span className='text-yellow-500 font-bold text-3xl mt-4'>Shaheer</span> Shah</h1>
            <h1 className='mt-2 font-bold text-3xl'>A professional Full Stack Web <span className='text-yellow-500 text-3xl'>D</span><span className='short'>eveloper</span></h1>
            <h1 className='mt-2'><span className='font-bold text-md text-yellow-500'>Ui/Ux</span> Desingner And Portfolio Maker</h1>
            <p className='text-sm mt-2'>This is <span className='font-bold text-yellow-500'>Shaheer ismail Shah</span> I am full stack web developer i have done a lot of project with core and latest technologies like MVC frame works and thats my portfolio..! </p>

            <button className='btn1 pt-2 pb-2 pl-10 pr-10 mt-4 bg-yellow-500'>Hire Me</button>

          <div className="icons">
          <i class="fa-brands fa-facebook text-blue-600 hover:cursor-pointer"></i>
          <i class="fa-brands fa-linkedin text-blue-400 hover:cursor-pointer"></i>
          <i class="fa-brands fa-discord text-purple-500 hover:cursor-pointer"></i>
          <i class="fa-brands fa-square-google-plus text-orange-500 hover:cursor-pointer"></i>
          </div>

        </div>
        <div className="image">
                <img src={image} className='image_new' alt="" width={1500} height={800} />
        </div>
    </div>
    
    
    </>
  )
}

export default Hero
