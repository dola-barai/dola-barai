import Navbar from "../../components/Navbar/Navbar";
import { PiLinkedinLogo } from 'react-icons/pi';
import { Link } from "react-router-dom";

const SignUpPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-[#F0F1FF] ">
                <div className="hero-content flex-col">
                    <div className="bg-[#FFFFFF] w-[515px] h-[834px] rounded-[15px] my-6 px-6 py-[22px]" >
                        <div className="">
                            <h1 className="text-4xl font-semibold mb-7">Sign Up</h1>
                            <p className='text-xl mb-5'><span className="text-[#616161]">Already a member? </span><Link to='/login'><span className='font-semibold text-[#4A51FA] underline'>Login</span></Link></p>
                            <div className="flex gap-11">
                                <div>
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="text-base text-[#909090]">First Name</span>
                                        </label>
                                        <input type="text" className="input input-bordered -mt-2 w-[207px] h-[36px]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="text-base text-[#909090]">Last Name</span>
                                        </label>
                                        <input type="text" className="input input-bordered -mt-2 w-[214px] h-[36px]" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-control mb-8">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Email Address</span>
                                </label>
                                <input type="text" className="input input-bordered -mt-2 w-[464px] h-[36px]" />
                            </div>
                            <div className="form-control mb-8">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Current Job Role</span>
                                </label>
                                <select className="input input-bordered -mt-2 w-[464px] h-[36px]">
                                    <option selected value="grapefruit">Product Manager</option>
                                    <option value="grapefruit">Full Stack Developer</option>
                                    <option value="lime">Frontend Developer</option>
                                    <option  value="coconut">React Developer</option>
                                    <option value="mango">MERN Stack Developer</option>
                                </select>
                            </div>
                            <div className="form-control mb-24">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Set Password</span>
                                </label>
                                <input type="password" placeholder="• • • • • • •" className="input input-bordered -mt-2 w-[464px] h-[36px]" />
                            </div>
                            <div className=" ">
                                <Link to='/personal'><button className="w-[464px] h-[36px] bg-[#000AFF] text-white rounded-[8px] text-xl">Next</button></Link>
                            </div>
                            <div className="text-center my-4 text-2xl text-[#888888]">or</div>

                            <div className="mb-16">
                                <button className="btn w-[464px] bg-white font-normal text-center h-[48px] normal-case border-[#B6B6B6] border-[1px] text-[#B6B6B6] rounded-[8px] text-xl"><PiLinkedinLogo className="h-7 w-7" />Sign up with LinkedIn</button>
                            </div>
                            <p className="text-center text-[#888888] text-base">By signing up, you agree to our <span className="underline text-[#616161]">Terms and Conditions</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;