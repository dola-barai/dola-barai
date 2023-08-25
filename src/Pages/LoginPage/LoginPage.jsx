import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { PiFacebookLogo, PiLinkedinLogo } from 'react-icons/pi';
import { TbBrandGoogle } from 'react-icons/tb';

const LoginPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-[#F0F1FF] pb-[80px]">
                <div className="hero-content flex-col">
                    <div className="bg-[#FFFFFF] w-[515px] h-[744px] rounded-[15px] my-12 px-6 py-[22px]" >
                        <div className="">
                            <h1 className="text-4xl font-semibold mb-8">Sign in</h1>
                            <p className='text-xl mb-6'><span className="text-[#616161]">New to LeanPrep? </span><Link to='/signup'><span className='font-semibold text-[#4A51FA] underline'>Signup</span></Link></p>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Email Address</span>
                                </label>
                                <input type="text" className="input input-bordered -mt-2 w-[464px] h-[36px]" />
                            </div>
                            <div className="form-control mb-8">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Password</span>
                                </label>
                                <input type="password" placeholder="• • • • • • •" className="input input-bordered -mt-2 w-[464px] h-[36px]" />
                            </div>
                            <div className=" ">
                                <Link to='/'><button className="w-[464px] h-[41px] bg-[#000AFF] text-white rounded-[8px] text-xl">Continue</button></Link>
                            </div>
                            <div className="text-center my-6 text-2xl text-[#888888]">or</div>
                            <div className="mb-6">
                                <button className="btn w-[464px] font-normal bg-white ps-[44px] h-[48px] normal-case border-[#B6B6B6] border-[1px] text-[#B6B6B6] rounded-[8px] text-xl"><PiFacebookLogo className="h-7 w-7" />Continue with Facebook</button>
                            </div>
                            <div className="mb-6">
                                <button className="btn w-[464px] font-normal bg-white ps-[24px] h-[48px] normal-case border-[#B6B6B6] border-[1px] text-[#B6B6B6] rounded-[8px] text-xl"><TbBrandGoogle className="h-7 w-7" />Continue with Google</button>
                            </div>
                            <div className="mb-12">
                                <button className="btn w-[464px] font-normal bg-white ps-[34px] h-[48px] normal-case border-[#B6B6B6] border-[1px] text-[#B6B6B6] rounded-[8px] text-xl"><PiLinkedinLogo className="h-7 w-7" />Continue with LinkedIn</button>
                            </div>
                            <p className="text-center text-[#888888] text-base">By signing up, you agree to our <span className="underline text-[#616161]">Terms and Conditions</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;