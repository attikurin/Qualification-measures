// fe-quiz.js - 基本情報技術者試験の練習問題

const quizData = [
    // 基礎理論（4問）
    {
        id: 1,
        category: '基礎理論',
        question: '10進数の「25」を2進数で表したものはどれか。',
        options: [
            '10011',
            '11001',
            '11010',
            '11100'
        ],
        correctAnswer: 1,
        explanation: '25 ÷ 2 = 12 余り 1、12 ÷ 2 = 6 余り 0、6 ÷ 2 = 3 余り 0、3 ÷ 2 = 1 余り 1、1 ÷ 2 = 0 余り 1\n余りを逆順に並べると 11001 となります。'
    },
    {
        id: 2,
        category: '基礎理論',
        question: '論理演算 A AND B の真理値表で、AとBが両方とも真(1)のとき、結果はどうなるか。',
        options: [
            '真(1)',
            '偽(0)',
            '不定',
            'エラー'
        ],
        correctAnswer: 0,
        explanation: 'AND演算は、両方の入力が真(1)のときのみ、結果が真(1)になります。それ以外の場合は偽(0)です。'
    },
    {
        id: 3,
        category: '基礎理論',
        question: 'ド・モルガンの法則で、NOT(A OR B)と等価な式はどれか。',
        options: [
            'NOT A AND NOT B',
            'NOT A OR NOT B',
            'A AND B',
            'A OR B'
        ],
        correctAnswer: 0,
        explanation: 'ド・モルガンの法則により、NOT(A OR B) = NOT A AND NOT B となります。論理和の否定は、各要素の否定の論理積と等しくなります。'
    },
    {
        id: 4,
        category: '基礎理論',
        question: '配列の要素数が100個あり、線形探索で目的のデータを探す場合、平均比較回数はおよそどれくらいか。',
        options: [
            '10回',
            '50回',
            '100回',
            '200回'
        ],
        correctAnswer: 1,
        explanation: '線形探索の平均比較回数は、データが見つかる位置の平均で、配列の要素数をnとすると(n+1)/2回です。100個の場合は約50回となります。'
    },

    // コンピュータシステム（5問）
    {
        id: 5,
        category: 'コンピュータシステム',
        question: 'キャッシュメモリのヒット率が90%、キャッシュアクセス時間が10ns、主記憶アクセス時間が100nsのとき、実効アクセス時間は何nsか。',
        options: [
            '19ns',
            '28ns',
            '55ns',
            '90ns'
        ],
        correctAnswer: 0,
        explanation: '実効アクセス時間 = ヒット率 × キャッシュアクセス時間 + (1 - ヒット率) × 主記憶アクセス時間\n= 0.9 × 10 + 0.1 × 100 = 9 + 10 = 19ns'
    },
    {
        id: 6,
        category: 'コンピュータシステム',
        question: 'CPUの性能を表すMIPS値の説明として正しいものはどれか。',
        options: [
            '1秒間に実行できる命令数を100万単位で表したもの',
            '1命令の実行に必要な時間をナノ秒単位で表したもの',
            'クロック周波数をメガヘルツ単位で表したもの',
            'メモリ容量をメガバイト単位で表したもの'
        ],
        correctAnswer: 0,
        explanation: 'MIPS(Million Instructions Per Second)は、1秒間に実行できる命令数を100万単位で表した性能指標です。'
    },
    {
        id: 7,
        category: 'コンピュータシステム',
        question: '稼働率が0.9のシステムAと0.9のシステムBを直列に接続したとき、全体の稼働率はどれか。',
        options: [
            '0.81',
            '0.90',
            '0.95',
            '0.99'
        ],
        correctAnswer: 0,
        explanation: '直列システムの稼働率 = システムAの稼働率 × システムBの稼働率 = 0.9 × 0.9 = 0.81'
    },
    {
        id: 8,
        category: 'コンピュータシステム',
        question: '仮想記憶方式において、プログラムの実行中にページフォールトが発生したとき、どのような処理が行われるか。',
        options: [
            '主記憶上の不要なページを補助記憶に書き出し、必要なページを主記憶に読み込む',
            'プログラムの実行を中止する',
            'CPUの処理速度を上げる',
            'キャッシュメモリを増設する'
        ],
        correctAnswer: 0,
        explanation: 'ページフォールトが発生すると、主記憶上の不要なページ(または変更されていないページ)を補助記憶に退避し、必要なページを補助記憶から主記憶に読み込みます。'
    },
    {
        id: 9,
        category: 'コンピュータシステム',
        question: 'ラウンドロビン方式のスケジューリングアルゴリズムの説明として正しいものはどれか。',
        options: [
            '各プロセスに一定の時間(タイムクォンタム)を割り当てて順番に実行する',
            '実行時間が短いプロセスから順に実行する',
            '優先度が高いプロセスから順に実行する',
            '先に到着したプロセスから順に実行する'
        ],
        correctAnswer: 0,
        explanation: 'ラウンドロビン方式は、各プロセスに一定の時間(タイムクォンタム)を割り当て、順番に実行するスケジューリング方式です。公平性が高いのが特徴です。'
    },

    // ネットワーク（3問）
    {
        id: 10,
        category: 'ネットワーク',
        question: 'TCP/IPの階層モデルで、IPプロトコルが動作する層はどれか。',
        options: [
            'アプリケーション層',
            'トランスポート層',
            'インターネット層',
            'ネットワークインターフェース層'
        ],
        correctAnswer: 2,
        explanation: 'IPプロトコルはインターネット層(ネットワーク層)で動作します。IPアドレスを使用して、ネットワーク間のデータ転送を行います。'
    },
    {
        id: 11,
        category: 'ネットワーク',
        question: 'IPアドレス192.168.1.100、サブネットマスク255.255.255.0のとき、ネットワークアドレスはどれか。',
        options: [
            '192.168.0.0',
            '192.168.1.0',
            '192.168.1.100',
            '192.168.1.255'
        ],
        correctAnswer: 1,
        explanation: 'IPアドレスとサブネットマスクのAND演算を行うと、ネットワークアドレスが求められます。192.168.1.100 AND 255.255.255.0 = 192.168.1.0'
    },
    {
        id: 12,
        category: 'ネットワーク',
        question: 'HTTPSで使用される標準的なポート番号はどれか。',
        options: [
            '21',
            '80',
            '443',
            '8080'
        ],
        correctAnswer: 2,
        explanation: 'HTTPSの標準ポート番号は443です。HTTP(80)、FTP(21)、プロキシ(8080)と区別して覚えましょう。'
    },

    // データベース（2問）
    {
        id: 13,
        category: 'データベース',
        question: 'SQLのSELECT文で、重複を除いた結果を取得するために使用するキーワードはどれか。',
        options: [
            'UNIQUE',
            'DISTINCT',
            'DIFFERENT',
            'SINGLE'
        ],
        correctAnswer: 1,
        explanation: 'DISTINCTキーワードを使用すると、重複を除いた結果を取得できます。\n例: SELECT DISTINCT 列名 FROM テーブル名;'
    },
    {
        id: 14,
        category: 'データベース',
        question: '関係データベースの正規化の目的として適切なものはどれか。',
        options: [
            'データの検索速度を向上させる',
            'データの冗長性を排除し、データの一貫性を保つ',
            'データベースのサイズを小さくする',
            'データの暗号化を行う'
        ],
        correctAnswer: 1,
        explanation: '正規化の主な目的は、データの冗長性(重複)を排除し、データの一貫性と整合性を保つことです。これにより、更新異常を防ぐことができます。'
    },

    // セキュリティ（3問）
    {
        id: 15,
        category: 'セキュリティ',
        question: '公開鍵暗号方式の説明として正しいものはどれか。',
        options: [
            '暗号化と復号に同じ鍵を使用する',
            '暗号化には公開鍵、復号には秘密鍵を使用する',
            '暗号化には秘密鍵、復号には公開鍵を使用する',
            '鍵を使用せずに暗号化する'
        ],
        correctAnswer: 1,
        explanation: '公開鍵暗号方式では、暗号化に公開鍵(誰でも入手可能)、復号に秘密鍵(本人のみ保持)を使用します。代表的なアルゴリズムにRSAがあります。'
    },
    {
        id: 16,
        category: 'セキュリティ',
        question: 'パスワードを安全に保管するために使用されるハッシュ関数の特徴として正しいものはどれか。',
        options: [
            'ハッシュ値から元のデータを復元できる',
            '異なるデータから同じハッシュ値が生成されることはない',
            '一方向性があり、ハッシュ値から元のデータを復元することが困難',
            'データの暗号化と復号の両方に使用できる'
        ],
        correctAnswer: 2,
        explanation: 'ハッシュ関数は一方向性を持ち、ハッシュ値から元のデータを復元することが計算量的に困難です。この性質を利用してパスワードを安全に保管します。'
    },
    {
        id: 17,
        category: 'セキュリティ',
        question: 'SQLインジェクション攻撃を防ぐ対策として適切なものはどれか。',
        options: [
            'ファイアウォールを設置する',
            'SSL/TLSで通信を暗号化する',
            'プレースホルダ(バインド機構)を使用する',
            'パスワードを定期的に変更する'
        ],
        correctAnswer: 2,
        explanation: 'SQLインジェクション攻撃を防ぐには、プレースホルダ(バインド機構)を使用してSQLを構築します。ユーザー入力を直接SQL文に埋め込まないことが重要です。'
    },

    // マネジメント・ストラテジ（3問）
    {
        id: 18,
        category: 'マネジメント',
        question: 'プロジェクトマネジメントにおけるクリティカルパスの説明として正しいものはどれか。',
        options: [
            'プロジェクトで最も重要な作業のこと',
            'プロジェクトで最もコストがかかる作業経路のこと',
            'プロジェクト全体の所要時間を決定する最長の作業経路のこと',
            'プロジェクトで最も人員を必要とする作業のこと'
        ],
        correctAnswer: 2,
        explanation: 'クリティカルパスは、プロジェクト全体の所要時間を決定する最長の作業経路です。クリティカルパス上の作業が遅れると、プロジェクト全体が遅れます。'
    },
    {
        id: 19,
        category: 'ストラテジ',
        question: 'SWOT分析で分析する4つの要素はどれか。',
        options: [
            '価格、品質、納期、サービス',
            '強み、弱み、機会、脅威',
            '計画、実行、評価、改善',
            '人、物、金、情報'
        ],
        correctAnswer: 1,
        explanation: 'SWOT分析は、Strength(強み)、Weakness(弱み)、Opportunity(機会)、Threat(脅威)の4つの要素を分析する経営戦略手法です。'
    },
    {
        id: 20,
        category: 'ストラテジ',
        question: '知的財産権のうち、プログラムを保護する権利はどれか。',
        options: [
            '特許権',
            '実用新案権',
            '意匠権',
            '著作権'
        ],
        correctAnswer: 3,
        explanation: 'プログラムは著作権法により保護されます。プログラムは「言語の著作物」として扱われ、創作と同時に著作権が発生します。'
    }
];

