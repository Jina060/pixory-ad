"use client"
import RadioItem from '@/components/RadioItem'
import { motion } from 'framer-motion'
import { FileText, Globe, Target, User } from 'lucide-react'
import React, { useState } from 'react'

interface HeaderProps {
  icon: React.ReactNode
  title: string
  step: number
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
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function StepHeader({ icon, title, step }: HeaderProps) {
  return (
    <div className='flex items-center gap-4 mb-6'>
      {/* Step number */}
      <div className='flex items-center justify-center w-8 h-8 rounded-full border border-[#FE5A7A]/40 bg-[#FE5A7A]/10 shrink-0'>
        <span className='text-[#FE5A7A] text-xs font-bold'>{String(step).padStart(2, '0')}</span>
      </div>
      {/* Icon + title */}
      <div className='flex items-center gap-2.5'>
        <div className='text-[#FE5A7A]'>{icon}</div>
        <p className='text-white font-semibold text-sm md:text-base tracking-wide'>
          {title}
        </p>
      </div>
      {/* Line */}
      <div className='flex-1 h-px bg-white/8' />
    </div>
  )
}

function InputItem({ title, type, subtext }: InputProp) {
  return (
    <div className='space-y-2'>
      <label htmlFor={title} className="text-xs font-medium tracking-widest uppercase text-white/70">
        {title}
        {subtext && (
          <span className='ml-1.5 text-[#FE5A7A]/70 normal-case tracking-normal'>
            {subtext}
          </span>
        )}
      </label>
      <input
        type={type}
        id={title}
        placeholder={`Enter your ${title.toLowerCase()}`}
        className='w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 outline-none text-sm text-white placeholder-white/40 transition-all duration-300 focus:border-[#FE5A7A]/50 focus:bg-white/6'
      />
    </div>
  )
}

const Form = () => {
  const [answer, setAnswer] = useState<string>('')
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [formData, setFormData] = useState<FormProp>({
    question1: '',
    question2: '',
    otherChallenge: '',
    price: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setAnswer(value)
  }

  const handleServiceSelect = (price: string) => {
    setFormData({ ...formData, price })
    setIsServiceDropdownOpen(false)
  }

  const renderInput = () => {
    if (answer === 'yes_not_converting' || answer === 'yes_performing') {
      return (
        <div className='col-span-full mt-3'>
          <input
            type="text"
            placeholder="What's your website URL?"
            className='w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 outline-none text-sm text-white placeholder-white/20 focus:border-[#FE5A7A]/50 transition-all duration-300'
          />
        </div>
      )
    } else if (answer === 'no') {
      return (
        <div className='col-span-full mt-3'>
          <input
            type="text"
            placeholder="What's your business / industry?"
            className='w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 outline-none text-sm text-white placeholder-white/20 focus:border-[#FE5A7A]/50 transition-all duration-300'
          />
        </div>
      )
    }
  }

  return (
    <div className='min-h-screen w-full bg-[#020617] px-4 py-16 -mt-3'>

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-center max-w-3xl mx-auto mb-14'
      >
        {/* Badge */}
        <div className='inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-6'>
          <motion.span
            className='w-1.5 h-1.5 rounded-full bg-[#FE5A7A]'
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className='text-white/50 text-xs tracking-widest uppercase'>Let&apos;s Get Started</span>
        </div>

        <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4'>
          Help Us Understand <br />
          <span className='text-[#FE5A7A]'>Your Needs</span>
        </h1>
        <p className='text-white/70 text-base font-light leading-relaxed'>
          Answer a few quick questions so we can tailor the best solution for you.
        </p>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className='max-w-5xl mx-auto'
      >
        <form className='space-y-6'>

          {/* Section 1 */}
          <div className='rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8'>
            <StepHeader
              step={1}
              title='Do you currently have a website?'
              icon={<Globe size={16} />}
            />
            <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
              <RadioItem
                title="Yes, but it's not converting well"
                name="question1"
                checked={formData.question1 === 'yes_not_converting'}
                value='yes_not_converting'
                onChange={handleChange}
              />
              <RadioItem
                title="Yes, and it's performing okay — want to improve it"
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
          </div>

          {/* Section 2 */}
          <div className='rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8'>
            <StepHeader
              step={2}
              title="What's your biggest challenge right now?"
              icon={<Target size={16} />}
            />
            <div className='space-y-4'>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                <RadioItem
                  title="Not enough leads / traffic"
                  name='question2'
                  checked={formData.question2 === 'not_enough'}
                  value='not_enough'
                  onChange={handleChange}
                />
                <RadioItem
                  title="Traffic but low conversions"
                  name='question2'
                  checked={formData.question2 === 'traffic'}
                  value='traffic'
                  onChange={handleChange}
                />
                <RadioItem
                  title="Website looks outdated / unprofessional"
                  name='question2'
                  checked={formData.question2 === 'outdated'}
                  value='outdated'
                  onChange={handleChange}
                />
                <RadioItem
                  title="Don't have a website yet"
                  name='question2'
                  checked={formData.question2 === 'no_website'}
                  value='no_website'
                  onChange={handleChange}
                />
              </div>

              {/* Other field */}
              <div className='flex items-center gap-4 pt-2'>
                <span className='text-white/60 text-xs uppercase tracking-widest shrink-0'>Other</span>
                <div className='flex-1 border-b border-white/10 focus-within:border-[#FE5A7A]/50 transition-colors duration-300'>
                  <input
                    type="text"
                    name='question2'
                    value={formData.otherChallenge}
                    className='w-full bg-transparent outline-none text-sm text-white placeholder-white/40 pb-2'
                    placeholder="Describe your challenge..."
                    onFocus={() => {
                      handleChange({
                        target: { name: 'question2', value: '' }
                      } as React.ChangeEvent<HTMLInputElement>)
                    }}
                    onChange={(e) => {
                      handleChange({
                        target: { name: 'otherChallenge', value: e.target.value }
                      } as React.ChangeEvent<HTMLInputElement>)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className='rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8'>
            <StepHeader
              step={3}
              title='Contact Details'
              icon={<User size={16} />}
            />
            <div className='space-y-4'>
              <InputItem title='Name' type='text' />
              <InputItem title='Email' type='email' />
              <InputItem
                title='Phone'
                type='tel'
                subtext='(optional — enables WhatsApp follow-up)'
              />
            </div>
          </div>

          {/* Budget section */}
          <div className='rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8'>
            <StepHeader
              step={4}
              title='Monthly Ad / Marketing Budget'
              icon={<FileText size={16} />}
            />

            <div className='relative'>
              <button
                type="button"
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className='w-full text-left px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-sm text-white/60 outline-none flex justify-between items-center hover:border-white/20 transition-colors duration-300'
              >
                <span>{formData.price ? `$${formData.price}` : 'Select budget range'}</span>
                <svg
                  className={`w-4 h-4 text-white/30 transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServiceDropdownOpen && (
                <div className='absolute top-full left-0 right-0 mt-2 bg-[#0a0b1a] border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden'>
                  {[
                    { label: '$1,000 / month', value: '1000' },
                    { label: '$1,200 / month', value: '1200' },
                    { label: '$2,000 / month', value: '2000' },
                    { label: '$2,400 / month', value: '2400' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleServiceSelect(option.value)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                        formData.price === option.value
                          ? 'bg-[#FE5A7A]/10 text-[#FE5A7A]'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className='flex justify-end pt-2'>
            <motion.button
              type='submit'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className='relative bg-[#FE5A7A] hover:bg-[#fe4a6a] text-white font-semibold px-7 py-4 rounded-full transition-colors duration-300 text-sm md:text-base overflow-hidden cursor-pointer'
            >
              <motion.span
                className='absolute inset-0 bg-white/15 -skew-x-12'
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
              />
              <span className='relative z-10'>Submit Request →</span>
            </motion.button>
          </div>

        </form>
      </motion.div>
    </div>
  )
}

export default Form