// =============================================
//  SEJAL'S BIRTHDAY WEBSITE — SCRIPT
// =============================================

// ---- Detect Mobile & Disable Cursor Glow ----
const isMobile = () => window.innerWidth <= 768 || 
                       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const cursorGlow = document.getElementById('cursor-glow');
if (isMobile()) {
  if (cursorGlow) cursorGlow.style.display = 'none';
} else {
  // Desktop: update cursor glow position on mouse move
  document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    }
  }, { passive: true });
}

// ---- Osho Quotes ----
const oshoQuotes = [
  "The real question is not whether life exists after death. The real question is whether you are alive before death.",
  "The moment you start seeing life as non-serious, a playfulness, all the burden on your heart disappears.",
  "Don't seek, don't search, don't ask, don't knock, don't demand — relax. If you relax, it comes. If you relax, it is there.",
  "Life begins where fear ends.",
  "Be — don't try to become.",
  "To be creative means to be in love with life. You can be creative only if you love life enough that you want to enhance its beauty.",
  "The only way to find silence is to not look for it. Silence is always there; just you are not there.",
  "Wherever you are is the entry point.",
  "Experience life in all possible ways — good-bad, bitter-sweet, dark-light, summer-winter. Experience all the dualities.",
  "A mature person is one who does not think only in terms of his own point of view but is capable of looking at things from another person's angle also.",
  "Be realistic — plan for a miracle.",
  "Truth is not something outside to be discovered; it is something inside to be realized.",
  "Courage is a love affair with the unknown.",
  "If you love a flower, don't pick it up. Because if you pick it up it dies and it ceases to be what you love. So if you love a flower, let it be.",
];

let lastQuoteIdx = -1;

function getNewQuote() {
  let idx;
  do {
    idx = Math.floor(Math.random() * oshoQuotes.length);
  } while (idx === lastQuoteIdx);
  lastQuoteIdx = idx;
  return oshoQuotes[idx];
}

// Osho click interaction
const oshoLeaf = document.getElementById('oshoLeaf');
const oshoQuoteEl = document.getElementById('oshoQuote');

oshoLeaf.addEventListener('click', () => {
  oshoLeaf.classList.add('spin');
  oshoQuoteEl.classList.add('fading');

  setTimeout(() => {
    oshoQuoteEl.textContent = getNewQuote();
    oshoQuoteEl.classList.remove('fading');
    oshoLeaf.classList.remove('spin');
  }, 400);
});

// ---- Intro Overlay Click ----
const introOverlay = document.getElementById('intro-overlay');
introOverlay.addEventListener('click', () => {
  introOverlay.classList.add('hidden');
});

// ---- Floating Particles ----
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  const x = Math.random() * 100;
  const duration = 8 + Math.random() * 14;
  const delay = Math.random() * 10;
  const drift = (Math.random() - 0.5) * 80;
  const size = 2 + Math.random() * 5;
  p.style.cssText = `
    left: ${x}vw;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${duration}s;
    animation-delay: -${delay}s;
    --drift: ${drift}px;
    opacity: ${0.2 + Math.random() * 0.5};
    background: ${Math.random() > 0.5 ? 'rgba(122,170,110,0.5)' : 'rgba(200,224,150,0.4)'};
  `;
  particlesContainer.appendChild(p);
}

for (let i = 0; i < 28; i++) createParticle();

// ---- Fireflies ----
const firefliesContainer = document.getElementById('fireflies');

