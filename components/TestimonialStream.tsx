import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './TestimonialStream.css';
import { Quote } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                DATA & UTILS                                */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = [
    {
        id: '1',
        quote: "Skia's automation tools completely transformed our workflow. We went from manual data entry to a fully automated pipeline in weeks.",
        name: "Alex Rivera",
        role: "CTO",
        company: "Nexus Tech",
        color: "#3B82F6"
    },
    {
        id: '2',
        quote: "The dashboard implementation is flawless. It's rare to find a team that cares about both the code quality and the design aesthetics.",
        name: "Sarah Chen",
        role: "Product Lead",
        company: "Orbit AI",
        color: "#8B5CF6"
    },
    {
        id: '3',
        quote: "We reclaimed 40+ hours a week thanks to the custom scheduling system Skia built for us. The ROI was immediate.",
        name: "Marcus Johnson",
        role: "Director of Ops",
        company: "BuildCo",
        color: "#F59E0B"
    },
    {
        id: '4',
        quote: "A true partner in development. They didn't just build what we asked for, they improved upon our initial concepts.",
        name: "Elena Rodriguez",
        role: "Founder",
        company: "StartLine",
        color: "#10B981"
    },
    {
        id: '5',
        quote: "Exceptional attention to detail. The glassmorphism UI feels incredibly premium and our clients love using the new portal.",
        name: "David Kim",
        role: "VP Engineering",
        company: "FutureSoft",
        color: "#EC4899"
    }
];

const GENERATE_CODE_Block = (width: number, height: number) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*()[]{}<>?/~";
    let output = "";
    for (let i = 0; i < height; i++) {
        let line = "";
        for (let j = 0; j < width; j++) {
            line += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        output += line + "\n";
    }
    return output;
};

/* -------------------------------------------------------------------------- */
/*                            LOGIC CLASSES                                   */
/* -------------------------------------------------------------------------- */

class ParticleScanner {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    w: number = 0;
    h: number = 0;
    particles: any[] = [];
    animationId: number | null = null;
    intensity: number = 0.8;
    scanningActive: boolean = false;
    count: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.resize();
        this.init();
        this.animate();
        this.onResize = this.resize.bind(this);
        window.addEventListener('resize', this.onResize);
    }

    onResize() {
        this.resize();
    }

    resize() {
        if (!this.canvas.parentElement) return;
        this.w = this.canvas.parentElement.clientWidth;
        this.h = this.canvas.parentElement.clientHeight;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
    }

    // ... (rest of init/addParticle/animate)

    init() {
        this.particles = [];
        this.count = 0;
        // Pre-populate some
        for (let i = 0; i < 200; i++) this.addParticle();
    }

    addParticle() {
        if (this.particles.length > 1000) return; // Limit
        this.particles.push({
            x: this.w / 2 + (Math.random() - 0.5) * 4, // Center beam
            y: Math.random() * this.h,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: Math.random() * 0.5 + 0.5,
            color: `rgba(59, 130, 246, ${Math.random()})`
        });
    }

    animate = () => {
        this.ctx.clearRect(0, 0, this.w, this.h);

        // Scan beam glow
        this.ctx.globalCompositeOperation = 'lighter';

        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.01;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            } else {
                this.ctx.fillStyle = p.color;
                this.ctx.globalAlpha = p.life;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, Math.random() * 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        // Add new particles if scanning
        if (this.scanningActive) {
            for (let i = 0; i < 5; i++) this.addParticle();
        } else if (Math.random() > 0.5) {
            this.addParticle();
        }

        this.animationId = requestAnimationFrame(this.animate);
    }

    setScanning(active: boolean) {
        this.scanningActive = active;
    }

    destroy() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        window.removeEventListener('resize', this.onResize);
    }
}

class CardController {
    container: HTMLElement;
    cardLine: HTMLElement;
    items: any[] = [];
    position: number = 0;
    velocity: number = 60; // Slower default
    direction: number = -1;
    isDragging: boolean = false;
    lastMouseX: number = 0;
    animationId: number | null = null;
    scannerCallback: (active: boolean) => void;

