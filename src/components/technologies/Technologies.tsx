import { use, useState } from "react";
import type { Itechnologies } from "../technologies";
import TechnologiesCard from "./TechnologiesCard";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

interface ITechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
    const technologies = use(technologiesPromise);
    const [selectedStack, setSelectedStack] = useState<Itechnologies[]>([]);

    const handleRemoveItem = (item: Itechnologies) => {
        const restStack = selectedStack.filter((tech) => tech.id !== item.id);
        setSelectedStack(restStack);
        toast.error(`Removed ${item.name} from stack`);
    };

    const handleRemoveAll = () => {
        setSelectedStack([]);
        toast.error("All technologies removed from stack!");
    };

    return (
        <div className="secondary-font container mx-auto px-4 py-12">
            <div className="mb-8">
                <h2 className="primary-font text-4xl font-extrabold text-[#0F172A] md:text-4xl">
                    Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="mt-2 text-[#64748B] text-base">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* Technologies Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                    {technologies.map((tech: Itechnologies) => {
                        return (
                            <TechnologiesCard
                                key={tech.id}
                                tech={tech}
                                selectedStack={selectedStack}
                                setSelectedStack={setSelectedStack}
                            />
                        );
                    })}
                </div>

                {/* Selected Stack Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                        <h3 className="secondary-font text-base font-bold text-[#0F172A]">
                            Your Stack
                        </h3>
                        <p className="mt-1 text-xs  text-[#94A3B8]">
                            {selectedStack.length === 0
                                ? "No technologies selected yet."
                                : `${selectedStack.length} Technology Selected`}
                        </p>

                        {selectedStack.length === 0 ? (
                            <div className="flex min-h-20 items-center justify-center rounded-2xl border border-dashed border-[#E2E8F0] p-6 mt-6 text-center">
                                <p className="text-xs text-[#94A3B8]">
                                    Your stack is empty.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 mt-6">
                                {/* Selected List */}
                                {selectedStack.map((item: Itechnologies) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-2xs"
                                        >
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    className="h-8 w-8 object-contain"
                                                />
                                                <div className="flex flex-col gap-0.5">
                                                    <h4 className="text-xs font-bold text-[#0F172A]">
                                                        {item.name}
                                                    </h4>
                                                    <span className="text-[10px] text-[#94A3B8]">
                                                        {item.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleRemoveItem(item)}
                                                className="text-[#94A3B8] hover:text-slate-600 transition-colors p-1"
                                            >
                                                <RxCross2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    );
                                })}

                                {/* Remove All Button */}
                                <button
                                    onClick={handleRemoveAll}
                                    className="mt-4 w-full rounded-xl border border-[#ED8C85] bg-white py-2 text-sm text-center font-semibold text-[#D82C20]"
                                >
                                    Remove All
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;