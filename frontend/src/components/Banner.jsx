import trophy from '../assets/Navbar/trophy.png'
import guarantee from '../assets/Navbar/guarantee.png'
import shipping from '../assets/Navbar/shipping.png'
import support from '../assets/Navbar/support.png'

function Banner(){
    return(
        <div className='w-full bg-[#FAF3EA] mt-20 py-16 px-4 grid grid-cols-1 gap-10 justify-items-center md:grid-cols-2 md:justify-items-center md:gap-6 md:px-6 lg:flex lg:gap-6 lg:justify-between lg:items-center lg:px-10 lg:py-20'>
            <div className='flex gap-4 justify-center items-center'>
                <img src={trophy} alt='quality' className='h-[45px] w-[45px]'/>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-2xl font-semibold lg:text-xl'>High Quality</h1>
                    <p className='text-[#898989] font-medium text-xl lg:text-[16px] '>Crafted from top materials</p>
                </div>
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <img src={guarantee} alt='quality' className='h-[45px] w-[45px]' />
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-2xl font-semibold lg:text-xl'>Warranty Protection</h1>
                    <p className='text-[#898989] font-medium text-xl lg:text-[16px]'>Over 2 years</p>
                </div>
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <img src={shipping} alt='quality' className='h-[45px] w-[45px]'/>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-2xl font-semibold lg:text-xl'>Free Shipping</h1>
                    <p className='text-[#898989] font-medium text-xl lg:text-[16px]'>Order over 150$</p>
                </div>
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <img src={support} alt='quality' className='h-[45px] w-[45px]'/>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-2xl font-semibold lg:text-xl'>24/7 Support</h1>
                    <p className='text-[#898989] font-medium text-xl lg:text-[16px]'>Dedicated Support</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;