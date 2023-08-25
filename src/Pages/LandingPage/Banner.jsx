import { Link } from 'react-router-dom';
import './LandingPage.css'
import vector from './../../assets/Vector.svg'
import vector1 from './../../assets/Vector1.svg'
import blob from './../../assets/blob (1) 1.svg'
const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <div className='text-[#6A70FC] w-[461px] h-[278px] rotate-[-180°] absolute left-0 top-0'>
                    <img src={vector} alt="" />
                </div>
            </div>
            <div className="hero py-[160px]">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl">Don't let nerves get the best of you – <br />
                            <span className="font-semibold mt-1">practice makes perfect!</span></h1>
                        <p className="py-16 px-28 text-2xl">Welcome to <span className="font-semibold">LeanPrep!</span> The ultimate destination for honing your interview skills. Whether you're a
                            fresh graduate, career changer, or seasoned professional, we've got you covered. Our
                            <span className="font-semibold"> comprehensive library</span> of mock interview questions and <span className="font-semibold">expert tips</span> will help you <span className="font-semibold">ace any job interview.</span> </p>
                        <button className="button-join normal-case text-2xl text-white mb-3 bg-[#000AFF]">Join our Program</button>
                        <p className='text-2xl'>Already a memeber? <Link to='/login'><span className='font-semibold underline'>Login</span></Link></p>
                    </div>

                </div>
            </div>

            <div className='relative'>
            <div className='absolute right-0 bottom-0'>
                    <img src={blob} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;