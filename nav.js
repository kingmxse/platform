const html = document.getElementById('main-html');
const themeButtons = document.querySelectorAll('.theme-toggle-btn'); // بنختار كل الأزرار

function applyTheme(theme) {
    if (theme === 'dark') {
        html.classList.add('dark');
        document.querySelectorAll('#sun-icon').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('#moon-icon').forEach(el => el.classList.add('hidden'));
    } else {
        html.classList.remove('dark');
        document.querySelectorAll('#sun-icon').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('#moon-icon').forEach(el => el.classList.remove('hidden'));
    }
}

function toggleTheme() {
    const currentTheme = html.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
}

themeButtons.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
});

// كود تشغيل المنيو في الموبايل
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// فحص الثيم المفضل عند تحميل الصفحة
const savedTheme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

