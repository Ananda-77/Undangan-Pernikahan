// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const loadingScreen = document.getElementById('loadingScreen');
const openInvitationBtn = document.getElementById('openInvitation');
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const rsvpForm = document.getElementById('rsvpForm');

// Welcome Screen Handler
openInvitationBtn.addEventListener('click', () => {
    // Hide welcome screen
    welcomeScreen.classList.add('hidden');

    // Show loading screen
    loadingScreen.classList.add('active');

    setTimeout(() => {
        // Hide loading screen
        loadingScreen.classList.remove('active');

        // Try to play music after screens disappear
        setTimeout(() => {
            playBackgroundMusic();
        }, 500);
    }, 2000);

    // Hapus class fade-in setelah animasi selesai
    if (welcomeScreen.classList.contains('fade-in')) {
        setTimeout(() => {
            welcomeScreen.classList.remove('fade-in');
        }, 1300); // 1.2s animasi + buffer 0.1s
    }
});

// Prevent body scroll when welcome screen is active
document.body.style.overflow = 'hidden';

// Enable body scroll when welcome screen is hidden
function enableBodyScroll() {
    document.body.style.overflow = 'auto';
}

// Add event listener to welcome screen hidden
const welcomeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (welcomeScreen.classList.contains('hidden')) {
                setTimeout(enableBodyScroll, 800);
            }
        }
    });
});

welcomeObserver.observe(welcomeScreen, { attributes: true });

// Background Music Control
let isMusicPlaying = false;

function playBackgroundMusic() {
    // Set volume to a comfortable level
    backgroundMusic.volume = 0.3;
    
    // Try to play music
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isMusicPlaying = true;
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            musicToggle.classList.remove('paused');
        }).catch(error => {
            // Auto-play was prevented
            console.log('Auto-play was prevented:', error);
            isMusicPlaying = false;
            musicToggle.innerHTML = '<i class="fas fa-play"></i>';
            musicToggle.classList.add('paused');
        });
    }
}

// Music Toggle Button
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-play"></i>';
        musicToggle.classList.add('paused');
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().then(() => {
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            musicToggle.classList.remove('paused');
            isMusicPlaying = true;
        }).catch(error => {
            console.log('Failed to play music:', error);
        });
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== COUNTDOWN TIMER =====
// Konfigurasi countdown diambil dari file countdown-config.js
// Untuk mengubah tanggal dan waktu, edit file assets/js/countdown-config.js

// Fungsi untuk membuat tanggal dengan timezone yang benar
function createWeddingDate() {
    // Gunakan konfigurasi dari countdown-config.js
    const config = window.COUNTDOWN_CONFIG || {
        date: '2025-07-21',
        time: '09:00',
        timezone: 'Asia/Jakarta',
        completedMessage: 'Hari Bahagia Telah Tiba!',
        runningMessage: 'Menuju Hari Bahagia',
        enableCelebration: true,
        enableDebug: false,
        usePadding: true
    };

    const dateTimeString = `${config.date}T${config.time}:00`;

    // Buat date object dengan timezone lokal
    const weddingDate = new Date(dateTimeString);

    // Validasi tanggal
    if (isNaN(weddingDate.getTime())) {
        console.error('❌ Format tanggal atau waktu tidak valid!');
        console.error('Format yang benar: YYYY-MM-DD untuk tanggal, HH:MM untuk waktu');
        return new Date('2025-06-23T08:00:00').getTime(); // fallback
    }

    return weddingDate.getTime();
}

