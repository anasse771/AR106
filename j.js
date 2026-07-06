// Data for the overlay sections

const sectionData = {
    about: `
                <h2 class="section-title text-white mb-16">ABOUT INTRO</h2>
                <div class="grid md:grid-cols-2 gap-12 text-2xl md:text-3xl font-bold tracking-tight leading-relaxed">
                    <div>
                        <p class="mb-8">I am constantly striving to push the boundaries of design and clean coding. As a freelance developer currently studying at CMC, I specialize in bridging the gap between sophisticated UI/UX and solid backend architecture.</p>
                        <p>My technical stack is built on a strong foundation of HTML5, CSS3, JavaScript, PHP, Python, and SQL.</p>
                    </div>
                    <div>
                        <p class="mb-8">If specified, I can consult on full-stack web solutions, database management, and custom automations tailored to your specific environment.</p>
                        <p class="text-gray-400">I am always seeking to create captivating digital experiences and pursue new technical implementations. Every line of code I write is a step toward my ultimate ambition: securing a seat at Microsoft to build world-class, innovative solutions.</p>
                    </div>
                </div>
                <h2 class="massive-text text-white mt-32 mb-10">MY FAVORITES & INTERESTS</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-xl font-bold border-t border-white/20 pt-8">
                    <div><span class="text-gray-500 block text-sm mb-2 uppercase tracking-widest">Design Aesthetics</span>Dark-themed UI/UX, Claymorphism, and neon accents mixed with smooth CSS animations.</div>
                    <div><span class="text-gray-500 block text-sm mb-2 uppercase tracking-widest">Tech Exploration</span>Building automation workflows and backend logic using tools like Node.js and n8n.</div>
                    <div><span class="text-gray-500 block text-sm mb-2 uppercase tracking-widest">Finance & Markets</span>Day trading and technical analysis, specifically tracking Gold (XAUUSD) and Bitcoin (BTC/USD).</div>
                    <div><span class="text-gray-500 block text-sm mb-2 uppercase tracking-widest">Sports</span>Passionate about Moroccan football, always supporting Wydad AC and the national team.</div>
                </div>
            `,
    blog: `
                <h2 class="section-title text-white mb-16">LATEST POSTS</h2>
                <div class="grid md:grid-cols-2 gap-10">
                    <div class="border border-white/20 p-10 hover:bg-white/5 transition-colors cursor-pointer group rounded-3xl">
                        <span class="text-sm tracking-widest uppercase mb-4 block text-gray-400">22/02/2026</span>
                        <h3 class="text-4xl font-bold mb-10 group-hover:translate-x-2 transition-transform">Mastering CSS Animations for Immersive UIs</h3>
                        <div class="w-16 h-16 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                            →
                        </div>
                    </div>
                    <div class="border border-white/20 p-10 hover:bg-white/5 transition-colors cursor-pointer group rounded-3xl">
                        <span class="text-sm tracking-widest uppercase mb-4 block text-gray-400">28/05/2026</span>
                        <h3 class="text-4xl font-bold mb-10 group-hover:translate-x-2 transition-transform">Building a Full-Stack Portfolio: My Journey .</h3>
                        <div class="w-16 h-16 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                            →
                        </div>
                    </div>
                </div>
            `,
    contact: `
                <h2 class="section-title text-white mb-16">GET IN TOUCH</h2>
                <div class="grid md:grid-cols-2 gap-10">
                    <div class="bg-white/10 p-12 rounded-3xl backdrop-blur-sm">
                        <h3 class="text-6xl font-bold mb-6">Mail</h3>
                        <p class="text-2xl mb-12 text-gray-300">Feel free to email me with any questions or website creation requests.</p>
                        <a href="mailto:anassriyahi2@gmail.com" class="text-2xl text-blue-400 hover:text-blue-300 transition-colors">anassriyahi2@gmail.com</a>
                        
                    </div>
                    <div class="bg-white/5 p-12 rounded-3xl border border-white/10 flex flex-col justify-between">
                        <div>
                            <h3 class="text-6xl font-bold mb-6">LinkedIN</h3>
                            <p class="text-2xl mb-12 text-gray-300">Connect with me on LinkedIn for professional networking and collaboration opportunities.</p>
                            <a href="https://www.linkedin.com/in/anasse-riyahi-b14bb53a5/" target="_blank" class="text-2xl text-blue-400 hover:text-blue-300 transition-colors">Visit my LinkedIn</a>
                        </div>
                    </div>
                </div>
            `
};

// Custom Cursor Logic

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    const mainContent = document.getElementById('main-content');
    const introScreen = document.getElementById('intro-screen');

    // 1. Safe Cursor Logic
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        });

        const interactables = document.querySelectorAll('a, button, .color-bar, .hover-trigger');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    // 2. Safe Color Switcher
    const btnChangeColor = document.getElementById('btn-change-color');
    if (btnChangeColor) {
        btnChangeColor.addEventListener('click', () => {
            if (mainContent && introScreen) {
                gsap.to(mainContent, { opacity: 0, y: 50, duration: 0.5, onComplete: () => {
                    mainContent.style.display = 'none';
                    introScreen.style.display = 'flex';
                }});
            }
        });
    }

    // 3. GSAP ScrollTrigger Registry
    gsap.registerPlugin(ScrollTrigger);
    
    // Additional logic...
});

// Ajout de l'effet "Hover" sur tous les éléments cliquables
const addCursorHover = () => {
    // Ciblage complet: liens, boutons, barres de couleur, et éléments d'action
    const interactableElements = document.querySelectorAll('a, button, .color-bar, .hover-trigger, .action-btn, .btn-download, .btn-contact');
    
    interactableElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
};

