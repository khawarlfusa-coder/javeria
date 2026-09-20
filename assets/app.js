// Javeria Saleem Official Executive Website & Audio/Video Showcase

// Video Catalog from Official Channel
const naatCatalog = [
  {
    id: "38gk9rUNL4M",
    title: "Lam Yati Naziruka Fi Nazar | Ramzan Special 2026",
    category: "ramzan",
    views: "Spotlight Hit",
    duration: "6:01",
    badge: "Ramzan 2026",
    desc: "A breathtaking and soulful recitation by Hafiza Javeria Saleem, expressing boundless love and reverence for Prophet Muhammad ﷺ."
  },
  {
    id: "UEByEwHuMFs",
    title: "Madine Ka Safar Hai | Official Masterpiece",
    category: "popular",
    views: "27 Million views",
    duration: "10:48",
    badge: "27M+ Views",
    desc: "One of the most beloved and viral Naat recitations in the Muslim world, capturing the yearning for the sacred city of Madinah."
  },
  {
    id: "kgyqu_SiNrs",
    title: "Pukaro Ya Rasool Allah | Rabi-ul-Awal Special",
    category: "popular",
    views: "15 Million views",
    duration: "9:15",
    badge: "15M+ Views",
    desc: "A spirited and majestic recitation honoring the arrival and mercy of the Holy Prophet ﷺ."
  },
  {
    id: "a9PdXGS1v2c",
    title: "Miran Waliyon Ke Imam | Manqabat Ghous-e-Azam",
    category: "manqabat",
    views: "10 Million views",
    duration: "7:50",
    badge: "10M+ Views",
    desc: "A celebrated tribute to Sultan-ul-Awliya Sheikh Abdul Qadir Jilani (R.A.), cherished by millions worldwide."
  },
  {
    id: "HRbpL_KP0_I",
    title: "Sab Say Ola O Ala Hamara Nabi ﷺ",
    category: "popular",
    views: "6.4 Million views",
    duration: "8:24",
    badge: "6.4M+ Views",
    desc: "Imam Ahmed Raza Khan Bareillvi's iconic kalam recited with unparalleled vocal grandeur."
  },
  {
    id: "QsmVM7Yj2G4",
    title: "Noori Mehfil Pe Chadar Tani Noor Ki",
    category: "popular",
    views: "4.9 Million views",
    duration: "7:12",
    badge: "4.9M+ Views",
    desc: "Spiritual ambiance in poetry and melody, renowned for mehfils and spiritual gatherings."
  },
  {
    id: "ecTAtzTuO9Y",
    title: "Huzoor Aisa Koi Intizaam Hojaaeyy",
    category: "kalams",
    views: "4.1 Million views",
    duration: "6:45",
    badge: "4.1M+ Views",
    desc: "Deeply emotional prayer expressing longing to be summoned to the green dome of Madinah."
  },
  {
    id: "j8p_JxfASWQ",
    title: "Ham Madina Se Kyon A Gaye | Ramzan Special",
    category: "ramzan",
    views: "Emotional Kalam",
    duration: "6:01",
    badge: "Ramzan Exclusive",
    desc: "Heart-rending poetry capturing the unbearable sorrow of leaving the blessed sanctuary of Madinah Munawwarah."
  },
  {
    id: "fU-4bGCQS5M",
    title: "Kaba Dikha De Maula | Hajj & Umrah Naat 2026",
    category: "ramzan",
    views: "105K views",
    duration: "7:15",
    badge: "Hajj 2026",
    desc: "A pure and humble supplication longing for the holy pilgrimage to Baitullah."
  },
  {
    id: "ViIStWMDJD8",
    title: "Phir Nigahon Ne Vo Chooma | Latest 2026 Kalam",
    category: "kalams",
    views: "Latest Release",
    duration: "5:42",
    badge: "New 2026",
    desc: "A contemporary spiritual composition rendered with delicate tonal grace and emotional devotion."
  },
  {
    id: "_GzRGyB60uU",
    title: "Aap Yad Agaye | Emotional Heart Kalam",
    category: "kalams",
    views: "65K views",
    duration: "6:20",
    badge: "Soulful",
    desc: "Soft meditative kalam composed with heartfelt remembrance and devotion."
  },
  {
    id: "zVdvYGC9oUc",
    title: "Ya Nabi Salam Alayka | Durood o Salam",
    category: "popular",
    views: "200K+ views",
    duration: "8:10",
    badge: "Salam",
    desc: "The universal greeting of Durood and Salam sent upon the Mercy to the Worlds ﷺ."
  },
  {
    id: "r-yOcZXPgyY",
    title: "Haq Fareed Ya Fareed | Manqabat Baba Farid",
    category: "manqabat",
    views: "50K+ views",
    duration: "6:30",
    badge: "Manqabat",
    desc: "Sufic tribute expressing spiritual attachment with the saints of the subcontinent."
  }
];

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  renderCatalog("all");
  initFilterTabs();
  initModalPlayer();
  initCounters();
  initMobileMenu();
  initContactForm();
});

