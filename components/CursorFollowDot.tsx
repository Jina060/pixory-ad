'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorFollowDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | undefined>(undefined);
  const idleTimeoutId = useRef<NodeJS.Timeout | undefined>(undefined);
  const isIdle = useRef(false);
  const idleStartTime = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      isIdle.current = false;

      // Clear existing timeout
      if (idleTimeoutId.current) {
        clearTimeout(idleTimeoutId.current);
      }

      // Set new timeout to detect idle (300ms of no movement)
      idleTimeoutId.current = setTimeout(() => {
        isIdle.current = true;
        idleStartTime.current = Date.now();
      }, 300);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      isIdle.current = false;
      idleStartTime.current = 0;
      if (idleTimeoutId.current) {
        clearTimeout(idleTimeoutId.current);
      }
    };

    // Add listeners to hero section
    const heroSection = document.querySelector('[data-hero-section]') as HTMLElement | null;
    if (heroSection) {
      heroSection.addEventListener('mouseenter', handleMouseEnter);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      heroSection.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop for smooth dot following
    const animate = () => {
      if (isHovering && dotRef.current) {
        // Smoothly follow cursor (trail effect)
        dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.2;
        dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.2;
        
        if (isIdle.current) {
          // When idle, converge more tightly to cursor position
          dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.08;
          dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.08;
        }
        
        dotRef.current.style.transform = `translate(${dotPos.current.x - 8}px, ${dotPos.current.y - 8}px)`;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (idleTimeoutId.current) {
        clearTimeout(idleTimeoutId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      if (heroSection) {
        heroSection.removeEventListener('mouseenter', handleMouseEnter);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
        heroSection.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovering]);

  return (
    <div
      ref={dotRef}
      className={`hidden md:block fixed w-4 h-4 rounded-full pointer-events-none z-50 transition-opacity duration-300 ${
        isHovering ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle, #2667FF 0%, #1e4fd1 100%)',
        boxShadow: '0 0 20px rgba(38, 103, 255, 0.6)',
      }}
    />
  );
}
