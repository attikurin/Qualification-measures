// 練習問題データ
const quizData = [
    // ストラテジ系
    {
        id: 1,
        field: 'strategy',
        fieldName: 'ストラテジ系',
        question: 'SWOT分析における「機会（Opportunity）」に該当するものはどれか。',
        options: [
            { label: 'ア', text: '自社の技術力の高さ' },
            { label: 'イ', text: '競合他社の新製品発売' },
            { label: 'ウ', text: '市場規模の拡大傾向' },
            { label: 'エ', text: '社内の人材不足' }
        ],
        correctAnswer: 'ウ',
        explanation: 'SWOT分析は、内部環境（自社）と外部環境（市場）を分析するフレームワークです。\n\n内部環境：S（Strengths：強み）、W（Weaknesses：弱み）\n外部環境：O（Opportunities：機会）、T（Threats：脅威）\n\n「市場規模の拡大傾向」は外部環境のプラス要因なので、O（機会）に該当します。'
    },
    {
        id: 2,
        field: 'strategy',
        fieldName: 'ストラテジ系',
        question: '当期純利益が500万円、自己資本が5,000万円の企業のROE（自己資本利益率）は何％か。',
        options: [
            { label: 'ア', text: '5％' },
            { label: 'イ', text: '10％' },
            { label: 'ウ', text: '15％' },
            { label: 'エ', text: '20％' }
        ],
        correctAnswer: 'イ',
        explanation: 'ROE（自己資本利益率）= 当期純利益 ÷ 自己資本 × 100\n\n計算：500万円 ÷ 5,000万円 × 100 = 10％\n\nROEは株主から預かったお金（自己資本）でどれだけ利益を出したかを示す指標で、一般的には10％以上が良好とされます。'
    },
    {
        id: 3,
        field: 'strategy',
        fieldName: 'ストラテジ系',
        question: '次のうち、著作権法で保護されるものはどれか。',
        options: [
            { label: 'ア', text: '商品のブランド名' },
            { label: 'イ', text: '新しい発明' },
            { label: 'ウ', text: 'プログラムのソースコード' },
            { label: 'エ', text: '商品の形状デザイン' }
        ],
        correctAnswer: 'ウ',
        explanation: '著作権法で保護されるもの：文学作品、音楽、絵画、映画、プログラム（ソースコード）など\n\n産業財産権（特許庁が管轄）で保護されるもの：\n・ブランド名 → 商標権\n・新しい発明 → 特許権\n・形状デザイン → 意匠権\n\nプログラムは著作権で保護され、著作権は創作時に自動的に発生します（登録不要）。'
    },
    {
        id: 4,
        field: 'strategy',
        fieldName: 'ストラテジ系',
        question: '固定費が200万円、変動費率が60％の企業が損益分岐点に達するための売上高は何万円か。',
        options: [
            { label: 'ア', text: '300万円' },
            { label: 'イ', text: '400万円' },
            { label: 'ウ', text: '500万円' },
            { label: 'エ', text: '600万円' }
        ],
        correctAnswer: 'ウ',
        explanation: '損益分岐点売上高 = 固定費 ÷ (1 - 変動費率)\n\n計算：200万円 ÷ (1 - 0.6) = 200万円 ÷ 0.4 = 500万円\n\n固定費：売上に関係なく発生する費用（家賃、人件費など）\n変動費：売上に比例する費用（材料費など）\n変動費率60％ = 売上の60％が変動費'
    },

    // マネジメント系
    {
        id: 5,
        field: 'management',
        fieldName: 'マネジメント系',
        question: 'プロジェクトマネジメントの三大制約（QCD）に含まれないものはどれか。',
        options: [
            { label: 'ア', text: 'Quality（品質）' },
            { label: 'イ', text: 'Cost（コスト）' },
            { label: 'ウ', text: 'Communication（コミュニケーション）' },
            { label: 'エ', text: 'Delivery（納期）' }
        ],
        correctAnswer: 'ウ',
        explanation: 'プロジェクトマネジメントの三大制約（QCD）：\n\nQ: Quality（品質）- どれだけ良いものを作るか\nC: Cost（コスト）- どれだけ費用をかけるか\nD: Delivery（納期）- いつまでに完成させるか\n\nこれらはトレードオフの関係にあり、一つを改善すると他が悪化する傾向があります。Communication（コミュニケーション）は含まれません。'
    },
    {
        id: 6,
        field: 'management',
        fieldName: 'マネジメント系',
        question: 'ウォーターフォールモデルの特徴として、適切なものはどれか。',
        options: [
            { label: 'ア', text: '短期間で反復的に開発を行う' },
            { label: 'イ', text: '要件が不明確でも開発を進められる' },
            { label: 'ウ', text: '前の工程が完了してから次の工程に進む' },
            { label: 'エ', text: '変更に柔軟に対応できる' }
        ],
        correctAnswer: 'ウ',
        explanation: 'ウォーターフォールモデルの特徴：\n・要件定義 → 設計 → 実装 → テスト → 運用の順に進む\n・前の工程が完了してから次へ進む\n・計画的・段階的に進められる\n・進捗管理がしやすい\n・後戻りが困難\n・要件変更に弱い\n\n「ア」「イ」「エ」はアジャイル開発の特徴です。'
    },
    {
        id: 7,
        field: 'management',
        fieldName: 'マネジメント系',
        question: 'ブラックボックステストの説明として、適切なものはどれか。',
        options: [
            { label: 'ア', text: 'プログラムの内部構造を見てテストする' },
            { label: 'イ', text: 'すべての命令を実行することを確認する' },
            { label: 'ウ', text: '入出力だけを見て、仕様通りに動作するか確認する' },
            { label: 'エ', text: '開発者が実施する' }
        ],
        correctAnswer: 'ウ',
        explanation: 'テスト技法の違い：\n\nブラックボックステスト：\n・内部構造を見ずに、入出力だけをテスト\n・仕様通りに動作するか確認\n・テスト担当者が実施\n\nホワイトボックステスト：\n・プログラムの内部構造を見てテスト\n・すべての命令・分岐を実行\n・開発者が実施'
    },
    {
        id: 8,
        field: 'management',
        fieldName: 'マネジメント系',
        question: 'ITILにおける「インシデント管理」の目的として、適切なものはどれか。',
        options: [
            { label: 'ア', text: '根本原因を特定し、再発を防止する' },
            { label: 'イ', text: 'サービスを迅速に復旧させる' },
            { label: 'ウ', text: 'システム変更を計画・承認する' },
            { label: 'エ', text: '本番環境への移行を管理する' }
        ],
        correctAnswer: 'イ',
        explanation: 'ITIL（IT Service Management Library）の主要プロセス：\n\nインシデント管理：\n・サービスの中断・品質低下への対応\n・迅速な復旧が目的（応急処置）\n\n問題管理：\n・インシデントの根本原因を特定\n・再発防止が目的（恒久対策）\n\n変更管理：システム変更の計画・承認・実施\nリリース管理：本番環境への移行管理'
    },

    // テクノロジ系
    {
        id: 9,
        field: 'technology',
        fieldName: 'テクノロジ系',
        question: '10進数の13を2進数で表したものはどれか。',
        options: [
            { label: 'ア', text: '1011' },
            { label: 'イ', text: '1100' },
            { label: 'ウ', text: '1101' },
            { label: 'エ', text: '1110' }
        ],
        correctAnswer: 'ウ',
        explanation: '10進数 → 2進数の変換方法：\n\n13 ÷ 2 = 6 余り 1 ←（最下位ビット）\n6 ÷ 2 = 3 余り 0\n3 ÷ 2 = 1 余り 1\n1 ÷ 2 = 0 余り 1 ←（最上位ビット）\n\n余りを下から上に読むと：1101\n\n検算：1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13'
    },
    {
        id: 10,
        field: 'technology',
        fieldName: 'テクノロジ系',
        question: 'データベースの主キー（Primary Key）の説明として、適切なものはどれか。',
        options: [
            { label: 'ア', text: '他のテーブルの主キーを参照する列' },
            { label: 'イ', text: '各行を一意に識別する列で、重複やNULLは許されない' },
            { label: 'ウ', text: 'データを暗号化するための鍵' },
            { label: 'エ', text: '複数のテーブルを結合するための列' }
        ],
        correctAnswer: 'イ',
        explanation: 'データベースの基本概念：\n\n主キー（Primary Key）：\n・各行を一意に識別する列\n・重複不可、NULL不可\n・テーブルに1つだけ設定\n\n外部キー（Foreign Key）：\n・他のテーブルの主キーを参照\n・テーブル間の関連を表現\n\n「ア」は外部キーの説明です。'
    },
    {
        id: 11,
        field: 'technology',
        fieldName: 'テクノロジ系',
        question: 'HTTPSで使用されるポート番号として、適切なものはどれか。',
        options: [
            { label: 'ア', text: '80' },
            { label: 'イ', text: '443' },
            { label: 'ウ', text: '25' },
            { label: 'エ', text: '110' }
        ],
        correctAnswer: 'イ',
        explanation: '主要プロトコルとポート番号：\n\n・HTTP：80（Webページの表示）\n・HTTPS：443（暗号化されたWeb通信）\n・SMTP：25（メール送信）\n・POP3：110（メール受信）\n・FTP：20, 21（ファイル転送）\n・DNS：53（ドメイン名変換）\n\nHTTPSはHTTPをSSL/TLSで暗号化したもので、ポート443を使用します。'
    },
    {
        id: 12,
        field: 'technology',
        fieldName: 'テクノロジ系',
        question: '情報セキュリティの3要素（CIA）に含まれないものはどれか。',
        options: [
            { label: 'ア', text: 'Confidentiality（機密性）' },
            { label: 'イ', text: 'Integrity（完全性）' },
            { label: 'ウ', text: 'Availability（可用性）' },
            { label: 'エ', text: 'Authentication（認証性）' }
        ],
        correctAnswer: 'エ',
        explanation: '情報セキュリティの3要素（CIA）：\n\nC: Confidentiality（機密性）\n・許可された者だけが情報にアクセスできる\n\nI: Integrity（完全性）\n・情報が正確で改ざんされていない\n\nA: Availability（可用性）\n・必要なときに情報にアクセスできる\n\nAuthentication（認証性）は重要な要素ですが、CIA の3要素には含まれません。'
    }
];