    constructor(container: HTMLElement, cardLine: HTMLElement, scannerCallback: (active: boolean) => void) {
        this.container = container;
        this.cardLine = cardLine;
        this.scannerCallback = scannerCallback;
        this.init();
    }

    init() {
        // Populate
        this.populate();
        this.animate();
        this.updateClipping();

        // Events
        this.cardLine.addEventListener('mousedown', this.onStart);
        window.addEventListener('mousemove', this.onMove);
        window.addEventListener('mouseup', this.onEnd);
    }

    populate() {
        // Duplicate data to create infinite feel
        const data = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

        data.forEach((item, i) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'ts-card-wrapper';

            // Normalize Card
            const normalCard = document.createElement('div');
            normalCard.className = 'ts-card ts-card-normal';
            normalCard.innerHTML = `
                <div class="ts-quote">"${item.quote}"</div>
                <div class="ts-author">
                    <div class="ts-avatar" style="background: linear-gradient(135deg, ${item.color}, #3B82F6)">${item.name.charAt(0)}</div>
                    <div class="ts-meta">
                        <span class="ts-name">${item.name}</span>
                        <span class="ts-role">${item.role}, ${item.company}</span>
                    </div>
                </div>
            `;

            // ASCII Card
            const asciiCard = document.createElement('div');
            asciiCard.className = 'ts-card ts-card-ascii';
            const code = document.createElement('div');
            code.className = 'ts-ascii-content';
            code.textContent = GENERATE_CODE_Block(60, 20); // Initial code
            asciiCard.appendChild(code);

            wrapper.appendChild(normalCard);
            wrapper.appendChild(asciiCard);
            this.cardLine.appendChild(wrapper);
        });
    }

    onStart = (e: MouseEvent) => {
        this.isDragging = true;
        this.lastMouseX = e.clientX;
        this.cardLine.style.cursor = 'grabbing';
    }

    onMove = (e: MouseEvent) => {
        if (!this.isDragging) return;
        const delta = e.clientX - this.lastMouseX;
        this.position += delta;
        this.lastMouseX = e.clientX;

        // Update velocity based on drag for inertia later (simplified here)
        this.velocity = 0;
    }

    onEnd = () => {
        this.isDragging = false;
        this.cardLine.style.cursor = 'grab';
        this.velocity = 60; // Reset to auto-scroll
    }

    animate = () => {
        if (!this.isDragging) {
            this.position += this.velocity * this.direction * 0.016;
        }

        // Infinite Loop Logic
        const totalWidth = this.cardLine.scrollWidth;
        const viewWidth = this.container.clientWidth;

        // If we scrolled too far left
        if (this.position < -totalWidth / 2) {
            this.position += totalWidth / 3; // Jump back
        } else if (this.position > 0) {
            this.position -= totalWidth / 3;
        }

        this.cardLine.style.transform = `translateX(${this.position}px)`;

        this.updateClipping();
        this.animationId = requestAnimationFrame(this.animate);
    }

    updateClipping() {
        if (!this.container) return;

        const center = this.container.getBoundingClientRect().left + this.container.clientWidth / 2;
        const scanWidth = 10;
        let active = false;

        const children = Array.from(this.cardLine.children) as HTMLElement[];
        children.forEach(wrapper => {
            const rect = wrapper.getBoundingClientRect();
            const left = rect.left;
            const right = rect.right;
            const width = rect.width;

            // Check intersection with center line
            if (left < center + scanWidth && right > center - scanWidth) {
                // Intersecting!
                active = true;
                const offsetLeft = Math.max(0, center - left);
                // const offsetRight = Math.min(width, center + scanWidth - left);

                const percent = (offsetLeft / width) * 100;

                // Update CSS vars
                const normal = wrapper.querySelector('.ts-card-normal') as HTMLElement;
                const ascii = wrapper.querySelector('.ts-card-ascii') as HTMLElement;

                if (normal && ascii) {
                    normal.style.setProperty('--clip-right', `${100 - percent}%`);
                    ascii.style.setProperty('--clip-left', `${percent}%`);
                }

                // Glitch effect on ascii text
                if (Math.random() > 0.8) {
                    const code = ascii.querySelector('.ts-ascii-content');
                    if (code) code.textContent = GENERATE_CODE_Block(60, 20);
                }

            } else {
                // Reset defaults based on side
                const normal = wrapper.querySelector('.ts-card-normal') as HTMLElement;
                const ascii = wrapper.querySelector('.ts-card-ascii') as HTMLElement;
                if (normal && ascii) {
                    if (right < center) {
                        // Left side (Show Normal)
                        normal.style.setProperty('--clip-right', '0%');
                        ascii.style.setProperty('--clip-left', '100%');
                    } else {
                        // Right side (Show ASCII) -> Actually let's flip it. 
                        // The user demo shows ASCII on left, Normal on right? Or vice versa.
                        // Let's assume standard reveal: ASCII reveals Normal as it passes scan?
                        // Or Normal reveals ASCII.
                        // User code: normal clip-right varies. 

                        // If it's to the right of scanner, show Normal?
                        normal.style.setProperty('--clip-right', '0%');
                        ascii.style.setProperty('--clip-left', '100%');
                    }
                }
            }
        });

        this.scannerCallback(active);
    }

    destroy() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.cardLine.removeEventListener('mousedown', this.onStart);
        window.removeEventListener('mousemove', this.onMove);
        window.removeEventListener('mouseup', this.onEnd);
    }
}


