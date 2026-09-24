import { FuncItemsProps } from "@/types/typeFuncItems";

export default function NavFuncItems({ icon, text, onClick, isActive }: FuncItemsProps & {isActive: boolean}) {
    const Icon = icon;
    
    return (
        <article 
            onClick={onClick} 
            className={`mx-2 my-2 flex cursor-pointer items-center rounded-lg p-2 transition-all duration-300 transform hover:translate-x-1 md:mx-4 ${
                isActive 
                    ? 'bg-[var(--accent)] shadow-lg shadow-black/20' 
                    : 'bg-white/5 hover:bg-white/10'
            }`}
        >
            <div className={`flex items-center justify-center rounded-lg transition-all duration-300 ${
                isActive ? "bg-[#161a17]" : "bg-black/20"
            } w-10 h-10`}>
                <Icon className={`w-5 h-5 transition-colors duration-300 ${
                    isActive ? "text-[var(--accent)]" : "text-white/70"
                }`} />
            </div>
            <span className={`ml-4 hidden text-sm font-medium transition-all duration-300 md:block ${
                isActive ? "font-bold text-[#161a17]" : "text-white/70"
            }`}>
                {text}
            </span>
        </article>
    );
};