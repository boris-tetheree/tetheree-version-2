import { Tab, H6, H3, Button } from "../Typography";
import { PitchPoint } from '../../components/Section'

const Index = () => {
    const icons = [
        {
            id: 0,
            left: 'points/left/promotions.svg',
            middle: 'points/middle/promotions.svg',
            right: 'points/right/promotions.svg',
        },
        {
            id: 1,
            left: 'points/left/guidance.svg',
            middle: 'points/middle/guidance.svg',
            right: 'points/right/guidance.svg',
        },
        {
            id: 2,
            left: 'points/left/collaboration.svg',
            middle: 'points/middle/collaboration.svg',
            right: 'points/right/collaboration.svg',
        },
        {
            id: 3,
            left: 'points/left/logistics.svg',
            middle: 'points/middle/logistics.svg',
            right: 'points/right/logistics.svg',
        },
        {
            id: 4,
            left: 'points/left/sales.svg',
            middle: 'points/middle/sales.svg',
            right: 'points/right/sales.svg',
        }
    ]


    return (
        <div className="bg-theme relative z-10 pb-99">
            <PitchPoint
                number='01'
                title='Logistics & Supply Chain'
                subTitle='AI-powered tracking, inventory automation, and data-driven efficiency.'
                icons={icons?.[0]}
            />

            <PitchPoint
                number='02'
                titleClassName='text-theme'
                title='Manufacturing'
                subTitle='Smart factory automation and real-time monitoring for optimized production.'
                icons={icons?.[1]}
            />

            <PitchPoint
                number='03'
                title='Education & Coaching '
                subTitle='LMS platforms, e-learning automation, and student engagement tools.'
                icons={icons?.[2]}
            />

            <PitchPoint
                number='04'
                title='Property Management'
                subTitle='Automated lease tracking, rent collection, and financial management.'
                icons={icons?.[3]}
            />

            <PitchPoint
                number='05'
                title='Eco Travel & Concierge'
                subTitle='Smart booking management and seamless customer interactions.'
                icons={icons?.[4]}
            />


            <PitchPoint
                number='06'
                title='Media & Content Management'
                subTitle='MAM, media workflow automation, and multi-platform distribution.'
                icons={icons?.[4]}
            />

            <div className="w-full flex justify-center mx-auto mt-36">
                <Button className={`!bg-[#E95018] text-white w-fit !h-70 !text-md -ml-12 md:-ml-32`}>Discover Industry Solutions </Button>
            </div>

        </div>
    )
}

export default Index;