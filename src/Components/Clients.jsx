import React from 'react'
import microsoft from '../../public/images/microsoft.png';
import google from '../../public/images/google.png';
import netflix from '../../public/images/netflix.png';
import uber from '../../public/images/uber.png';



function Clients() {
    return (
        <>

            <div className="container clients mt-20">
                <h1 className='text-center'><span className='text-yellow-500 font-bold text-5xl'>C</span><span className='text-white text-2xl font-bold'>lients</span></h1>
                <p className='text-white text-center mt-3 font-bold'>That's Our Company <span className='text-yellow-500 font-bold'>Clients</span> we will work with these Company</p>

                <div className="clients_main mt-10">
                    <div className='microsoft client_img'>
                        <img src={microsoft} alt="" width={200} height={200} />
                    </div>
                    <div className='google client_img'>
                        <img src={google} alt="" width={200} height={200} />

                    </div>
                    <div className='netflix client_img'>
                        <img src={netflix} alt="" width={200} height={200} />

                    </div>
                    <div className='uber client_img'>
                        <img src={uber}  alt="" width={200} height={200} />

                    </div>
                </div>


            </div>




        </>
    )
}

export default Clients
