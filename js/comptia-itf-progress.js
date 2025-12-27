// comptia-itf-progress.js - CompTIA ITF+講座の学習進捗管理・ブックマーク機能

// グローバル変数
let viewedSections = new Set();
let bookmarks = new Set();
let studyStartTime = Date.now();
let totalStudyTime = 0;

// セクション情報
const sections = [
    { id: 'overview', name: '試験概要', icon: 'fa-info-circle' },
    { id: 'scope', name: '出題範囲', icon: 'fa-chart-pie' },
    { id: 'passing', name: '合格基準', icon: 'fa-check-circle' },
    { id: 'time', name: '勉強時間', icon: 'fa-clock' },
    { id: 'strategy', name: '分野別攻略法', icon: 'fa-bullseye' },
    { id: 'registration', name: '申し込み方法', icon: 'fa-clipboard-check' },
    { id: 'quiz', name: '練習問題', icon: 'fa-pen-alt' },
    { id: 'materials', name: 'おすすめ教材', icon: 'fa-book' },
    { id: 'study', name: '学習方法', icon: 'fa-book-reader' }
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
});

// ========================================
// 学習進捗管理パネル
// ========================================

function initProgressPanel() {
    const progressToggle = document.getElementById('progress-toggle');
    const progressPanel = document.getElementById('progress-panel');
    
    if (progressToggle && progressPanel) {
        progressToggle.addEventListener('click', function() {
            progressPanel.classList.toggle('open');
            
            // ブックマークパネルが開いていたら閉じる
            const bookmarkPanel = document.getElementById('bookmark-panel');
            if (bookmarkPanel && bookmarkPanel.classList.contains('open')) {
                bookmarkPanel.classList.remove('open');
            }
        });
    }
    
    // リセットボタン
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('学習進捗をリセットしてよろしいですか？\n（ブックマークは保持されます）')) {
                resetProgress();
            }
        });
    }
    
    // 進捗を更新
    updateProgressDisplay();
}

function updateProgressDisplay() {
    // 全体進捗
    const totalSections = sections.length;
    const viewedCount = viewedSections.size;
    const progressPercent = Math.round((viewedCount / totalSections) * 100);
    
    const progressBar = document.querySelector('#overall-progress .progress-fill');
    const progressText = document.getElementById('overall-progress-text');
    
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }
    if (progressText) {
        progressText.textContent = `${progressPercent}%`;
    }
    
    // セクション別進捗
    const sectionProgressList = document.getElementById('section-progress-list');
    if (sectionProgressList) {
        sectionProgressList.innerHTML = sections.map(section => {
            const isViewed = viewedSections.has(section.id);
            return `
                <div class="section-progress-item">
                    <i class="fas ${section.icon}"></i>
                    <span class="section-name">${section.name}</span>
                    <span class="section-status ${isViewed ? 'completed' : ''}">
                        ${isViewed ? '<i class="fas fa-check"></i>' : ''}
                    </span>
                </div>
            `;
        }).join('');
    }
    
    // 練習問題進捗（fe-quiz.jsから取得）
    updateQuizProgress();
    
    // 学習時間
    updateStudyTimeDisplay();
}

function updateQuizProgress() {
    // LocalStorageから練習問題の解答状況を取得
    const savedAnswers = localStorage.getItem('comptia_itf_quiz_answers');
    if (savedAnswers) {
        const answers = JSON.parse(savedAnswers);
        let correct = 0;
        let answered = 0;
        
        // quizDataを使って正解数を計算
        if (typeof quizData !== 'undefined') {
            Object.keys(answers).forEach(questionId => {
                const qid = parseInt(questionId);
                const quiz = quizData.find(q => q.id === qid);
                if (quiz) {
                    answered++;
                    if (answers[questionId] === quiz.correctAnswer) {
                        correct++;
                    }
                }
            });
        }
        
        const correctEl = document.getElementById('quiz-correct');
        const answeredEl = document.getElementById('quiz-answered');
        const rateEl = document.getElementById('quiz-rate');
        
        if (correctEl) correctEl.textContent = correct;
        if (answeredEl) answeredEl.textContent = answered;
        
        if (rateEl) {
            const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
            rateEl.textContent = `${rate}%`;
        }
    }
}

function updateStudyTimeDisplay() {
    const displayEl = document.getElementById('study-time-display');
    if (!displayEl) return;
    
    const minutes = Math.floor(totalStudyTime / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours > 0) {
        displayEl.textContent = `${hours}時間${remainingMinutes}分`;
    } else {
        displayEl.textContent = `${minutes}分`;
    }
}

// ========================================
// セクション閲覧トラッキング
// ========================================

function trackSectionViews() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                if (sectionId && !viewedSections.has(sectionId)) {
                    viewedSections.add(sectionId);
                    saveProgress();
                    updateProgressDisplay();
                }
            }
        });
    }, observerOptions);
    
    // すべてのセクションを監視
    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            observer.observe(element);
        }
    });
}

// ========================================
// 学習時間トラッキング
// ========================================

