import React, { Suspense } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const SplineClean: React.FC = () => {

    // Optional: Add onLoad logic if we need to adjust camera/objects for this specific scene.
    // scene-clean typically implies a cleaner, simpler setup, but we can still add scaling if needed.
    const onLoad = (splineApp: Application) => {
        setTimeout(() => {
            // Find main objects if scaling is needed. 
            // For now, we assume the scene is reasonably set up, but we can iterate.
            console.log('Spline Clean scene loaded');
        }, 100);
    };

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-auto">
            <Suspense fallback={<div className="w-full h-full bg-gradient-to-r from-blue-900/80 to-purple-900/80" />}>
                <Spline
                    scene="/scene-clean.splinecode"
                    className="w-full h-full object-cover"
                    onLoad={onLoad}
                />
            </Suspense>
        </div>
    );
};
