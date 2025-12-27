/**
 * CompTIA ITF+ 練習問題管理
 */

// 練習問題データ
const quizData = [
    // ドメイン1: ITの概念と用語
    {
        id: 1,
        domain: 'domain1',
        domainName: 'ITの概念と用語',
        question: '1GBは何バイトに相当しますか？',
        options: [
            '1,000,000バイト',
            '1,024,000バイト',
            '1,048,576バイト',
            '1,073,741,824バイト'
        ],
        correctAnswer: 3,
        explanation: '1GB = 1,024MB = 1,024 × 1,024KB = 1,024 × 1,024 × 1,024バイト = 1,073,741,824バイトです。2の累乗（1024）を使った換算を覚えましょう。'
    },
    {
        id: 2,
        domain: 'domain1',
        domainName: 'ITの概念と用語',
        question: 'CPUの性能を示す指標として正しくないものはどれですか？',
        options: [
            'クロック周波数（GHz）',
            'コア数',
            'リフレッシュレート',
            'スレッド数'
        ],
        correctAnswer: 2,
        explanation: 'リフレッシュレートはモニターの性能指標です。CPUの性能指標にはクロック周波数、コア数、スレッド数などがあります。'
    },
    {
        id: 3,
        domain: 'domain1',
        domainName: 'ITの概念と用語',
        question: 'SSDとHDDの主な違いについて正しい説明はどれですか？',
        options: [
            'SSDは磁気ディスクを使用し、HDDはフラッシュメモリを使用する',
            'SSDはHDDより遅いが価格が安い',
            'SSDは可動部品がなく、HDDより高速',
            'SSDとHDDは同じ技術を使用している'
        ],
        correctAnswer: 2,
        explanation: 'SSD（ソリッドステートドライブ）はフラッシュメモリを使用し、可動部品がないため高速で静音です。HDD（ハードディスクドライブ）は磁気ディスクと読み書きヘッドを使用します。'
    },
    
    // ドメイン2: インフラストラクチャ
    {
        id: 4,
        domain: 'domain2',
        domainName: 'インフラストラクチャ',
        question: 'IPv4アドレスは何ビットで構成されていますか？',
        options: [
            '16ビット',
            '32ビット',
            '64ビット',
            '128ビット'
        ],
        correctAnswer: 1,
        explanation: 'IPv4アドレスは32ビット（4オクテット）で構成されています。例：192.168.1.1。IPv6は128ビットです。'
    },
    {
        id: 5,
        domain: 'domain2',
        domainName: 'インフラストラクチャ',
        question: 'DHCPサーバーの主な役割は何ですか？',
        options: [
            'Webページを配信する',
            'IPアドレスを自動的に割り当てる',
            'ドメイン名をIPアドレスに変換する',
            'メールを送受信する'
        ],
        correctAnswer: 1,
        explanation: 'DHCP（Dynamic Host Configuration Protocol）サーバーは、ネットワークに接続されたデバイスに自動的にIPアドレスを割り当てる役割を持ちます。'
    },
    {
        id: 6,
        domain: 'domain2',
        domainName: 'インフラストラクチャ',
        question: 'クラウドサービスモデルのうち、ユーザーが最も多くの管理責任を持つのはどれですか？',
        options: [
            'SaaS（Software as a Service）',
            'PaaS（Platform as a Service）',
            'IaaS（Infrastructure as a Service）',
            'すべて同じ'
        ],
        correctAnswer: 2,
        explanation: 'IaaSではOSやミドルウェア、アプリケーションの管理が必要です。PaaSではアプリケーションのみ、SaaSではほぼすべてがプロバイダー管理となります。'
    },
    {
        id: 7,
        domain: 'domain2',
        domainName: 'インフラストラクチャ',
        question: 'Wi-Fi 6の正式な規格名称は何ですか？',
        options: [
            '802.11n',
            '802.11ac',
            '802.11ax',
            '802.11g'
        ],
        correctAnswer: 2,
        explanation: 'Wi-Fi 6は802.11axの通称です。Wi-Fi 5は802.11ac、Wi-Fi 4は802.11nです。'
    },
    
    // ドメイン3: アプリケーションとソフトウェア
    {
        id: 8,
        domain: 'domain3',
        domainName: 'アプリケーションとソフトウェア',
        question: 'ファイル拡張子「.xlsx」はどのアプリケーションのファイル形式ですか？',
        options: [
            'Microsoft Word',
            'Microsoft Excel',
            'Adobe PDF',
            'PowerPoint'
        ],
        correctAnswer: 1,
        explanation: '.xlsxはMicrosoft Excelの標準ファイル形式です。.docxはWord、.pptxはPowerPoint、.pdfはAdobe PDFです。'
    },
    {
        id: 9,
        domain: 'domain3',
        domainName: 'アプリケーションとソフトウェア',
        question: 'オープンソースソフトウェアの特徴として正しいものはどれですか？',
        options: [
            'ソースコードが公開されていない',
            '必ず無料で使用できる',
            'ソースコードが公開されており、改変が可能',
            '商用利用は禁止されている'
        ],
        correctAnswer: 2,
        explanation: 'オープンソースソフトウェアはソースコードが公開されており、ライセンスに従って改変や再配布が可能です。必ずしも無料とは限らず、商用利用も可能な場合が多いです。'
    },
    {
        id: 10,
        domain: 'domain3',
        domainName: 'アプリケーションとソフトウェア',
        question: 'Webブラウザのプライベートモード（シークレットモード）の主な機能は何ですか？',
        options: [
            'インターネット速度を向上させる',
            '閲覧履歴やCookieをセッション終了後に削除する',
            'ウイルスから完全に保護する',
            '匿名でインターネットを利用できる'
        ],
        correctAnswer: 1,
        explanation: 'プライベートモードでは、ブラウザを閉じた後に閲覧履歴、Cookie、フォームデータなどが削除されます。完全な匿名性を保証するものではありません。'
    },
    
    // ドメイン4: ソフトウェア開発
    {
        id: 11,
        domain: 'domain4',
        domainName: 'ソフトウェア開発',
        question: 'プログラミングにおける「変数」の説明として正しいものはどれですか？',
        options: [
            '変更できない固定の値',
            'データを一時的に保存する入れ物',
            'プログラムの実行順序を制御するもの',
            'エラーメッセージを表示する機能'
        ],
        correctAnswer: 1,
        explanation: '変数はデータを一時的に保存するための入れ物（メモリ領域）です。値を代入したり、後から変更することができます。'
    },
    {
        id: 12,
        domain: 'domain4',
        domainName: 'ソフトウェア開発',
        question: 'if文の主な用途は何ですか？',
        options: [
            'プログラムを終了する',
            '条件によって処理を分岐させる',
            '同じ処理を繰り返す',
            'データを保存する'
        ],
        correctAnswer: 1,
        explanation: 'if文は条件分岐を行う制御構造です。条件が真（true）の場合と偽（false）の場合で異なる処理を実行します。'
    },
    {
        id: 13,
        domain: 'domain4',
        domainName: 'ソフトウェア開発',
        question: 'ソフトウェア開発ライフサイクル（SDLC）の正しい順序はどれですか？',
        options: [
            '実装 → 要件定義 → 設計 → テスト → 保守',
            '要件定義 → 設計 → 実装 → テスト → 保守',
            'テスト → 設計 → 実装 → 要件定義 → 保守',
            '設計 → 実装 → 要件定義 → テスト → 保守'
        ],
        correctAnswer: 1,
        explanation: 'SDLCの基本的な順序は、要件定義（何を作るか）→ 設計（どう作るか）→ 実装（実際に作る）→ テスト（動作確認）→ 保守（運用・改善）です。'
    },
    
    // ドメイン5: データベースの基礎
    {
        id: 14,
        domain: 'domain5',
        domainName: 'データベースの基礎',
        question: 'リレーショナルデータベースにおいて、各レコードを一意に識別するための列を何と呼びますか？',
        options: [
            '外部キー',
            '主キー（プライマリキー）',
            'インデックス',
            'ビュー'
        ],
        correctAnswer: 1,
        explanation: '主キー（プライマリキー）は、テーブル内の各レコード（行）を一意に識別するための列です。重複する値を持つことはできません。'
    },
    {
        id: 15,
        domain: 'domain5',
        domainName: 'データベースの基礎',
        question: 'SQLのSELECT文の主な用途は何ですか？',
        options: [
            'データを削除する',
            'データを検索・取得する',
            'データを挿入する',
            'データを更新する'
        ],
        correctAnswer: 1,
        explanation: 'SELECT文はデータベースからデータを検索・取得するために使用します。INSERT（挿入）、UPDATE（更新）、DELETE（削除）とは異なります。'
    },
    {
        id: 16,
        domain: 'domain5',
        domainName: 'データベースの基礎',
        question: 'フルバックアップの説明として正しいものはどれですか？',
        options: [
            '前回のバックアップ以降に変更されたデータのみをバックアップする',
            '全てのデータを完全にバックアップする',
            '重要なファイルのみをバックアップする',
            '圧縮してバックアップする'
        ],
        correctAnswer: 1,
        explanation: 'フルバックアップは、対象となる全てのデータを完全にバックアップします。復元が簡単ですが、時間と容量が必要です。差分・増分バックアップは変更分のみを保存します。'
    },
    
    // ドメイン6: セキュリティ
    {
        id: 17,
        domain: 'domain6',
        domainName: 'セキュリティ',
        question: 'フィッシング攻撃の主な手口として正しいものはどれですか？',
        options: [
            'コンピュータウイルスを直接送り込む',
            '偽のWebサイトや偽メールで個人情報を盗む',
            'ネットワークを過負荷にしてサービスを停止させる',
            'パスワードを総当たりで試す'
        ],
        correctAnswer: 1,
        explanation: 'フィッシングは、正規の企業やサービスを装った偽のWebサイトやメールを使って、個人情報（パスワード、クレジットカード番号など）を盗み取る攻撃です。'
    },
    {
        id: 18,
        domain: 'domain6',
        domainName: 'セキュリティ',
        question: '二要素認証（2FA）の説明として正しいものはどれですか？',
        options: [
            'パスワードを2回入力する認証方法',
            '2つの異なる種類の認証要素を組み合わせる方法',
            '2人のユーザーが同時にログインする方法',
            'パスワードを2つ設定する方法'
        ],
        correctAnswer: 1,
        explanation: '二要素認証は、「知識（パスワード）」と「所有（スマートフォン、トークン）」など、2つの異なる種類の認証要素を組み合わせることで、セキュリティを強化する方法です。'
    },
    {
        id: 19,
        domain: 'domain6',
        domainName: 'セキュリティ',
        question: 'ランサムウェアの主な特徴は何ですか？',
        options: [
            'コンピュータの動作を遅くする',
            'ファイルを暗号化し、復号の代償に金銭を要求する',
            '個人情報を密かに盗む',
            'Webサイトに不正広告を表示する'
        ],
        correctAnswer: 1,
        explanation: 'ランサムウェアは、感染したコンピュータのファイルを暗号化してアクセス不能にし、復号するための身代金（ランサム）を要求するマルウェアです。'
    },
    {
        id: 20,
        domain: 'domain6',
        domainName: 'セキュリティ',
        question: 'SSL/TLSプロトコルの主な目的は何ですか？',
        options: [
            'Webページの表示速度を向上させる',
            'インターネット通信を暗号化して保護する',
            'ウイルスをスキャンする',
            'データを圧縮する'
        ],
        correctAnswer: 1,
        explanation: 'SSL/TLS（Secure Sockets Layer / Transport Layer Security）は、インターネット通信を暗号化して保護するプロトコルです。HTTPSのSがこれに該当します。'
    }
];

