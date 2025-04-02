import Footer from '../../components/Footer';
import Showcase from '../../components/Showcase';
import ScrollToTop from '../../components/ScrollToTop';
import IndustriesWrapper from '../../components/IndustriesPitch';
import PitchPointsWrapper from '../../components/PitchPoints';
import { IndustryWrapper } from '../../components/Section';
import { FeaturedProduct, VideoContent } from '../../components/Section';
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";
import { Tab, H1, H2, H3, H4, H5, H6, Paragraph, Button } from "../../components/Typography";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  const tailoredSoftwares = [
    'Prebuilt Software Solutions – Rapidly deploy ERP, CRM, CMS, TMS, LMS, and Media Solutions with seamless integration and minimal setup.',
    'Custom Software Development – Build hybrid or fully bespoke applications tailored to your workflows, industry challenges, and business growth.',
    'Intelligent Automation – Implement AI-driven custom workflows to optimize operations across industries.',
    'Seamless Integrations – Connect third-party services and platforms for a unified, efficient ecosystem.'
  ]

  return (
    <>
      {/* <main ref={scrollRef} data-scroll-container>
        <div data-scroll-section> */}
      <Showcase headerImg secondaryBtn supTitle={'We Build Solution for the industry'} />
      <IndustriesWrapper />

      <IndustryWrapper
        titleClassName='text-theme'
        title='Industries We Serve'
        subTitleClassName='w-full md:w-4/6 mb-46'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
        subTitle={`Every industry has unique challenges, and the right technology can be a game-changer. We provide tailored software solutions designed to enhance efficiency, automate critical processes, and drive business growth. Whether youre optimizing supply chains, managing properties, delivering education, or providing exceptional concierge services, our solutions are built to streamline operations and elevate performance.`}>
        <div className='mb-30'>
        <H2 className={`font-semibold text-left mb-8`}>Tailored Software Solutions for Every Business</H2>
          <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap ml-12 md:ml-32'>
            {tailoredSoftwares?.map((item, _index) => (
                <H6><span className='text-[#E95018] mr-6'>0{++_index}</span> {item}</H6>
            ))}
                    <Button className={`!bg-[#E95018] text-white w-fit !h-70 !text-md`}>Explore Our Products </Button>
          </section>
        </div>
      </IndustryWrapper>

      <PitchPointsWrapper />



      <FeaturedProduct
        title="Channel Partnerships"
        subTitle="Expand your business opportunities through our channel partnership program. By reselling our solutions, you can grow your presence in your verticals and offer your clients the very best in efficiency and automation."
        btnTitle="Get Started"
      />

      <FeaturedProduct
        title="Feature Products"
        containerClassName="!relative !bg-theme !pb-99"
        subTitle="Explore our suite of feature products, designed to bring automation and efficiency to the forefront of your operations:"
        featuredBlur="/assets/featured-blur.svg"
      />

      <VideoContent />
      <Footer />
      {/* </div>
      </main> */}
    </>
  );
};

export default Index;