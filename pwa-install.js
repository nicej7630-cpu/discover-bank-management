// ═══════════════════════════════════════════════
// PWA INSTALL SCRIPT — Discover Bank
// Add this script to index.html, login.html,
// and dashboard.html
// ═══════════════════════════════════════════════

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('✅ Service Worker registered'))
      .catch(err => console.log('SW registration failed:', err));
  });
}

// Show Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallBanner();
});

function showInstallBanner() {
  // Don't show if already installed
  if (window.matchMedia('(display-mode: standalone)').matches) return;

  const banner = document.createElement('div');
  banner.id = 'pwa-banner';
  banner.innerHTML = `
    <div style="
      position:fixed;bottom:0;left:0;right:0;
      background:linear-gradient(135deg,#001F3F,#00325F);
      color:white;padding:1rem 1.25rem;
      display:flex;align-items:center;justify-content:space-between;
      z-index:9999;box-shadow:0 -4px 20px rgba(0,0,0,0.3);
      font-family:Inter,Arial,sans-serif;gap:0.75rem;flex-wrap:wrap
    ">
      <div style="display:flex;align-items:center;gap:0.75rem">
        <div style="width:40px;height:40px;background:#E87722;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.2rem;flex-shrink:0">D</div>
        <div>
          <div style="font-weight:700;font-size:0.9rem">Install Discover Bank App</div>
          <div style="font-size:0.75rem;color:rgba(255,255,255,0.7)">Add to your home screen for quick access</div>
        </div>
      </div>
      <div style="display:flex;gap:0.5rem;flex-shrink:0">
        <button onclick="installPWA()" style="
          padding:0.5rem 1.1rem;background:#E87722;color:white;
          border:none;border-radius:6px;font-size:0.82rem;font-weight:700;cursor:pointer
        ">📲 Install App</button>
        <button onclick="dismissBanner()" style="
          padding:0.5rem 0.9rem;background:rgba(255,255,255,0.15);color:white;
          border:1px solid rgba(255,255,255,0.3);border-radius:6px;font-size:0.82rem;cursor:pointer
        ">✕</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
}

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('✅ App installed!');
      }
      deferredPrompt = null;
      dismissBanner();
    });
  }
}

function dismissBanner() {
  const banner = document.getElementById('pwa-banner');
  if (banner) banner.remove();
  sessionStorage.setItem('pwa-dismissed', '1');
}

// Don't show again if dismissed this session
if (sessionStorage.getItem('pwa-dismissed')) {
  window.removeEventListener('beforeinstallprompt', showInstallBanner);
}

// Handle app installed
window.addEventListener('appinstalled', () => {
  console.log('✅ Discover Bank app installed successfully!');
  dismissBanner();
});
