import hero from '../assets/images/hero.jpg'

export default function HeroSaved() {

    return (
        <section className='container mx-auto lg:mt-12 px-4 2xl:px-0'>
            <div className="rounded-3xl card-2 pt-14 min-h-[380px] lg:min-h-[500px] flex flex-col justify-end w-full">

                <div className="space-y-1 w-fit m-8 lg:m-14">
                    <div className='text-2xl lg:text-[48px] font-bold'>
                       All your saved content in one place.
                    </div>
                    <div className='text-xl lg:text-4xl'>
                        Found something interesting? It’s right here when you’re ready.
                    </div>
                </div>
            </div>
        </section>
    );
}
