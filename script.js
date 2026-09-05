/**
 * Munazzem Parent Landing Page - Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.MONAZEM_CONFIG || {
    appName: "منظم - تطبيق ولي الأمر",
    appVersion: "1.0.0",
    apkSize: "104 MB",
    apkDownloadUrl: "#",
    pwaUrl: "./app/",
    whatsappNumber: "201012345678",
    whatsappMessage: "مرحباً، أحتاج مساعدة بخصوص تطبيق منظم لولي الأمر."
  };

  // 1. Populate Dynamic Data from Config
  const apkVersionEl = document.getElementById('cardApkVersion');
  const apkSizeEl = document.getElementById('cardApkSize');
  if (apkVersionEl) apkVersionEl.textContent = config.appVersion;
  if (apkSizeEl) apkSizeEl.textContent = config.apkSize;

  // Direct APK link
  const apkBtn = document.getElementById('directApkDownloadBtn');
  if (apkBtn && config.apkDownloadUrl) {
    apkBtn.href = config.apkDownloadUrl;
  }

  // Direct PWA link
  const pwaBtn = document.getElementById('directIosPwaBtn');
  if (pwaBtn && config.pwaUrl) {
    pwaBtn.href = config.pwaUrl;
  }

  // WhatsApp Support Links
  const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`;
  const navWaBtn = document.getElementById('navWhatsappBtn');
  const footerWaBtn = document.getElementById('footerWhatsappBtn');
  if (navWaBtn) navWaBtn.href = waUrl;
  if (footerWaBtn) footerWaBtn.href = waUrl;

  // Dynamic Year
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Intelligent OS Detection & Highlighting
  const userAgent = navigator.userAgent || navigator.vendor || (window && window.opera) || '';
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /android/i.test(userAgent);

  const heroAndroidBtn = document.getElementById('heroAndroidBtn');
  const heroIosBtn = document.getElementById('heroIosBtn');
  const androidSection = document.getElementById('android-section');
  const iosSection = document.getElementById('ios-section');

  if (isIOS) {
    // If on iPhone/iPad: make iOS PWA the primary prominent button
    if (heroIosBtn && heroAndroidBtn) {
      heroIosBtn.classList.remove('btn-primary-ios');
      heroIosBtn.classList.add('btn-primary-android');
      heroAndroidBtn.classList.remove('btn-primary-android');
      heroAndroidBtn.classList.add('btn-primary-ios');
    }
    if (iosSection) {
      iosSection.style.borderColor = 'rgba(56, 189, 248, 0.6)';
      iosSection.style.boxShadow = '0 0 35px rgba(56, 189, 248, 0.25)';
    }
  } else if (isAndroid) {
    if (androidSection) {
      androidSection.style.borderColor = 'rgba(16, 185, 129, 0.6)';
      androidSection.style.boxShadow = '0 0 35px rgba(16, 185, 129, 0.25)';
    }
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close all
        faqItems.forEach((other) => other.classList.remove('active'));
        // If not already open, open current
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });
});
