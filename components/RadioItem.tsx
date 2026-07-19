import React from 'react'

interface RadioItemProps {
  title: string;
  name: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  gridSpan?: string
}

const RadioItem = ({title, name, value, checked, onChange, gridSpan} : RadioItemProps) => {
  return (
    <div className={`flex items-start gap-2 font-mono border border-slate-700 p-2 rounded-md ${gridSpan}`}>
        <input
          type="radio"
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={name} className='text-xs'>{title}</label>
    </div>
  )
}

export default RadioItem