/* -------------------------------------------------------------------------- */
/*                              COMPONENT                                     */
/* -------------------------------------------------------------------------- */

export const TestimonialStream: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardLineRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scannerCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!containerRef.current || !cardLineRef.current || !scannerCanvasRef.current) return;

        // Initialize Scanner Visuals
        const scannerVisuals = new ParticleScanner(scannerCanvasRef.current);

        // Initialize Card Logic
        const cardController = new CardController(
            containerRef.current,
            cardLineRef.current,
            (active) => scannerVisuals.setScanning(active)
        );

        // Initialize ThreeJS Particles Background
        let threeRenderer: THREE.WebGLRenderer;
        let threeScene: THREE.Scene;
        let threeCamera: THREE.OrthographicCamera;
        let particles: THREE.Points;

        if (canvasRef.current) {
            const w = window.innerWidth;
            const h = 400; // Match container height

            threeScene = new THREE.Scene();
            threeCamera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 1, 1000);
            threeCamera.position.z = 100;

            threeRenderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
            threeRenderer.setSize(w, h);

            // Create Particles
            const count = 400;
            const geom = new THREE.BufferGeometry();
            const pos = new Float32Array(count * 3);
            const sizes = new Float32Array(count);

            for (let i = 0; i < count; i++) {
                pos[i * 3] = (Math.random() - 0.5) * w;
                pos[i * 3 + 1] = (Math.random() - 0.5) * h;
                pos[i * 3 + 2] = 0;
                sizes[i] = Math.random() * 2;
            }

            geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            geom.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

            const mat = new THREE.PointsMaterial({ color: 0x3B82F6, size: 2, transparent: true, opacity: 0.6 });
            particles = new THREE.Points(geom, mat);
            threeScene.add(particles);

            const animateThree = () => {
                const arr = geom.attributes.position.array as Float32Array;
                for (let i = 0; i < count; i++) {
                    arr[i * 3] -= 0.5; // Move left
                    if (arr[i * 3] < -w / 2) arr[i * 3] = w / 2; // Wrap
                }
                geom.attributes.position.needsUpdate = true;
                threeRenderer.render(threeScene, threeCamera);
                requestAnimationFrame(animateThree);
            };
            animateThree();
        }

        return () => {
            cardController.destroy();
            scannerVisuals.destroy();
            // three cleanup if needed
        };
    }, []);

    return (
        <div className="testimonial-stream-container" ref={containerRef}>

            {/* Background Particles */}
            <canvas id="particleCanvas" ref={canvasRef} />

            {/* Scanner Visuals */}
            <canvas id="scannerCanvas" ref={scannerCanvasRef} />
            <div className="ts-scanner"></div>

            {/* Stream */}
            <div className="ts-card-stream">
                <div className="ts-card-line" ref={cardLineRef}>
                    {/* Populated by JS */}
                </div>
            </div>

            {/* Controls Overlay */}
            <div className="ts-controls">
                <div className="ts-speed-indicator">
                    SCANNING...
                </div>
            </div>

        </div>
    );
};
