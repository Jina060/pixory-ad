'use client';
import { useState } from 'react';
import Form from '@/components/Form';

export default function SomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      {/* whatever triggers the form, e.g. a button */}
      <button onClick={() => setIsFormOpen(true)}>Open Form</button>

      <Form isOpen={isFormOpen} setIsOpen={setIsFormOpen}/>
    </div>
  );
}