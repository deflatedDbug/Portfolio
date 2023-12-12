import { useState, useEffect } from "react";
import { start } from "repl";

export default function useTypewriter(text: string, speed: number = 80, startTyping: boolean = true) : [string, boolean] {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if(!startTyping) {
            return;
        }
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((oldText) => oldText + text.charAt(index));
                setIndex(index + 1);
            }, speed);
        
            return () => clearTimeout(timeoutId)
        }
        else {
            setIsComplete(true);
        }
    }, [text, speed, index, startTyping])

    return [displayedText, isComplete];
}