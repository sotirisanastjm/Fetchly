import image1 from '../assets/images/article1.png'
import image2 from '../assets/images/filtering.png'
import image3 from '../assets/images/save.png'
import Image from 'next/image';


export default function BlockInfo() {

    return (
        <section className='container mx-auto px-4 2xl:px-0 flex flex-col gap-8'>
            <div className='lg:w-[70%] text-center lg:text-left space-y-2'>
                <h2 className='text-2xl lg:text-4xl font-bold'>Built for Devs.</h2>
                {/* <div className='text-xl lg:text-2xl text-gray-400'>Only the latest. Always relevant.</div> */}
            </div>
            <div className="grid grid-cols-1 lg:justify-items-center lg:grid-cols-3 gap-8">
                <div className="rounded-3xl card-1 pt-14 min-h-[400px] lg:min-h-[300px] flex flex-col justify-end text-center w-full">
                    <Image
                        src={image1}
                        alt="Real-Time Articles"
                        width={192}
                        height={192}
                        className="w-32 lg:w-48 h-32 py-2 lg:h-48 mb-auto self-center"
                    />

                    <div className="space-y-1 h-fit lg:h-full w-full px-4 lg:px-12 pb-12 pt-8 bg-black/30 backdrop-blur-2xl rounded-t-4xl rounded-b-3xl">
                        <h3 className='text-2xl lg:text-3xl font-bold'>Real-Time Articles</h3>
                        <div className='text-lg lg:text-xl'>Fetched straight from DEV.to — always up to date, always developer-first.</div>
                    </div>
                </div>
                <div className="rounded-3xl card-2 pt-14 min-h-[400px] lg:min-h-[300px] flex flex-col justify-end text-center w-full">
                    <Image
                        src={image2}
                        alt="Smart Filters"
                        width={192}
                        height={192}
                        className="w-32 lg:w-48 h-32 py-2 lg:h-48 mb-auto self-center"
                    />

                    <div className="space-y-1 h-fit lg:h-full w-full px-4 lg:px-12 pb-12 pt-8 bg-black/30 backdrop-blur-2xl rounded-t-4xl rounded-b-3xl">
                        <h3 className='text-2xl lg:text-3xl font-bold'>Tailored Feeds</h3>
                        <div className='text-lg lg:text-xl'>Your tech stack, your stories — no noise.</div>
                    </div>
                </div>
                <div className="rounded-3xl card-3 pt-14 min-h-[400px] lg:min-h-[300px] flex flex-col justify-end text-center w-full">
                    <Image
                        src={image3}
                        alt="Smart Filters"
                        width={192}
                        height={192}
                        className="w-32 lg:w-48 h-32 py-2 lg:h-48 mb-auto self-center"
                    />

                    <div className="space-y-1 h-fit lg:h-full w-full px-4 lg:px-12 pb-12 pt-8 bg-black/30 backdrop-blur-2xl rounded-t-4xl rounded-b-3xl">
                        <h3 className='text-2xl lg:text-3xl font-bold'>Save for Later</h3>
                        <div className='text-lg lg:text-xl'>Found something interesting? Bookmark any article and come back anytime — no rush.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}