import React from 'react'

function Form() {
  return (
    <>

      <div className="container form mt-20">
        <h1 className='text-center'><span className='text-yellow-500 text-5xl font-bold'>Leave </span><span className='text-white font-vold text-3xl'>Your Message</span></h1>
        <div className="main_form">
          <div className="first_row_input">
            <div>
              <input type="text" className=' input' placeholder='Your Name please' />
            </div>
            <div>
              <input type="text" className=' mx-2 input email' placeholder='Your Email please' />
            </div>
          </div>
          <div className="text_area">
            <textarea name="" className='message' id="" cols="76" rows="9" placeholder='What Do You Want ?'></textarea>
            <button className='btn-sub bg-yellow-500 text-black mt-5 '>Submit</button>
          </div>
        </div>

      </div>



    </>
  )
}

export default Form
