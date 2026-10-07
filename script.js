* {
  box-sizing: border-box;
}

:root {
  --bg: #08111f;
  --bg-soft: #111d2f;
  --panel: rgba(17, 29, 47, 0.85);
  --panel-strong: rgba(22, 38, 60, 0.96);
  --card: rgba(15, 23, 36, 0.9);
  --line: rgba(148, 163, 184, 0.18);
  --text: #edf6ff;
  --muted: #9bb1c9;
  --primary: #6ee7f9;
  --primary-strong: #3dd9ff;
  --accent: #a78bfa;
  --highlight: #86efac;
  --shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(61, 217, 255, 0.16), transparent 30%),
    radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.18), transparent 35%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.background-glow {
  position: fixed;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.28;
  pointer-events: none;
  z-index: 0;
}

.glow-1 {
  top: -10rem;
  left: -5rem;
  background: rgba(61, 217, 255, 0.45);
}

.glow-2 {
  right: -10rem;
  bottom: 0;
  background: rgba(167, 139, 250, 0.42);
}

.site-header,
main,
.site-footer {
  position: relative;
  z-index: 1;
}

.site-header {
  padding: 1.2rem 0;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: rgba(9, 15, 24, 0.6);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
}

.brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #06131d;
  font-weight: 900;
  letter-spacing: 0.06em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: var(--muted);
  font-size: 0.96rem;
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #041823;
  box-shadow: 0 18px 30px rgba(61, 217, 255, 0.2);
}

.button-secondary {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: center;
  gap: 3rem;
  padding: 4.5rem 0 2rem;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 1rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.76rem;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 4vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.hero-text {
  max-width: 60ch;
  margin-top: 1.2rem;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-stats {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 34rem;
}

.hero-stats li {
  background: rgba(17, 29, 47, 0.7);
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 1rem 1rem 0.9rem;
}

.hero-stats strong {
  display: block;
  font-size: 1.8rem;
  line-height: 1;
  margin-bottom: 0.4rem;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: min(100%, 24rem);
  background: linear-gradient(180deg, rgba(17, 29, 47, 0.92), rgba(9, 15, 24, 0.96));
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.mini-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--highlight);
  text-transform: uppercase;
}

.panel-card h3 {
  margin: 0.8rem 0 1rem;
  font-size: 1.7rem;
}

.panel-card ul {
  display: grid;
  gap: 0.75rem;
  padding-left: 1rem;
  color: var(--muted);
  list-style: disc;
}

.section {
  padding: 4.5rem 0;
}

.section-alt {
  background: rgba(9, 15, 24, 0.42);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 2.5vw, 3rem);
  line-height: 1.12;
  letter-spacing: -0.05em;
  max-width: 18ch;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1.5rem;
}

.text-card,
.highlights-card,
.skill-card,
.project-card,
.timeline-content,
.contact-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 1.2rem;
  box-shadow: var(--shadow);
}

.text-card,
.highlights-card {
  padding: 1.5rem;
}

.text-card p {
  margin: 0 0 1rem;
  color: var(--muted);
  font-size: 1.02rem;
}

.text-card p:last-child {
  margin-bottom: 0;
}

.highlights-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.highlights-card ul {
  display: grid;
  gap: 0.7rem;
  color: var(--muted);
  list-style: none;
}

.highlights-card li::before {
  content: "•";
  color: var(--primary);
  margin-right: 0.6rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.skill-card {
  padding: 1.3rem;
}

.skill-card h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 1.15rem;
}

.skill-card ul {
  display: grid;
  gap: 0.6rem;
  color: var(--muted);
}

.skill-card li {
  position: relative;
  padding-left: 0.9rem;
}

.skill-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.project-card {
  padding: 1.5rem;
}

.project-card.featured {
  background: linear-gradient(180deg, rgba(17, 29, 47, 0.94), rgba(10, 18, 30, 0.94));
  border-color: rgba(110, 231, 249, 0.4);
}

.project-tag {
  display: inline-flex;
  border: 1px solid rgba(110, 231, 249, 0.3);
  background: rgba(110, 231, 249, 0.08);
  color: var(--primary);
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-card h3 {
  margin: 1rem 0 0.8rem;
  font-size: 1.4rem;
}

.project-card p {
  margin: 0;
  color: var(--muted);
}

.project-card ul {
  margin-top: 1rem;
  display: grid;
  gap: 0.55rem;
  color: var(--muted);
  list-style: disc;
  padding-left: 1.15rem;
}

.timeline {
  display: grid;
  gap: 1.2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1rem;
  align-items: start;
}

.timeline-date {
  color: var(--primary);
  font-weight: 700;
  padding-top: 1rem;
}

.timeline-content {
  padding: 1.4rem 1.5rem;
}

.timeline-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.timeline-content p {
  margin: 0;
  color: var(--muted);
}

.contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.7rem 1.8rem;
  background: radial-gradient(circle at top left, rgba(61, 217, 255, 0.12), transparent 35%), var(--panel-strong);
}

.contact-card h2 {
  margin: 0;
  font-size: clamp(2rem, 2.5vw, 2.8rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.site-footer {
  padding: 1.5rem 0 3rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
  border-top: 1px solid var(--line);
  padding-top: 1rem;
}

@media (max-width: 960px) {
  .hero,
  .about-grid,
  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    justify-content: flex-start;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .nav {
    border-radius: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-stats,
  .about-grid,
  .skills-grid,
  .timeline-item,
  .contact-card {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    display: grid;
  }

  .timeline-item {
    display: block;
  }

  .contact-card {
    display: block;
  }

  .contact-actions {
    margin-top: 1rem;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .button,
  .nav-links a {
    transition: none;
  }
}

