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
        title={'Powerful Products, Built for Performance'}
        headerImgSrc={"/assets/header/Products.svg"}
        subTitle={'Explore Tetheree’s suite of modular, intelligent software solutions—designed to jumpstart development, accelerate workflows, and integrate seamlessly into your existing systems.'}
      />
      <div id="industries">
        <IndustryWrapper
          title='Flexible Deployment'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='We offer flexible software deployment options tailored to your business infrastructure and operational needs. Whether you require cloud-based accessibility, a scalable development platform, or full control over your data, we deliver robust, scalable, and adaptable solutions.'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[{ title: 'SaaS (Software as a Service)', description: 'Cloud-based solutions with minimal maintenance, ensuring seamless access and automatic updates.' }, { title: 'PaaS (Platform as a Service)', description: 'A scalable environment for businesses to build, customize, and deploy applications efficiently.' }, { title: 'On-Premise', description: 'Secure, in-house solutions for organizations that require complete data control and customization.' }]?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                  <H6 className='ml-28'>{item?.description}</H6>
                </div>
              ))}
            </section>
          </div>

          <H6>No matter your deployment needs, we provide future-proof solutions that align with your business model.</H6>
        </IndustryWrapper>

        <IndustryWrapper
          title='End-to-End Software Solutions'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='We specialize in building, supporting, extending, and maintaining software that drives efficiency and growth. Whether you need a new system, seamless integrations, or ongoing support, we ensure your technology works exactly as you need it to.'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[
                { title: 'ERP (Enterprise Resource Planning)', description: 'Unify your business operations with a comprehensive ERP system. Our solutions streamline finance, supply chain management, HR, and inventory tracking, providing real-time data insights to improve efficiency and decision-making.' },
                { title: 'CRM (Customer Relationship Management)', description: 'Strengthen customer relationships with a powerful CRM system. We help businesses track sales, automate marketing, manage customer interactions, and enhance service efficiency—ensuring long-term growth and customer satisfaction.' },
                { title: 'CMS (Content Management System)', description: 'Simplify digital content management with a secure, flexible CMS. Whether you need a website, media distribution platform, or internal knowledge base, we develop and maintain scalable CMS solutions tailored to your needs.' }
              ]?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                  <H6 className='ml-28'>{item?.description}</H6>
                </div>
              ))}
            </section>
          </div>

        </IndustryWrapper>

        <IndustryWrapper
          title='Media Asset Management (MAM)'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Streamline and centralize your digital media assets with an advanced Media Asset Management (MAM) system. Our solutions help media professionals organize, store, retrieve, and distribute digital content efficiently.'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[
                { title: 'Metadata-driven Search', description: 'Quickly locate assets using AI-powered metadata tagging and indexing.' },
                { title: 'Version Control & Collaboration', description: 'Manage multiple versions of assets while enabling seamless team collaboration.' },
                { title: 'Secure & Scalable Storage', description: 'Ensure safe, scalable, and structured storage for all your media assets.' }
              ]?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                  <H6 className='ml-28'>{item?.description}</H6>
                </div>
              ))}
            </section>
          </div>

          <H6>Whether you're managing video archives, broadcast content, or digital media libraries, our MAM solutions optimize workflows and enhance content lifecycle management.</H6>
        </IndustryWrapper>

        <IndustryWrapper
          title='Media Workflow Distribution'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle='Distribute media effortlessly with a customized Media Workflow Distribution system designed for broadcast, streaming, and digital publishing.'
        >
          <div className='mb-30'>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {[
                { title: 'Automated Workflow Pipelines', description: 'Reduce manual processes with intelligent automation from ingestion to delivery.' },
                { title: 'Multi-Platform Delivery', description: 'Seamlessly distribute content to OTT platforms, social media, and broadcasters.' },
                { title: 'Real-Time Monitoring & Analytics', description: 'Track performance and optimize distribution with detailed insights.' }
              ]?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                  <H6 className='ml-28'>{item?.description}</H6>
                </div>
              ))}
            </section>
          </div>

          <H6>From broadcasters and media houses to content creators and distributors, our Media Workflow Distribution solutions enable smooth, scalable, and efficient content delivery.</H6>
        </IndustryWrapper>
      </div>
      <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index
