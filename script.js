/* =========================================================
   AURACARS JS
   - FR/EN language switch
   - Dark/Light mode
   - WhatsApp booking with selected offer + form details
   ========================================================= */

const whatsappNumber = "212724144983";

const cars = [
  {
    id: "dacia",
    name: "Dacia",
    priceFr: "À partir de 250 DH / jour",
    priceEn: "From 250 MAD / day",
    typeFr: "Diesel",
    typeEn: "Diesel",
    gearFr: "Manuelle",
    gearEn: "Manual",
    image: "images/dacia.png"
    /* =====================================================
       HNA DIR TSsWRA DYAL DACIA
       Folder: images/
       Smiya khas tkoun: dacia.png
       Example: images/dacia.png
       ===================================================== */
  },
  {
    id: "renault",
    name: "Renault",
    priceFr: "À partir de 280 DH / jour",
    priceEn: "From 280 MAD / day",
    typeFr: "Essence",
    typeEn: "Petrol",
    gearFr: "Manuelle",
    gearEn: "Manual",
    image: "images/renault.png"
    /* =====================================================
       HNA DIR TSsWRA DYAL RENAULT
       Folder: images/
       Smiya khas tkoun: renault.png
       ===================================================== */
  },
  {
    id: "bmw",
    name: "BMW",
    priceFr: "À partir de 700 DH / jour",
    priceEn: "From 700 MAD / day",
    typeFr: "Diesel",
    typeEn: "Diesel",
    gearFr: "Automatique",
    gearEn: "Automatic",
    image: "images/bmw.png"
    /* =====================================================
       HNA DIR TSsWRA DYAL BMW
       Folder: images/
       Smiya khas tkoun: bmw.png
       ===================================================== */
  },
  {
    id: "clio4",
    name: "Clio 4",
    priceFr: "À partir de 300 DH / jour",
    priceEn: "From 300 MAD / day",
    typeFr: "Diesel",
    typeEn: "Diesel",
    gearFr: "Manuelle",
    gearEn: "Manual",
    image: "images/clio4.png"
    /* =====================================================
       HNA DIR TSsWRA DYAL CLIO 4
       Folder: images/
       Smiya khas tkoun: clio4.png
       ===================================================== */
  },
  {
    id: "mercedes",
    name: "Mercedes",
    priceFr: "À partir de 850 DH / jour",
    priceEn: "From 850 MAD / day",
    typeFr: "Diesel",
    typeEn: "Diesel",
    gearFr: "Automatique",
    gearEn: "Automatic",
    image: "images/mercedes.png"
    /* =====================================================
       HNA DIR TSsWRA DYAL MERCEDES
       Folder: images/
       Smiya khas tkoun: mercedes.png
       ===================================================== */
  }
];

let currentLang = localStorage.getItem("auracars_lang") || "fr";