// グローバル変数
let userAnswers = {};
let quizStats = {
    correct: 0,
    answered: 0,
    total: quizData.length
};

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // 保存された解答を読み込み
    loadUserAnswers();
    
    // クイズを表示
    renderQuiz('all');
    
    // 統計を更新
    updateStats();
    
    // 分野選択ボタンのイベントリスナー
    const fieldButtons = document.querySelectorAll('.quiz-field-btn');
    fieldButtons.forEach(button => {
        button.addEventListener('click', function() {
            const field = this.getAttribute('data-field');
            
            // アクティブクラスを切り替え
            fieldButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // クイズを再描画
            renderQuiz(field);
        });
    });
    
    // リセットボタンのイベントリスナー
    const resetBtn = document.getElementById('reset-quiz-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('すべての解答をリセットしてよろしいですか？')) {
                resetQuiz();
            }
        });
    }
});

// クイズを描画
function renderQuiz(field) {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // フィルタリング
    const filteredQuizzes = field === 'all' 
        ? quizData 
        : quizData.filter(q => q.field === field);
    
    if (filteredQuizzes.length === 0) {
        container.innerHTML = '<p class="no-quiz">この分野の問題は準備中です。</p>';
        return;
    }
    
    filteredQuizzes.forEach(quiz => {
        const quizItem = createQuizElement(quiz);
        container.appendChild(quizItem);
    });
}

