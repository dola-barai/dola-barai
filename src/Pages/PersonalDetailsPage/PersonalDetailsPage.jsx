import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { PiLinkedinLogo } from 'react-icons/pi';

const PersonalDetailsPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-[#F0F1FF] ">
                <div className="hero-content flex-col">
                    <div className="bg-[#FFFFFF] w-[515px] h-[834px] rounded-[15px] my-6 px-6 py-[22px]" >
                        <div className="">
                            <h1 className="text-4xl font-semibold mb-7">Personal Details</h1>
                            <p className='text-base mb-5'><span className="text-[#616161]">We need a few more details to complete the sign up process</span></p>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Language Preferences </span>
                                </label>
                                <select className="input input-bordered -mt-2 w-[464px] h-[36px]">
                                    <option selected value="grapefruit">Select</option>
                                    <option value="grapefruit">English</option>
                                    <option value="lime">Bangla</option>
                                    <option value="coconut">Hindi</option>
                                    <option value="mango">French</option>
                                </select>
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Birth Date</span>
                                </label>
                                <input type="date" placeholder="" className="input input-bordered -mt-2 w-[464px] h-[36px]" />
                            </div>
                            <div className="form-control mb-6">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Target Job/Industry</span>
                                </label>
                                <select className="input input-bordered -mt-2 w-[464px] h-[36px]">
                                    <option selected value="grapefruit">Select</option>
                                    <option value="grapefruit">IT</option>
                                    <option value="lime">Software Industry</option>
                                    <option value="coconut">Education</option>
                                    <option value="mango">E-Commerce</option>
                                </select>
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Education level</span>
                                </label>
                                <select className="input input-bordered -mt-2 w-[464px] h-[36px]">
                                    <option selected value="grapefruit">Select</option>
                                    <option value="grapefruit">MSc</option>
                                    <option value="lime">BSc</option>
                                    <option value="coconut">HSC</option>
                                    <option value="mango">SSC</option>
                                </select>
                            </div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="text-base text-[#909090]">Preferred Interview mode </span>
                                </label>
                                <form className="flex gap-7">
                                    <input checked type="radio" name="mode" value="Interviewee" />
                                    <label className="text-[#616161]">Interviewee</label>

                                    <input type="radio" name="mode" value="Interviewer" />
                                    <label className="text-[#616161]">Interviewer</label>

                                    <input type="radio" name="mode" value="Hybrid mode" />
                                    <label className="text-[#616161]">Hybrid mode</label>
                                </form>
                            </div>
                            <div className="">
                                <Link to='/signup'><button className="w-[464px] h-[36px] bg-[#000AFF] text-white rounded-[8px] text-xl">Sign up</button></Link>
                            </div>
                            <div className="text-center my-5 text-2xl text-[#888888]">or</div>

                            <div className="mb-20">
                                <button className="btn w-[464px] bg-white text-center h-[48px] normal-case border-[#B6B6B6] font-normal border-[1px] text-[#B6B6B6] rounded-[8px] text-xl"><PiLinkedinLogo className="h-7 w-7" />Sign up with LinkedIn</button>
                            </div>
                            <p className="text-center text-[#888888] text-base">By signing up, you agree to our <span className="underline text-[#616161]">Terms and Conditions</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetailsPage;