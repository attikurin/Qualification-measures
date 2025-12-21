// MOS（Microsoft Office Specialist）講座専用JavaScript
// Version: 2025-01-19-v1
console.log('mos.js ファイル読み込み開始');

// ========================================
// 目次の折りたたみ機能
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded イベント発火');
    
    const tocToggle = document.getElementById('toc-toggle');
    const tocNav = document.querySelector('.toc-nav');
    const tocContent = document.getElementById('toc-content');
    
    if (!tocToggle || !tocNav || !tocContent) {
        console.warn('目次要素が見つかりません');
    } else {
        // 初期状態：デフォルトで折りたたみ
        tocNav.classList.remove('expanded');
    
    // 保存された状態を復元（オプション）
    if (typeof(Storage) !== "undefined") {
        const tocExpanded = localStorage.getItem('toc_expanded');
        if (tocExpanded === 'true') {
            tocNav.classList.add('expanded');
        }
    }
    
    tocToggle.addEventListener('click', function() {
        tocNav.classList.toggle('expanded');
        
        // 状態を保存（オプション）
        if (typeof(Storage) !== "undefined") {
            const isExpanded = tocNav.classList.contains('expanded');
            localStorage.setItem('toc_expanded', isExpanded);
        }
    });
    
        // 目次リンクをクリックしたら目次を自動的に折りたたむ
        const tocItems = document.querySelectorAll('.toc-item');
        tocItems.forEach(item => {
            item.addEventListener('click', function() {
                // スマホやタブレットの場合のみ自動折りたたみ
                if (window.innerWidth < 1024) {
                    setTimeout(() => {
                        tocNav.classList.remove('expanded');
                        if (typeof(Storage) !== "undefined") {
                            localStorage.setItem('toc_expanded', 'false');
                        }
                    }, 300);
                }
            });
        });
    }

    // ========================================
    // タブ切り替え機能
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('タブボタン数:', tabButtons.length);
    console.log('タブコンテンツ数:', tabContents.length);

    if (tabButtons.length > 0 && tabContents.length > 0) {
        console.log('タブ機能を初期化します');
        tabButtons.forEach((button, index) => {
            console.log('タブボタン', index, ':', button.getAttribute('data-tab'));
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetTab = this.getAttribute('data-tab');
                console.log('タブクリック:', targetTab);

                // すべてのタブボタンとコンテンツから active クラスを削除
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // クリックされたタブボタンと対応するコンテンツに active クラスを追加
                this.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                    console.log('タブ切り替え成功');
                } else {
                    console.error('タブコンテンツが見つかりません:', targetTab);
                }

                // タブ切り替え時にスムーズにスクロール
                const strategySection = document.getElementById('strategy');
                if (strategySection) {
                    const offset = 100;
                    const elementPosition = strategySection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    } else {
        console.error('タブボタンまたはタブコンテンツが見つかりません');
    }

    // ========================================
    // アコーディオン機能
    // ========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    console.log('アコーディオンヘッダー数:', accordionHeaders.length);

    if (accordionHeaders.length > 0) {
        console.log('アコーディオン機能を初期化します');
        accordionHeaders.forEach((header, index) => {
            console.log('アコーディオン', index, ':', header.textContent.trim().substring(0, 30));
            header.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('アコーディオンクリック:', this.textContent.trim().substring(0, 30));
                
                const accordionItem = this.parentElement;
                const isActive = accordionItem.classList.contains('active');

                // クリックされたアコーディオンをトグル
                if (isActive) {
                    accordionItem.classList.remove('active');
                    console.log('アコーディオン閉じる');
                } else {
                    accordionItem.classList.add('active');
                    console.log('アコーディオン開く');
                }
            });
        });
    } else {
        console.error('アコーディオンヘッダーが見つかりません');
    }

    // ========================================
    // 目次ナビゲーションのアクティブ状態管理
    // ========================================
    const sections = document.querySelectorAll('.content-section');
    const allTocItems = document.querySelectorAll('.toc-item');

    function updateActiveTocItem() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        allTocItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    if (sections.length > 0 && allTocItems.length > 0) {
        window.addEventListener('scroll', updateActiveTocItem);
    }

    // ========================================
    // スムーズスクロール（目次とページ内リンク）
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // カードアニメーション（スクロールイン効果）
    // ========================================
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

    // アニメーション対象の要素
    const animatedElements = document.querySelectorAll(
        '.info-card, .highlight-box, .scope-card, .alert-box, ' +
        '.requirement-card, .time-card, .plan-card, .study-tip-card, ' +
        '.field-header, .accordion-item'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ========================================
    // 目次ナビゲーションのスティッキー効果強化
    // ========================================
    const header = document.querySelector('.header');
    const tocNavSticky = document.querySelector('.toc-nav');
    
    if (tocNavSticky && header) {
        window.addEventListener('scroll', function() {
            const headerHeight = header.offsetHeight;
            const tocTop = tocNavSticky.getBoundingClientRect().top;
            
            if (tocTop <= headerHeight) {
                tocNavSticky.style.top = `${headerHeight}px`;
            }
        });
    }

    // ========================================
    // アコーディオンのキーボード操作対応
    // ========================================
    accordionHeaders.forEach((header, index) => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

        // アコーディオンが開閉されたときのaria-expanded更新
        header.addEventListener('click', function() {
            const isExpanded = this.parentElement.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });

    // ========================================
    // タブのキーボード操作対応
    // ========================================
    tabButtons.forEach((button, index) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('tabindex', index === 0 ? '0' : '-1');
        button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');

        button.addEventListener('keydown', function(e) {
            let newIndex = index;

            if (e.key === 'ArrowRight') {
                newIndex = (index + 1) % tabButtons.length;
            } else if (e.key === 'ArrowLeft') {
                newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
            } else {
                return;
            }

            e.preventDefault();
            tabButtons[newIndex].click();
            tabButtons[newIndex].focus();
        });

        button.addEventListener('click', function() {
            tabButtons.forEach((btn, i) => {
                btn.setAttribute('tabindex', i === index ? '0' : '-1');
                btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
            });
        });
    });

    // ========================================
    // テーブルのレスポンシブ対応強化
    // ========================================
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.style.overflowX = 'auto';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });

    // ========================================
    // ページトップボタン
    // ========================================
    const pageTopBtn = document.getElementById('page-top-btn');
    if (pageTopBtn) {
        // スクロール時にボタンの表示/非表示を切り替え
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                pageTopBtn.classList.add('visible');
            } else {
                pageTopBtn.classList.remove('visible');
            }
        });
        
        // ボタンクリックでページトップへスクロール
        pageTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // ローディングアニメーション完了
    // ========================================
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // ========================================
    // パフォーマンス最適化：スクロールイベントのスロットリング
    // ========================================
    let scrollTimeout;
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            const currentScrollTop = window.pageYOffset;
            
            // スクロール方向の検出
            if (currentScrollTop > lastScrollTop) {
                // 下にスクロール
                document.body.classList.add('scrolling-down');
                document.body.classList.remove('scrolling-up');
            } else {
                // 上にスクロール
                document.body.classList.add('scrolling-up');
                document.body.classList.remove('scrolling-down');
            }
            
            lastScrollTop = currentScrollTop;
        }, 100);
    });

    // ========================================
    // 初回アクセス時のアニメーション
    // ========================================
    const pageHero = document.querySelector('.page-hero-content');
    if (pageHero) {
        pageHero.style.opacity = '0';
        pageHero.style.transform = 'translateY(30px)';
        pageHero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            pageHero.style.opacity = '1';
            pageHero.style.transform = 'translateY(0)';
        }, 200);
    }

    // ========================================
    // 数式・コードブロックのコピー機能（将来拡張用）
    // ========================================
    const formulaElements = document.querySelectorAll('.formula, code');
    if (formulaElements.length > 0) {
        formulaElements.forEach(element => {
            element.style.cursor = 'pointer';
            element.title = 'クリックでコピー';
            
            element.addEventListener('click', function() {
                const text = this.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    // コピー成功のフィードバック
                    const originalBg = this.style.background;
                    this.style.background = '#10b981';
                    this.style.color = 'white';
                    
                    setTimeout(() => {
                        this.style.background = originalBg;
                        this.style.color = '';
                    }, 500);
                }).catch(err => {
                    console.error('コピーに失敗しました:', err);
                });
            });
        });
    }

    // ========================================
    // プリントモード対応
    // ========================================
    window.addEventListener('beforeprint', function() {
        // すべてのアコーディオンを展開
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.add('active');
        });
        
        // すべてのタブコンテンツを表示
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'block';
        });
    });

    window.addEventListener('afterprint', function() {
        // 元の状態に戻す
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-content').forEach(content => {
            if (!content.classList.contains('active')) {
                content.style.display = 'none';
            }
        });
    });

    // ========================================
    // セクション進捗トラッカー（オプション機能）
    // ========================================
    function trackProgress() {
        const totalSections = sections.length;
        let viewedSections = new Set();

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            const windowBottom = window.pageYOffset + window.innerHeight;

            if (windowBottom >= sectionBottom) {
                viewedSections.add(section.id);
            }
        });

        const progress = (viewedSections.size / totalSections) * 100;
        
        // プログレスバーが実装されている場合の処理
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        // localStorage に進捗を保存（オプション）
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('ipass_progress', progress);
        }
    }

    window.addEventListener('scroll', trackProgress);

    // ========================================
    // ダークモード対応（将来拡張用）
    // ========================================
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // ダークモード設定を保存
            if (typeof(Storage) !== "undefined") {
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('dark_mode', isDark);
            }
        });

        // 保存されたダークモード設定を読み込み
        if (typeof(Storage) !== "undefined") {
            const darkMode = localStorage.getItem('dark_mode');
            if (darkMode === 'true') {
                document.body.classList.add('dark-mode');
            }
        }
    }

    // ========================================
    // エラーハンドリング
    // ========================================
    window.addEventListener('error', function(e) {
        console.error('エラーが発生しました:', e.message);
        console.error('エラーの詳細:', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno,
            error: e.error
        });
    });

    // ========================================
    // コンソールログ：初期化完了
    // ========================================
    console.log('生成AIパスポート講座ページ - 初期化完了');
    console.log('タブ数:', tabButtons.length);
    console.log('アコーディオン数:', accordionHeaders.length);
    console.log('セクション数:', sections.length);
});

// ========================================
// ページ離脱前の確認（学習途中の場合）
// ========================================
let studyTime = 0;
let studyInterval;

document.addEventListener('DOMContentLoaded', function() {
    // 学習時間のトラッキング開始
    studyInterval = setInterval(() => {
        studyTime += 1;
    }, 1000);

    // 5分以上学習している場合、離脱時に確認
    window.addEventListener('beforeunload', function(e) {
        if (studyTime > 300) { // 5分以上
            e.preventDefault();
            e.returnValue = '';
        }
    });
    
    console.log('mos.js 初期化完了');
});

// ========================================
// ユーティリティ関数
// ========================================

// 要素が画面内に表示されているかチェック
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// スムーズスクロール（汎用）
function smoothScrollTo(element, offset = 100) {
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// デバウンス関数（パフォーマンス最適化用）
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// スロットル関数（パフォーマンス最適化用）
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Version: 2025-01-19-v3 - 重複宣言修正版
