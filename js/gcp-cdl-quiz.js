// gcp-cdl-quiz.js - GCP Cloud Digital Leader 練習問題

// 練習問題データ（20問）
const quizData = [
    // セクション1: デジタルトランスフォーメーション (4問)
    {
        id: 1,
        category: 'dx',
        categoryName: 'デジタルトランスフォーメーション',
        question: 'クラウドコンピューティングの主なメリットとして正しいものはどれか。',
        options: [
            'CapExからOpExへの転換により、初期投資を削減できる',
            '物理サーバーを自社で管理する必要がある',
            'オンプレミスよりも柔軟性が低い',
            'スケーリングは手動で行う必要がある'
        ],
        correctAnswer: 0,
        explanation: 'クラウドコンピューティングの主なメリットは、設備投資（CapEx）から運用費用（OpEx）への転換により、初期投資を削減し、使った分だけ支払う従量課金モデルを実現できることです。'
    },
    {
        id: 2,
        category: 'dx',
        categoryName: 'デジタルトランスフォーメーション',
        question: '「Lift & Shift」移行戦略について正しい説明はどれか。',
        options: [
            'アプリケーションを完全に書き直す方法',
            'オンプレミスのアプリケーションをそのままクラウドに移行する方法',
            'クラウドネイティブなアーキテクチャに最適化する方法',
            'すべてのアプリケーションを廃止する方法'
        ],
        correctAnswer: 1,
        explanation: 'Lift & Shiftは、既存のオンプレミスアプリケーションをほとんど変更せずにクラウド環境に移行する戦略です。最も迅速かつ低リスクな移行方法ですが、クラウドのメリットを最大限活用できない場合があります。'
    },
    {
        id: 3,
        category: 'dx',
        categoryName: 'デジタルトランスフォーメーション',
        question: 'TCO（Total Cost of Ownership）に含まれるコストはどれか。',
        options: [
            '初期購入費用のみ',
            '電気代と冷却費用のみ',
            '初期費用、運用費、保守費、人件費などの総コスト',
            'ライセンス費用のみ'
        ],
        correctAnswer: 2,
        explanation: 'TCO（総所有コスト）は、システムの初期購入費用だけでなく、運用・保守費用、電気代、冷却費、人件費、スペース費用など、システムのライフサイクル全体にかかるすべてのコストを含みます。'
    },
    {
        id: 4,
        category: 'dx',
        categoryName: 'デジタルトランスフォーメーション',
        question: '責任共有モデルにおいて、どのサービスモデルでも常に顧客の責任となるものはどれか。',
        options: [
            '物理的なセキュリティ',
            'データの管理とアクセス制御',
            'ネットワークインフラの管理',
            'サーバーのハードウェア保守'
        ],
        correctAnswer: 1,
        explanation: '責任共有モデルでは、IaaS、PaaS、SaaSのどのサービスモデルでも、データの管理とアクセス制御は常に顧客の責任です。Googleは物理インフラを管理しますが、データとその権限管理は顧客が責任を持ちます。'
    },

    // セクション2: データトランスフォーメーション (3問)
    {
        id: 5,
        category: 'data',
        categoryName: 'データトランスフォーメーション',
        question: 'BigQueryの特徴として正しいものはどれか。',
        options: [
            'リレーショナルデータベース管理システム（RDBMS）',
            'サーバーレスなデータウェアハウス',
            'NoSQLドキュメントデータベース',
            'オブジェクトストレージサービス'
        ],
        correctAnswer: 1,
        explanation: 'BigQueryは、Googleが提供するサーバーレスなデータウェアハウスです。ペタバイト級のデータを高速に分析でき、インフラ管理が不要で、SQLを使用してデータ分析を行えます。'
    },
    {
        id: 6,
        category: 'data',
        categoryName: 'データトランスフォーメーション',
        question: 'グローバルに分散された水平スケール可能なリレーショナルデータベースはどれか。',
        options: [
            'Cloud SQL',
            'Firestore',
            'Cloud Spanner',
            'Cloud Bigtable'
        ],
        correctAnswer: 2,
        explanation: 'Cloud Spannerは、グローバルに分散され、水平スケール可能なフルマネージドリレーショナルデータベースです。ACIDトランザクションをサポートしながら、世界規模でのスケーラビリティを提供します。'
    },
    {
        id: 7,
        category: 'data',
        categoryName: 'データトランスフォーメーション',
        question: 'IoTデバイスからの時系列データを低レイテンシで処理するのに最適なデータベースはどれか。',
        options: [
            'Cloud SQL',
            'BigQuery',
            'Cloud Bigtable',
            'Cloud Spanner'
        ],
        correctAnswer: 2,
        explanation: 'Cloud Bigtableは、NoSQLの列指向データベースで、大規模な時系列データやIoTデータを低レイテンシで処理するのに最適です。高スループットと低レイテンシが求められる用途に適しています。'
    },

    // セクション3: AI・MLによるイノベーション (3問)
    {
        id: 8,
        category: 'ai',
        categoryName: 'AI・MLによるイノベーション',
        question: 'Vision APIでできることはどれか。',
        options: [
            'テキストの感情分析',
            '画像内のオブジェクト検出とOCR',
            '音声の文字起こし',
            'テキストの自動翻訳'
        ],
        correctAnswer: 1,
        explanation: 'Vision APIは、画像認識サービスで、画像内のオブジェクト検出、顔検出、ラベル検出、OCR（光学文字認識）などが可能です。事前学習済みモデルを使用するため、機械学習の専門知識がなくても利用できます。'
    },
    {
        id: 9,
        category: 'ai',
        categoryName: 'AI・MLによるイノベーション',
        question: 'Vertex AIの主な用途はどれか。',
        options: [
            '簡単なAPI呼び出しのみ',
            'MLモデルの構築、トレーニング、デプロイメントを統合管理',
            'データの可視化のみ',
            'ストレージ管理のみ'
        ],
        correctAnswer: 1,
        explanation: 'Vertex AIは、Google Cloudの統合機械学習プラットフォームで、MLモデルの構築、トレーニング、デプロイメント、管理を一元化します。AutoMLやカスタムモデルのトレーニングをサポートします。'
    },
    {
        id: 10,
        category: 'ai',
        categoryName: 'AI・MLによるイノベーション',
        question: '教師あり学習の説明として正しいものはどれか。',
        options: [
            'ラベル付けされたデータを使用してモデルを訓練する',
            'ラベルなしのデータからパターンを発見する',
            '報酬に基づいて最適な行動を学習する',
            'データの次元を削減する'
        ],
        correctAnswer: 0,
        explanation: '教師あり学習は、ラベル付けされた訓練データを使用してモデルを訓練する機械学習の手法です。入力と正解（ラベル）のペアから学習し、新しいデータに対して予測を行います。'
    },

    // セクション4: インフラ・アプリのモダナイゼーション (4問)
    {
        id: 11,
        category: 'infra',
        categoryName: 'インフラ・アプリのモダナイゼーション',
        question: 'レガシーアプリケーションをそのままクラウドに移行する場合、最適なサービスはどれか。',
        options: [
            'Compute Engine',
            'Cloud Functions',
            'App Engine',
            'Cloud Run'
        ],
        correctAnswer: 0,
        explanation: 'Compute Engineは、IaaS（Infrastructure as a Service）として仮想マシンを提供します。OSレベルから完全に制御できるため、レガシーアプリケーションをそのまま移行するLift & Shift戦略に最適です。'
    },
    {
        id: 12,
        category: 'infra',
        categoryName: 'インフラ・アプリのモダナイゼーション',
        question: 'マイクロサービスアーキテクチャを実装する際に最適なサービスはどれか。',
        options: [
            'Compute EngineのみでVM管理',
            'Google Kubernetes Engine (GKE) または Cloud Run',
            'Cloud Storage',
            'BigQuery'
        ],
        correctAnswer: 1,
        explanation: 'マイクロサービスアーキテクチャには、GKE（Kubernetes管理）またはCloud Run（サーバーレスコンテナ）が最適です。コンテナ化されたサービスの管理、自動スケーリング、サービス間通信を効率的に実現できます。'
    },
    {
        id: 13,
        category: 'infra',
        categoryName: 'インフラ・アプリのモダナイゼーション',
        question: 'Anthosの主な用途はどれか。',
        options: [
            'データの可視化',
            'ハイブリッド・マルチクラウド環境の統一管理',
            'データベース管理のみ',
            'オブジェクトストレージ'
        ],
        correctAnswer: 1,
        explanation: 'Anthosは、オンプレミス、GCP、AWS、Azureなどのハイブリッド・マルチクラウド環境を統一的に管理できるプラットフォームです。どこでもKubernetesを実行でき、一元的なポリシー管理が可能です。'
    },
    {
        id: 14,
        category: 'infra',
        categoryName: 'インフラ・アプリのモダナイゼーション',
        question: 'イベント駆動の軽量な処理に最適なサービスはどれか。',
        options: [
            'Compute Engine',
            'Cloud Functions',
            'Cloud Spanner',
            'Anthos'
        ],
        correctAnswer: 1,
        explanation: 'Cloud Functionsは、FaaS（Function as a Service）として、イベント駆動の軽量な処理に最適です。サーバー管理不要で、イベント発生時にのみ実行され、使用した時間だけ課金されます。'
    },

    // セクション5: 信頼とセキュリティ (3問)
    {
        id: 15,
        category: 'security',
        categoryName: '信頼とセキュリティ',
        question: 'IAM（Identity and Access Management）の主な目的はどれか。',
        options: [
            'データの暗号化',
            '誰が何にアクセスできるかを制御する',
            'ネットワークの負荷分散',
            'データのバックアップ'
        ],
        correctAnswer: 1,
        explanation: 'IAMは、Google Cloudリソースへのアクセスを管理するサービスです。「誰が（Identity）」「何に（Resource）」「何をできるか（Permission）」を細かく制御し、最小権限の原則に基づいたセキュリティを実現します。'
    },
    {
        id: 16,
        category: 'security',
        categoryName: '信頼とセキュリティ',
        question: 'Google Cloudにおける暗号化の説明として正しいものはどれか。',
        options: [
            '転送中のデータのみが暗号化される',
            '保存時のデータのみが暗号化される',
            '転送中と保存時の両方のデータがデフォルトで暗号化される',
            '暗号化は有料オプションである'
        ],
        correctAnswer: 2,
        explanation: 'Google Cloudでは、転送中のデータと保存時のデータの両方がデフォルトで暗号化されます。追加料金なしで、強力な暗号化によりデータを保護します。'
    },
    {
        id: 17,
        category: 'security',
        categoryName: '信頼とセキュリティ',
        question: 'Cloud KMSの役割はどれか。',
        options: [
            'データベース管理',
            '暗号鍵の管理とローテーション',
            'ネットワーク管理',
            'コンピューティングリソースの管理'
        ],
        correctAnswer: 1,
        explanation: 'Cloud KMS（Key Management Service）は、暗号鍵の作成、管理、使用、ローテーションを行うサービスです。データの暗号化に使用する鍵を一元管理し、セキュリティを強化します。'
    },

    // セクション6: クラウド運用のスケーリング (3問)
    {
        id: 18,
        category: 'ops',
        categoryName: 'クラウド運用のスケーリング',
        question: 'Google Cloudのコスト最適化手法として正しいものはどれか。',
        options: [
            'すべてのリソースを最大スペックで常時稼働',
            'コミットメント使用割引（CUD）やプリエンプティブルVMの活用',
            'モニタリングを無効化してコスト削減',
            'セキュリティ機能の無効化'
        ],
        correctAnswer: 1,
        explanation: 'コミットメント使用割引（CUD）は、長期利用を約束することで大幅な割引を受けられます。プリエンプティブルVMは、中断される可能性がありますが最大80%のコスト削減が可能です。'
    },
    {
        id: 19,
        category: 'ops',
        categoryName: 'クラウド運用のスケーリング',
        question: 'Google Cloudのリソース階層の正しい順序はどれか。',
        options: [
            'Project → Folder → Organization',
            'Organization → Folder → Project',
            'Folder → Organization → Project',
            'Organization → Project → Folder'
        ],
        correctAnswer: 1,
        explanation: 'Google Cloudのリソース階層は、Organization（組織）→ Folder（フォルダ）→ Project（プロジェクト）の順序です。この階層により、ポリシーと権限を組織全体で一貫して管理できます。'
    },
    {
        id: 20,
        category: 'ops',
        categoryName: 'クラウド運用のスケーリング',
        question: 'Cloud Monitoringの主な用途はどれか。',
        options: [
            'データベースのクエリ最適化のみ',
            'リソースのパフォーマンス監視とアラート設定',
            'コードのデプロイメントのみ',
            'データの暗号化のみ'
        ],
        correctAnswer: 1,
        explanation: 'Cloud Monitoringは、Google Cloudリソースのパフォーマンスを監視し、メトリクスを収集・可視化し、アラートを設定するサービスです。システムの健全性を継続的に監視し、問題を早期に発見できます。'
    }
];

