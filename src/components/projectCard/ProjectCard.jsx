import React from 'react'
import course1 from "../../assets/images/course1.png"
import Chips from '../chips/Chips'
import { GoLocation } from 'react-icons/go'

const ProjectCard = ({ image, tags, name }) => {
    return (
        <>
            <div className='mt-9 w-full flex h-52 shadow-md '>
                <div className='ml-4'>
                    <img src={image} alt="..." />
                </div>
                <div className='flex flex-col w-full ml-3'>
                    <div className='flex w-auto'>
                        {tags?.map((item) => {
                            return (
                                <Chips name={item} className="bg-[#E7FFCD] border-none ml-5" />
                            )
                        })}
                    </div>
                    <div className='ml-5 mt-3'>
                        <span className='font-medium text-xl'>{name}</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <span className='ml-5 font-semibold text-base'>Black Mountain Architecture</span>
                            <span className='border-r-2 border-black ml-5'></span>
                            <div className='flex justify-center items-center ml-5'>
                                <GoLocation />
                                <span className='ml-2'>Bozeman, MT</span>
                            </div>
                            <span className='border-r-2 border-black ml-5'></span>
                            <div className='ml-5'>
                                <span className=''>$50-$65/hour</span>
                            </div>
                        </div>
                        <div className='mr-4'>
                            <span>Posted: 08/24/2022</span>
                        </div>
                    </div>
                    <span className='ml-5 mt-2 font-medium text-lg'>Skills Requirements</span>
                    <div className='flex w-full items-center justify-between'>
                        <div className='flex justify-center items-center'>
                            <Chips name="Rhino" className="bg-black border-none ml-5 text-white" />
                            <Chips name="Blender" className="bg-black border-none ml-5 text-white" />
                            <Chips name="Rhevit" className="bg-black border-none ml-5 text-white" />
                        </div>
                        <div className='flex items-center justify-center mr-5'>
                            <button className='bg-[#F26D5D] px-4 py-2 rounded-full text-white font-semibold'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard