document.addEventListener('DOMContentLoaded', () => {
  const welcomeEl = document.getElementById("welcome");
  const typingEl = document.getElementById("typing");
  const questionEl = document.getElementById("question");
  const questionMark = document.getElementById("question-mark");

  const welcomeSection = document.getElementById("welcome-section");
  const timelineContent = document.getElementById("timeline-content");
  const typingTextEl = document.getElementById("typing-text");

   // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        //close menu if open, else open menu
        navLinks.classList.toggle('active');
        // Close all dropdowns and reset toggles
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
          menu.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-toggle.active').forEach(toggle => {
          toggle.classList.remove('active');
        });
    });


  // STEP 1: Type name after "Welcome" click
  if (welcomeEl) {
    const text = "I'm Hima Sindhu Vaka";
    let i = 0;

    welcomeEl.addEventListener("click", () => {
      welcomeEl.style.display = "none";
      typingEl.style.display = "block";
      typeEffect();
    });

    function typeEffect() {
      if (i < text.length) {
        typingEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(() => {
          questionEl.style.display = "block";
          fadeInMain(questionEl);
        }, 500);
      }
    }

    function fadeInMain(element) {
      let op = 0;
      const timer = setInterval(() => {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        op += 0.05;
      }, 50);
    }
  }

  // STEP 2: Show timeline content on "?" click
  if (questionMark) {
    questionMark.addEventListener("click", () => {
      // Hide welcome section
      welcomeSection.style.display = "none";

      // Show timeline section
      timelineContent.style.display = "block";
      fadeInTimeline(timelineContent);

      // Start typing animation in hero
      if (typingTextEl) startTimelineTyping();
    });
  }

  // Introducing Me - refresh
   document.getElementById("refreshBtn").addEventListener("click", function() {
    location.reload();
  });

  // Typing effect for hero section
  function startTimelineTyping() {
    const textpage = "Driven by Data, Empowered by Development, Inspired by Research";
    let j = 0;

    function typeEffectTimeline() {
      if (j < textpage.length) {
        typingTextEl.innerHTML += textpage.charAt(j);
        j++;
        setTimeout(typeEffectTimeline, 100);
      }
    }
    typeEffectTimeline();
  }

  function fadeInTimeline(element) {
    let op = 0;
    const timer = setInterval(() => {
      if (op >= 1) clearInterval(timer);
      element.style.opacity = op;
      op += 0.05;
    }, 50);
  }

  // Smooth scroll for navbar links
  const showSectionLinks = document.querySelectorAll('.show-section');
  if (showSectionLinks.length > 0) {
    showSectionLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
});

//navigation links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
            if (href && href !== '#' && href !== '') { // Check for valid href
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
    // Remove hash from URL after scroll
    history.replaceState(null, null, window.location.pathname);
  });
});

// // Mobile dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    const isActive = dropdownMenu.classList.contains('active');
    // Close other dropdowns (if needed)
    document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
      if (menu !== dropdownMenu) menu.classList.remove('active');
    });
    // Toggle this dropdown
    dropdownMenu.classList.toggle('active');
  });
});



// Close nav menu (mobile) ONLY when a real section link is clicked, not the dropdown toggle
document.querySelectorAll('.nav-links a:not(.dropdown-toggle), .dropdown-menu a').forEach(link => {
  link.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});