function createFirefly() {
  const f = document.createElement('div');
  f.className = 'firefly';
  const x = 10 + Math.random() * 80;
  const y = 10 + Math.random() * 80;
  const moveDuration = 12 + Math.random() * 20;
  const blinkDuration = 2 + Math.random() * 4;
  const blinkDelay = Math.random() * 4;
  const dx1 = (Math.random() - 0.5) * 200 + 'px';
  const dy1 = (Math.random() - 0.5) * 150 + 'px';
  const dx2 = (Math.random() - 0.5) * 200 + 'px';
  const dy2 = (Math.random() - 0.5) * 150 + 'px';
  const dx3 = (Math.random() - 0.5) * 200 + 'px';
  const dy3 = (Math.random() - 0.5) * 150 + 'px';
  f.style.cssText = `
    left: ${x}vw;
    top: ${y}vh;
    animation: fireflyMove ${moveDuration}s linear infinite,
               fireflyBlink ${blinkDuration}s ease-in-out ${blinkDelay}s infinite;
    --dx1: ${dx1}; --dy1: ${dy1};
    --dx2: ${dx2}; --dy2: ${dy2};
    --dx3: ${dx3}; --dy3: ${dy3};
  `;
  firefliesContainer.appendChild(f);
}

for (let i = 0; i < 18; i++) createFirefly();

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll('.reveal');

function checkReveal() {
  const windowH = window.innerHeight;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    const delay = parseInt(el.dataset.delay || 0);
    if (rect.top < windowH * 0.88) {
      setTimeout(() => el.classList.add('visible'), delay);
    }
  });
}

window.addEventListener('scroll', checkReveal, { passive: true });
window.addEventListener('resize', checkReveal, { passive: true });
checkReveal();

// ---- Final Section Stars ----
const finalStars = document.getElementById('finalStars');

function createStar() {
  const s = document.createElement('div');
  s.className = 'star';
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = 1 + Math.random() * 3;
  const dur = 2 + Math.random() * 5;
  const del = Math.random() * 5;
  s.style.cssText = `
    left: ${x}%;
    top: ${y}%;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${dur}s;
    animation-delay: ${del}s;
  `;
  finalStars.appendChild(s);
}

for (let i = 0; i < 80; i++) createStar();

// ---- Confetti ----
const confettiBtn = document.getElementById('confettiBtn');
const COLORS = [
  '#7aaa6e', '#c8e060', '#a8c99e', '#e8d080',
  '#c8a660', '#88c070', '#f8d88a', '#b8e090',
  '#f0c0a0', '#d0f0a0'
];

function launchConfetti() {
  const count = 120;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const startX = 20 + Math.random() * 60;
      const spin = (Math.random() > 0.5 ? '' : '-') + (360 + Math.random() * 360) + 'deg';
      const sway = (Math.random() - 0.5) * 200 + 'px';
      const dur = 2.5 + Math.random() * 2;
      const size = 6 + Math.random() * 8;
      c.style.cssText = `
        left: ${startX}vw;
        top: -10px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        --spin: ${spin};
        --sway: ${sway};
        animation-duration: ${dur}s;
        animation-delay: ${Math.random() * 0.5}s;
        transform: rotate(${Math.random() * 360}deg);
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), (dur + 0.6) * 1000);
    }, Math.random() * 300);
  }

  // Button text bounce
  confettiBtn.textContent = '🎉 Yay!';
  setTimeout(() => confettiBtn.textContent = '🎊 Celebrate!', 3000);
}

confettiBtn.addEventListener('click', launchConfetti);

// ---- Parallax on hero ----
const sunOrb = document.querySelector('.sun-orb');
const mistLayers = document.querySelectorAll('.mist-layer');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (sunOrb) {
    sunOrb.style.transform = `translateX(-50%) translateY(${scrolled * 0.15}px)`;
  }
  mistLayers.forEach((m, i) => {
    const speed = i === 0 ? 0.08 : 0.05;
    m.style.transform = `translateY(${scrolled * speed}px)`;
  });
}, { passive: true });

// ---- Custom cursor sparkle on hero ----
document.querySelector('.hero').addEventListener('mousemove', e => {
  if (Math.random() > 0.85) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 6px; height: 6px;
      background: rgba(200,224,150,0.8);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      animation: sparkleOut 0.6s ease forwards;
    `;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }
});

// sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
@keyframes sparkleOut {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.5) translateY(-12px); opacity: 0; }
}
`;
document.head.appendChild(sparkleStyle);