const translations = {
  fr: {
    navHome: "Accueil",
    navCars: "Voitures",
    navAbout: "À propos",
    navContact: "Contact",
    langBtn: "English",
    heroEyebrow: "Location de voitures premium au Maroc",
    heroTitle: "Louez votre voiture simplement avec AURACARS",
    heroSubtitle: "Des voitures propres, confortables et prêtes à partir. Choisissez votre offre, remplissez vos détails et réservez directement sur WhatsApp.",
    heroCars: "Voir les voitures",
    heroWhatsApp: "Réserver sur WhatsApp",
    trust1: "Réservation WhatsApp",
    trust2: "Prix clairs",
    trust3: "Service rapide",
    trust4: "Voitures premium",
    featuredOverline: "Nos offres",
    featuredTitle: "Choisissez la voiture qui vous convient",
    featuredText: "Chaque offre contient le prix, le type de carburant et la boîte. Le bouton WhatsApp envoie automatiquement le nom de la voiture choisie.",
    bookNow: "Réserver sur WhatsApp",
    details: "Détails",
    fuel: "Carburant",
    gear: "Boîte",
    homeAboutTitle: "Une expérience de location rapide et moderne",
    homeAboutText: "AURACARS vous aide à réserver une voiture sans complication. Vous choisissez, vous envoyez votre demande sur WhatsApp, et l’équipe vous confirme la disponibilité.",
    pageCarsTitle: "Nos voitures disponibles",
    pageCarsText: "Choisissez une voiture puis réservez via WhatsApp avec vos dates, votre ville et vos informations.",
    aboutTitle: "À propos de AURACARS",
    aboutText1: "AURACARS est une solution de location de voitures pensée pour les clients qui veulent réserver rapidement, clairement et sans perdre du temps.",
    aboutText2: "Notre objectif est simple : proposer des voitures propres, des prix transparents et un contact direct via WhatsApp.",
    contactTitle: "Réserver maintenant",
    contactText: "Remplissez les informations ci-dessous. Le bouton va ouvrir WhatsApp avec un message complet prêt à envoyer.",
    name: "Nom complet",
    phone: "Téléphone",
    car: "Voiture",
    city: "Ville",
    startDate: "Date début",
    endDate: "Date fin",
    note: "Durée / remarque",
    send: "Envoyer sur WhatsApp",
    directContact: "Contact direct",
    footer: "© 2026 AURACARS — Location de voitures via WhatsApp"
  },
  en: {
    navHome: "Home",
    navCars: "Cars",
    navAbout: "About",
    navContact: "Contact",
    langBtn: "Français",
    heroEyebrow: "Premium car rental in Morocco",
    heroTitle: "Rent your car easily with AURACARS",
    heroSubtitle: "Clean, comfortable cars ready to go. Choose your offer, fill in your details and book directly on WhatsApp.",
    heroCars: "View cars",
    heroWhatsApp: "Book on WhatsApp",
    trust1: "WhatsApp booking",
    trust2: "Clear prices",
    trust3: "Fast service",
    trust4: "Premium cars",
    featuredOverline: "Our offers",
    featuredTitle: "Choose the car that fits your trip",
    featuredText: "Every offer includes price, fuel type and transmission. The WhatsApp button automatically sends the selected car name.",
    bookNow: "Book on WhatsApp",
    details: "Details",
    fuel: "Fuel",
    gear: "Gear",
    homeAboutTitle: "A fast and modern rental experience",
    homeAboutText: "AURACARS helps you book a car without complications. Choose, send your request on WhatsApp, and the team confirms availability.",
    pageCarsTitle: "Available cars",
    pageCarsText: "Choose a car and book via WhatsApp with your dates, city and details.",
    aboutTitle: "About AURACARS",
    aboutText1: "AURACARS is a car rental solution designed for clients who want quick, clear and simple booking.",
    aboutText2: "Our goal is simple: clean cars, transparent prices and direct contact through WhatsApp.",
    contactTitle: "Book now",
    contactText: "Fill in the information below. The button will open WhatsApp with a complete message ready to send.",
    name: "Full name",
    phone: "Phone",
    car: "Car",
    city: "City",
    startDate: "Start date",
    endDate: "End date",
    note: "Duration / note",
    send: "Send on WhatsApp",
    directContact: "Direct contact",
    footer: "© 2026 AURACARS — Car rental via WhatsApp"
  }
};

function t(key) {
  return translations[currentLang][key] || key;
}

function updateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  const langBtn = document.getElementById("langBtn");
  const mobileLangBtn = document.getElementById("mobileLangBtn");
  if (langBtn) langBtn.innerHTML = `<i class="fas fa-language"></i> ${t("langBtn")}`;
  if (mobileLangBtn) mobileLangBtn.innerHTML = `<i class="fas fa-language"></i> ${t("langBtn")}`;

  document.documentElement.lang = currentLang;
}

function carCard(car) {
  const price = currentLang === "fr" ? car.priceFr : car.priceEn;
  const type = currentLang === "fr" ? car.typeFr : car.typeEn;
  const gear = currentLang === "fr" ? car.gearFr : car.gearEn;

  return `
    <article class="car-card glass reveal-scroll">
      <div class="car-img">
        <img src="${car.image}" alt="${car.name}" onerror="this.src='https://via.placeholder.com/700x430?text=${encodeURIComponent(car.name)}';">
      </div>
      <div class="car-body">
        <h3>${car.name}</h3>
        <div class="price">${price}</div>
        <div class="specs">
          <span class="spec"><i class="fas fa-gas-pump"></i> ${type}</span>
          <span class="spec"><i class="fas fa-gears"></i> ${gear}</span>
        </div>
        <a class="btn btn-primary" href="${quickWhatsAppLink(car.name)}" target="_blank">
          <i class="fas fa-clipboard-list"></i> ${t("bookNow")}
        </a>
      </div>
    </article>
  `;
}

