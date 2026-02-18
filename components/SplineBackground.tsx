import React, { Suspense } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const SplineBackground: React.FC = () => {
    const onLoad = (splineApp: Application) => {
        // Give a moment for the scene to settle
        setTimeout(() => {
            console.log('Spline scene loaded');

            // 1. Try to scale the Robot object directly
            const robot = splineApp.findObjectByName('Robot');
            if (robot) {
                robot.scale.x = 0.6;
                robot.scale.y = 0.6;
                robot.scale.z = 0.6;
                robot.position.y -= 100;
            }

            // 2. Try to zoom out by moving the camera back
            // Common names: "Personal Camera", "Camera"
            const camera = splineApp.findObjectByName('Personal Camera') || splineApp.findObjectByName('Camera');
            if (camera) {
                // Move camera back to reduce size of subject
                camera.position.z += 500;
            }

            // 3. Fallback: If no specific object found, try to scale the default group
            if (!robot) {
                const group = splineApp.findObjectByName('Group');
                if (group) {
                    group.scale.x = 0.6;
                    group.scale.y = 0.6;
                    group.scale.z = 0.6;
                }
            }
        }, 100);
    };

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-auto">
            <Suspense fallback={<div className="w-full h-full bg-black/20" />}>
                <Spline
                    scene="/Robot.splinecode"
                    className="w-full h-full object-cover"
                    onLoad={onLoad}
                />
            </Suspense>
            {/* Optional overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        </div>
    );
};
