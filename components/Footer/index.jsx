import Link from 'next/link';
import { useState } from 'react'
import Arrow from '../Typography/Arrow'
import { H1, H2, H4, H6, Button, Paragraph, Caption } from '../Typography'

const Index = ({ }) => {

    return (
        <footer className='relative bg-theme pt-72 md:pt-162 overflow-hidden'>
            <div className="container relative z-10 mx-auto px-20 md:px-24 lg:px-32 pb-42 md:pb-68">
                <div>
                    <section className='w-full grid grid-cols-1 md:grid-cols-2 items-start gap-42 md:gap-99 mb-54 md:mb-20'>
                        
                        {/* Left Side: Logo + Small Paragraph */}
                        <div className="flex flex-col justify-start">
                            <Link href={'/'}>
                                <img className="h-26 md:h-28 mb-20" src="/assets/svg/logo-nav.svg" alt="Logo" />
                            </Link>
                            <p className='text-[#FAFAFA] text-base font-normal'>
                                We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.
                            </p>
                        </div>

                        {/* Right Side: Heading + Contact Form */}
                        <div className="flex flex-col justify-start w-full">
                            {/* Heading Outside Background */}
                            <H1 className='block mr-auto mb-30 text-white'>Get in touch with us</H1>

                            {/* Background Card only around Form */}
                            <div className="w-full h-full bg-[#b7b7b921] rounded-3xl p-20 md:px-20 md:py-20 flex flex-col">
                                <div className='flex flex-col'>
                                <div className='flex flex-col justify-end'>
                                <div className="grid grid-cols-2 gap-12">
                                    <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s your name?</label>
                                        <input className='w-full h-40 sm:h-50 rounded-md text-[#D8D8D8] px-24' type="text" placeholder='Type your full name' />
                                    </div>
                                    <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s your email?</label>
                                        <input className='w-full h-40 sm:h-50 rounded-md text-[#D8D8D8] px-24' type="text" placeholder='Type your main email' />
                                    </div>
                                </div>
                                <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s services are you looking for?</label>
                                        <input className='w-full h-40 sm:h-50 rounded-md text-[#D8D8D8] px-24' type="text" placeholder='Type your service name' />
                                    </div>
                                  
                                    <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s your budget for this project?</label>
                                        <textarea className='w-full min-h-[120px] rounded-md text-[#D8D8D8] py-18 px-24' type="text" placeholder='Tell us about your Project' />
                                    </div>
                                    <div className="flex">
                                        <Button className='!w-fit !bg-[#E95018] text-white !h-46 sm:!h-60 lg:!h-72 uppercase md:!text-2xs px-26 md:px-36 ml-auto'>Get Started</Button>
                                    </div>
                                    </div>
                                    
                                  
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/20 pt-24 mt-24 flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex flex-wrap gap-12">
                            {/* Important Links here */}
                            {['Services', 'Industries', 'Products', 'Automations', 'Integrations']?.map((link, index) => (
                                <Link key={index} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <span className="text-[#FAFAFA] text-sm font-normal cursor-pointer hover:underline">{link}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="text-[#FAFAFA] text-sm font-normal text-center md:text-right">
                            © 2025 Tetheree. All rights reserved.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Index;
