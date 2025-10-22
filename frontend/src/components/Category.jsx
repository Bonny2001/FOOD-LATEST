import React from 'react'
import Button from './Button'

function Category() {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* First Col  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90
                    to-black/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div>
                            <div className='mb-4 '>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>Tasty</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Salmon Fish</p>
                                {/* <Button
                                text="Browser"
                                bgColor={"bg-primary"}
                                textColor={"text-white"}/> */}
                            </div>
                        </div>
                        <img src="fish.png" alt=""  className='w-[220px]  absolute bottom-0 -right-0 ' />
                    </div>


                    {/* Second Col */}
                    {/* <div className='py-10 pl-5 bg-gradient-to-br from-yellow-300/90
                        to-yellow-300/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400 text-gray-900'>Butter</p>
                                <p className='text-2xl font-semibold mb-[2px] text-gray-900'>Butter</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2 text-gray-900'>Paneer</p>
                                <Button
                                text="Browser"
                                bgColor={"bg-white"}
                                textColor={"text-yellow-600"}/>
                            </div>
                        </div>
                        <img src="curry.png" alt="" 
                         className='w-[180px]  absolute -right-0 lg:top-0 top-1' />
                    </div> */}
                         <div className='py-10 pl-5 bg-gradient-to-br from-yellow-300/90
                    to-yellow-300/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div>
                            <div className='mb-4 '>
                                <p className='mb-[2px] text-gray-800'>Enjoy</p>
                                <p className='text-2xl text-black  font-semibold mb-[2px]'>Butter</p>
                                <p className='text-4xl xl:text-5xl text-black  font-bold opacity-50 mb-2'>Paneer</p>
                                {/* <Button
                                 text="Browser"
                                bgColor={"bg-white"}
                                textColor={"text-yellow-600"}/> */}
                            </div>
                        </div>
                        <img src="curry.png" alt=""  className='w-[220px]  absolute bottom-0 -right-0 ' />
                    </div>


                    {/* Third COl  */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-red-500/90
                        to-red-500/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Double</p>
                                <p className='text-2xl font-semibold mb-[2px]'>Fried Egg</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Chicken Roll</p>
                                {/* <Button
                                text="Browser"
                                bgColor={"bg-white"}
                                textColor={"text-red-600"}/> */}
                            </div>
                        </div>
                        <img src="roll.png" alt="" 
                         className='w-[250px]  absolute top-1/2 -translate-y-1/2 -right-0' />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Category
