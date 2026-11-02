// Sab kuch load hone ke baad code chalega
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBILE MENU LOGIC
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Jab mobile menu mein kisi link par click ho, toh menu band ho jaye
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. TERMS MODAL (POPUP) LOGIC
    // ==========================================
    
    const termsModal = document.getElementById('termsModal');
    const agreeCheck = document.getElementById('agreeCheck');
    const acceptBtn = document.getElementById('acceptBtn');

    // Popup ko open karne ka function
    window.openTermsModal = function(event) {
        if(event) event.preventDefault(); // Link ko default action se roke
        termsModal.classList.add('show');
        
        // Har baar popup khulne par checkbox reset ho jaye aur button disable ho jaye
        if(agreeCheck && acceptBtn) {
            agreeCheck.checked = false;
            acceptBtn.disabled = true;
        }
    };

    // Popup ko close karne ka function
    window.closeTermsModal = function() {
        termsModal.classList.remove('show');
    };

    // Checkbox check hone par button enable/disable karne ka function
    window.toggleAcceptBtn = function() {
        if(agreeCheck && acceptBtn) {
            // Agar checkbox checked hai toh button enable, warna disable
            acceptBtn.disabled = !agreeCheck.checked;
        }
    };

    // Accept & Continue par click karne ka function
    window.acceptAndProceed = function() {
        // Abhi ke liye hum user ko chat.html par bhej rahe hain
        // Jab Login page banega, toh 'chat.html' ko 'login.html' kar denge
        window.location.href = 'login.html'; 
    };

});
