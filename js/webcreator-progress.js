// MOS試験講座 - 学習進捗管理とブックマーク機能

// グローバル変数
let viewedSections = new Set();
let bookmarks = new Set();
let studyStartTime = Date.now();
let totalStudyTime = 0;

// セクション情報（MOS試験用）
const sections = [
    { id: 'overview', name: 'MOS資格の概要', icon: 'fa-info-circle' },
    { id: 'versions', name: 'バージョンと種類', icon: 'fa-code-branch' },
    { id: 'subjects', name: '試験科目', icon: 'fa-layer-group' },
    { id: 'passing', name: '合格基準', icon: 'fa-check-circle' },
    { id: 'time', name: '勉強時間', icon: 'fa-clock' },
    { id: 'strategy', name: '科目別攻略法', icon: 'fa-bullseye' },
    { id: 'quiz', name: '練習問題', icon: 'fa-pen-alt' },
    { id: 'materials', name: 'おすすめ教材', icon: 'fa-book' }
];

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // 保存されたデータを読み込み
    loadProgress();
    loadBookmarks();
    
    // パネルの初期化
    initProgressPanel();
    initBookmarkPanel();
    
    // セクション閲覧トラッキング
    trackSectionViews();
    
    // ブックマークボタンのイベントリスナー
    initBookmarkButtons();
    
    // 学習時間のトラッキング
    trackStudyTime();
    
    // 定期的に進捗を保存
    setInterval(saveProgress, 30000); // 30秒ごと
    
    // ページ離脱時に保存
    window.addEventListener('beforeunload', function() {
        saveProgress();
    });
    
    // リセットボタン
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('学習進捗をすべてリセットしますか？この操作は取り消せません。')) {
                resetProgress();
            }
        });
    }
    
    console.log('学習進捗管理・ブックマーク機能 - 初期化完了');
});

// 進捗のリセット
function resetProgress() {
    viewedSections.clear();
    totalStudyTime = 0;
    
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem('webcreator_viewed_sections');
        localStorage.removeItem('webcreator_study_time');
    }
    
    updateProgressDisplay();
    updateTimeDisplay();
    
    alert('学習進捗をリセットしました');
}

// ========================================
// 学習進捗管理パネル
// ========================================

// 進捗パネルの初期化
function initProgressPanel() {
    const panel = document.getElementById('progress-panel');
    if (!panel) return;
    
    // パネルの開閉ボタンのイベントリスナーを設定
    const toggleBtn = document.getElementById('progress-toggle');
    if (toggleBtn) {
        toggleBtn.onclick = function() {
            panel.classList.toggle('open');
        };
    }
    
    // セクション別進捗リストを作成
    updateProgressDisplay();
}

// 進捗表示の更新
function updateProgressDisplay() {
    const progressList = document.getElementById('section-progress-list');
    if (!progressList) return;
    
    progressList.innerHTML = '';
    
    sections.forEach(section => {
        const isViewed = viewedSections.has(section.id);
        const item = document.createElement('div');
        item.className = 'section-progress-item';
        item.innerHTML = `
            <div class="section-info">
                <i class="fas ${section.icon}"></i>
                <span>${section.name}</span>
            </div>
            <div class="section-status ${isViewed ? 'viewed' : ''}">
                <i class="fas ${isViewed ? 'fa-check-circle' : 'fa-circle'}"></i>
            </div>
        `;
        progressList.appendChild(item);
    });
    
    // 全体進捗の更新
    updateOverallProgress();
}

// 全体進捗の更新
function updateOverallProgress() {
    const totalSections = sections.length;
    const viewedCount = viewedSections.size;
    const percentage = Math.round((viewedCount / totalSections) * 100);
    
    const progressFill = document.querySelector('#overall-progress .progress-fill');
    const progressText = document.getElementById('overall-progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${percentage}%`;
    }
}

// セクション閲覧のトラッキング
function trackSectionViews() {
    const sectionElements = document.querySelectorAll('.content-section');
    
    if (sectionElements.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                if (sectionId && !viewedSections.has(sectionId)) {
                    viewedSections.add(sectionId);
                    updateProgressDisplay();
                    saveProgress();
                }
            }
        });
    }, observerOptions);
    
    sectionElements.forEach(section => {
        observer.observe(section);
    });
}

// 学習時間のトラッキング
function trackStudyTime() {
    // 保存されている学習時間を読み込み
    if (typeof(Storage) !== "undefined") {
        const savedTime = localStorage.getItem('webcreator_study_time');
        if (savedTime) {
            totalStudyTime = parseInt(savedTime);
        }
    }
    
    // 1分ごとに更新（秒単位で加算）
    setInterval(() => {
        totalStudyTime += 60;
        updateTimeDisplay();
        saveProgress();
    }, 60000);
    
    // 初回表示
    updateTimeDisplay();
}

// 時間表示の更新
function updateTimeDisplay() {
    const timeDisplay = document.getElementById('study-time');
    if (!timeDisplay) return;
    
    const minutes = Math.floor(totalStudyTime / 60);
    timeDisplay.textContent = minutes;
}

// ========================================
// ブックマーク機能
// ========================================

