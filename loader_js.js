window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden'; // مهم جداً عشان الماوس يعرف يضغط على اللي تحته
        
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.classList.remove('loading'); // إزالة كلاس المنع
        }, 500);
    }
});