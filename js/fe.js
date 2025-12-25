// fe.js - 基本情報技術者試験講座ページ専用JavaScript

console.log('fe.js ファイル読み込み開始');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded イベント発火');

    // 目次の折りたたみ機能
    const tocNav = document.querySelector('.toc-nav');
    const tocToggle = document.querySelector('.toc-toggle');
    
    if (tocNav && tocToggle) {
        // 初期状態: 折りたたまれた状態
        const savedState = localStorage.getItem('fe_toc_state');
        if (savedState === 'expanded') {
            tocNav.classList.add('expanded');
        }

        tocToggle.addEventListener('click', function() {
            tocNav.classList.toggle('expanded');
            const isExpanded = tocNav.classList.contains('expanded');
            localStorage.setItem('fe_toc_state', isExpanded ? 'expanded' : 'collapsed');
        });

        // モバイルで目次項目をクリックしたら目次を閉じる
        const tocItems = document.querySelectorAll('.toc-item');
        tocItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth < 1024) {
                    setTimeout(() => {
                        tocNav.classList.remove('expanded');
                        localStorage.setItem('fe_toc_state', 'collapsed');
                    }, 300);
                }
            });
        });
    }

    // 目次ナビゲーションのアクティブ状態管理
    const sections = document.querySelectorAll('.content-section[data-section-name]');
    const navItems = document.querySelectorAll('.toc-item');
    
    function updateActiveNav() {
        let currentSection = '';
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    console.log('基本情報技術者試験講座ページ - 初期化完了');
    console.log('セクション数:', sections.length);
});
