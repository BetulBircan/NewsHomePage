// Tema yönetimi
export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const html = document.documentElement;

    // LocalStorage'dan tema tercihini al
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Header'daki tema toggle butonu
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            toggleTheme();
        });
    }

    // Card içindeki tema toggle butonu
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            toggleTheme();
        });
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // İkon güncelleme - Font Awesome ikonları
        if (themeIcon) {
            if (theme === 'dark') {
                // Dark modda ay ikonu
                themeIcon.className = 'fas fa-sun';
            } else {
                // Light modda güneş ikonu
                themeIcon.className = 'fas fa-moon';
               
            }
        }

        // Metin güncelleme (eğer varsa)
        if (themeText) {
            themeText.textContent = theme === 'dark' ? 'Gündüz modu' : 'Gece Modu';
        }
    }
}

