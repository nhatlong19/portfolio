'use client'
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
    text: string;
    typeText?: 'h1' | 'h2' | 'h3' | 'p';
    className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, typeText = 'p', className }) => {
    const [currentText, setCurrentText] = useState(text);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [forward, setForward] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const typingInterval = 150;

        if (forward && currentIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, typingInterval);

            return () => clearTimeout(timeoutId);
        }
        if (!forward && currentIndex > 0) {
            const timeoutId = setTimeout(() => {
                setCurrentText((prevText) => prevText.slice(0, -1));
                setCurrentIndex((prevIndex) => prevIndex - 1);
            }, typingInterval);

            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex, forward, text, isClient]);

    useEffect(() => {
        if (!isClient) return;

        const reverseTimeout = 3000;

        if (forward && currentIndex === text.length) {
            setTimeout(() => setForward(false), reverseTimeout);
        } else if (!forward && currentIndex === 0) {
            setForward(true);
        }
    }, [currentIndex, forward, text.length, isClient]);

    const Tag = typeText;

    return (
        <div className={cn("flex items-center justify-center", className)}>
            <Tag className="capitalize text-lg font-medium text-gray-900 dark:text-gray-100">
                {isClient ? currentText || '\u00A0' : text}
            </Tag>
        </div>
    );
};

export default TypingEffect;