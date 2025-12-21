// 共通JavaScript機能
console.log('common.js ファイル読み込み開始');

// ========================================
// ページトップへ戻るボタン
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('common.js: DOMContentLoaded イベント発火');
    
    const pageTopBtn = document.getElementById('page-top-btn');

    if (pageTopBtn) {
        console.log('ページトップボタンが見つかりました');
        
        // スクロール時の表示/非表示
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                pageTopBtn.classList.add('visible');
            } else {
                pageTopBtn.classList.remove('visible');
            }
        });

        // クリック時のスムーズスクロール
        pageTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.warn('ページトップボタンが見つかりません');
    }

    // ========================================
    // スムーズスクロール（アンカーリンク）
    // ========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // # だけの場合はページトップへ
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // ターゲット要素がある場合
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const offset = 80; // ヘッダーの高さ分のオフセット
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // スクロールインアニメーション
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // アニメーション対象の要素を監視
    const animateElements = document.querySelectorAll('.feature-card, .scope-card, .time-card, .strategy-card, .tip-card, .material-card, .book-item, .resource-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    console.log('common.js: 初期化完了');
});
