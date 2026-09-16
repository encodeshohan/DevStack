import Bimage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="text-center md:text-left">
                        <h1 className="secondary-font text-[#0F172A] text-4xl font-extrabold">
                            Build Your Ideal
                        </h1>

                        <h1 className="secondary-font text-4xl font-extrabold inline-block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </h1>

                        <p className="primary-font text-[#475569] text-lg max-w-xl mt-4">
                            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                        </p>

                        <div className="flex justify-center md:justify-start gap-4 mt-6">

                            <button className="primary-font w-52 py-3 font-semibold text-white text-base rounded-xl bg-linear-to-r from-[#F97316] to-[#EC4899]">
                                Explore Technologies
                            </button>

                            <button className="primary-font w-52 py-3 font-semibold text-[#374151] text-base rounded-xl bg-white border border-[#E5E7EB]">
                                Learn More
                            </button>

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src={Bimage} alt="Banner Image" />
                    </div>

                </div>

            </div>
        </>
    );
};

export default Banner;