function trackStudyTime() {
    // 1分ごとに学習時間を更新
    setInterval(function() {
        const currentTime = Date.now();
        const elapsed = Math.floor((currentTime - studyStartTime) / 1000);
        totalStudyTime += elapsed;
        studyStartTime = currentTime;
        
        updateStudyTimeDisplay();
        saveProgress();
    }, 60000); // 1分ごと
}

// ========================================
// ブックマーク機能
// ========================================

function initBookmarkPanel() {
    const bookmarkToggle = document.getElementById('bookmark-toggle');
    const bookmarkPanel = document.getElementById('bookmark-panel');
    
    if (bookmarkToggle && bookmarkPanel) {
        bookmarkToggle.addEventListener('click', function() {
            bookmarkPanel.classList.toggle('open');
            
            // 進捗パネルが開いていたら閉じる
            const progressPanel = document.getElementById('progress-panel');
            if (progressPanel && progressPanel.classList.contains('open')) {
                progressPanel.classList.remove('open');
            }
        });
    }
    
    // すべて削除ボタン
    const clearBtn = document.getElementById('clear-bookmarks-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('すべてのブックマークを削除してよろしいですか？')) {
                clearBookmarks();
            }
        });
    }
    
    // ブックマークリストを更新
    updateBookmarkDisplay();
}

function initBookmarkButtons() {
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    
    bookmarkButtons.forEach(button => {
        const sectionId = button.getAttribute('data-section');
        
        // 保存されたブックマークを反映
        if (bookmarks.has(sectionId)) {
            button.classList.add('bookmarked');
        }
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            toggleBookmark(sectionId);
        });
    });
}

function toggleBookmark(sectionId) {
    if (bookmarks.has(sectionId)) {
        bookmarks.delete(sectionId);
    } else {
        bookmarks.add(sectionId);
    }
    
    // ボタンの状態を更新
    const button = document.querySelector(`.bookmark-btn[data-section="${sectionId}"]`);
    if (button) {
        button.classList.toggle('bookmarked');
    }
    
    // 保存して表示を更新
    saveBookmarks();
    updateBookmarkDisplay();
}

function updateBookmarkDisplay() {
    const bookmarkList = document.getElementById('bookmark-list');
    if (!bookmarkList) return;
    
    if (bookmarks.size === 0) {
        bookmarkList.innerHTML = '<div class="bookmark-empty"><i class="fas fa-bookmark"></i><br>ブックマークはありません</div>';
        return;
    }
    
    bookmarkList.innerHTML = Array.from(bookmarks).map(sectionId => {
        const section = sections.find(s => s.id === sectionId);
        if (!section) return '';
        
        return `
            <div class="bookmark-item" onclick="scrollToSection('${sectionId}')">
                <i class="fas ${section.icon}"></i>
                <span class="bookmark-item-text">${section.name}</span>
                <button class="bookmark-remove" onclick="event.stopPropagation(); removeBookmark('${sectionId}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }).join('');
}

function removeBookmark(sectionId) {
    bookmarks.delete(sectionId);
    
    // ボタンの状態を更新
    const button = document.querySelector(`.bookmark-btn[data-section="${sectionId}"]`);
    if (button) {
        button.classList.remove('bookmarked');
    }
    
    saveBookmarks();
    updateBookmarkDisplay();
}

function clearBookmarks() {
    bookmarks.clear();
    
    // すべてのボタンの状態をリセット
    document.querySelectorAll('.bookmark-btn').forEach(button => {
        button.classList.remove('bookmarked');
    });
    
    saveBookmarks();
    updateBookmarkDisplay();
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // ブックマークパネルを閉じる
        const bookmarkPanel = document.getElementById('bookmark-panel');
        if (bookmarkPanel) {
            bookmarkPanel.classList.remove('open');
        }
    }
}

// ========================================
// データの保存と読み込み
// ========================================

function saveProgress() {
    const progressData = {
        viewedSections: Array.from(viewedSections),
        totalStudyTime: totalStudyTime,
        lastVisit: Date.now()
    };
    localStorage.setItem('comptia_itf_progress', JSON.stringify(progressData));
}

function loadProgress() {
    const saved = localStorage.getItem('comptia_itf_progress');
    if (saved) {
        const data = JSON.parse(saved);
        viewedSections = new Set(data.viewedSections || []);
        totalStudyTime = data.totalStudyTime || 0;
    }
}

function resetProgress() {
    viewedSections.clear();
    totalStudyTime = 0;
    studyStartTime = Date.now();
    
    saveProgress();
    updateProgressDisplay();
    
    alert('学習進捗がリセットされました');
}

function saveBookmarks() {
    const bookmarksArray = Array.from(bookmarks);
    localStorage.setItem('comptia_itf_bookmarks', JSON.stringify(bookmarksArray));
}

function loadBookmarks() {
    const saved = localStorage.getItem('comptia_itf_bookmarks');
    if (saved) {
        bookmarks = new Set(JSON.parse(saved));
    }
}