// クイズ要素を作成
function createQuizElement(quiz) {
    const div = document.createElement('div');
    div.className = `quiz-item ${quiz.field}`;
    div.id = `quiz-${quiz.id}`;
    
    // ユーザーの解答を取得
    const userAnswer = userAnswers[quiz.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = userAnswer === quiz.correctAnswer;
    
    if (isAnswered) {
        div.classList.add('answered');
        div.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    
    div.innerHTML = `
        <div class="quiz-header">
            <span class="quiz-number">問題 ${quiz.id}</span>
            <span class="quiz-field-badge ${quiz.field}">${quiz.fieldName}</span>
        </div>
        <div class="quiz-question">${quiz.question}</div>
        <ul class="quiz-options">
            ${quiz.options.map(option => `
                <li class="quiz-option">
                    <button class="quiz-option-btn ${getOptionClass(quiz, option, userAnswer)}" 
                            data-quiz-id="${quiz.id}" 
                            data-answer="${option.label}"
                            ${isAnswered ? 'disabled' : ''}>
                        <span class="quiz-option-label">${option.label}</span>
                        <span class="quiz-option-text">${option.text}</span>
                    </button>
                </li>
            `).join('')}
        </ul>
        <div class="quiz-result ${isAnswered ? 'show' : ''} ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="result-header ${isCorrect ? 'correct' : 'incorrect'}">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                ${isCorrect ? '正解です！' : `不正解です。正解は「${quiz.correctAnswer}」です。`}
            </div>
            <div class="result-explanation">
                ${quiz.explanation.replace(/\n/g, '<br>')}
            </div>
        </div>
    `;
    
    // 選択肢のイベントリスナーを追加
    const optionButtons = div.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                handleAnswer(quiz.id, this.getAttribute('data-answer'));
            }
        });
    });
    
    return div;
}

