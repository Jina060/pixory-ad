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
  question3: string
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
      <div className='bg-[#FE5A7A]/40 p-2 rounded-md border border-[#FE5A7A]'>
        {icon}
      </div>
      <p className='font-sans font-semibold text-sm md:text-lg'>{title}</p>
    </header>
  )
}

function InputItem({title, type, subtext} : InputProp) {
  return (
    <fieldset className='space-y-1'>
      <label htmlFor={title} className="font-sans text-xs tracking-widest">{title} <span className='font-mono'>{subtext}</span></label>
      <input type={type} className='border border-slate-700 outline-none shadow-xs shadow-white w-full rounded-md p-2 font-mono tracking-wider text-xs' />
    </fieldset>
  )
}
const Form = ({setIsOpen, isOpen}: Props) => {
  const [answer, setAnswer] = useState<string>('')

  const [formData, setFormData] = useState<FormProp>({
      question1: '',
      question2: '',
      question3: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:value
    }))
    setAnswer(value)
  }
  const renderInput = () => {
    if (answer === 'yes_not_converting' || answer === "yes_performing") {
      return <input type="text" placeholder="What's your website URL ?" className='border border-slate-700 outline-none shadow-xs shadow-white w-full rounded-md p-2 font-mono tracking-wider mt-3 text-xs' />
    } else if (answer === 'no'){
      return <input type="text" placeholder="What's your business / industry ?" className='border border-slate-700 outline-none shadow-xs shadow-white w-full rounded-md p-2 font-mono tracking-wider mt-3 text-xs'/>
    }
  }

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow='hidden'
    } else {
      document.body.style.overflow='auto'
    }

    return () => {
      document.body.style.overflow='auto'
    }
  }, [isOpen])



  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div 
        className='modal-scroll bg-slate-900 text-white  p-4 rounded-xl shadow-lg w-full max-w-lg h-full max-h-[600px] overflow-y-auto'
      >
        <header className='flex items-center gap-3 mb-7 relative pt-10 md:p-0'>
          <div className='bg-[#FE5A7A]/40 p-3 rounded-full border border-[#FE5A7A]'>
            <FileText color='#FE5A7A' size={20}/>
          </div>
          <div className='space-y-0.5'>
            <h1 className='font-semibold font-mono tracking-normal text-sm md:text-lg'>Help us understand your needs</h1>
            <p className="md:text-xs text-[11px] font-bold md:font-normal font-sans text-[#ccc] tracking-wide">Provide accurate information in the fields below</p>
          </div>

          <button className='absolute right-0 -top-1 md:top-1 bg-slate-950 p-1.5 rounded-full cursor-pointer' onClick={() => setIsOpen(false)}>
            <X/>
          </button>
        </header>

        {/* Form input section */}

        <form className='space-y-4'>
          {/* Section - 1 */}
            <motion.fieldset className='border border-[#cccccc54] p-3 rounded-xl' 
              animate={{scale: [1, 1.01, 1]}}
              transition={{
                repeat: Infinity,
                duration: 3, ease: "easeInOut"
              }}
            >
              <Header title='Do you currently have a website?' icon={<Globe className='text-[#FE5A7A]' size={15}/>} />
              <div className='space-y-2'>
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
            </motion.fieldset>

          {/* Section - 2 */}
            <motion.fieldset className='border border-[#cccccc54] p-3 rounded-xl'
              animate={{scale: [1, 1.01, 1]}}
              transition={{
                repeat: Infinity,
                duration: 3, ease: "easeInOut", delay: 2
              }}>
              <Header title="What's your biggest challenge right now?" icon={<Target className='text-[#FE5A7A]' size={15}/>}/>
              <div className='space-y-2'>
                <RadioItem title="Not enough leads / traffic" name='partially'/>
                <RadioItem title="Traffic but low conversions" name='partially'/>
                <RadioItem title="Website looks outdated / unprofessional" name='partially'/>
                <RadioItem title="Don't have a website yet" name='partially'/>
                <fieldset className='flex items-center font-mono text-xs mt-4 gap-2'>
                  <label htmlFor="others">Others: </label>
                  <input type="text" className='border-b border-b-slate-300 outline-none w-full tracking-wider'/>
                </fieldset>
              </div>
            </motion.fieldset>

          {/* Section - 3 */}
            <motion.fieldset className='border border-[#cccccc54] p-3 rounded-xl'
              animate={{scale: [1, 1.01, 1]}}
              transition={{
                repeat: Infinity,
                duration: 3, ease: "easeInOut", delay: 3
              }}
              >
              <Header title='Contact details' icon={<User className='text-[#FE5A7A]' size={15}/>} />
              <div className='space-y-3'>
                <InputItem title='Name' type='text'/>
                <InputItem title='Email' type='text'/>
                <InputItem title='Phone' type='number' subtext='(optional - enables Whatsapp follow-up)'/>
              </div>
            </motion.fieldset>

          {/* Section - 4 */}

          {/* <fieldset>

          </fieldset> */}
        </form>

        <button className='bg-[#FE5A7A] flex justify-self-end mt-5 px-8 py-2 rounded-full font-mono text-sm tracking-widest cursor-pointer hover:-translate-y-1 transition-all duration-600'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Form