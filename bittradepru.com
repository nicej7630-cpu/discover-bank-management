<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Discover Bank Management — Secure. Smart. Trusted.</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy:    #0B1B2B;
      --ink:     #152134;
      --slate:   #2A3F55;
      --gold:    #C9A84C;
      --gold-lt: #E8C97A;
      --cream:   #F7F4EE;
      --white:   #FFFFFF;
      --muted:   #8FA3B8;
      --glass:   rgba(255,255,255,0.05);
      --border:  rgba(201,168,76,0.25);
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--navy);
      color: var(--cream);
      overflow-x: hidden;
    }

    /* ── NAV ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.25rem 4rem;
      background: rgba(11,27,43,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.35rem; font-weight: 700;
      color: var(--gold);
      letter-spacing: 0.04em;
    }
    .nav-logo span { color: var(--cream); font-weight: 400; }
    .nav-links { display: flex; gap: 2.5rem; }
    .nav-links a {
      font-size: 0.82rem; font-weight: 500;
      color: var(--muted); text-decoration: none;
      letter-spacing: 0.08em; text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--gold); }
    .nav-cta {
      font-size: 0.82rem; font-weight: 600;
      padding: 0.55rem 1.4rem;
      background: var(--gold);
      color: var(--navy);
      border: none; border-radius: 2px;
      cursor: pointer; letter-spacing: 0.06em; text-transform: uppercase;
      transition: background 0.2s;
      text-decoration: none;
    }
    .nav-cta:hover { background: var(--gold-lt); }

    /* ── HERO ── */
    .hero {
      min-height: 100vh;
      display: flex; flex-direction: column; justify-content: center; align-items: center;
      text-align: center;
      padding: 8rem 2rem 5rem;
      position: relative;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute; inset: 0; z-index: 0;
      background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(42,63,85,0.45) 0%, transparent 70%),
                  linear-gradient(180deg, var(--navy) 0%, var(--ink) 100%);
    }
    /* Subtle grid lines */
    .hero-bg::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .hero-content { position: relative; z-index: 1; max-width: 760px; }
    .hero-eyebrow {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem; color: var(--gold);
      letter-spacing: 0.18em; text-transform: uppercase;
      margin-bottom: 1.6rem;
    }
    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 900; line-height: 1.05;
      color: var(--white);
      margin-bottom: 1.5rem;
    }
    .hero-title em {
      font-style: normal; color: var(--gold);
    }
    .hero-subtitle {
      font-size: 1.1rem; font-weight: 300;
      color: var(--muted); line-height: 1.7;
      max-width: 540px; margin: 0 auto 2.8rem;
    }
    .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn-primary {
      padding: 0.85rem 2.2rem;
      background: var(--gold); color: var(--navy);
      font-weight: 700; font-size: 0.9rem;
      border: none; border-radius: 2px; cursor: pointer;
      letter-spacing: 0.06em; text-transform: uppercase;
      text-decoration: none;
      transition: background 0.2s, transform 0.15s;
    }
    .btn-primary:hover { background: var(--gold-lt); transform: translateY(-1px); }
    .btn-outline {
      padding: 0.85rem 2.2rem;
      background: transparent; color: var(--cream);
      font-weight: 500; font-size: 0.9rem;
      border: 1px solid var(--border); border-radius: 2px; cursor: pointer;
      letter-spacing: 0.06em; text-transform: uppercase;
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s;
    }
    .btn-outline:hover { border-color: var(--gold); color: var(--gold); }

    /* ── TICKER ── */
    .ticker {
      background: var(--gold);
      padding: 0.55rem 0; overflow: hidden;
      white-space: nowrap;
    }
    .ticker-inner {
      display: inline-block;
      animation: ticker 28s linear infinite;
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem; font-weight: 500;
      color: var(--navy); letter-spacing: 0.1em;
    }
    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ── SECTIONS ── */
    section { padding: 6rem 4rem; }
    .section-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.72rem; color: var(--gold);
      letter-spacing: 0.18em; text-transform: uppercase;
      margin-bottom: 0.75rem;
    }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.9rem, 4vw, 3rem);
      font-weight: 700; color: var(--white);
      line-height: 1.2; margin-bottom: 1.25rem;
    }
    .section-body {
      font-size: 1rem; color: var(--muted);
      line-height: 1.8; max-width: 520px;
    }

    /* ── STATS ROW ── */
    .stats {
      display: grid; grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 3rem 4rem; gap: 0;
    }
    .stat {
      padding: 1rem 2rem; text-align: center;
      border-right: 1px solid var(--border);
    }
    .stat:last-child { border-right: none; }
    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 3rem; font-weight: 900;
      color: var(--gold); line-height: 1;
      margin-bottom: 0.4rem;
    }
    .stat-label {
      font-size: 0.8rem; color: var(--muted);
      letter-spacing: 0.06em; text-transform: uppercase;
    }

    /* ── FEATURES ── */
    .features { background: var(--ink); }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 0;
      border: 1px solid var(--border);
      margin-top: 3.5rem;
    }
    .feature-card {
      padding: 2.5rem;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      transition: background 0.2s;
    }
    .feature-card:hover { background: var(--glass); }
    .feature-icon {
      width: 42px; height: 42px;
      border: 1px solid var(--border);
      border-radius: 2px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.4rem;
      font-size: 1.2rem;
    }
    .feature-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem; font-weight: 700;
      color: var(--white); margin-bottom: 0.75rem;
    }
    .feature-desc {
      font-size: 0.88rem; color: var(--muted); line-height: 1.75;
    }

    /* ── HOW IT WORKS ── */
    .how { background: var(--navy); }
    .steps {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem; margin-top: 3.5rem;
    }
    .step {
      position: relative;
      padding: 2rem;
      border-left: 2px solid var(--border);
    }
    .step-num {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem; color: var(--gold);
      letter-spacing: 0.15em; margin-bottom: 1rem;
    }
    .step-title {
      font-size: 1.05rem; font-weight: 600;
      color: var(--white); margin-bottom: 0.6rem;
    }
    .step-desc { font-size: 0.86rem; color: var(--muted); line-height: 1.7; }

    /* ── PRODUCTS ── */
    .products { background: var(--ink); }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem; margin-top: 3rem;
    }
    .product-card {
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: 2px; padding: 2.2rem;
      transition: border-color 0.2s, transform 0.15s;
    }
    .product-card:hover { border-color: var(--gold); transform: translateY(-2px); }
    .product-tag {
      display: inline-block;
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem; letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 0.25rem 0.6rem;
      background: rgba(201,168,76,0.15); color: var(--gold);
      border-radius: 2px; margin-bottom: 1rem;
    }
    .product-name {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem; font-weight: 700;
      color: var(--white); margin-bottom: 0.5rem;
    }
    .product-rate {
      font-family: 'DM Mono', monospace;
      font-size: 1.6rem; color: var(--gold);
      margin-bottom: 0.5rem;
    }
    .product-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.7; }

    /* ── SECURITY BAND ── */
    .security-band {
      background: linear-gradient(135deg, var(--slate), var(--navy));
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 4rem;
      display: flex; align-items: center;
      gap: 3rem; flex-wrap: wrap;
    }
    .security-text { flex: 1; min-width: 280px; }
    .security-badges {
      display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;
    }
    .badge {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: 2px;
      font-family: 'DM Mono', monospace;
      font-size: 0.72rem; color: var(--muted);
      letter-spacing: 0.1em; text-transform: uppercase;
    }

    /* ── CTA BANNER ── */
    .cta-banner {
      padding: 7rem 4rem; text-align: center;
      background: var(--navy);
      position: relative; overflow: hidden;
    }
    .cta-banner::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%);
    }
    .cta-banner .section-title { position: relative; }
    .cta-banner .section-body { position: relative; margin: 0 auto 2.5rem; text-align: center; }
    .cta-banner .hero-actions { position: relative; }

    /* ── FOOTER ── */
    footer {
      background: var(--ink);
      border-top: 1px solid var(--border);
      padding: 3.5rem 4rem 2rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem; margin-bottom: 3rem;
    }
    .footer-brand .nav-logo { display: block; margin-bottom: 1rem; }
    .footer-brand p { font-size: 0.85rem; color: var(--muted); line-height: 1.7; }
    .footer-col h4 {
      font-size: 0.78rem; font-weight: 600;
      color: var(--gold); letter-spacing: 0.1em;
      text-transform: uppercase; margin-bottom: 1.2rem;
    }
    .footer-col ul { list-style: none; }
    .footer-col li { margin-bottom: 0.6rem; }
    .footer-col a {
      font-size: 0.85rem; color: var(--muted);
      text-decoration: none; transition: color 0.2s;
    }
    .footer-col a:hover { color: var(--cream); }
    .footer-bottom {
      border-top: 1px solid var(--border);
      padding-top: 1.5rem;
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;
      font-size: 0.78rem; color: var(--muted);
    }
    .footer-bottom a { color: var(--muted); text-decoration: none; }
    .footer-bottom a:hover { color: var(--gold); }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      nav { padding: 1rem 1.5rem; }
      .nav-links { display: none; }
      section { padding: 4rem 1.5rem; }
      .stats { grid-template-columns: 1fr; padding: 2rem 1.5rem; }
      .stat { border-right: none; border-bottom: 1px solid var(--border); }
      .stat:last-child { border-bottom: none; }
      .security-band { padding: 2.5rem 1.5rem; }
      .cta-banner { padding: 4rem 1.5rem; }
      footer { padding: 2.5rem 1.5rem 1.5rem; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .footer-bottom { flex-direction: column; text-align: center; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ticker-inner { animation: none; }
      * { transition: none !important; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <div class="nav-logo">Discover<span> Bank Management</span></div>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#products">Products</a>
      <a href="#security">Security</a>
      <a href="#about">About</a>
    </div>
    <a href="#open" class="nav-cta">Open Account</a>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <p class="hero-eyebrow">Est. 2024 · Federally Chartered · FDIC Insured</p>
      <h1 class="hero-title">Banking Built for the <em>Modern</em> Moment</h1>
      <p class="hero-subtitle">One-Time Bank reimagines how money moves. Every transaction is verified once, secured once, and settled — no re-authorisations, no hidden delays.</p>
      <div class="hero-actions">
        <a href="#open" class="btn-primary">Open Free Account</a>
        <a href="#features" class="btn-outline">See How It Works</a>
      </div>
    </div>
  </section>

  <!-- TICKER -->
  <div class="ticker">
    <div class="ticker-inner">
      SAVINGS APY 4.85% &nbsp;·&nbsp; ZERO MONTHLY FEES &nbsp;·&nbsp; INSTANT TRANSFERS &nbsp;·&nbsp; FDIC INSURED UP TO $250,000 &nbsp;·&nbsp;
      256-BIT ENCRYPTION &nbsp;·&nbsp; 24/7 SUPPORT &nbsp;·&nbsp; NO MINIMUM BALANCE &nbsp;·&nbsp;
      SAVINGS APY 4.85% &nbsp;·&nbsp; ZERO MONTHLY FEES &nbsp;·&nbsp; INSTANT TRANSFERS &nbsp;·&nbsp; FDIC INSURED UP TO $250,000 &nbsp;·&nbsp;
      256-BIT ENCRYPTION &nbsp;·&nbsp; 24/7 SUPPORT &nbsp;·&nbsp; NO MINIMUM BALANCE &nbsp;·&nbsp;
    </div>
  </div>

  <!-- STATS -->
  <div class="stats">
    <div class="stat">
      <div class="stat-num">$2.4B</div>
      <div class="stat-label">Assets Under Management</div>
    </div>
    <div class="stat">
      <div class="stat-num">480K+</div>
      <div class="stat-label">Active Account Holders</div>
    </div>
    <div class="stat">
      <div class="stat-num">99.99%</div>
      <div class="stat-label">Uptime Guarantee</div>
    </div>
  </div>

  <!-- FEATURES -->
  <section class="features" id="features">
    <div class="section-label">Why Discover Bank Management</div>
    <h2 class="section-title">Precision Banking,<br>No Compromises</h2>
    <p class="section-body">We stripped away every friction point and kept only what matters: your money, moving exactly when you need it to.</p>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🔐</div>
        <div class="feature-title">One-Time Verification</div>
        <div class="feature-desc">Every transaction uses a unique cryptographic token. Authorise once — no re-prompts, no repeated logins.</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">Instant Settlement</div>
        <div class="feature-desc">Transfers clear in under 4 seconds, any time of day. ACH delays are not in our vocabulary.</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <div class="feature-title">Real-Time Insights</div>
        <div class="feature-desc">Your spending, categorised and visualised the moment a charge posts — not the next morning.</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🌍</div>
        <div class="feature-title">Global Transfers</div>
        <div class="feature-desc">Send to 60+ countries at interbank rates. No correspondent-bank markups, no mysterious fees.</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <div class="feature-title">Smart Budgeting</div>
        <div class="feature-desc">Set rules, auto-save round-ups, and goal envelopes that move money before you can spend it.</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🤝</div>
        <div class="feature-title">Human Support</div>
        <div class="feature-desc">A real banker picks up within 90 seconds, around the clock. No bots, no scripts, no hold music.</div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="how" id="how">
    <div class="section-label">Getting Started</div>
    <h2 class="section-title">Open in Under<br>Three Minutes</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">Step 01</div>
        <div class="step-title">Apply Online</div>
        <div class="step-desc">Provide your name, address, and a government ID. No paper, no branch visit required.</div>
      </div>
      <div class="step">
        <div class="step-num">Step 02</div>
        <div class="step-title">Instant Verification</div>
        <div class="step-desc">Our system verifies identity in real time. Approval arrives as a notification, not an email days later.</div>
      </div>
      <div class="step">
        <div class="step-num">Step 03</div>
        <div class="step-title">Fund Your Account</div>
        <div class="step-desc">Link an existing account or deposit a check via the app. Funds are available immediately up to $500.</div>
      </div>
      <div class="step">
        <div class="step-num">Step 04</div>
        <div class="step-title">Start Banking</div>
        <div class="step-desc">Your debit card is ready for digital wallet use the moment your account opens. Physical card ships same day.</div>
      </div>
    </div>
  </section>

  <!-- PRODUCTS -->
  <section class="products" id="products">
    <div class="section-label">Our Accounts</div>
    <h2 class="section-title">The Right Account<br>for Every Goal</h2>
    <div class="products-grid">
      <div class="product-card">
        <span class="product-tag">Checking</span>
        <div class="product-name">Everyday</div>
        <div class="product-rate">$0/mo</div>
        <div class="product-desc">No fees, no minimums. Free ATM access at 55,000+ locations. Cashback on everyday purchases.</div>
      </div>
      <div class="product-card">
        <span class="product-tag">Savings</span>
        <div class="product-name">High-Yield</div>
        <div class="product-rate">4.85% APY</div>
        <div class="product-desc">One of the highest rates available. Compounded daily, paid monthly. No limit on withdrawals.</div>
      </div>
      <div class="product-card">
        <span class="product-tag">Business</span>
        <div class="product-name">Business Pro</div>
        <div class="product-rate">$12/mo</div>
        <div class="product-desc">Multi-user access, invoicing tools, ACH batch payments, and a dedicated business banker.</div>
      </div>
      <div class="product-card">
        <span class="product-tag">Investment</span>
        <div class="product-name">Grow</div>
        <div class="product-rate">$0 trades</div>
        <div class="product-desc">Fractional shares, ETFs, and managed portfolios — all from the same app as your checking account.</div>
      </div>
    </div>
  </section>

  <!-- SECURITY BAND -->
  <div class="security-band" id="security">
    <div class="security-text">
      <div class="section-label">Security</div>
      <h2 class="section-title" style="font-size:1.9rem;">Your Money Is<br>Protected at Every Layer</h2>
      <p class="section-body" style="margin-top:0.75rem;">From device to vault, Discover Bank Mana
