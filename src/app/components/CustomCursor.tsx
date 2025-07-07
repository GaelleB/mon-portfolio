'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 800, damping: 40 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 800, damping: 40 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);

        const hoverables = document.querySelectorAll('a, button, [data-hover]');
        hoverables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        hoverables.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        });
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out ${
            isHovering ? 'w-16 h-16' : 'w-8 h-8'
        } bg-white rounded-full`}
        style={{
            x: smoothMouseX,
            y: smoothMouseY,
            translateX: isHovering ? -32 : -16,
            translateY: isHovering ? -32 : -16,
        }}
        />
    );
};

export default CustomCursor;