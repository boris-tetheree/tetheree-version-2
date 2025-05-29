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
      title: '123123123 Prebuilt Software Solutions',
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
      <Showcase headerImg secondaryBtn supTitle={'We Build Solution for the industry'} />

      <IndustryWrapper
        titleClassName='text-theme'
        title='Transform. Automate. Scale'
        subTitleClassName='w-full  mb-32 lg:mb-40'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
        subTitle={`Organizations need powerful, adaptable, and scalable software solutions to stay ahead. We specialize in custom and prebuilt software, automation workflows, and seamless integrations that streamline operations, eliminate inefficiencies, and drive business growth. Whether you need an industry-proven solution or a fully customized platform, we have the expertise to deliver technology that works for your business.`}>
        <div className='mb-20 lg:mb-28'>
          <H2 className={`font-semibold text-left mb-16`}>Tailored Software Solutions for Every Business</H2>
          <section className='w-full lg:w-4/6 flex flex-col items-stretch gap-12 lg:gap-16 flex-wrap xl:flex-nowrap  md:ml-20'>
            {tailoredSoftwares?.map((item, _index) => (
              <div className='mb-12 md:mb-16'>
                <H4 className={'!font-semibold mb-16'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                <H6 className='ml-28'>{item?.description}</H6>
              </div>

              
            ))}

            
            <Button onClick={() => router.push('/services')} className={`!bg-[#E95018] text-white w-fit !h-70 !text-md -ml-12 md:-ml-20`}>Explore Our Services </Button>
          </section>

          
        </div>
      </IndustryWrapper>

      

  

      <IndustryWrapper
        titleClassName='text-theme'
        title='Solutions Built for Your Industry'
        subTitleClassName='w-full  mb-32 lg:mb-40'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
        subTitle={`We develop, integrate, and maintain scalable, future-proof solutions for businesses across industries:`}>
        <section className='w-full lg:w-4/6 flex flex-col items-stretch gap-12 lg:gap-16 flex-wrap xl:flex-nowrap ml-12 md:ml-20'>
          {pitchPoints?.map((item, _index) => (
            <div className='mb-12 md:mb-16'>
              <H4 className={'!font-semibold mb-16'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
              <H6 className='ml-28'>{item?.description}</H6>
            </div>
          ))}
          <Button onClick={() => router.push('/industries')} className={`!bg-[#E95018] text-white w-fit !h-70 !text-md -ml-12 md:-ml-20`}>Discover Industry Solutions </Button>
        </section>
      </IndustryWrapper>

    

        <div className="bg-[#121212] py-50 mt-50 mb-50">
          <div className="container mx-auto px-20 md:px-32">
            <FeaturedProduct
              containerClassName=""
              titleClassName='text-theme text-left mb-10'
              title="Future-Ready Software: Built for Growth"
              subTitle="We offer SaaS, PaaS, and on-premise deployments, ensuring your software adapts to your infrastructure and operational needs. Whether you're launching a new solution, scaling an enterprise system, or modernizing legacy software, we provide the technology and expertise to drive efficiency, innovation, and competitive advantage."
              btnTitle="Explore Our Products"
            />
          </div>
        </div>




          

      
<IndustryWrapper
  titleClassName='text-theme text-left mb-10'
  title='Next-Level Automation & Integrations'
  subTitleClassName='text-left w-full mb-[50px]'
  subTitle='Future-focused automation and integration solutions that streamline operations, eliminate repetitive tasks, and connect your tech stack into one seamless experience.'
  btnClassName=''>

<section className='grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-36'>
  {[{
    title: 'Intelligent Automation',
    subTitle: 'Tetheree helps you streamline operations with smart, scalable automation. Free your team from repetitive tasks and unlock new levels of speed, precision, and insight.',
    bullets: [
      'Customized Workflows – Automate repetitive tasks to improve accuracy and efficiency across all functions.',
      'AI-Powered Insights – Apply machine learning for predictive analytics, smart data handling, and continuous optimization.',
      'Operational Agility – Respond faster with systems that adapt in real time to business needs.'
    ],
    link: '/automations' // ✅ Add link for automation
  }, {
    title: 'Seamless Integrations',
    subTitle: ' We connect the tools you already use—along with any custom platforms—into one cohesive digital ecosystem. No silos. No friction. Just flow.',
    bullets: [
      'Third-Party Services – Integrate with CRMs, ERPs, cloud platforms, and more.',
      'Enterprise Software – Connect legacy systems with modern tools for uninterrupted operations.',
      'Scalable Architecture – Build a foundation that grows with your business.'
    ],
    link: '/integrations' // ✅ Add link for integration
  }].map((item, _index) => (
    <div key={_index} className='bg-[#01000099] border border-[#5C5C5C] rounded-md pt-36 pb-26 px-42 flex flex-col h-full text-left'>
      <H4 className='font-semibold mb-13'>{item?.title}</H4>
      <Paragraph className='font-normal mb-16'>{item?.subTitle}</Paragraph>
      <ul className='list-disc pl-20 text-white mb-24'>
        {item.bullets.map((bullet, i) => (
          <li key={i} className='mb-6'>{bullet}</li>
        ))}
      </ul>
      <div className='text-left'>
        <Button
          onClick={() => router.push(item.link)}
          className='!bg-transparent text-white !h-60 lg:!h-72 uppercase md:!text-base !pl-0 pr-26 md:pr-36'
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  ))}
</section>

</IndustryWrapper>




      

      <Footer />
    </>
  );
};

export default Index;
