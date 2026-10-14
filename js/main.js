/**
 * MUHAMMED FAIZAL M — EDITORIAL NEO-BRUTALIST PORTFOLIO
 * Dynamic project rendering, interactive sticker physics, phone simulator, and form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollAndSpy();
  initMobileDrawer();
  initStickerInteractions();
  initPhoneSimulator();
  renderHighlights();
  renderSkills();
  renderFeaturedProjects();
  renderMiniProjects();
  renderExperience();
  renderEducation();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. NAVBAR SCROLL & ACTIVE SECTION SPY
   ========================================================================== */
function initNavbarScrollAndSpy() {
  const navbar = document.querySelector('.site-navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-item');

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPos = window.scrollY + 160;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   2. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const menuWrapper = document.querySelector('.nav-menu-wrapper');
  const backdrop = document.querySelector('.nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-menu-wrapper .nav-link-item');

  if (!toggleBtn || !menuWrapper || !backdrop) return;

  function openDrawer() {
    menuWrapper.classList.add('open');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    menuWrapper.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (menuWrapper.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. STICKER INTERACTIONS & LIGHT DRAG / POP EFFECT
   ========================================================================== */
function initStickerInteractions() {
  const stickers = document.querySelectorAll('.sticker');
  
  stickers.forEach((sticker) => {
    let isDragging = false;
    let startX, startY;
    let initialLeft, initialTop;

    sticker.addEventListener('mousedown', (e) => {
      if (window.innerWidth < 768) return; // disable drag on small mobile
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = sticker.getBoundingClientRect();
      const parentRect = sticker.parentElement.getBoundingClientRect();
      initialLeft = rect.left - parentRect.left;
      initialTop = rect.top - parentRect.top;
      
      sticker.style.transition = 'none';
      sticker.style.zIndex = '30';
      sticker.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      sticker.style.left = `${initialLeft + dx}px`;
      sticker.style.top = `${initialTop + dy}px`;
      sticker.style.right = 'auto';
      sticker.style.bottom = 'auto';
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      sticker.style.cursor = 'grab';
      sticker.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease-out';
      sticker.style.zIndex = '10';
    });
  });
}

/* ==========================================================================
   4. INTERACTIVE PHONE SIMULATOR
   ========================================================================== */
function initPhoneSimulator() {
  const tabBtns = document.querySelectorAll('.sim-tab-btn');
  const views = document.querySelectorAll('.sim-screen-view');
  const reloadBtn = document.getElementById('simHotReloadBtn');
  const reloadFeedback = document.getElementById('simReloadFeedback');
  const countdownEl = document.getElementById('simCountdown');

  // Tab switching
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      tabBtns.forEach((b) => b.classList.remove('active'));
      views.forEach((v) => v.classList.remove('active'));

      btn.classList.add('active');
      const activeView = document.getElementById(`view-${targetView}`);
      if (activeView) activeView.classList.add('active');
    });
  });

  // Hot Reload Simulation
  if (reloadBtn && reloadFeedback) {
    reloadBtn.addEventListener('click', () => {
      const frame = document.querySelector('.sim-phone-frame');
      if (frame) frame.style.boxShadow = '0 0 45px rgba(255, 208, 38, 0.8)';
      reloadFeedback.textContent = '⚡ Performing Hot Reload...';
      reloadFeedback.style.color = '#FFD026';

      setTimeout(() => {
        const ms = Math.floor(Math.random() * 80) + 140;
        if (frame) frame.style.boxShadow = '';
        reloadFeedback.textContent = `✓ Hot reload completed in ${ms}ms!`;
        reloadFeedback.style.color = '#52F062';
      }, 350);
    });
  }

  // Live countdown timer for Blessing App simulator
  if (countdownEl) {
    let secondsLeft = 1 * 3600 + 24 * 60 + 37;
    setInterval(() => {
      secondsLeft--;
      if (secondsLeft <= 0) secondsLeft = 3600 * 2;
      const h = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
      const m = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
      const s = String(secondsLeft % 60).padStart(2, '0');
      countdownEl.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }
}

/* ==========================================================================
   5. RENDER HIGHLIGHTS (ABOUT SECTION)
   ========================================================================== */
function renderHighlights() {
  const container = document.getElementById('aboutHighlightsContainer');
  if (!container) return;

  const html = PORTFOLIO_DATA.highlights.map((item) => `
    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
      <div class="highlight-box-editorial">
        <div class="highlight-icon-box">
          <i class="${item.icon}"></i>
        </div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

/* ==========================================================================
   6. RENDER SKILLS & FILTERING
   ========================================================================== */
function renderSkills() {
  const navContainer = document.getElementById('skillsFilterNav');
  const cardsContainer = document.getElementById('skillsCardsContainer');
  if (!navContainer || !cardsContainer) return;

  const categories = ["All", ...PORTFOLIO_DATA.skillsCategories.map(c => c.category)];
  navContainer.innerHTML = categories.map((cat, idx) => `
    <button class="skill-tab-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');

  function displayCategories(filter) {
    const list = filter === 'All' 
      ? PORTFOLIO_DATA.skillsCategories 
      : PORTFOLIO_DATA.skillsCategories.filter(c => c.category === filter);

    cardsContainer.innerHTML = list.map((cat) => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="skill-category-card">
          <div class="category-header">
            <div class="cat-icon-wrap">
              <i class="${cat.icon}"></i>
            </div>
            <h3 class="cat-title">${cat.category}</h3>
          </div>
          <div class="skills-items-grid">
            ${cat.skills.map(s => `
              <div class="skill-item-badge" title="${s.desc}">
                <div class="skill-item-icon">
                  <i class="${s.icon}"></i>
                </div>
                <span class="skill-item-name">${s.name}</span>
                <span class="skill-item-tag">${s.level}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  displayCategories('All');

  navContainer.querySelectorAll('.skill-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navContainer.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      displayCategories(btn.getAttribute('data-cat'));
    });
  });
}

/* ==========================================================================
   7. RENDER FEATURED PROJECTS
   ========================================================================== */
function renderFeaturedProjects() {
  const container = document.getElementById('featuredProjectsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.featuredProjects.map((p, idx) => {
    const isEven = idx % 2 === 1;
    const projectNum = String(idx + 1).padStart(2, '0');
    return `
      <div class="featured-project-card">
        <div class="row g-0 ${isEven ? 'flex-row-reverse' : ''}">
          <div class="col-lg-6">
            <div class="project-img-wrapper">
              <img src="${p.image}" alt="${p.title} Mockup" loading="lazy">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-content-pane">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="project-cat-badge">
                  <i class="bi bi-tag-fill me-1"></i> ${p.category}
                </div>
                <span class="font-mono text-muted" style="font-size: 0.8rem;">PROJECT // ${projectNum}</span>
              </div>
              <h3 class="project-card-title">${p.title}</h3>
              <p class="project-card-desc">${p.description}</p>
              
              <ul class="project-features-list">
                ${p.features.slice(0, 3).map(f => `
                  <li><i class="bi bi-arrow-right-short"></i> <span>${f}</span></li>
                `).join('')}
              </ul>

              <div class="project-tech-tags">
                ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
              </div>

              <div class="project-actions-row">
                <button class="btn-brutalist btn-sm-brutalist" onclick="openProjectModal('${p.id}')">
                  View Case Study &rarr;
                </button>
                <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-brutalist-dark btn-sm-brutalist">
                  <i class="bi bi-github"></i> GitHub
                </a>
                <a href="#contact" class="btn-brutalist-dark btn-sm-brutalist" onclick="showToast('Live test flight build or demo APK available upon inquiry.')">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   8. RENDER MINI PROJECTS
   ========================================================================== */
function renderMiniProjects() {
  const container = document.getElementById('miniProjectsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.miniProjects.map((m) => `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="mini-project-card">
        <div class="mini-p-icon-box ${m.color}">
          <i class="${m.icon}"></i>
        </div>
        <h4 class="mini-p-title">${m.title}</h4>
        <span class="mini-p-subtitle">${m.subtitle}</span>
        <p class="mini-p-desc">${m.desc}</p>
        <div class="mini-p-tech">
          ${m.tech.map(t => `<span class="mini-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   9. RENDER EXPERIENCE TIMELINE
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experienceTimelineContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experiences.map((exp) => `
    <div class="timeline-item ${exp.isCurrent ? 'active' : ''}">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <div class="timeline-company">
              <i class="bi bi-building"></i> ${exp.company} &nbsp;&bull;&nbsp; <span>${exp.location}</span>
            </div>
          </div>
          <span class="timeline-period-badge">
            <i class="bi bi-calendar-event me-1"></i> ${exp.duration}
          </span>
        </div>
        <ul class="timeline-tasks-list">
          ${exp.responsibilities.map(r => `
            <li><i class="bi bi-check2"></i> <span>${r}</span></li>
          `).join('')}
        </ul>
        <div class="project-tech-tags mt-3">
          ${exp.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10. RENDER EDUCATION
   ========================================================================== */
function renderEducation() {
  const container = document.getElementById('educationContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education.map((edu) => `
    <div class="col-md-6 mb-4 mb-md-0">
      <div class="edu-card">
        <div class="edu-icon-wrap">
          <i class="bi bi-mortarboard-fill"></i>
        </div>
        <h3 class="edu-degree">${edu.degree}</h3>
        <div class="edu-inst">${edu.institution} &bull; ${edu.location}</div>
        <div class="edu-period"><i class="bi bi-calendar3 me-1"></i> ${edu.period}</div>
        <p class="edu-desc">${edu.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   11. PROJECT DETAILS MODAL
   ========================================================================== */
window.openProjectModal = function(projectId) {
  const project = PORTFOLIO_DATA.featuredProjects.find(p => p.id === projectId);
  if (!project) return;

  const modalTitle = document.getElementById('projectModalTitle');
  const modalBody = document.getElementById('projectModalBody');
  const modalGithub = document.getElementById('projectModalGithub');

  modalTitle.textContent = `${project.title} — Architectural Breakdown`;
  modalGithub.href = project.github;

  modalBody.innerHTML = `
    <div class="mb-4 text-center">
      <img src="${project.image}" alt="${project.title}" class="img-fluid rounded-3 mb-3 border border-secondary shadow" style="max-height: 340px; width: 100%; object-fit: cover;">
      <div class="project-cat-badge mx-auto">
        <i class="bi bi-tag-fill me-1"></i> ${project.category}
      </div>
    </div>
    
    <div class="mb-4">
      <h4 class="text-white mb-2" style="font-size: 1.15rem;"><i class="bi bi-file-earmark-text text-warning me-2"></i>Executive Overview</h4>
      <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.7;">${project.description}</p>
    </div>

    <div class="mb-4">
      <h4 class="text-white mb-2" style="font-size: 1.15rem;"><i class="bi bi-layers-half text-info me-2"></i>Architectural Implementation</h4>
      <div class="p-3 rounded-3" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); font-size: 0.92rem; color: #CBD5E1;">
        ${project.architecture}
      </div>
    </div>

    <div class="mb-4">
      <h4 class="text-white mb-2" style="font-size: 1.15rem;"><i class="bi bi-check-all text-success me-2"></i>Key Features &amp; Capabilities</h4>
      <ul class="project-features-list mb-0">
        ${project.features.map(f => `<li><i class="bi bi-arrow-right-short text-warning"></i> <span>${f}</span></li>`).join('')}
      </ul>
    </div>

    <div>
      <h4 class="text-white mb-2" style="font-size: 1.15rem;"><i class="bi bi-cpu text-warning me-2"></i>Technologies &amp; Libraries</h4>
      <div class="project-tech-tags">
        ${project.techStack.map(t => `<span class="tech-tag" style="background: rgba(255,208,38,0.1); border-color: rgba(255,208,38,0.3); color: #FFD026;">${t}</span>`).join('')}
      </div>
    </div>
  `;

  const bsModal = new bootstrap.Modal(document.getElementById('projectDetailsModal'));
  bsModal.show();
};

/* ==========================================================================
   12. CONTACT FORM VALIDATION & MAILTO FALLBACK
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    let isValid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
    }

    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      subjectInput.classList.add('is-invalid');
      isValid = false;
    } else {
      subjectInput.classList.remove('is-invalid');
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('is-invalid');
      isValid = false;
    } else {
      messageInput.classList.remove('is-invalid');
    }

    if (!isValid) return;

    const subject = encodeURIComponent(`[Inquiry] ${subjectInput.value.trim()}`);
    const body = encodeURIComponent(
      `Hello Muhammed Faizal,\n\nMy name is ${nameInput.value.trim()} (${emailInput.value.trim()}).\n\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()}`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    showToast('Opening your default email client with your message pre-filled!');
    form.reset();
  });
}

/* ==========================================================================
   13. COPY TO CLIPBOARD HELPER
   ========================================================================== */
window.copyEmailToClipboard = function() {
  navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
    showToast('Email address copied to clipboard: ' + PORTFOLIO_DATA.profile.email);
  }).catch(() => {
    showToast('Email: ' + PORTFOLIO_DATA.profile.email);
  });
};

/* ==========================================================================
   14. TOAST NOTIFICATION
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.custom-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `<i class="bi bi-info-circle-fill text-warning fs-5"></i> <span id="toastMessage"></span>`;
    document.body.appendChild(toast);
  }

  const msgSpan = document.getElementById('toastMessage');
  msgSpan.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ==========================================================================
   15. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