// クイズ管理クラス
class QuizManager {
    constructor() {
        this.quizzes = quizData;
        this.currentFilter = 'all';
        this.userAnswers = {};
        this.init();
    }

    init() {
        this.renderAllQuizzes();
        this.setupFilterButtons();
        this.setupResetButton();
        this.loadProgress();
        this.updateStats();
    }

    renderAllQuizzes() {
        const container = document.getElementById('quiz-list');
        if (!container) return;

        container.innerHTML = '';
        
        const filteredQuizzes = this.currentFilter === 'all' 
            ? this.quizzes 
            : this.quizzes.filter(q => q.category === this.currentFilter);

        filteredQuizzes.forEach(quiz => {
            const quizCard = this.createQuizCard(quiz);
            container.appendChild(quizCard);
        });
    }

    createQuizCard(quiz) {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.id = `quiz-${quiz.id}`;

        const categoryClass = this.getCategoryClass(quiz.category);
        
        card.innerHTML = `
            <div class="quiz-header">
                <span class="quiz-category ${categoryClass}">${quiz.category}</span>
                <span class="quiz-number">問題 ${quiz.id}</span>
            </div>
            <div class="quiz-question">${quiz.question}</div>
            <div class="quiz-options">
                ${quiz.options.map((option, index) => `
                    <button class="quiz-option-btn" onclick="quizManager.selectAnswer(${quiz.id}, ${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </button>
                `).join('')}
            </div>
            <div class="quiz-feedback" id="feedback-${quiz.id}" style="display: none;"></div>
        `;

        return card;
    }