// Countdown Timer
function updateCountdown() {
    const config = window.COUNTDOWN_CONFIG || {};
    const weddingDateTime = createWeddingDate();
    const now = new Date().getTime();
    const distance = weddingDateTime - now;

    if (distance > 0) {
        // Hitung waktu tersisa
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format angka sesuai konfigurasi
        const padding = config.usePadding !== false; // default true
        const formatNumber = (num) => padding ? num.toString().padStart(2, '0') : num.toString();

        // Update tampilan
        document.getElementById('days').textContent = formatNumber(days);
        document.getElementById('hours').textContent = formatNumber(hours);
        document.getElementById('minutes').textContent = formatNumber(minutes);
        document.getElementById('seconds').textContent = formatNumber(seconds);

        // Update title jika masih countdown
        const countdownTitle = document.querySelector('.countdown-section h2');
        if (countdownTitle && !countdownTitle.textContent.includes('Tiba')) {
            countdownTitle.textContent = config.runningMessage || 'Menuju Hari Bahagia';
        }

        // Debug info jika diaktifkan
        if (config.enableDebug) {
            console.log(`⏰ Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }

    } else {
        // Acara sudah tiba atau sudah lewat
        document.getElementById('days').textContent = config.usePadding !== false ? '00' : '0';
        document.getElementById('hours').textContent = config.usePadding !== false ? '00' : '0';
        document.getElementById('minutes').textContent = config.usePadding !== false ? '00' : '0';
        document.getElementById('seconds').textContent = config.usePadding !== false ? '00' : '0';

        // Update pesan
        const countdownTitle = document.querySelector('.countdown-section h2');
        if (countdownTitle) {
            countdownTitle.textContent = config.completedMessage || 'Hari Bahagia Telah Tiba!';
        }

        // Tambahkan efek khusus ketika countdown selesai
        if (config.enableCelebration !== false) {
            addCelebrationEffect();
        }
    }
}

// Efek perayaan ketika countdown selesai
function addCelebrationEffect() {
    const countdownSection = document.querySelector('.countdown-section');
    if (countdownSection && !countdownSection.classList.contains('celebration')) {
        countdownSection.classList.add('celebration');

        // Tambahkan confetti atau efek lainnya
        createConfetti();
    }
}

// Fungsi untuk membuat efek confetti
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${['#d4af37', '#4a90e2', '#722f37'][Math.floor(Math.random() * 3)]};
                top: -10px;
                left: ${Math.random() * 100}vw;
                z-index: 1000;
                border-radius: 50%;
                animation: confetti-fall 3s linear forwards;
                pointer-events: none;
            `;

            document.body.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 100);
    }
}

// CSS untuk animasi confetti
if (!document.querySelector('#confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
        @keyframes confetti-fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        .countdown-section.celebration {
            animation: celebration-glow 2s ease-in-out infinite alternate;
        }
        @keyframes celebration-glow {
            from { box-shadow: 0 0 20px rgba(212, 175, 55, 0.5); }
            to { box-shadow: 0 0 40px rgba(74, 144, 226, 0.7); }
        }
    `;
    document.head.appendChild(style);
}

// Fungsi untuk menampilkan informasi countdown
function displayCountdownInfo() {
    const config = window.COUNTDOWN_CONFIG || {};
    const weddingDate = new Date(`${config.date || '2025-06-23'}T${config.time || '08:00'}:00`);

    console.log('🎉 === COUNTDOWN TIMER INFO ===');
    console.log('📅 Target Date:', weddingDate.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }));
    console.log('⏰ Target Time:', weddingDate.toLocaleTimeString('id-ID'));
    console.log('🕐 Current Time:', new Date().toLocaleString('id-ID'));
    console.log('🌍 Timezone:', config.timezone || 'Asia/Jakarta');
    console.log('💬 Running Message:', config.runningMessage || 'Menuju Hari Bahagia');
    console.log('🎊 Completed Message:', config.completedMessage || 'Hari Bahagia Telah Tiba!');
    console.log('✨ Celebration Effect:', config.enableCelebration !== false ? 'Enabled' : 'Disabled');
    console.log('🔧 Debug Mode:', config.enableDebug ? 'Enabled' : 'Disabled');
    console.log('📝 Number Padding:', config.usePadding !== false ? 'Enabled (01, 02, 03)' : 'Disabled (1, 2, 3)');
    console.log('===============================');

    // Validasi konfigurasi
    if (!config.date || !config.time) {
        console.warn('⚠️  Konfigurasi tidak ditemukan! Menggunakan nilai default.');
        console.warn('💡 Edit file assets/js/countdown-config.js untuk mengatur tanggal dan waktu.');
    }
}

// Mulai countdown timer
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
displayCountdownInfo(); // Show info

// RSVP Form Handling
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const attendance = formData.get('attendance');
    const guests = formData.get('guests');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !attendance || !guests) {
        alert('Mohon lengkapi semua field yang wajib diisi.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert(`Terima kasih ${name}! Konfirmasi kehadiran Anda telah diterima.`);
        
        // Reset form
        this.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // You can integrate with actual backend here
        // Example: send data to Google Sheets, Firebase, or your own API
        console.log('RSVP Data:', {
            name,
            attendance,
            guests,
            message,
            timestamp: new Date().toISOString()
        });
        
    }, 2000);
});

// Gallery Image Click (Simple Lightbox Effect)
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox Galeri Foto
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 99999;
                cursor: pointer;
            `;
            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt || '';
            lightboxImg.style.cssText = `
                max-width: 90vw;
                max-height: 90vh;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 8px 40px rgba(0,0,0,0.5);
            `;
            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);
            // Tutup lightbox saat overlay diklik
            lightbox.addEventListener('click', () => {
                if (lightbox.parentNode) lightbox.parentNode.removeChild(lightbox);
            });
            // Tutup lightbox saat tekan Escape
            const closeOnEscape = (e) => {
                if (e.key === 'Escape') {
                    if (lightbox.parentNode) lightbox.parentNode.removeChild(lightbox);
                    document.removeEventListener('keydown', closeOnEscape);
                }
            };
            document.addEventListener('keydown', closeOnEscape);
        });
    });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.couple-card, .event-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add some interactive effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.cssText = `
        position: fixed;
        font-size: 20px;
        pointer-events: none;
        z-index: 1000;
        animation: floatUp 4s ease-out forwards;
        left: ${Math.random() * 100}vw;
        bottom: -50px;
    `;
    
    // Add keyframes for floating animation
    if (!document.querySelector('#floating-hearts-style')) {
        const style = document.createElement('style');
        style.id = 'floating-hearts-style';
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Add click effect to buttons
document.querySelectorAll('button, .btn-location, .btn-submit').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        // Add ripple keyframes
        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    });
});

