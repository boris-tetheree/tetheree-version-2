import Link from 'next/link'
import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import { IndustryWrapper } from '../../components/Section';
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";
import { Tab, H1, H2, H3, H4, H5, H6, Paragraph, Button } from "../../components/Typography";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <>
    {/* <main ref={scrollRef} data-scroll-container>
      <div data-scroll-section> */}
        <Showcase
          primaryBtn={false}
          title={'Services'}
          subTitle={'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best. Our tailored efficiency solutions are designed to meet the unique needs of your business, integrating seamlessly with existing workflows and use cases. Harness the power of artificial intelligence to streamline operations across various platforms, including:'}
        />

<div id="industries">
      <IndustryWrapper
          title='Flexible Software Solutions – Prebuilt or Custom'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='We provide flexible software solutions tailored to your business needs—whether you require a ready-to-deploy system or a fully customized build. Our prebuilt software, available for licensing, delivers rapid deployment and immediate value using industry-proven platforms like ERP, CRM, CMS, TMS, and LMS.'
        >
          <H5 className='text-white'>For businesses with unique requirements, we develop custom software solutions that align with specific workflows, industry challenges, and growth objectives. Whether you're looking for a turnkey solution or a highly tailored system, our expertise ensures seamless implementation, scalability, and long-term success.</H5>
        </IndustryWrapper>

        <IndustryWrapper
          title='Prebuilt Software – Fast, Scalable, and Reliable'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Our prebuilt software solutions offer an efficient and cost-effective way to optimize business operations. Designed for immediate deployment, these platforms cover essential functions with minimal setup, seamless integration, and ongoing support.'
        >
          <H5 className='text-white mb-32'>With industry best practices built in, our solutions help businesses enhance efficiency, automate workflows, and scale confidently—without the complexities of custom development.</H5>
          <Button className={`!bg-[#E95018] text-white w-fit !h-70 !text-md`}>See Our Products</Button>
        </IndustryWrapper>

        <IndustryWrapper
          title='Custom Software – Tailored to Your Business'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Your business is unique, and your software should be too. We specialize in fully customized solutions that extend beyond traditional ERP, CRM, CMS, TMS, and LMS platforms. Whether you need a hybrid system, proprietary application, or automation-driven platform, we design, develop, and maintain software tailored to your exact needs.'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[{ title: 'Bespoke Development', description: 'Custom-built applications aligned with your workflows and objectives.' }, { title: 'Scalable Architecture', description: 'Solutions that evolve as your business grows.' }, { title: 'Seamless Integrations', description: 'Smooth connectivity with existing tools and third-party services.' }, { title: 'Future-Proof Technology', description: 'Modern frameworks and AI-driven automation for long-term efficiency.' }]?.map((item, _index) => (
                <section className='group bg-[#121212] border border-[#282828] flex flex-col lg:flex-row items-center justify-between gap-36 md:gap-99 px-24 md:px-72 pt-36 pb-70'>
                  <div className='flex flex-col md:flex-row items-start gap-18 md:gap-40 mb-8'>
                    <span className='block w-full md:w-auto !text-[#F3722C] text-24 font-normal text-center md:text-left mt-12'>0{++_index}</span>
                    <div >
                      <H3 className={'!font-semibold transition-all mb-24'}>{item?.title}</H3>
                      <H6>{item?.description}</H6>
                    </div>
                  </div>
                  <img className='w-full md:w-2/4 max-h-[302px] object-contain px-20 md:pr-0' src={`/assets/globe/Logistics.png`} alt="" />
                </section>
              ))}
            </section>
          </div>

          <H6>No matter the complexity or industry, we bring innovation, flexibility, and expert engineering to deliver solutions that make a real impact.</H6>
        </IndustryWrapper>

        <IndustryWrapper
          title='Hybrid Solutions – Custom Integrations for Existing Platforms'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Maximize the value of your existing systems with custom-built solutions that seamlessly integrate with industry-leading platforms like ERP, CRM, CMS, TMS, and LMS. Our hybrid approach allows you to enhance your current technology without a complete system overhaul.'
        >
          <H5 className='text-white mb-32'>From workflow automation and AI-driven insights to custom dashboards and specialized integrations, we extend the capabilities of your platforms while ensuring smooth interoperability.</H5>
          <H5 className='text-white mb-32'>With a hybrid solution, you get the best of both worlds—the stability of proven platforms and the flexibility of custom development, all working together to drive efficiency, innovation, and growth.</H5>
        </IndustryWrapper>
        </div>

        {/* <div className='relative bg-theme'>
            <div className="container relative z-10 flex flex-col px-20 mx-auto">
                <IndustryWrapper
                    titleClassName='text-theme'
                    containerClassName='!pt-26'
                    wrapperClassName='!bg-transparent'
                    btnClassName='bg-[#E95018] text-white uppercase md:h-72'
                >
                    <section className='flex items-baseline gap-16 flex-wrap mb-30'>
                        {['Enterprise Resource Planning', 'Customer Relationship Managment', 'Content Managment System', 'Transportation Managment System', 'Learning Managment System']?.map((item, _index) => {
                            let word = item?.trim()?.split(" ")
                            return (
                                <Tab key={_index} className={`${true && 'hover:!bg-[#E95018] hover:!text-white'}`}>
                                    <span>{word?.[0]}</span>
                                    <span>{word?.slice(1)?.join(" ")}</span>
                                </Tab>
                            )
                        })}
                    </section>
                    <div className='mb-[56px]'>
                        <H6 className='font-normal w-full text-left mb-30'>Additionally, we offer specialized platforms for diverse needs:</H6>
                        <section className='flex items-baseline gap-16 flex-wrap'>
                            {['Coaching Platform', 'Property Management Platform', 'Media Platform']?.map((item, _index) => (
                                <Tab key={_index} className={`${true && 'hover:!bg-[#E95018] hover:!text-white'}`}>
                                    <span>{item}</span>
                                </Tab>
                            ))}
                        </section>
                    </div>
                </IndustryWrapper>
                <section className='flex flex-col md:flex-row items-stretch justify-between gap-24 md:gap-36'>
                    {[
                        { title: 'Our values ​​and commitments', subTitle: 'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.' },
                        { title: 'Customized Automation', subTitle: 'Maximize the potential of industry-leading tools with our customized integration solutions. We help you make the most of whats available in the market by seamlessly' }
                    ]?.map((item, _index) => (
                        <div key={_index} className='bg-[#01000099] border border-[#5C5C5C] rounded-md pt-36 pb-26 px-42'>
                            <H4 className={`font-semibold text-left mb-13`}>{item?.title}</H4>
                            <Paragraph className={`font-normal w-full text-left mb-24`}>{item?.subTitle}</Paragraph>
                            <Button className='!bg-transparent text-white !h-60 lg:!h-72 uppercase md:!text-base !pl-0 pr-26 md:pr-36'>GET A QUOTE</Button>
                        </div>
                    ))}
                </section>
            </div>
            <img className="w-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 object-cover" src="/assets/about-us-blur.svg" alt="" />
        </div> */}
        <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index