    getCategoryClass(category) {
        const categoryMap = {
            '基礎理論': 'technology',
            'コンピュータシステム': 'technology',
            'ネットワーク': 'technology',
            'データベース': 'technology',
            'セキュリティ': 'technology',
            'マネジメント': 'management',
            'ストラテジ': 'strategy'
        };
        return categoryMap[category] || 'technology';
    }

    selectAnswer(quizId, selectedIndex) {
        const quiz = this.quizzes.find(q => q.id === quizId);
        if (!quiz) return;

        this.userAnswers[quizId] = selectedIndex;

        const card = document.getElementById(`quiz-${quizId}`);
        const buttons = card.querySelectorAll('.quiz-option-btn');
        const feedbackDiv = document.getElementById(`feedback-${quizId}`);

        // すべてのボタンを無効化
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            btn.classList.remove('selected', 'correct', 'incorrect');
            
            if (idx === quiz.correctAnswer) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex) {
                btn.classList.add('incorrect');
            }
        });

        // フィードバック表示
        const isCorrect = selectedIndex === quiz.correctAnswer;
        feedbackDiv.style.display = 'block';
        feedbackDiv.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackDiv.innerHTML = `
            <div class="feedback-result">
                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                <strong>${isCorrect ? '正解' : '不正解'}</strong>
            </div>
            <div class="feedback-answer">
                <strong>正解:</strong> ${String.fromCharCode(65 + quiz.correctAnswer)}. ${quiz.options[quiz.correctAnswer]}
            </div>
            <div class="feedback-explanation">
                <strong>解説:</strong> ${quiz.explanation}
            </div>
        `;

        this.saveProgress();
        this.updateStats();
    }

    setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.category;
                this.renderAllQuizzes();
            });
        });
    }

    setupResetButton() {
        const resetBtn = document.getElementById('reset-quiz');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('練習問題の回答状況をリセットしますか？')) {
                    this.resetQuiz();
                }
            });
        }
    }

    resetQuiz() {
        this.userAnswers = {};
        this.saveProgress();
        this.renderAllQuizzes();
        this.updateStats();
    }

    updateStats() {
        const totalAnswered = Object.keys(this.userAnswers).length;
        const correctCount = Object.entries(this.userAnswers).filter(([quizId, answer]) => {
            const quiz = this.quizzes.find(q => q.id === parseInt(quizId));
            return quiz && answer === quiz.correctAnswer;
        }).length;

        const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('total-answered').textContent = totalAnswered;
        document.getElementById('accuracy-rate').textContent = `${accuracy}%`;
    }

    saveProgress() {
        localStorage.setItem('fe-quiz-answers', JSON.stringify(this.userAnswers));
    }

    loadProgress() {
        const saved = localStorage.getItem('fe-quiz-answers');
        if (saved) {
            this.userAnswers = JSON.parse(saved);
        }
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
    window.quizManager = new QuizManager();
});
