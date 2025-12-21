// webcreator-quiz.js - Webクリエイター試験の練習問題

const quizData = [
    {
        id: 1,
        category: 'HTML基礎',
        question: 'HTML5の文書型宣言として正しいものはどれですか？',
        options: [
            '<!DOCTYPE html>',
            '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">',
            '<html version="5.0">',
            '<?xml version="1.0"?>'
        ],
        correctAnswer: 0,
        explanation: 'HTML5の文書型宣言は<!DOCTYPE html>です。これはHTML5で大幅に簡略化されました。'
    },
    {
        id: 2,
        category: 'HTML基礎',
        question: 'セマンティックな要素として、ページのヘッダー部分をマークアップするのに適切な要素はどれですか？',
        options: [
            '<div id="header">',
            '<header>',
            '<head>',
            '<top>'
        ],
        correctAnswer: 1,
        explanation: '<header>要素はHTML5で追加されたセマンティック要素で、ページやセクションのヘッダーを表します。'
    },
    {
        id: 3,
        category: 'HTML基礎',
        question: '外部CSSファイルを読み込むための正しい記述はどれですか？',
        options: [
            '<style src="style.css">',
            '<css href="style.css">',
            '<link rel="stylesheet" href="style.css">',
            '<import css="style.css">'
        ],
        correctAnswer: 2,
        explanation: '<link rel="stylesheet" href="ファイル名">がCSSファイルを読み込む正しい記述です。'
    },
    {
        id: 4,
        category: 'HTML基礎',
        question: '画像を表示する際に、必ず指定すべき属性はどれですか？',
        options: [
            'src属性とalt属性',
            'src属性のみ',
            'alt属性のみ',
            'width属性とheight属性'
        ],
        correctAnswer: 0,
        explanation: 'img要素にはsrc属性（画像のパス）とalt属性（代替テキスト）の両方が必須です。altは画像が表示されない場合やアクセシビリティのために重要です。'
    },
    {
        id: 5,
        category: 'HTML要素',
        question: 'リスト項目を表す要素として正しいのはどれですか？',
        options: [
            '<item>',
            '<list>',
            '<li>',
            '<ul>'
        ],
        correctAnswer: 2,
        explanation: '<li>要素がリスト項目を表します。<ul>（順序なしリスト）や<ol>（順序ありリスト）の中で使用します。'
    },
    {
        id: 6,
        category: 'HTML要素',
        question: 'テーブルの見出しセルを表す要素はどれですか？',
        options: [
            '<td>',
            '<th>',
            '<thead>',
            '<header>'
        ],
        correctAnswer: 1,
        explanation: '<th>要素がテーブルの見出しセルを表します。通常は太字で中央揃えで表示されます。'
    },
    {
        id: 7,
        category: 'CSS基礎',
        question: 'CSSファイルの先頭に記述する文字エンコードの宣言として正しいものはどれですか？',
        options: [
            '@charset "UTF-8";',
            '<meta charset="UTF-8">',
            '/* charset: UTF-8 */',
            'charset=UTF-8;'
        ],
        correctAnswer: 0,
        explanation: 'CSSファイルの文字エンコードは@charset "UTF-8";で宣言します。ファイルの最初の行に記述する必要があります。'
    },
    {
        id: 8,
        category: 'CSS基礎',
        question: 'CSSでIDセレクターを指定する記号はどれですか？',
        options: [
            '.',
            '#',
            '@',
            '*'
        ],
        correctAnswer: 1,
        explanation: '#記号がIDセレクターを表します。例：#header { ... }。クラスセレクターは.（ドット）です。'
    },
    {
        id: 9,
        category: 'CSSプロパティ',
        question: 'ボックスモデルにおいて、要素の内側の余白を指定するプロパティはどれですか？',
        options: [
            'margin',
            'padding',
            'border',
            'spacing'
        ],
        correctAnswer: 1,
        explanation: 'paddingが要素の内側の余白を指定します。marginは外側の余白です。'
    },
    {
        id: 10,
        category: 'CSSプロパティ',
        question: 'テキストを中央揃えにするCSSプロパティはどれですか？',
        options: [
            'align: center;',
            'text-align: center;',
            'center-text: true;',
            'position: center;'
        ],
        correctAnswer: 1,
        explanation: 'text-align: center;がテキストを中央揃えにします。'
    },
    {
        id: 11,
        category: 'CSSセレクター',
        question: '子孫セレクターを表す記号はどれですか？',
        options: [
            '>（大なり記号）',
            'スペース',
            '+（プラス記号）',
            '~（チルダ）'
        ],
        correctAnswer: 1,
        explanation: 'スペースが子孫セレクターを表します。例：div p { ... }はdiv要素の子孫のp要素全てに適用されます。'
    },
    {
        id: 12,
        category: 'アクセシビリティ',
        question: 'アクセシビリティの観点から、画像に代替テキストを提供する理由として正しいものはどれですか？',
        options: [
            '画像の読み込み速度を向上させるため',
            'スクリーンリーダーで画像の内容を伝えるため',
            '画像のファイルサイズを小さくするため',
            '検索エンジンの順位を上げるため'
        ],
        correctAnswer: 1,
        explanation: 'alt属性の代替テキストは、視覚障害者がスクリーンリーダーで画像の内容を理解するために重要です。'
    }
];

