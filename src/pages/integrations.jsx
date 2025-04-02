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
        title={'Customized Integrations'}
        subTitle={'Maximize the potential of industry-leading tools with our customized integration solutions. We help you make the most of whats available in the market by seamlessly incorporating leading technologies into your existing systems, complete with recognizable integration logos.'}
      />
      <div id="industries">
        <IndustryWrapper
          title='Seamless Integrations – Connect, Automate, and Scale'
          subTitleClassName='w-full md:w-4/6 font-semibold mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Unlock the Power of Seamless Connectivity'
        >

          <H6>Your business relies on multiple tools and platforms to operate efficiently—but managing disconnected systems can slow you down. Our integration solutions bring everything together, ensuring your existing workflows and custom-built solutions seamlessly connect with the third-party services you depend on. Whether you're using ERP, CRM, CMS, TMS, LMS, MAM, or media workflow systems, we help you integrate essential services to enhance efficiency, eliminate manual processes, and drive growth.</H6>
        </IndustryWrapper>

        <IndustryWrapper
          title='Why Integrate?'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Integrating third-party services into your workflows means:'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[{ title: 'Increased Efficiency', description: 'Automate data flow between platforms, reducing manual input and errors.' }, { title: 'Improved Accuracy', description: 'Sync real-time data across systems to ensure consistency and reliability.' }, { title: 'Scalability', description: 'Expand your business without worrying about disconnected systems slowing you down.' }, { title: 'Enhanced Customer Experience', description: 'Provide a seamless, unified experience across all touchpoints.' }, { title: 'Cost Savings', description: 'Reduce operational overhead by eliminating redundant processes.' }]?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='text-[#E95018] mr-6'>0{++_index}</span> {item?.title}</H4>
                  <H6>{item?.description}</H6>
                </div>
              ))}
            </section>
          </div>

          <H6>No matter your deployment needs, we provide future-proof solutions that align with your business model.</H6>
        </IndustryWrapper>

        <IndustryWrapper
          title='Integrate with Leading Platforms and Services'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='We enable secure, scalable, and intelligent integrations with a wide range of third-party services, including:'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[{ title: 'Business & Productivity Tools' }, { title: 'Communication & Collaboration' }, { title: 'Logistics & Supply Chain' }, { title: 'Education & Learning' }, { title: 'Media & Content Management' }, { title: 'AI & Automation Services' }]?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='text-[#E95018] mr-6'>0{++_index}</span> {item?.title}</H4>
                  <H6>{item?.description}</H6>
                </div>
              ))}
            </section>
          </div>

        </IndustryWrapper>

        <IndustryWrapper
          title='Custom Integrations for Your Unique Needs'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Beyond standard integrations, we develop custom API connections and middleware solutions to bridge disparate systems and create a unified, frictionless experience. Whether it’s:'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[{ title: 'Connecting legacy systems to modern platforms' }, { title: 'Building real-time data synchronization between applications' }, { title: 'Creating automated workflows that reduce manual tasks' }, { title: 'Integrating AI-driven analytics and insights into existing processes' }]?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='text-[#E95018] mr-6'>0{++_index}</span> {item?.title}</H4>
                  <H6>{item?.description}</H6>
                </div>
              ))}
            </section>
          </div>

          <H6>Our team ensures that your integrations work flawlessly and evolve with your business needs.</H6>
        </IndustryWrapper>

        <IndustryWrapper
          title='The Future of Integration – AI, Automation & Scalable Systems'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='We go beyond simple connectivity—we create intelligent, scalable integrations that leverage AI, automation, and predictive analytics to optimize your operations. From automated data processing to AI-driven insights, our integrations don’t just connect systems; they enhance and future-proof them.'
        >

        </IndustryWrapper>

        <IndustryWrapper
          title='Let’s Build Your Perfect Integration'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Whether you need to connect existing platforms or design custom integrations from scratch, we have the expertise to streamline your workflows, automate processes, and eliminate inefficiencies.'
        >

        </IndustryWrapper>
      </div>
      {/* <div id="integrations">
        <div className='relative'>
          <div className="relative">
            <IndustryWrapper
              title={false}
              subTitleClassName={'!text-center'}
              containerClassName={'max-w-full lg:max-w-[1000px] flex justify-center !mx-auto'}
              btnClassName='bg-[#E95018] text-white uppercase md:h-72'
            >
              <H2 className={`!text-center font-semibold mb-36`}>{'Customized Integrations'}</H2>

              <H6 className={'text-center mb-36 md:mb-55'}>Maximize the potential of industry-leading tools with our customized integration solutions. We help you make the most of what's available in the market by seamlessly incorporating leading technologies into your existing systems, complete with recognizable integration logos.</H6>

              <Link href={'/about-us'}>
                <Button className={'w-fit flex !bg-transparent text-white uppercase mx-auto'}>LEARN ABOUT US</Button>
              </Link>

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