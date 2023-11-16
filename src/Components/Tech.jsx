import React from 'react'
import { FaReact } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';

import { FaHtml5 } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";

import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Tech() {
    return (
        <>

            <div className="container tech mt-20" id='tech'>
                <h1 className='text-center tech_heading'><span className='text-yellow-500 font-bold text-4xl'>I Have </span><span className='text-white font-bold text-2xl'>a Great Knowlage About</span></h1>
                <p className='text-center tech_pra text-white mt-2 text-sm'>That's my <span className='text-yellow-500 font-bold text-md'>Skills</span> I'll be used all this technologies During my projects.</p>

                <div className="technolo mt-12">
                    <div className="row">
                        <div>
                            <FaReact className='text-white icon_new text-5xl font-bold mx-20 react' />
                            <p className='text-center text-white font-bold mt-2 hover:cursor-pointer hover:text-yellow-300'>React</p>
                        </div>
                        <div>
                            <FaHtml5 className='text-white icon_new html text-5xl font-bold mx-20' />
                            <p className='text-center text-white font-bold mt-2 hover:cursor-pointer hover:text-yellow-300'>Html</p>

                        </div>
                        <div>
                            <FaCss3Alt className='text-white icon_new css text-5xl font-bold mx-20 ' />
                            <p className='text-center text-white font-bold mt-2 hover:cursor-pointer hover:text-yellow-300'>Css</p>

                        </div>
                    </div>

                    <div className="row mt-10">
                        <div>
                            <SiMysql className='text-white sql icon_new text-5xl font-bold mx-20 text-blue-500' />
                            <p className='text-center text-white font-bold mt-2 hover:cursor-pointer hover:text-yellow-300'>MySQL</p>
                        </div>
                        <div>
                            <IoLogoJavascript className='text-white js icon_new text-2xl font-bold mx-20 text-yellow-500' />
                            <p className='text-center text-white font-bold mt-2 hover:cursor-pointer hover:text-yellow-300'>JavaScript</p>

                        </div>
                        <div>
                            <FaLaravel className='text-white js icon_new text-2xl font-bold mx-20 text-red-500 laravel' />
                            <p className='text-center text-white font-bold mt-2 hover:cursor-pointer hover:text-yellow-300'>Laravel</p>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Tech
