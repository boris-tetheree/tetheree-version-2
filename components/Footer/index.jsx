import Link from 'next/link';
import { useState } from 'react'
import Arrow from '../Typography/Arrow'
import { H1, H2, H4, H6, Button, Paragraph, Caption } from '../Typography'

const Index = ({ }) => {

    return (
        <footer className='relative bg-theme pt-72 md:pt-162 overflow-hidden'>
            <div className="container relative z-10 mx-auto px-20 md:px-24 lg:px-32 pb-42 md:pb-68">
                <div className=''>
                    <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-42 md:gap-99 mb-54 md:mb-20'>
                        <div>
                            <Link href={'/'}>
                                <img className="h-26 md:h-28 mb-20" src="/assets/svg/logo-nav.svg" alt="Logo" />
                            </Link>
                            <p className='text-[#FAFAFA] text-base font-normal mb-12'>We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.</p>
                        </div>
                        <div>
                            <H4 className={'block font-semibold mr-auto mb-20'}>important links</H4>
                            <ul className='grid grid-cols-2 md:block'>
                                {['Services', 'Industries', 'Products', 'Automation', 'Integration']?.map((item, _index) => (
                                    <li key={_index} className='text-[#FAFAFA] text-base font-normal transition-all cursor-pointer hover:underline mb-4'>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:col-span-2'>
                            <H1 className={'block mr-auto mb-30'}>Get in touch with us</H1>
                            <div className='flex flex-col justify-end'>
                                <div className='mb-20'>
                                    <input className='w-full h-40 sm:h-50 rounded-md text-[#D8D8D8] px-24' type="text" placeholder='Email address' />
                                </div>
                                <div className='mb-20'>
                                    <textarea className='w-full min-h-[120px] rounded-md text-[#D8D8D8] py-18 px-24' type="text" placeholder='Your message' />
                                </div>
                                <div className="flex">
                                        <Button className='!w-fit !bg-[#E95018] text-white !h-46 sm:!h-60 lg:!h-72 uppercase md:!text-2xs px-26 md:px-36 ml-auto'>Submit</Button>
                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* <img className="w-full absolute -bottom-2/4 -right-2/4 object-cover" src="/assets/about-us-blur.svg" alt="" /> */}
        </footer>
    )
}

export default Index;