// Render Video Catalog Cards
function renderCatalog(filter) {
  const container = document.getElementById("naatGrid");
  if (!container) return;

  const filtered = filter === "all" 
    ? naatCatalog 
    : naatCatalog.filter(item => item.category === filter);

  container.innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "video-card glass-panel rounded-2xl overflow-hidden group cursor-pointer border border-slate-800 hover:border-cyan-400/50 flex flex-col";
    
    // Fallback thumbnail from YouTube hqdefault
    const thumbUrl = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;

    card.innerHTML = `
      <div class="relative overflow-hidden aspect-video bg-slate-950">
        <img 
          src="${thumbUrl}" 
          alt="${item.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
        
        <!-- Play Overlay on Hover -->
        <div class="play-overlay absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center">
          <div class="w-14 h-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-400/50 transform group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-play text-xl ml-1"></i>
          </div>
        </div>

        <!-- Duration & Category Badge -->
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
            ${item.badge}
          </span>
        </div>
        <div class="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-mono rounded bg-slate-950/90 text-slate-300 border border-slate-800">
          <i class="fa-regular fa-clock text-[10px] mr-1 text-cyan-400"></i>${item.duration}
        </div>
      </div>

      <div class="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div class="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
            <span class="text-cyan-400"><i class="fa-solid fa-eye mr-1"></i>${item.views}</span>
            <span>•</span>
            <span class="text-slate-400">Jaweria Saleem Official</span>
          </div>
          <h3 class="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-2">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            ${item.desc}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <span class="text-xs font-medium text-cyan-400 flex items-center gap-1 group-hover:underline">
            Watch Kalam <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>
          </span>
          <a 
            href="https://www.youtube.com/watch?v=${item.id}" 
            target="_blank" 
            onclick="event.stopPropagation()"
            class="text-slate-400 hover:text-red-400 text-sm transition-colors"
            title="Open directly on YouTube"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openVideo(item.id, item.title);
    });

    container.appendChild(card);
  });
}

// Filter Tabs Handling
function initFilterTabs() {
  const tabs = document.querySelectorAll(".filter-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-cyan-400", "text-slate-950", "shadow-cyan-400/20");
        t.classList.add("bg-slate-900/60", "text-slate-300", "hover:text-white");
      });
      tab.classList.remove("bg-slate-900/60", "text-slate-300");
      tab.classList.add("bg-cyan-400", "text-slate-950", "shadow-cyan-400/20");
      
      const filter = tab.getAttribute("data-filter");
      renderCatalog(filter);
    });
  });
}

// Modal Player
function initModalPlayer() {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const backdrop = document.getElementById("modalBackdrop");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("active");
    const frame = document.getElementById("modalIframe");
    if (frame) frame.src = ""; // Stop audio
  };

  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openVideo(videoId, title) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalIframe");
  const modalTitle = document.getElementById("modalTitle");

  if (iframe) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  }
  if (modalTitle) {
    modalTitle.textContent = title;
  }
  if (modal) {
    modal.classList.add("active");
  }
}

// Global Spotlight Loader (switch main player)
function playSpotlightVideo(videoId) {
  const spotlightContainer = document.getElementById("spotlightEmbed");
  if (spotlightContainer) {
    spotlightContainer.innerHTML = `
      <iframe 
        class="w-full h-full rounded-2xl" 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
        title="Javeria Saleem Kalam" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
    spotlightContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    openVideo(videoId, "Javeria Saleem Recitation");
  }
}

// Ambient Star/Glow Canvas Particle System
function initParticles() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = 45;
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1, // gently drifting upwards
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? "0, 229, 201" : "56, 189, 248" // cyan and sky blue
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${p.color}, 0.5)`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Milestone Numbers Counting Animation
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          const suffix = counter.getAttribute("data-suffix") || "";
          let count = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              counter.textContent = target + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = count + suffix;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.getElementById("milestones");
  if (statsSection) observer.observe(statsSection);
}

// Mobile Menu Navigation
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(l => {
    l.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// Copy Official Email
function copyOfficialEmail() {
  const email = "jaweriasaleem.official@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const feedback = document.getElementById("copyFeedback");
    if (feedback) {
      feedback.classList.remove("hidden");
      setTimeout(() => {
        feedback.classList.add("hidden");
      }, 3000);
    }
  });
}

// Contact & Booking Form
function initContactForm() {
  const form = document.getElementById("bookingForm");
  const toast = document.getElementById("formToast");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      if (toast) {
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 5000);
      }
    }, 1200);
  });
}
