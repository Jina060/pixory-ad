'use client';

import { useEffect } from 'react';

export default function ElfsightWhatsApp() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-3dbf9781-2123-45a6-ba35-39ccd94aecd3"
      data-elfsight-app-lazy
    ></div>
  );
}
