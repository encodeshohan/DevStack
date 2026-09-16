import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <>
            <div className="divider"></div>

            <footer className="primary-font container mx-auto px-4 py-10">

                <div className="grid grid-cols-5 gap-8">

                    {/* Logo Column */}
                    <div className="col-span-2 grid gap-4 pr-8">
                        <img src={Logo} alt="Logo Image" />

                        <p className="text-[#64748B] text-xs">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex items-center gap-5 mt-5">
                            <a href="#" className="text-[#475569] font-semibold text-xs">Github</a>
                            <a href="#" className="text-[#475569] font-semibold text-xs">Twitter</a>
                            <a href="#" className="text-[#475569] font-semibold text-xs">LinkedIn</a>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="text-[#0F172A] font-semibold mb-4">PRODUCT</h3>

                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-[#64748B] text-xs">Home</a>
                            <a href="#" className="text-[#64748B] text-xs">Technologies</a>
                            <a href="#" className="text-[#64748B] text-xs">Projects</a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-[#0F172A] font-semibold mb-4">COMPANY</h3>

                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-[#64748B] text-xs">About</a>
                            <a href="#" className="text-[#64748B] text-xs">About</a>
                            <a href="#" className="text-[#64748B] text-xs">Contact</a>
                            <a href="#" className="text-[#64748B] text-xs">Careers</a>
                        </div>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-[#0F172A] font-semibold mb-4">LEGAL</h3>

                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-[#64748B] text-xs">Privacy Policy</a>
                            <a href="#" className="text-[#64748B] text-xs">Terms of Service</a>
                        </div>
                    </div>

                </div>

                <div className="divider my-4"></div>

                {/* Bootom Footer */}
                <div className="flex items-center justify-between">
                    <p className="text-[#64748B] text-xs">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <a href="#" className="text-[#64748B] text-xs">Privacy</a>
                        <a href="#" className="text-[#64748B] text-xs">Terms</a>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;