// 現在の問題番号
let currentQuestionIndex = 0;
let selectedAnswers = {};
let score = 0;

document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    renderAllQuestions();
    loadSavedAnswers();
    setupFilterButtons();
    setupResetButton();
    updateStats();
});

function renderAllQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizData.forEach((quiz, index) => {
        const quizCard = createQuizCard(quiz, index);
        quizContainer.appendChild(quizCard);
    });
}

function createQuizCard(quiz, index) {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.dataset.category = quiz.category;
    
    const categoryBadge = document.createElement('div');
    categoryBadge.className = 'quiz-category';
    categoryBadge.textContent = quiz.category;
    
    const questionTitle = document.createElement('h3');
    questionTitle.className = 'quiz-question';
    questionTitle.textContent = `問題${index + 1}：${quiz.question}`;
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';
    
    quiz.options.forEach((option, optionIndex) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option-btn';
        
        const letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = String.fromCharCode(65 + optionIndex);
        
        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = option;
        
        optionBtn.appendChild(letterSpan);
        optionBtn.appendChild(textSpan);
        optionBtn.onclick = () => selectAnswer(quiz.id, optionIndex, quiz.correctAnswer, quiz.explanation);
        optionsContainer.appendChild(optionBtn);
    });
    
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    feedback.id = `feedback-${quiz.id}`;
    feedback.style.display = 'none';
    
    card.appendChild(categoryBadge);
    card.appendChild(questionTitle);
    card.appendChild(optionsContainer);
    card.appendChild(feedback);
    
    return card;
}

function selectAnswer(quizId, selectedIndex, correctAnswer, explanation) {
    const feedbackDiv = document.getElementById(`feedback-${quizId}`);
    const card = feedbackDiv.closest('.quiz-card');
    const buttons = card.querySelectorAll('.quiz-option-btn');
    
    // 既に解答済みの場合は何もしない
    if (selectedAnswers[quizId] !== undefined) return;
    
    selectedAnswers[quizId] = selectedIndex;
    saveAnswers();
    
    // ボタンの状態を更新
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctAnswer) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== correctAnswer) {
            btn.classList.add('incorrect');
        }
    });
    
    // フィードバックを表示
    const isCorrect = selectedIndex === correctAnswer;
    feedbackDiv.style.display = 'block';
    feedbackDiv.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackDiv.innerHTML = `
        <div class="feedback-header">
            <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
            <strong>${isCorrect ? '正解！' : '不正解'}</strong>
        </div>
        <p class="feedback-explanation">${explanation}</p>
    `;
    
    updateStats();
}

function saveAnswers() {
    localStorage.setItem('webcreator_quiz_answers', JSON.stringify(selectedAnswers));
}

function loadSavedAnswers() {
    const saved = localStorage.getItem('webcreator_quiz_answers');
    if (saved) {
        selectedAnswers = JSON.parse(saved);
        
        // 保存された解答を復元
        Object.keys(selectedAnswers).forEach(quizId => {
            const quiz = quizData.find(q => q.id === parseInt(quizId));
            if (quiz) {
                const selectedIndex = selectedAnswers[quizId];
                selectAnswer(quiz.id, selectedIndex, quiz.correctAnswer, quiz.explanation);
            }
        });
    }
}

function resetQuiz() {
    if (!confirm('すべての解答をリセットしてもよろしいですか？')) return;
    
    selectedAnswers = {};
    score = 0;
    localStorage.removeItem('webcreator_quiz_answers');
    
    renderAllQuestions();
    updateStats();
}

// カテゴリフィルター機能
function filterByCategory(category) {
    const cards = document.querySelectorAll('.quiz-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// フィルターボタンのセットアップ
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // アクティブ状態を切り替え
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // フィルターを適用
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

// リセットボタンのセットアップ
function setupResetButton() {
    const resetBtn = document.getElementById('reset-quiz');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetQuiz);
    }
}

// 統計を更新
function updateStats() {
    const totalQuestions = quizData.length;
    const answeredQuestions = Object.keys(selectedAnswers).length;
    let correctCount = 0;
    
    quizData.forEach(quiz => {
        if (selectedAnswers[quiz.id] === quiz.correctAnswer) {
            correctCount++;
        }
    });
    
    // 統計表示を更新
    const correctCountEl = document.getElementById('correct-count');
    const totalAnsweredEl = document.getElementById('total-answered');
    const accuracyRateEl = document.getElementById('accuracy-rate');
    
    if (correctCountEl) correctCountEl.textContent = correctCount;
    if (totalAnsweredEl) totalAnsweredEl.textContent = answeredQuestions;
    if (accuracyRateEl) {
        const accuracy = answeredQuestions > 0 ? Math.round((correctCount / answeredQuestions) * 100) : 0;
        accuracyRateEl.textContent = `${accuracy}%`;
    }
}
