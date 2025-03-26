let menuList = document.getElementById("menu_list");

function toggleMenu() {
  if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
    menuList.style.maxHeight = "300px";
    menuList.style.padding = "20px 0";
  } else {
    menuList.style.maxHeight = "0px";
    menuList.style.padding = "0";
  }
}

document.querySelectorAll(".accordion_item").forEach((item) => {
  const collapseElement = item.querySelector(".accordion-collapse");

  collapseElement.addEventListener("show.bs.collapse", function () {
    item.style.background = "#F5F5F6";
  });

  collapseElement.addEventListener("hide.bs.collapse", function () {
    item.style.background = "transparent";
  });
});

document.querySelectorAll(".accordion-collapse").forEach((collapseElement) => {
  const header =
    collapseElement.previousElementSibling.querySelector(".accordion_header");

  collapseElement.addEventListener("show.bs.collapse", function () {
    header.style.background = "#AE6CE1";
    header.style.color = "#FFFFFF";
  });

  collapseElement.addEventListener("hide.bs.collapse", function () {
    header.style.background = "#F0E7F9";
    header.style.color = "#69507D";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toolsLeft = document.querySelector(".tools_left");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toolsLeft.classList.add("animate");
      } else {
        toolsLeft.classList.remove("animate");
      }
    });
  });

  observer.observe(toolsLeft);
});

document.addEventListener("DOMContentLoaded", function () {
  const featureTop = document.querySelector(".feature_top");
  const featureBottom = document.querySelector(".feature_bottom");
  const featureCards = document.querySelectorAll(".feature_card");

  const resetAnimations = () => {
    featureTop.style.animation = "none";
    featureBottom.style.opacity = "0";
    featureCards.forEach((card) => {
      card.style.animation = "none";
    });

    featureTop.offsetHeight;
    featureBottom.offsetHeight;
    featureCards.forEach((card) => {
      card.offsetHeight;
    });

    featureTop.style.animation = "slideInLeft 1s forwards";
    setTimeout(() => {
      featureBottom.style.opacity = "1";
      featureCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.animation = "cardSlideUp 1s forwards";
        }, index * 300);
      });
    }, 500);
  };

  const observerTop = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        resetAnimations();
      }
    },
    {
      threshold: 0.1,
    }
  );

  observerTop.observe(featureTop);
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section_to_animate");

  const applyAnimation = (section) => {
    section.style.animation = "slideUp 1s forwards";
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          applyAnimation(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial_card");

  // Create an observer to detect when the cards come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-card");
        } else {
          entry.target.classList.remove("animate-card");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Observe each testimonial card
  testimonialCards.forEach((card) => {
    observer.observe(card);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const planContainer = document.querySelector(".plan_container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          planContainer.classList.add("animate-plan");

          // Reset to allow re-triggering
          planContainer.addEventListener("animationend", () => {
            planContainer.classList.remove("animate-plan");
          });
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(planContainer);
});


