import React from 'react';

import pro1 from '../../public/images/pro1.jpg';
import pro2 from '../../public/images/pro2.jpg';
import pro3 from '../../public/images/pro3.jpg';


function Projects() {
  return (
    <>
    
    <div className="container projects mt-20" id='projects'>
            <h1 className='text-center'><span className='text-yellow-500 font-bold text-5xl'>My </span><span className='text-white text-3xl font-bold'>Projects</span></h1>
            <div className="projects_main mt-10">
                <div className="pro_1">
                    <img src={pro1} className='img_pro' alt="" width={500} height={500} />
                    <a href="http://std1401788.aptech-students.com/" target='_blank'>
                    <p className='pro1_para text-white text-center mt-3 hover:underline'><span className='text-yellow-500 font-bold text-xl hover:cursor-pointer'>Liberty</span> Electronics</p>
                    </a>
                    {/* <a href="#" className='btn_pro  text-white'>Explore</a> */}
                </div>
                <div className="pro_2">
                    <img src={pro2} className='img_pro' alt="" width={500} height={500} />
                    <a href="https://site-spark-new.vercel.app/" target='_blank'><p className='pro1_para text-white text-center mt-3 hover:underline'><span className='text-yellow-500 font-bold text-xl hover:cursor-pointer'>Site</span> Spark</p></a>
                    {/* <a href="#" className='btn_pro text-white'>Explore</a> */}
                </div>
                <div className="pro_3">
                    <img src={pro3} className='img_pro' alt="" width={500} height={500} />
                   <a href="https://idyllic-cassata-8110d4.netlify.app" target='_blank'>
                   <p className='pro1_para text-white text-center mt-3 hover:underline'><span className='text-yellow-500 font-bold text-xl hover:cursor-pointer'>E</span>learning</p>
                   </a>
                    {/* <a href="#" className='btn_pro text-white'>Explore</a> */}
                </div>
            </div>
    </div>
    
    
    
    </>
  )
}

export default Projects