// クイズ管理クラス
class QuizManager {
    constructor() {
        this.quizData = quizData;
        this.answers = this.loadAnswers();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderQuiz();
        this.updateStats();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // フィルターボタン
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.currentTarget.dataset.filter;
                this.filterQuiz(filter);
            });
        });

        // リセットボタン
        const resetBtn = document.getElementById('reset-quiz');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('すべての回答をリセットしますか？')) {
                    this.resetAnswers();
                }
            });
        }
    }

    filterQuiz(filter) {
        this.currentFilter = filter;
        
        // フィルターボタンのアクティブ状態を更新
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });

        this.renderQuiz();
    }

    renderQuiz() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        let filteredQuiz = this.quizData;
        if (this.currentFilter !== 'all') {
            filteredQuiz = this.quizData.filter(q => q.category === this.currentFilter);
        }

        container.innerHTML = filteredQuiz.map(quiz => this.renderQuizCard(quiz)).join('');

        // 回答済みの問題を復元
        this.restoreAnswers();

        // 選択肢のイベントリスナーを設定
        container.querySelectorAll('.quiz-option-btn').forEach(option => {
            option.addEventListener('click', (e) => {
                this.handleAnswer(e.currentTarget);
            });
        });
    }

    renderQuizCard(quiz) {
        const categoryColors = {
            dx: '#3b82f6',
            data: '#10b981',
            ai: '#8b5cf6',
            infra: '#f59e0b',
            security: '#ef4444',
            ops: '#6366f1'
        };

        const color = categoryColors[quiz.category] || '#6b7280';
        const isAnswered = this.answers[quiz.id] !== undefined;
        const answeredClass = isAnswered ? 'answered' : '';

        return `
            <div class="quiz-card ${answeredClass}" data-quiz-id="${quiz.id}">
                <div class="quiz-header">
                    <span class="quiz-number">問題 ${quiz.id}</span>
                    <span class="quiz-category" style="background-color: ${color};">
                        ${quiz.categoryName}
                    </span>
                </div>
                <div class="quiz-question">${quiz.question}</div>
                <div class="quiz-options">
                    ${quiz.options.map((option, index) => `
                        <button class="quiz-option-btn" data-quiz-id="${quiz.id}" data-option="${index}">
                            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                            <span class="option-text">${option}</span>
                        </button>
                    `).join('')}
                </div>
                <div class="quiz-explanation" style="display: none;">
                    <div class="explanation-content">
                        <strong><i class="fas fa-lightbulb"></i> 解説：</strong>
                        <p>${quiz.explanation}</p>
                    </div>
                </div>
            </div>
        `;
    }

    handleAnswer(optionElement) {
        const quizId = parseInt(optionElement.dataset.quizId);
        const selectedOption = parseInt(optionElement.dataset.option);
        const quiz = this.quizData.find(q => q.id === quizId);
        
        if (!quiz) return;

        const card = optionElement.closest('.quiz-card');
        const allOptions = card.querySelectorAll('.quiz-option-btn');
        const explanation = card.querySelector('.quiz-explanation');

        // すでに回答済みの場合は何もしない
        if (card.classList.contains('answered')) return;

        // 回答を保存
        this.answers[quizId] = selectedOption;
        this.saveAnswers();

        // 正解/不正解の表示
        const isCorrect = selectedOption === quiz.correctAnswer;
        
        allOptions.forEach((opt, index) => {
            opt.disabled = true;
            if (index === quiz.correctAnswer) {
                opt.classList.add('correct');
            } else if (index === selectedOption && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // カードを回答済みにする
        card.classList.add('answered');
        if (isCorrect) {
            card.classList.add('correct');
        } else {
            card.classList.add('incorrect');
        }

        // 解説を表示
        explanation.style.display = 'block';

        // 統計を更新
        this.updateStats();
    }

    restoreAnswers() {
        Object.keys(this.answers).forEach(quizId => {
            const selectedOption = this.answers[quizId];
            const quiz = this.quizData.find(q => q.id === parseInt(quizId));
            if (!quiz) return;

            const card = document.querySelector(`.quiz-card[data-quiz-id="${quizId}"]`);
            if (!card) return;

            const allOptions = card.querySelectorAll('.quiz-option-btn');
            const explanation = card.querySelector('.quiz-explanation');
            const isCorrect = selectedOption === quiz.correctAnswer;

            allOptions.forEach((opt, index) => {
                opt.disabled = true;
                if (index === quiz.correctAnswer) {
                    opt.classList.add('correct');
                } else if (index === selectedOption && !isCorrect) {
                    opt.classList.add('incorrect');
                }
            });

            card.classList.add('answered');
            if (isCorrect) {
                card.classList.add('correct');
            } else {
                card.classList.add('incorrect');
            }

            explanation.style.display = 'block';
        });
    }

    updateStats() {
        const totalQuestions = this.quizData.length;
        const answeredCount = Object.keys(this.answers).length;
        const correctCount = Object.keys(this.answers).filter(id => {
            const quiz = this.quizData.find(q => q.id === parseInt(id));
            return quiz && this.answers[id] === quiz.correctAnswer;
        }).length;
        const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

        // DOMの更新
        const answeredEl = document.getElementById('answered-count');
        const correctEl = document.getElementById('correct-count');
        const accuracyEl = document.getElementById('accuracy-rate');

        if (answeredEl) answeredEl.textContent = `${answeredCount} / ${totalQuestions}`;
        if (correctEl) correctEl.textContent = correctCount;
        if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
    }

    loadAnswers() {
        const saved = localStorage.getItem('gcp_cdl_quiz_answers');
        return saved ? JSON.parse(saved) : {};
    }

    saveAnswers() {
        localStorage.setItem('gcp_cdl_quiz_answers', JSON.stringify(this.answers));
    }

    resetAnswers() {
        this.answers = {};
        localStorage.removeItem('gcp_cdl_quiz_answers');
        this.renderQuiz();
        this.updateStats();
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', function() {
    // クイズコンテナが存在する場合のみ初期化
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        new QuizManager();
    }
});
