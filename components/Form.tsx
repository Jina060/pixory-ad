"use client"
import RadioItem from '@/components/RadioItem'
import { motion } from 'framer-motion'
import { FileText, Globe, Target, User, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'


interface HeaderProps {
  icon: React.ReactNode
  title: string
}
interface FormProp {
  question1: string
  question2: string 
  otherChallenge: string
  price: string
}
interface InputProp {
  title: string
  type: string
  subtext?: string
}
interface Props {
  isOpen: boolean,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function Header({icon, title}: HeaderProps) {
  return (
    <header className='flex items-center gap-3 mb-4'>
      <div className='bg-[#FE5A7A]/20 p-2 rounded-xl border border-[#FE5A7A]/50 shadow-[0_0_15px_rgba(254,90,122,0.05)]'>
        {icon}
      </div>
      <p className='font-sans font-semibold text-sm md:text-base tracking-wide text-white/90'>
        {title}
      </p>
    </header>
  )
}

function InputItem({title, type, subtext} : InputProp) {
  return (
    <div className='space-y-1.5'>
      <label htmlFor={title} className="text-[15px] font-sans font-medium tracking-wider text-[#cccccc]">
        {title}
        {subtext && (
          <span className='ml-1.5 font-sans text-[15px] text-[#FE5A7A] tracking-wider'>
            {subtext}
          </span>
        )}
      </label>
      <input 
        type={type} 
        id={title}
        placeholder={`Enter your ${title.toLowerCase()}`}
        className='w-full p-2.5 rounded-xl bg-white/5 border border-[#cccccc20] outline-none font-sans text-sm text-white placeholder-[#cccccc30] transition-all duration-300 focus:border-[#FE5A7A] focus:bg-white/10 focus:shadow-[0_0_25px_rgba(254,90,122,0.05)] hover:border-[#cccccc50]'
      />
    </div>
  )
}
const Form = () => {
  const [answer, setAnswer] = useState<string>('')
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<FormProp>({
      question1: '',
      question2: '',
      otherChallenge: '',
      price: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:value
    }))
    setAnswer(value)
  }

  const handleServiceSelect = (price: string) => {
    setFormData({
      ...formData,
      price
    });
    setIsServiceDropdownOpen(false);
  };
  const renderInput = () => {
    if (answer === 'yes_not_converting' || answer === "yes_performing") {
      return <input type="text" placeholder="What's your website URL ?" className='border col-span-2 border-slate-700 outline-none shadow-xs shadow-white w-full rounded-md p-2 font-mono tracking-wider mt-2 text-xs' />
    } else if (answer === 'no'){
      return <input type="text" placeholder="What's your business / industry ?" className='border col-span-2 border-slate-700 outline-none shadow-xs shadow-white w-full rounded-md p-2 font-mono tracking-wider mt-2 text-xs'/>
    }
  }



  return (
    <motion.div 
      className='bg-slate-900 text-white p-6 mt-5 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto h-full backdrop-blur-sm'
      initial={{x: -20, y: 20}}
      animate={{x: 0, y: 0}}
      transition={{
        duration: 3,
        type: 'spring',
        stiffness: 200
      }}
    >
      <header className='text-center flex flex-col items-center mb-8 mx-auto'>
        <p className='text-white font-bold max-[475px]:text-[28px] text-[42px] font-sans leading-11 tracking-tight'>
          Help Us Understand <br /> 
          <span className='text-[#FE5A7A] bg-linear-to-r from-[#FE5A7A] to-[#FF8A9F] bg-clip-text'>Your Needs</span>
        </p>
        <span className="font-medium w-md mt-3 font-sans max-[475px]:text-[13px] px-4 max-[350px]:max-w-70 max-[475px]:max-w-90 leading-relaxed text-[#ccc] opacity-90">
          Answer a few quick questions so we can tailor the best solution for you.
        </span>
      </header>

      {/* Form input section */}
      <form className='space-y-5'>
        {/* Section - 1 */}
        <fieldset 
          className='border border-[#cccccc30] bg-white/5 p-4 rounded-2xl backdrop-blur-sm hover:border-[#cccccc60] transition-all duration-300'
        >
          <Header title='Do you currently have a website?' icon={<Globe className='text-[#FE5A7A]' size={16}/>} />
          <div className='grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-2.5 mt-1'>
            <RadioItem 
              title="Yes, but it's not converting well" 
              name="question1" 
              checked={formData.question1 === 'yes_not_converting'}
              value='yes_not_converting'
              onChange={handleChange} 
            />
            <RadioItem 
              title="Yes, and it's performing okay, want to improve it" 
              name="question1" 
              checked={formData.question1 === 'yes_performing'} 
              value="yes_performing"
              onChange={handleChange} 
            />
            <RadioItem 
              title="No, I need one built" 
              name="question1"
              checked={formData.question1 === 'no'} 
              value="no"
              onChange={handleChange} 
            />
            {renderInput()}
          </div>
        </fieldset>

        {/* Section - 2 */}
        <fieldset 
          className='border border-[#cccccc30] bg-white/5 p-4 rounded-2xl backdrop-blur-sm hover:border-[#cccccc60] transition-all duration-300'
        >
          <Header title="What's your biggest challenge right now?" icon={<Target className='text-[#FE5A7A]' size={16}/>}/>
          <div className='space-y-2.5'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-2.5'>
              <RadioItem title="Not enough leads / traffic" name='question2'
              checked={formData.question2 === "not_enough"}
              value='not_enough'
              onChange={handleChange}
              />
              <RadioItem title="Traffic but low conversions"
                name='question2'
                checked={formData.question2 === "traffic"}
                value='traffic'
                onChange={handleChange}
              />
              <RadioItem title="Website looks outdated / unprofessional" 
                name='question2'
                checked={formData.question2 === "outdated"}
                value='outdated'
                onChange={handleChange}
              />
                <RadioItem title="Don't have a website yet" name='question2'
                checked={formData.question2 === "no_website"}
                value='no_website'
                onChange={handleChange}
              />
            </div>
            <fieldset className='flex items-center font-sans text-sm mt-3 gap-3'>
              <label htmlFor="others" className='text-[#cccccc] font-medium'>Other:</label>
              <input 
                type="text" 
                name='question2'
                value={formData.otherChallenge}
                className='border-b border-b-[#cccccc40] bg-transparent outline-none w-full tracking-wide text-white placeholder-[#cccccc50] focus:border-b-[#FE5A7A] transition-all duration-300 pb-1' 
                placeholder="Describe your challenge..."
                onFocus={() => {
                  handleChange({
                    target: {
                      name: 'question2',
                      value: '' 
                    }
                  } as React.ChangeEvent<HTMLInputElement>);
                }}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: 'otherChallenge',
                      value: e.target.value
                    }
                  } as React.ChangeEvent<HTMLInputElement>);
                }}

              />
            </fieldset>
          </div>
        </fieldset>

        {/* Section - 3 */}
        <fieldset 
          className='border border-[#cccccc30] bg-white/5 p-4 rounded-2xl backdrop-blur-sm hover:border-[#cccccc60] transition-all duration-300'
        >
          <Header title='Contact details' icon={<User className='text-[#FE5A7A]' size={16}/>} />
          <div className='space-y-3.5'>
            <InputItem title='Name' type='text'/>
            <InputItem title='Email' type='email'/>
            <InputItem 
              title='Phone' 
              type='tel' 
              subtext='(optional - enables WhatsApp follow-up)'
            />
          </div>
        </fieldset>

        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-sans font-medium tracking-wider text-[#cccccc]">
            Monthly ad / marketing budget <span className="text-[#FE5A7A]">(optional)</span>
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              className="w-full text-left bg-transparent border-b-2 border-gray-300 px-0 py-3 text-base text-[#1E293B] focus:outline-none focus:border-[#2201DC] transition-colors flex justify-between items-center"
            >
              <span className='text-[#ccc]'>
                {formData.price || 'Select a service'}
              </span>
              <svg className={`w-5 h-5 text-gray-400 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServiceDropdownOpen && (
              <div className="absolute bottom-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {[
                  { label: '$1000', value: '1000' },
                  { label: '$1200', value: '1200' },
                  { label: '$2000', value: '2000' },
                  { label: '$2400', value: '2400' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleServiceSelect(option.value)}
                    className={`w-full text-left px-4 py-3 text-base hover:bg-slate-100 transition-colors ${
                      formData.price === option.value ? 'bg-slate-900 text-white hover:bg-slate-900' : 'text-[#1E293B]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          </div>
      </form>

      <button className='bg-[#FE5A7A] flex justify-self-end mt-6 px-10 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wider cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FE5A7A]/20 transition-all duration-300'>
        Submit →
      </button>
    </motion.div>
  )
}

export default Form