// ブックマークパネルの初期化
function initBookmarkPanel() {
    const panel = document.getElementById('bookmark-panel');
    if (!panel) return;
    
    // パネルの開閉ボタンのイベントリスナーを設定
    const toggleBtn = document.getElementById('bookmark-toggle');
    if (toggleBtn) {
        toggleBtn.onclick = function() {
            panel.classList.toggle('open');
        };
    }
    
    // すべて削除ボタンのイベントリスナー
    const clearBtn = document.getElementById('clear-bookmarks');
    if (clearBtn) {
        clearBtn.onclick = function() {
            if (confirm('すべてのブックマークを削除しますか？')) {
                bookmarks.clear();
                updateBookmarkDisplay();
                saveBookmarks();
            }
        };
    }
    
    // ブックマークリストを更新
    updateBookmarkDisplay();
}

// ブックマークボタンの初期化
function initBookmarkButtons() {
    const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
    
    bookmarkBtns.forEach(btn => {
        const sectionId = btn.getAttribute('data-section');
        
        // 保存されているブックマークを反映
        if (bookmarks.has(sectionId)) {
            btn.classList.add('bookmarked');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            }
        }
        
        // クリックイベント
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleBookmark(sectionId, btn);
        });
    });
}

// ブックマークのトグル
function toggleBookmark(sectionId, btn) {
    if (bookmarks.has(sectionId)) {
        // ブックマーク解除
        bookmarks.delete(sectionId);
        btn.classList.remove('bookmarked');
        btn.querySelector('i').classList.remove('fas');
        btn.querySelector('i').classList.add('far');
    } else {
        // ブックマーク追加
        bookmarks.add(sectionId);
        btn.classList.add('bookmarked');
        btn.querySelector('i').classList.remove('far');
        btn.querySelector('i').classList.add('fas');
    }
    
    updateBookmarkDisplay();
    saveBookmarks();
}

// ブックマーク表示の更新
function updateBookmarkDisplay() {
    // 進捗パネル内のブックマークリスト
    const bookmarkList = document.getElementById('bookmark-list');
    // ブックマークパネル内のリスト
    const bookmarkListPanel = document.getElementById('bookmark-list-panel');
    
    const emptyMessage = '<p class="bookmark-empty">ブックマークはまだありません</p>';
    
    if (bookmarks.size === 0) {
        if (bookmarkList) bookmarkList.innerHTML = emptyMessage;
        if (bookmarkListPanel) bookmarkListPanel.innerHTML = emptyMessage;
        return;
    }
    
    // ブックマークHTML生成
    const items = [];
    sections.forEach(section => {
        if (bookmarks.has(section.id)) {
            items.push(`
                <div class="bookmark-item" onclick="location.hash='#${section.id}'; document.getElementById('bookmark-panel')?.classList.remove('open');">
                    <i class="fas ${section.icon}"></i>
                    <span class="bookmark-item-text">${section.name}</span>
                    <button class="bookmark-remove" data-section="${section.id}" onclick="event.stopPropagation(); removeBookmark('${section.id}');" title="削除">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `);
        }
    });
    
    const html = items.join('');
    if (bookmarkList) bookmarkList.innerHTML = html;
    if (bookmarkListPanel) bookmarkListPanel.innerHTML = html;
}

// ブックマークを削除
function removeBookmark(sectionId) {
    bookmarks.delete(sectionId);
    
    // ブックマークボタンの状態を更新
    const bookmarkBtn = document.querySelector(`.bookmark-btn[data-section="${sectionId}"]`);
    if (bookmarkBtn) {
        bookmarkBtn.classList.remove('bookmarked');
        const icon = bookmarkBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }
    
    updateBookmarkDisplay();
    saveBookmarks();
}

// ========================================
// データの保存と読み込み
// ========================================

// 進捗の保存
function saveProgress() {
    if (typeof(Storage) === "undefined") return;
    
    localStorage.setItem('webcreator_viewed_sections', JSON.stringify([...viewedSections]));
    localStorage.setItem('webcreator_study_time', totalStudyTime.toString());
}

// 進捗の読み込み
function loadProgress() {
    if (typeof(Storage) === "undefined") return;
    
    const savedSections = localStorage.getItem('webcreator_viewed_sections');
    if (savedSections) {
        viewedSections = new Set(JSON.parse(savedSections));
    }
    
    const savedTime = localStorage.getItem('webcreator_study_time');
    if (savedTime) {
        totalStudyTime = parseInt(savedTime);
    }
}

// ブックマークの保存
function saveBookmarks() {
    if (typeof(Storage) === "undefined") return;
    
    localStorage.setItem('webcreator_bookmarks', JSON.stringify([...bookmarks]));
}

// ブックマークの読み込み
function loadBookmarks() {
    if (typeof(Storage) === "undefined") return;
    
    const savedBookmarks = localStorage.getItem('webcreator_bookmarks');
    if (savedBookmarks) {
        bookmarks = new Set(JSON.parse(savedBookmarks));
    }
}

// クイズ統計の更新（quiz.jsから呼び出される）
window.progressManager = {
    updateQuizStats: function(stats) {
        const answeredElem = document.getElementById('quiz-answered');
        const accuracyElem = document.getElementById('quiz-accuracy');
        
        if (answeredElem) {
            answeredElem.textContent = stats.answered;
        }
        
        if (accuracyElem) {
            const accuracy = stats.answered > 0
                ? Math.round((stats.correct / stats.answered) * 100)
                : 0;
            accuracyElem.textContent = `${accuracy}%`;
        }
    }
};
