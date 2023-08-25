import Banner from './Banner';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div>
            <div className="navbar md:px-16 md:pt-5">
                <div className="flex-1">
                    <h1 className="md:text-4xl font-bold poppins-font">Lean<span className="text-[#000AFF]">Prep</span></h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-black me-3 md:me-16 md:text-2xl">About us</li>
                        <li className="text-black me-3 md:me-16 md:text-2xl">Pricing</li>
                        <h1 className="btn btn-sm btn-outline demo text-[#000AFF] normal-case inline-flex rounded-3xl"> Demo<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg></span> 
                        </h1>
                    </ul>
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default LandingPage;