// Initialisation au chargement
addCursorHover();

// 1. Color Selection Animation Sequence
const btnChangeColor = document.getElementById('btn-change-color');

btnChangeColor.addEventListener('click', () => {
    // Une timeline GSAP pour une transition professionnelle
    const tlBack = gsap.timeline();

    // 1. Kan-khbiw le site complet b chwiya (Fade out lteht)
    tlBack.to(mainContent, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
            mainContent.style.display = 'none'; // Kanhaydoh mn l'écran
            introScreen.style.display = 'flex'; // Kanreddo l'Intro screen
        }
    })
        // 2. Kan-biyenou le grand titre "CLICK ON YOUR FAVORITE COLOR"
        .fromTo('#intro-title',
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        )
        // 3. Kan-reddo les barres de couleurs ybano b tariqa cascade (Stagger)
        .fromTo('.color-bar',
            { opacity: 0, scaleY: 0 },
            { opacity: 1, scaleY: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.7)" },
            "-=0.2"
        );
});
let selectedColor = '#eab308'; // Default Yellow
const colorBars = document.querySelectorAll('.color-bar');
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const body = document.body;

colorBars.forEach(bar => {
    bar.addEventListener('click', (e) => {
        selectedColor = bar.dataset.color;

        // Get coordinates for seamless expansion
        const rect = bar.getBoundingClientRect();

        // Set body background to the selected color behind the scenes
        body.style.backgroundColor = selectedColor;
        document.documentElement.style.setProperty('--bg-dinamique', selectedColor);

        // GSAP Timeline for the entry sequence
        const tl = gsap.timeline();

        // Fade out text
        tl.to('#intro-title', { opacity: 0, y: -50, duration: 0.4, ease: "power2.in" });

        // Fade out other bars
        tl.to('.color-bar', {
            opacity: 0,
            duration: 0.3,
            stagger: 0.05
        }, "-=0.2");

        // Expand clicked bar to fill screen
        const expandOverlay = document.createElement('div');
        expandOverlay.style.position = 'fixed';
        expandOverlay.style.top = rect.top + 'px';
        expandOverlay.style.left = rect.left + 'px';
        expandOverlay.style.width = rect.width + 'px';
        expandOverlay.style.height = rect.height + 'px';
        expandOverlay.style.backgroundColor = selectedColor;
        expandOverlay.style.zIndex = '100';
        document.body.appendChild(expandOverlay);

        tl.to(expandOverlay, {
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            duration: 0.8,
            ease: "expo.inOut",
            onComplete: () => {
                // Switch contexts
                introScreen.style.display = 'none';
                mainContent.style.display = 'block';

                // ScrollTrigger refresh needed because we changed display from none to block
                ScrollTrigger.refresh();

                // Text color adjustments based on background brightness
                // (Assuming most colors chosen are bright, so text is black)
                if (selectedColor === '#ffffff' || selectedColor === '#eab308' || selectedColor === '#22c55e' || selectedColor === '#06b6d4' || selectedColor === '#f97316' || selectedColor === '#ec4899') {
                    mainContent.style.color = '#000000';
                }
            }
        });

        // Fade in main content and remove overlay
        tl.fromTo(mainContent,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        tl.to(expandOverlay, { opacity: 0, duration: 0.5, onComplete: () => expandOverlay.remove() }, "-=0.5");
    });
});

// 2. Open Detail Overlay Animation
const overlay = document.getElementById('detail-overlay');
const overlayContent = document.getElementById('detail-content');

window.openDetail = function (sectionKey) {
    // Inject specific content
    overlayContent.innerHTML = sectionData[sectionKey];

    // Re-bind cursor hover events for new content
    addCursorHover();

    overlay.style.display = 'flex';

    // Using clip-path for that circular reveal effect seen in premium sites
    gsap.fromTo(overlay,
        { clipPath: 'circle(0% at 10% 90%)' },
        { clipPath: 'circle(150% at 10% 90%)', duration: 1.2, ease: "expo.inOut" }
    );

    // Stagger text animations inside overlay
    gsap.fromTo(overlayContent.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.4 }
    );

    // Hide custom cursor briefly or change state
    cursor.classList.remove('active');
};

// 3. Close Detail Overlay
window.closeDetail = function () {
    gsap.to(overlay, {
        clipPath: 'circle(0% at 10% 90%)',
        duration: 0.8,
        ease: "expo.inOut",
        onComplete: () => {
            overlay.style.display = 'none';
            overlayContent.innerHTML = ''; // clear
        }
    });
};

// 4. Scroll Animations setup via GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Setup after page is active (we could call this after the intro animation)
setTimeout(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        const title = sec.querySelector('.section-title');
        if (title) {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: sec,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            });
        }
    });
}, 1000);
window.addEventListener('scroll', function () {
    let scrollPosition = window.pageYOffset;
    let arText = document.querySelector('.main-title');
    let heroButtons = document.querySelector('.hero-buttons');

    if (arText) arText.style.transform = 'translateY(' + (scrollPosition * 0.1) + 'px)';
    if (heroButtons) heroButtons.style.transform = 'translateY(' + (scrollPosition * 0.1) + 'px)';
});

// 2. LE NOUVEAU CODE pour l'animation d'apparition fluide (Reveal)
document.addEventListener("DOMContentLoaded", function () {
    let reveals = document.querySelectorAll(".reveal");

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Mli katban l'section, kanzidou liha 'active'
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15 // Katbda l'animation mli kayban 15% mn l'intro
    });

    reveals.forEach(function (reveal) {
        observer.observe(reveal);
    });
}); 
