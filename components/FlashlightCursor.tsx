import React, { useEffect, useState } from "react";
import useIsMobile from '@utils/useIsMobile/useIsMobile';

function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>): void => {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);
    };
}

const Flashlight = (): JSX.Element => {
    const [position, setPosition] = useState({ x: 0, y: 0, radius: 400, moved: false });
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return
        const handleMouseMove = debounce((event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY, radius: 600, moved: true });
        }, 5)
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };

    }, [isMobile]);

    if (isMobile) {
        return <></>
    }

    return (
        <div
            style={{ zIndex: 0, position: 'fixed', width: '100vw', height: '100vh', background: !position.moved ? `radial-gradient(circle ${position.radius}px at 50% 50%, rgba(34, 64, 77, 0.2), rgba(0, 0, 0, 0.05))` : `radial-gradient(circle ${position.radius}px at ${position.x}px ${position.y}px, rgba(37, 93, 117, 0.2), rgba(0, 0, 0, 0.05))`, top: `0px`, left: `0px` }}
        />
    )
};

export default Flashlight;