// Wedding Gift Dropdown Functionality
document.querySelectorAll('.gift-header').forEach(header => {
    header.addEventListener('click', function() {
        const giftCard = this.parentElement;
        const isActive = giftCard.classList.contains('active');

        // Close all other cards
        document.querySelectorAll('.gift-card').forEach(card => {
            card.classList.remove('active');
        });

        // Toggle current card
        if (!isActive) {
            giftCard.classList.add('active');
        }
    });
});

// Copy Account Number Functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent dropdown toggle

        const accountNumber = this.getAttribute('data-copy');

        // Copy to clipboard
        navigator.clipboard.writeText(accountNumber).then(() => {
            // Show success feedback
            const originalIcon = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i>';
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            // Show toast notification
            showCopyNotification(accountNumber);

            // Reset button after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalIcon;
                this.style.background = '';
            }, 2000);

        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            fallbackCopyTextToClipboard(accountNumber);
        });
    });
});

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyNotification(text);
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

// Show copy notification
function showCopyNotification(accountNumber) {
    // Remove existing notification
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Nomor rekening ${accountNumber} berhasil disalin!</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        word-break: break-all;
    `;

    // Add animation keyframes
    if (!document.querySelector('#copy-notification-style')) {
        const style = document.createElement('style');
        style.id = 'copy-notification-style';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add Wedding Gift to navigation (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Auto-open first gift card for better UX
    const firstGiftCard = document.querySelector('.gift-card');
    if (firstGiftCard) {
        setTimeout(() => {
            firstGiftCard.classList.add('active');
        }, 500);
    }
});

console.log('Wedding invitation script loaded successfully! 💕');