class QuizManager {
    constructor() {
        this.quizData = quizData;
        this.answers = {};
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadAnswers();
        this.renderQuizzes();
        this.attachEventListeners();
        this.updateStats();
    }

    attachEventListeners() {
        // フィルターボタン
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilterChange(e.target.closest('.filter-btn'));
            });
        });

        // リセットボタン
        const resetBtn = document.getElementById('reset-quiz');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetQuiz());
        }
    }

    handleFilterChange(btn) {
        const filter = btn.dataset.filter;
        this.currentFilter = filter;

        // アクティブ状態を更新
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // クイズを再描画
        this.renderQuizzes();
    }

    renderQuizzes() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        const filteredQuizzes = this.currentFilter === 'all' 
            ? this.quizData 
            : this.quizData.filter(q => q.domain === this.currentFilter);

        container.innerHTML = filteredQuizzes.map(quiz => this.createQuizCard(quiz)).join('');
        this.restoreAnswers();
    }

    createQuizCard(quiz) {
        const isAnswered = this.answers[quiz.id] !== undefined;
        const userAnswer = this.answers[quiz.id];
        const isCorrect = userAnswer === quiz.correctAnswer;

        return `
            <div class="quiz-card ${isAnswered ? 'answered' : ''} ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : ''}" data-quiz-id="${quiz.id}">
                <div class="quiz-header">
                    <span class="quiz-category" style="background: ${this.getCategoryColor(quiz.domain)}">${quiz.domainName}</span>
                    <span class="quiz-number">問題 ${quiz.id}</span>
                </div>
                <div class="quiz-question">${quiz.question}</div>
                <div class="quiz-options">
                    ${quiz.options.map((option, index) => `
                        <button class="quiz-option-btn ${isAnswered && index === quiz.correctAnswer ? 'correct' : ''} ${isAnswered && index === userAnswer && index !== quiz.correctAnswer ? 'incorrect' : ''}" 
                                data-quiz-id="${quiz.id}" 
                                data-option="${index}"
                                ${isAnswered ? 'disabled' : ''}>
                            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                            <span class="option-text">${option}</span>
                        </button>
                    `).join('')}
                </div>
                ${isAnswered ? `
                    <div class="quiz-explanation" style="display: block;">
                        <div class="explanation-header">
                            <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                            <strong>${isCorrect ? '正解です！' : '不正解です'}</strong>
                        </div>
                        <div class="explanation-content">
                            <p><strong>正解：</strong>${String.fromCharCode(65 + quiz.correctAnswer)}</p>
                            <p>${quiz.explanation}</p>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    getCategoryColor(domain) {
        const colors = {
            domain1: '#ff6b35',
            domain2: '#f77f00',
            domain3: '#fcbf49',
            domain4: '#06d6a0',
            domain5: '#118ab2',
            domain6: '#ef476f'
        };
        return colors[domain] || '#6b7280';
    }

    restoreAnswers() {
        Object.keys(this.answers).forEach(quizId => {
            const card = document.querySelector(`[data-quiz-id="${quizId}"]`);
            if (!card) return;

            const quiz = this.quizData.find(q => q.id === parseInt(quizId));
            if (!quiz) return;

            const userAnswer = this.answers[quizId];
            const isCorrect = userAnswer === quiz.correctAnswer;

            card.classList.add('answered', isCorrect ? 'correct' : 'incorrect');

            // ボタンを無効化
            card.querySelectorAll('.quiz-option-btn').forEach(btn => {
                btn.disabled = true;
                const optionIndex = parseInt(btn.dataset.option);
                if (optionIndex === quiz.correctAnswer) {
                    btn.classList.add('correct');
                } else if (optionIndex === userAnswer) {
                    btn.classList.add('incorrect');
                }
            });

            // 解説を表示
            const explanation = card.querySelector('.quiz-explanation');
            if (explanation) {
                explanation.style.display = 'block';
            }
        });

        // ボタンにイベントリスナーを追加
        document.querySelectorAll('.quiz-option-btn:not([disabled])').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const quizId = parseInt(e.currentTarget.dataset.quizId);
                const option = parseInt(e.currentTarget.dataset.option);
                this.handleAnswer(quizId, option);
            });
        });
    }

    handleAnswer(quizId, selectedOption) {
        const quiz = this.quizData.find(q => q.id === quizId);
        if (!quiz) return;

        const card = document.querySelector(`[data-quiz-id="${quizId}"]`);
        if (!card || card.classList.contains('answered')) return;

        // 回答を保存
        this.answers[quizId] = selectedOption;
        this.saveAnswers();

        const isCorrect = selectedOption === quiz.correctAnswer;

        // カードを更新
        card.classList.add('answered', isCorrect ? 'correct' : 'incorrect');

        // 正解ボタンをハイライト
        card.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.disabled = true;
            const optionIndex = parseInt(btn.dataset.option);
            if (optionIndex === quiz.correctAnswer) {
                btn.classList.add('correct');
            } else if (optionIndex === selectedOption) {
                btn.classList.add('incorrect');
            }
        });

        // 解説を表示
        const explanationHTML = `
            <div class="quiz-explanation">
                <div class="explanation-header">
                    <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                    <strong>${isCorrect ? '正解です！' : '不正解です'}</strong>
                </div>
                <div class="explanation-content">
                    <p><strong>正解：</strong>${String.fromCharCode(65 + quiz.correctAnswer)}</p>
                    <p>${quiz.explanation}</p>
                </div>
            </div>
        `;
        card.insertAdjacentHTML('beforeend', explanationHTML);

        // 統計を更新
        this.updateStats();
    }

    updateStats() {
        const answeredCount = Object.keys(this.answers).length;
        const correctCount = Object.values(this.answers).filter((answer, index) => {
            const quizId = Object.keys(this.answers)[index];
            const quiz = this.quizData.find(q => q.id === parseInt(quizId));
            return quiz && answer === quiz.correctAnswer;
        }).length;
        const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

        // 画面の統計を更新
        const answeredElement = document.getElementById('answered-count');
        const correctElement = document.getElementById('correct-count');
        const accuracyElement = document.getElementById('accuracy-rate');

        if (answeredElement) answeredElement.textContent = answeredCount;
        if (correctElement) correctElement.textContent = correctCount;
        if (accuracyElement) accuracyElement.textContent = `${accuracy}%`;

        // 進捗パネルの統計も更新
        const progressCorrect = document.getElementById('progress-correct');
        const progressAnswered = document.getElementById('progress-answered');
        const progressAccuracy = document.getElementById('progress-accuracy');

        if (progressCorrect) progressCorrect.textContent = correctCount;
        if (progressAnswered) progressAnswered.textContent = answeredCount;
        if (progressAccuracy) progressAccuracy.textContent = `${accuracy}%`;

        // 進捗バーを更新
        const quizProgressFill = document.getElementById('quiz-progress-fill');
        const quizProgressText = document.getElementById('quiz-progress-text');
        const progressPercentage = Math.round((answeredCount / this.quizData.length) * 100);

        if (quizProgressFill) quizProgressFill.style.width = `${progressPercentage}%`;
        if (quizProgressText) quizProgressText.textContent = `${progressPercentage}%`;
    }

    resetQuiz() {
        if (!confirm('すべての回答をリセットしますか？')) return;

        this.answers = {};
        this.saveAnswers();
        this.renderQuizzes();
        this.updateStats();
    }

    saveAnswers() {
        localStorage.setItem('comptia_itf_quiz_answers', JSON.stringify(this.answers));
    }

    loadAnswers() {
        const saved = localStorage.getItem('comptia_itf_quiz_answers');
        this.answers = saved ? JSON.parse(saved) : {};
    }
}

// ページ読み込み時にクイズマネージャーを初期化
document.addEventListener('DOMContentLoaded', function() {
    window.quizManager = new QuizManager();
});
