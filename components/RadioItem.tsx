import React from 'react'

interface RadioItemProps {
  title: string;
  name: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  gridSpan?: string
}

const RadioItem = ({ title, name, value, checked, onChange, gridSpan }: RadioItemProps) => {
  return (
    <label 
      className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
        checked 
          ? 'border-[#FE5A7A] bg-[#FE5A7A]/10 shadow-[0_0_20px_rgba(254,90,122,0.1)]' 
          : 'border-[#cccccc20] hover:border-[#cccccc50] hover:bg-white/5'
      } ${gridSpan}`}
    >
      <div className="relative flex items-center justify-center mt-0.5">
        <input
          type="radio"
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          checked 
            ? 'border-[#FE5A7A] bg-[#FE5A7A]' 
            : 'border-[#cccccc40] hover:border-[#cccccc80]'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
            checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} />
        </div>
      </div>
      <span className={`font-sans text-sm leading-tight tracking-wide transition-colors duration-300 ${
        checked ? 'text-white' : 'text-[#cccccc]'
      }`}>
        {title}
      </span>
    </label>
  );
};

export default RadioItem