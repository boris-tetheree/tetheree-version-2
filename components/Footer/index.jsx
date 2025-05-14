import Link from 'next/link';
import { useState } from 'react';
import { H1, Button } from '../Typography';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const footerLinks = ['Services', 'Industries', 'Products', 'Automations', 'Integrations'];

    return (
        <footer className='relative bg-theme pt-72 md:pt-162 overflow-hidden'>
            <div className="container relative z-10 mx-auto px-20 md:px-24 lg:px-32 pb-42 md:pb-68">
                <div>
                    {/* Contact Section */}
                    <section className='w-full flex flex-col md:flex-row items-center gap-20 md:gap-42 mb-54 md:mb-20'>
                        <H1 className='text-white text-3xl md:text-4xl leading-tight mb-20 md:mb-0 whitespace-nowrap'>
                            Get in touch with us
                        </H1>

                        {/* Form in one row */}
                        <form 
                            onSubmit={handleSubmit} 
                            className='flex flex-col md:flex-row w-full md:items-center gap-12 md:gap-20'
                        >
                            <input 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className='flex-1 min-w-0 h-50 rounded-md text-[#D8D8D8] bg-white/10 px-16 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50'
                                type="text" 
                                placeholder='Your Name' 
                                required
                            />
                            <input 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className='flex-1 min-w-0 h-50 rounded-md text-[#D8D8D8] bg-white/10 px-16 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50'
                                type="email" 
                                placeholder='Your Email' 
                                required
                            />
                            <Button 
                                type="submit"
                                className='!w-fit !h-50 !bg-[#E95018] hover:!bg-[#d14815] text-white uppercase md:!text-2xs px-26 md:px-36 transition-colors duration-200'
                            >
                                Get Started
                            </Button>
                        </form>
                    </section>

                    {/* Footer Bottom Links */}
                    <div className="border-t border-white/20 pt-24 mt-24 flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex flex-wrap gap-12 justify-center md:justify-start">
                            {footerLinks.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-[#FAFAFA] hover:text-white text-sm font-normal hover:underline transition-colors duration-200"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="text-[#FAFAFA] text-sm font-normal text-center md:text-right">
                            © {new Date().getFullYear()} Tetheree. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
