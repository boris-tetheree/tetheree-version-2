import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Showcase from '../../components/Showcase';
import ScrollToTop from '../../components/ScrollToTop';
import ValuesCommitments from '../../components/ValuesCommitments'
import IndustriesWrapper from '../../components/IndustriesPitch';
import PitchPointsWrapper from '../../components/PitchPoints';
import { IndustryWrapper } from '../../components/Section';
import { FeaturedProduct, VideoContent } from '../../components/Section';
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";
import { Tab, H1, H2, H3, H4, H5, H6, Paragraph, Button } from "../../components/Typography";

const Index = () => {
  const router = useRouter();
  const { scrollRef } = useLocomotiveScroll();

  const tailoredSoftwares = [
    {
      title: 'Prebuilt Software Solutions',
      description: 'Rapidly deploy ERP, CRM, CMS, TMS, LMS, and Media Solutions with seamless integration and minimal setup.'
    },
    {
      title: 'Custom Software Development',
      description: 'Build hybrid or fully bespoke applications tailored to your workflows, industry challenges, and business growth.'
    },
    {
      title: 'Intelligent Automation',
      description: 'Implement AI-driven custom workflows to optimize operations across industries.'
    },
    {
      title: 'Seamless Integrations',
      description: 'Connect third-party services and platforms for a unified, efficient ecosystem.'
    }
  ];

  const pitchPoints = [
    {
      title: 'Logistics & Supply Chain',
      description: 'AI-powered tracking, inventory automation, and data-driven efficiency.'
    },
    {
      title: 'Manufacturing',
      description: 'Smart factory automation and real-time monitoring for optimized production.'
    },
    {
      title: 'Education & Coaching',
      description: 'LMS platforms, e-learning automation, and student engagement tools.'
    },
    {
      title: 'Property Management',
      description: 'Automated lease tracking, rent collection, and financial management.'
    },
    {
      title: 'Eco Travel & Concierge',
      description: 'Smart booking management and seamless customer interactions.'
    },
    {
      title: 'Media & Content Management',
      description: 'MAM, media workflow automation, and multi-platform distribution.'
    }
  ];

  return (
    <>
      {/* <main ref={scrollRef} data-scroll-container>
        <div data-scroll-section> */}
      <Showcase headerImg secondaryBtn supTitle={'We Build Solution for the industry'} />
      {/* <IndustriesWrapper /> */}

      <IndustryWrapper
        titleClassName='text-theme'
        title='Transform. Automate. Scale'
        subTitleClassName='w-full lg:w-4/6 mb-72 lg:mb-136'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
        subTitle={`Organizations need powerful, adaptable, and scalable software solutions to stay ahead. We specialize in custom and prebuilt software, automation workflows, and seamless integrations that streamline operations, eliminate inefficiencies, and drive business growth. Whether you need an industry-proven solution or a fully customized platform, we have the expertise to deliver technology that works for your business.`}>
        <div className='mb-30 lg:mb-46'>
          <H2 className={`font-semibold text-left mb-20`}>Tailored Software Solutions for Every Business</H2>
          <section className='w-full lg:w-4/6 flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap ml-12 md:ml-32'>
            {tailoredSoftwares?.map((item, _index) => (
              <div className='mb-20 md:mb-32'>
                <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                <H6 className='ml-28'>{item?.description}</H6>
              </div>
            ))}
            <Button onClick={() => router.push('/products')} className={`!bg-[#E95018] text-white w-fit !h-70 !text-md -ml-12 md:-ml-32`}>Explore Our Products </Button>
          </section>
        </div>
      </IndustryWrapper>

      <br />
      <br />
      <br />

      <IndustryWrapper
        titleClassName='text-theme'
        title='Solutions Built for Your Industry'
        subTitleClassName='w-full lg:w-4/6 mb-46'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
        subTitle={`We develop, integrate, and maintain scalable, future-proof solutions for businesses across industries:`}>
        <section className='w-full lg:w-4/6 flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap ml-12 md:ml-32'>
          {pitchPoints?.map((item, _index) => (
            <div className='mb-20 md:mb-32'>
              <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
              <H6 className='ml-28'>{item?.description}</H6>
            </div>
          ))}
          <Button onClick={() => router.push('/industries')} className={`!bg-[#E95018] text-white w-fit !h-70 !text-md -ml-12 md:-ml-32`}>Discover Industry Solutions </Button>
        </section>
      </IndustryWrapper>

      <FeaturedProduct
        title="Future-Ready Software: Built for Growth"
        subTitle="We offer SaaS, PaaS, and on-premise deployments, ensuring your software adapts to your infrastructure and operational needs. Whether you're launching a new solution, scaling an enterprise system, or modernizing legacy software, we provide the technology and expertise to drive efficiency, innovation, and competitive advantage."
        btnTitle="Explore Our Products"
      />

      <IndustryWrapper
        titleClassName='text-theme'
        title='Next-Level Automation & Integrations'
        subTitleClassName='w-full lg:w-4/6 mb-46'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'>
        <section className='w-full lg:w-4/6 flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap ml-12 md:ml-32'>
          {[{ title: 'Customized Workflows', subTitle: 'Automate repetitive tasks, enhance accuracy, and improve efficiency across all business functions.' }, { title: 'Seamless Integrations', subTitle: 'Connect existing tools, enterprise software, and third-party services to create a frictionless, scalable system.' }, { title: 'AI-Powered Insights', subTitle: 'Leverage AI-driven automation for predictive analytics, smart data processing, and workflow optimization.' }]?.map((item, _index) => (
            <div className='mb-20 md:mb-32'>
              <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
              <H6 className='ml-28'>{item?.subTitle}</H6>
            </div>
          ))}
        </section>
      </IndustryWrapper>

      <Footer />
      {/* </div>
      </main> */}
    </>
  );
};

export default Index;