function renderCars() {
  const carsGrid = document.getElementById("carsGrid");
  if (carsGrid) carsGrid.innerHTML = cars.map(carCard).join("");

  const carSelect = document.getElementById("selectedCar");
  if (carSelect) {
    const current = carSelect.value;
    const params = new URLSearchParams(window.location.search);
    const carFromUrl = params.get("car");

    carSelect.innerHTML = cars.map(c => `<option value="${c.name}">${c.name}</option>`).join("");

    if (carFromUrl && cars.some(c => c.name === carFromUrl)) {
      carSelect.value = carFromUrl;
    } else if (current) {
      carSelect.value = current;
    }
  }
}

function quickWhatsAppLink(carName) {
  // When the client clicks a car offer, send them first to the booking form.
  // The selected car will be automatically chosen in the form.
  return `contact.html?car=${encodeURIComponent(carName)}`;
}

function formWhatsAppLink() {
  const name = document.getElementById("clientName")?.value || "";
  const phone = document.getElementById("clientPhone")?.value || "";
  const car = document.getElementById("selectedCar")?.value || "";
  const city = document.getElementById("city")?.value || "";
  const start = document.getElementById("startDate")?.value || "";
  const end = document.getElementById("endDate")?.value || "";
  const note = document.getElementById("note")?.value || "";

  const msg = currentLang === "fr"
    ? `Bonjour AURACARS,%0AJe veux réserver une voiture.%0A%0AVoiture: ${car}%0ANom: ${name}%0ATéléphone: ${phone}%0AVille: ${city}%0ADate début: ${start}%0ADate fin: ${end}%0ADurée / remarque: ${note}`
    : `Hello AURACARS,%0AI want to book a car.%0A%0ACar: ${car}%0AName: ${name}%0APhone: ${phone}%0ACity: ${city}%0AStart date: ${start}%0AEnd date: ${end}%0ADuration / note: ${note}`;

  return `https://wa.me/${whatsappNumber}?text=${msg}`;
}

function setupForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.open(formWhatsAppLink(), "_blank");
  });
}

function setupTheme() {
  const applyIcon = () => {
    const isLight = document.body.classList.contains("light");
    document.querySelectorAll(".theme-btn i").forEach(i => {
      i.className = isLight ? "fas fa-moon" : "fas fa-sun";
    });
  };

  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      localStorage.setItem("auracars_theme", document.body.classList.contains("light") ? "light" : "dark");
      applyIcon();
    });
  });

if (localStorage.getItem("auracars_theme") === "dark") {
  // يبقى dark إلا كان user مختارو
} else {
  document.body.classList.add("light");
}
  applyIcon();
}

function setupLang() {
  const change = () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem("auracars_lang", currentLang);
    updateStaticText();
    renderCars();
    setupGlobalScrollReveal();
  };

  document.getElementById("langBtn")?.addEventListener("click", change);
  document.getElementById("mobileLangBtn")?.addEventListener("click", change);
}

function setupMenu() {
  document.getElementById("menuBtn")?.addEventListener("click", () => {
    document.querySelector(".nav")?.classList.toggle("open");
  });
}


function setupGlobalScrollReveal() {
  const elements = document.querySelectorAll(
    ".info-card, .car-card, .contact-card, .form-card, .car-showcase"
  );

  elements.forEach(el => el.classList.add("reveal-scroll"));

  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("revealed");
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });

  elements.forEach(el => observer.observe(el));
}

function forcePageTopOnLoad() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.addEventListener("load", () => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 60);
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  forcePageTopOnLoad();
  setupTheme();
  setupLang();
  setupMenu();
  updateStaticText();
  renderCars();
  setupGlobalScrollReveal();
  setupForm();
});