// 選択肢のクラスを取得
function getOptionClass(quiz, option, userAnswer) {
    if (!userAnswer) return '';
    
    const classes = [];
    
    // ユーザーが選択した選択肢
    if (option.label === userAnswer) {
        classes.push('selected');
    }
    
    // 正解の選択肢
    if (option.label === quiz.correctAnswer) {
        classes.push('correct');
    }
    
    // ユーザーが選択して不正解だった選択肢
    if (option.label === userAnswer && userAnswer !== quiz.correctAnswer) {
        classes.push('incorrect');
    }
    
    return classes.join(' ');
}

// 解答を処理
function handleAnswer(quizId, answer) {
    // 解答を保存
    userAnswers[quizId] = answer;
    saveUserAnswers();
    
    // 統計を更新
    updateStats();
    
    // クイズを再描画
    const activeField = document.querySelector('.quiz-field-btn.active');
    const field = activeField ? activeField.getAttribute('data-field') : 'all';
    renderQuiz(field);
    
    // 解答した問題までスクロール（スムーズに）
    setTimeout(() => {
        const quizElement = document.getElementById(`quiz-${quizId}`);
        if (quizElement) {
            const offset = 120;
            const elementPosition = quizElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, 100);
}

// 統計を更新
function updateStats() {
    let correct = 0;
    let answered = 0;
    
    quizData.forEach(quiz => {
        const userAnswer = userAnswers[quiz.id];
        if (userAnswer !== undefined) {
            answered++;
            if (userAnswer === quiz.correctAnswer) {
                correct++;
            }
        }
    });
    
    quizStats.correct = correct;
    quizStats.answered = answered;
    
    // UIを更新
    const correctCountEl = document.getElementById('correct-count');
    const answeredCountEl = document.getElementById('answered-count');
    const accuracyRateEl = document.getElementById('accuracy-rate');
    
    if (correctCountEl) correctCountEl.textContent = correct;
    if (answeredCountEl) answeredCountEl.textContent = answered;
    
    if (accuracyRateEl) {
        const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
        accuracyRateEl.textContent = `${rate}%`;
    }
    
    // 進捗パネルも更新
    if (typeof window.updateProgressFromQuiz === 'function') {
        window.updateProgressFromQuiz();
    }
}

// クイズをリセット
function resetQuiz() {
    userAnswers = {};
    saveUserAnswers();
    updateStats();
    
    const activeField = document.querySelector('.quiz-field-btn.active');
    const field = activeField ? activeField.getAttribute('data-field') : 'all';
    renderQuiz(field);
    
    // トップまでスクロール
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
        const offset = 100;
        const elementPosition = quizSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ユーザーの解答を保存
function saveUserAnswers() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('ipass_quiz_answers', JSON.stringify(userAnswers));
    }
}

// ユーザーの解答を読み込み
function loadUserAnswers() {
    if (typeof(Storage) !== "undefined") {
        const saved = localStorage.getItem('ipass_quiz_answers');
        if (saved) {
            try {
                userAnswers = JSON.parse(saved);
            } catch (e) {
                userAnswers = {};
            }
        }
    }
}

// エクスポート（他のファイルから使用する場合）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quizData,
        userAnswers,
        quizStats
    };
}
