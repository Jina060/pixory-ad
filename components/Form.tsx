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
const Form = () => {
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
      return <input type="text" placeholder="What's your website URL ?" className='border col-span-2 border-slate-700 outline-none shadow-xs shadow-white w-full rounded-md p-2 font-mono tracking-wider mt-2 text-xs' />
    } else if (answer === 'no'){
      return <input type="text" placeholder="What's your business / industry ?" className='border col-span-2 border-slate-700 outline-none shadow-xs shadow-white w-full rounded-md p-2 font-mono tracking-wider mt-2 text-xs'/>
    }
  }



  return (
    <div className='bg-black/50 flex items-center justify-center z-50 w-full'>
      <motion.div 
        className='bg-slate-900 text-white p-4 mt-5 rounded-xl shadow-lg w-full max-w-4xl mx-auto h-full'
        initial={{x: -20, y: 20}}
        animate={{x: 0, y: 0}}
        transition={{
          duration: 3,
          type: 'spring',
          stiffness: 200
        }}
      >
        <header className='text-center flex flex-col items-center mb-7 mx-auto'>
          <p className='text-white font-semibold max-[475px]:text-[25px] text-[40px] font-sans leading-none text-center'>Help Us Understand <br /> <span className='text-[#FE5A7A]'>Your Needs</span></p>
          <span className="font-medium w-md mt-3 font-mono max-[475px]:text-[12px] px-2 max-[350px]:max-w-70 max-[475px]:max-w-90 leading-4.5 text-[#ccc] tracking-wider">Answer a few quick questions so we can tailor the best solution for you.</span>
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
              <div className='grid md:grid-cols-3 grid-cols-1 gap-2.5 md:gap-2'>
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
                <div className='grid md:grid-cols-2 grid-cols-1 gap-2.5 md:gap-2'>
                  <RadioItem title="Not enough leads / traffic" name='partially'/>
                  <RadioItem title="Traffic but low conversions" name='partially'/>
                  <RadioItem title="Website looks outdated / unprofessional" name='partially'/>
                  <RadioItem title="Don't have a website yet" name='partially'/>
                </div>
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
      </motion.div>
    </div>
  )
}

export default Form