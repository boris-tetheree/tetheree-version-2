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
        title={'Custom Software Services That Drive Results'}
        headerImgSrc={"/assets/header/Services.svg"}
        subTitle={'From concept to deployment, we deliver tailored software solutions that connect your systems, automate your workflows, and scale with your business—powered by modern architecture and infused with AI.'}
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
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                  <H6 className='ml-28'>{item?.description}</H6>
                </div>
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
      <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index
