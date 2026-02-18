import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface UnderConstructionProps {
    children: React.ReactNode;
    className?: string;
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({ children, className = '' }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={(e) => {
                setPosition({ x: e.clientX, y: e.clientY });
                setShowTooltip(true);
            }}
            onMouseLeave={() => setShowTooltip(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Target Element (with pointer-events-none style if we want to disable clicks, 
          but usually we just want to show the message while keeping it clickable or not) 
          User said "View Samples", etc. so likely we want to intercept the click or just show on hover.
          For now just hover.
      */}
            {children}

            {/* Tooltip Portal or Fixed Position would be better to avoid clipping, 
          but for simplicity we'll use fixed positioning based on mouse coordinates 
      */}
            {showTooltip && ReactDOM.createPortal(
                <div
                    className="fixed z-[9999] pointer-events-none px-3 py-1.5 bg-black/90 border border-primary/50 text-primary text-xs font-mono tracking-widest uppercase rounded shadow-[0_0_15px_rgba(173,255,0,0.2)] backdrop-blur-md transform -translate-x-1/2 -translate-y-full mt-[-10px]"
                    style={{
                        left: position.x,
                        top: position.y - 10
                    }}
                >
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
                        Under Construction
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};
