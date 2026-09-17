import { type Dispatch, type SetStateAction } from "react";
import type { Itechnologies } from "../technologies";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

interface ITechnologiesCardProps {
    tech: Itechnologies;
    selectedStack: Itechnologies[];
    setSelectedStack: Dispatch<SetStateAction<Itechnologies[]>>;
}

const TechnologiesCard = ({
    tech,
    selectedStack,
    setSelectedStack,
}: ITechnologiesCardProps) => {
    const isSelected = selectedStack.some((item) => item.id === tech.id);

    const handleAddToStack = () => {
        setSelectedStack([...selectedStack, tech]);
        toast.success(`Added ${tech.name} to stack`);
    };



    const getBadgeClasses = (badge: string) => {
        if (badge === "Popular") {
            return "bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]";
        } else if (badge === "Containers") {
            return "bg-[#F0F9FF] text-[#0284C7] border-[#DBEAFE]";
        } else if (badge === "Fast") {
            return "bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]" ;
        } else {
            return "bg-[#FEF2F2] text-[#DC2626] border-[#FEE2E2]";
        }
    };

    return (
        <div className="secondary-font flex flex-col justify-between rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-md">
            <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                    <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
                    {tech.badge && (
                        <span className={`rounded-full text-[11.5px] font-semibold px-3 py-1 ${getBadgeClasses(
                            tech.badge
                        )}`}>
                            {tech.badge}
                        </span>
                    )}
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-[#0F172A] mt-4 ">
                    {tech.name}
                </h3>
                <p className="text-xs text-[#64748B] line-clamp-3 mt-2">
                    {tech.description}
                </p>
            </div>

            <div>
                {/* Category & Difficulty Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#F8FAFC] pt-4 mt-2 text-xs font-medium text-slate-500">
                    <div className="flex gap-2">
                        <span className="text-[11px] text-[#475569] rounded-md bg-[#F1F5F9] px-2.5 py-1">
                            {tech.category}
                        </span>
                        <span className="text-[11px] text-[#64748B] px-2.5 py-1">
                            {tech.difficulty}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#334155] text-[11px] font-semibold">
                        <FaStar className="text-[#FBBF24]" />
                        <span>{tech.rating}</span>
                    </div>
                </div>

                {/* Add to Stack Button */}
                <button
                    onClick={handleAddToStack}
                    disabled={isSelected}
                    className={`mt-4 w-full rounded-xl py-2.5 text-xs font-medium transition-colors ${isSelected
                        ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                        : "bg-[#0A0F1D] text-white"
                        }`}
                >
                    {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologiesCard;