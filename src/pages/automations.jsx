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
        title={'Customized Automations'}
        subTitle={'Streamline your workflows with our fully customizable automation solutions. We automate and monitor tasks, ensuring efficiency at every step. From routine tasks to complex processes, our automation tools are designed to keep your business running smoothly and efficiently.'}
      />
      <div id="industries">
      <IndustryWrapper
          title='Customized Automation Workflows'
          subTitleClassName='w-full md:w-4/6 font-semibold mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Streamline, Optimize, and Automate Your Business Processes'
        >
          <H5 className='text-white'>Businesses rely on automation to eliminate inefficiencies, enhance accuracy, and drive productivity. We specialize in designing customized automation workflows tailored to your unique operations—whether in logistics, manufacturing, education, media, property management, coaching, or concierge services. By integrating automation into ERP, CRM, CMS, TMS, LMS, MAM, and media workflow systems, we help businesses operate smarter, faster, and with greater agility.</H5>
        </IndustryWrapper>

        <IndustryWrapper
          title='Automation That Works for You'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='No two businesses are alike, which is why we develop custom automation workflows that align with your specific needs. Our solutions are designed to:'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[{ title: 'Reduce Manual Work', description: 'Automate repetitive tasks, freeing up your team for higher-value work.' }, { title: 'Improve Accuracy & Compliance', description: 'Eliminate human errors and ensure adherence to business rules.' }, { title: 'Enhance Efficiency', description: 'Streamline workflows, accelerate turnaround times, and reduce costs.' }, { title: 'Seamlessly Integrate with Your Systems',  description: 'Connect automation with your existing software for end-to-end efficiency.'}, , { title: 'Scale with Your Business',  description: 'Flexible and adaptable workflows that evolve with your operations.'}]?.map((item, _index) => (
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

        </IndustryWrapper>

        <IndustryWrapper
          title='The Future of Automation – AI-Driven & Scalable'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='We don’t just automate workflows—we create intelligent, adaptive systems that use AI, machine learning, and predictive analytics to optimize operations. Whether its AI-powered demand forecasting in logistics, automated compliance tracking in property management, or smart content workflows in media, we ensure your business stays ahead of the curve.'
        >
        </IndustryWrapper>

        <IndustryWrapper
          title='Let’s Build Your Custom Automation Workflow'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='From streamlining internal processes to enhancing customer experiences, our automation solutions are designed to fit your business like a glove. Tell us your challenges, and we’ll build the right automation workflow to solve them.'
        >
        </IndustryWrapper>
        </div>

      {/* <div id="automations">
        <div className='relative'>
          <div className="relative">
            <IndustryWrapper
              title={false}
              subTitleClassName={'!text-center'}
              containerClassName={'max-w-full lg:max-w-[1000px] flex justify-center !mx-auto'}
              btnClassName='bg-[#E95018] text-white uppercase md:h-72'
            >
              <H2 className={`!text-center font-semibold mb-36`}>Customized Automations</H2>

              <H6 className={'text-center mb-36 md:mb-55'}>Streamline your workflows with our fully customizable automation solutions. We automate and monitor tasks, ensuring efficiency at every step. From routine tasks to complex processes, our automation tools are designed to keep your business running smoothly and efficiently.</H6>

              <Link href={'/about-us'}>
                <Button className={'w-fit flex !bg-transparent text-white uppercase mx-auto'}>LEARN ABOUT US</Button>
              </Link>
            </IndustryWrapper>

            <IndustryWrapper
              titleClassName='text-theme !text-center mb-36'
              title='Industries'
              subTitleClassName={'!text-center'}
              containerClassName={'max-w-full lg:max-w-[1000px] flex justify-center !mx-auto -mt-36'}
              subTitle='Our automation solutions are tailor-made for a variety of industries, ensuring that you get the most out of your operations:'
              btnClassName='bg-[#E95018] text-white uppercase md:h-72'
            >
              <div className=''>
                <section className='flex items-stretch justify-center gap-16 flex-wrap lg:flex-nowrap mx-auto mb-99'>
                  {['Supply Chain', 'Media', 'Coaching', 'Education']?.map((item, _index) => (
                    <Tab key={_index} className={`!min-w-[240px] ${false && '!bg-[#E95018] !border-white !text-white'} !h-auto flex-grow hover:!bg-[#E95018] hover:!border-white hover:!text-white pt-40 pb-26`}>
                      <img className='mb-24' src={`/assets/industries/industry-${++_index}.svg`} alt="" />
                      <span className={`text-[#FAFAFA] font-normal text-center text-md`}>{item}</span>
                    </Tab>
                  ))}
                </section>
              </div>
            </IndustryWrapper>

            <div className='bg-theme w-full pb-99'>
              <div className='w-[320px] flex h-1 bg-[#E95018] mx-auto' />
            </div>
          </div>
          <img className='absolute top-0 left-2/4 -translate-x-2/4 pointer-events-none' src="/assets/homepage-tabs-blur.svg" alt="" />
        </div>
      </div> */}
      <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index