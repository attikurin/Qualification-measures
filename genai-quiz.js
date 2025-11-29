// 生成AIパスポート試験 練習問題
// ========================================

// 問題データベース
const quizData = [
    // 第1章: AI（人工知能）
    {
        id: 1,
        chapter: 'ai-basics',
        chapterName: '第1章: AI',
        question: 'AIとロボットの違いとして最も適切なものを1つ選びなさい。',
        options: [
            'AIはハードウェア、ロボットはソフトウェアである',
            'AIはソフトウェア、ロボットはハードウェアである',
            'AIとロボットは同じ意味である',
            'AIは人間の知能、ロボットは機械の知能である'
        ],
        correctAnswer: 1,
        explanation: 'AIは知的な振る舞いを実現するソフトウェア技術であり、ロボットは物理的な身体を持つハードウェアです。ロボットにAIが搭載されることもありますが、AIとロボットは別の概念です。'
    },
    {
        id: 2,
        chapter: 'ai-basics',
        chapterName: '第1章: AI',
        question: '教師あり学習の説明として最も適切なものを1つ選びなさい。',
        options: [
            'データからパターンを自動的に発見する',
            '正解ラベル付きデータで学習する',
            '試行錯誤を通じて最適な行動を学習する',
            'ラベルなしデータをグループ分けする'
        ],
        correctAnswer: 1,
        explanation: '教師あり学習は、入力データと正解ラベル（教師信号）のペアを使って学習します。①は機械学習全般、③は強化学習、④は教師なし学習（クラスタリング）の説明です。'
    },
    {
        id: 3,
        chapter: 'ai-basics',
        chapterName: '第1章: AI',
        question: '過学習（オーバーフィッティング）を防ぐ手法として不適切なものを1つ選びなさい。',
        options: [
            '正則化',
            'ドロップアウト',
            '転移学習',
            'パラメータ数の大幅な増加'
        ],
        correctAnswer: 3,
        explanation: 'パラメータ数を増やすとモデルが複雑になり、過学習のリスクが高まります。正則化、ドロップアウト、転移学習はいずれも過学習を防ぐ有効な手法です。'
    },
    {
        id: 4,
        chapter: 'ai-basics',
        chapterName: '第1章: AI',
        question: '現在実用化されているAIのほとんどが該当する分類として適切なものを1つ選びなさい。',
        options: [
            '弱いAI（ANI）',
            '強いAI（AGI）',
            '超知能AI',
            '汎用AI'
        ],
        correctAnswer: 0,
        explanation: '現在実用化されているAIは、特定のタスクに特化した弱いAI（ANI：Artificial Narrow Intelligence）です。人間と同等の汎用的知能を持つ強いAI（AGI）はまだ実現されていません。'
    },
    {
        id: 5,
        chapter: 'ai-basics',
        chapterName: '第1章: AI',
        question: '第三次AIブームの主な要因として適切なものを2つ選びなさい。',
        options: [
            'エキスパートシステム',
            'ディープラーニング',
            'ビッグデータ',
            '推論と探索'
        ],
        correctAnswer: [1, 2],
        explanation: '第三次AIブーム（2010年代～）は、ディープラーニング技術の発展とビッグデータの活用によって実現しました。①は第二次ブーム、④は第一次ブームの特徴です。'
    },

    // 第2章: 生成AI
    {
        id: 6,
        chapter: 'generative',
        chapterName: '第2章: 生成AI',
        question: 'Transformerモデルの重要な仕組みとして適切なものを1つ選びなさい。',
        options: [
            '畳み込み層',
            '再帰層',
            'Self-Attention（自己注意力）',
            'プーリング層'
        ],
        correctAnswer: 2,
        explanation: 'Transformerモデルの核心はSelf-Attention（自己注意力）機構です。これにより、文中の単語間の関係性を効率的に学習できます。'
    },
    {
        id: 7,
        chapter: 'generative',
        chapterName: '第2章: 生成AI',
        question: 'GPT-3.5とGPT-4の主な違いとして適切なものを1つ選びなさい。',
        options: [
            'GPT-4はテキストのみ、GPT-3.5はマルチモーダル対応',
            'GPT-4はマルチモーダル対応、GPT-3.5はテキストのみ',
            'パラメータ数はGPT-3.5の方が多い',
            'GPT-4の方がハルシネーションが多い'
        ],
        correctAnswer: 1,
        explanation: 'GPT-4は画像とテキストの両方を理解できるマルチモーダルモデルです。GPT-3.5はテキストのみに対応しています。また、GPT-4の方がハルシネーションが少なく、より正確です。'
    },
    {
        id: 8,
        chapter: 'generative',
        chapterName: '第2章: 生成AI',
        question: 'ハルシネーション（幻覚）の説明として最も適切なものを1つ選びなさい。',
        options: [
            'AIが人間の感情を理解する現象',
            'AIが事実でない情報をもっともらしく生成する現象',
            'AIが画像を生成する技術',
            'AIが学習データを記憶する現象'
        ],
        correctAnswer: 1,
        explanation: 'ハルシネーション（幻覚）は、AIが存在しない情報や誤った情報を、あたかも事実であるかのように自信を持って生成する現象です。LLMの重要な課題の一つです。'
    },
    {
        id: 9,
        chapter: 'generative',
        chapterName: '第2章: 生成AI',
        question: 'Claudeの特徴として適切なものを1つ選びなさい。',
        options: [
            'Googleが開発した',
            '安全性と倫理を重視した設計',
            '画像生成に特化している',
            'オープンソースである'
        ],
        correctAnswer: 1,
        explanation: 'ClaudeはAnthropic社が開発した大規模言語モデルで、安全性と倫理を重視した設計が特徴です。Constitutional AI手法を採用し、有害な出力を抑制しています。'
    },

    // 第3章: 現在の生成AIの動向
    {
        id: 10,
        chapter: 'trends',
        chapterName: '第3章: AI動向',
        question: 'ディープフェイク技術の危険性として不適切なものを1つ選びなさい。',
        options: [
            '偽情報（ディスインフォメーション）の拡散',
            'なりすまし詐欺',
            'データの圧縮効率の向上',
            '名誉毀損やプライバシー侵害'
        ],
        correctAnswer: 2,
        explanation: 'データの圧縮効率の向上はディープフェイクの危険性ではなく、技術的な側面です。①②④はいずれもディープフェイクがもたらす社会的リスクです。'
    },
    {
        id: 11,
        chapter: 'trends',
        chapterName: '第3章: AI動向',
        question: 'RAG（検索拡張生成）のメリットとして適切なものをすべて選びなさい。',
        options: [
            'ハルシネーションの削減',
            '最新情報への対応',
            'モデルの再学習不要',
            '計算コストの大幅な削減'
        ],
        correctAnswer: [0, 1, 2],
        explanation: 'RAGは外部データベースから情報を検索して回答を生成するため、ハルシネーションの削減、最新情報への対応、再学習不要というメリットがあります。ただし、検索処理が必要なため、計算コストが大幅に削減されるわけではありません。'
    },
    {
        id: 12,
        chapter: 'trends',
        chapterName: '第3章: AI動向',
        question: 'AIエージェントの説明として最も適切なものを1つ選びなさい。',
        options: [
            '単一のタスクのみを実行するAI',
            '自律的に目標を設定し、計画を立て、実行するAIシステム',
            '画像を生成する専用AI',
            '人間の指示を待つだけのAI'
        ],
        correctAnswer: 1,
        explanation: 'AIエージェントは、目標を設定し、計画を立て、実行し、結果から学習する自律的なAIシステムです。複数のタスクを連携して実行できます。'
    },

    // 第4章: 情報リテラシー・法律（最重要）
    {
        id: 13,
        chapter: 'literacy',
        chapterName: '第4章: リテラシー',
        question: 'SMSを使ったフィッシング詐欺の名称として適切なものを1つ選びなさい。',
        options: [
            'スミッシング',
            'ヴィッシング',
            'スピアフィッシング',
            'ランサムウェア'
        ],
        correctAnswer: 0,
        explanation: 'スミッシングはSMS（ショートメッセージサービス）を使ったフィッシング詐欺です。ヴィッシングは音声通話、スピアフィッシングは特定の個人を狙った攻撃、ランサムウェアはデータを暗号化して身代金を要求するマルウェアです。'
    },
    {
        id: 14,
        chapter: 'literacy',
        chapterName: '第4章: リテラシー',
        question: '要配慮個人情報に該当するものをすべて選びなさい。',
        options: [
            '氏名',
            '病歴',
            'メールアドレス',
            '犯罪歴'
        ],
        correctAnswer: [1, 3],
        explanation: '要配慮個人情報は、人種、信条、社会的身分、病歴、犯罪歴、犯罪被害情報、身体・知的・精神障害の事実などです。氏名やメールアドレスは通常の個人情報です。'
    },
    {
        id: 15,
        chapter: 'literacy',
        chapterName: '第4章: リテラシー',
        question: '著作権の保護期間として適切なものを1つ選びなさい。',
        options: [
            '著作者の生存中のみ',
            '著作者の死後20年',
            '著作者の死後50年',
            '著作者の死後70年'
        ],
        correctAnswer: 3,
        explanation: '日本では著作権の保護期間は原則として著作者の死後70年です（2018年の著作権法改正により50年から70年に延長されました）。'
    },
    {
        id: 16,
        chapter: 'literacy',
        chapterName: '第4章: リテラシー',
        question: '実在の著名人の顔を生成AIで無断生成・利用した場合に侵害する可能性がある権利をすべて選びなさい。',
        options: [
            '著作権',
            '肖像権',
            'パブリシティ権',
            '特許権'
        ],
        correctAnswer: [1, 2],
        explanation: '実在の人物の顔を無断で生成・利用すると肖像権侵害、著名人の場合はさらにパブリシティ権（経済的価値を保護する権利）侵害のリスクがあります。'
    },
    {
        id: 17,
        chapter: 'literacy',
        chapterName: '第4章: リテラシー',
        question: 'AI社会原則に含まれないものを1つ選びなさい。',
        options: [
            '人間中心の考え方',
            '透明性',
            '利益最大化',
            'アカウンタビリティ（説明責任）'
        ],
        correctAnswer: 2,
        explanation: 'AI社会原則には、人間中心、安全性、公平性、プライバシー保護、セキュリティ確保、透明性、アカウンタビリティの7つが含まれます。利益最大化は含まれません。'
    },
    {
        id: 18,
        chapter: 'literacy',
        chapterName: '第4章: リテラシー',
        question: 'AIの事業活動を担う3つの主体に含まれないものを1つ選びなさい。',
        options: [
            'AI開発者（AI Developer）',
            'AI提供者（AI Provider）',
            'AI利用者（AI Business User）',
            'AI監視者（AI Monitor）'
        ],
        correctAnswer: 3,
        explanation: 'AI事業者ガイドラインでは、AI開発者、AI提供者、AI利用者の3つの主体が定義されています。AI監視者という役割は定義されていません。'
    },

    // 第5章: プロンプト制作
    {
        id: 19,
        chapter: 'prompting',
        chapterName: '第5章: プロンプト',
        question: 'LLMのTemperatureパラメータを高く設定した場合の出力の特徴として適切なものを1つ選びなさい。',
        options: [
            'より保守的で予測可能な出力',
            'より創造的で多様な出力',
            'より正確な計算結果',
            'より短い文章'
        ],
        correctAnswer: 1,
        explanation: 'Temperatureが高いと、生成のランダム性が増し、創造的で多様な出力が得られます。逆に低いと保守的で予測可能な出力になります。'
    },
    {
        id: 20,
        chapter: 'prompting',
        chapterName: '第5章: プロンプト',
        question: 'Zero-Shotプロンプティングの説明として最も適切なものを1つ選びなさい。',
        options: [
            '例を複数示してから実行させる',
            '例を示さずに指示だけで実行させる',
            'プロンプトを全く与えない',
            '温度設定をゼロにする'
        ],
        correctAnswer: 1,
        explanation: 'Zero-Shotプロンプティングは、具体例を示さずに指示だけでタスクを実行させる手法です。Few-Shotは複数の例を示す手法です。'
    },
    {
        id: 21,
        chapter: 'prompting',
        chapterName: '第5章: プロンプト',
        question: 'プロンプトの構成要素に含まれないものを1つ選びなさい。',
        options: [
            'Instruction（指示）',
            'Context（文脈）',
            'Temperature（温度設定）',
            'Output Indicator（出力形式の指定）'
        ],
        correctAnswer: 2,
        explanation: 'プロンプトの4つの構成要素は、Instruction（指示）、Context（文脈）、Input Data（入力データ）、Output Indicator（出力形式）です。Temperatureはモデルのパラメータであり、プロンプトの構成要素ではありません。'
    },
    {
        id: 22,
        chapter: 'prompting',
        chapterName: '第5章: プロンプト',
        question: 'テキスト生成AIが不得意なこととして適切なものをすべて選びなさい。',
        options: [
            '正確な文字数の指定',
            '複雑な計算',
            '文章の要約',
            '最新の情報（学習期限以降）'
        ],
        correctAnswer: [0, 1, 3],
        explanation: 'テキスト生成AIは、正確な文字数指定、複雑な計算、最新情報の提供が苦手です。一方、文章の要約は得意なタスクです。'
    },
    {
        id: 23,
        chapter: 'prompting',
        chapterName: '第5章: プロンプト',
        question: 'ビジネスシーンでのテキスト生成AI活用として不適切なものを1つ選びなさい。',
        options: [
            'メール文章の作成',
            'アンケート項目の作成',
            '機密情報の社外共有',
            '業務手順の分解'
        ],
        correctAnswer: 2,
        explanation: '機密情報をテキスト生成AIに入力することは情報漏洩のリスクがあり、不適切です。①②④は適切な活用例です。'
    }
];

// 問題管理クラス
class QuizManager {
    constructor() {
        this.currentFilter = 'all';
        this.userAnswers = {};
        this.quizStats = {
            answered: 0,
            correct: 0,
            incorrect: 0
        };
        
        this.init();
    }

    init() {
        this.renderQuizList();
        this.attachEventListeners();
        this.loadProgress();
    }

    // 問題リストの描画
    renderQuizList(filter = 'all') {
        const quizList = document.getElementById('quiz-list');
        if (!quizList) return;

        quizList.innerHTML = '';

        const filteredQuizzes = filter === 'all' 
            ? quizData 
            : quizData.filter(quiz => quiz.chapter === filter);

        if (filteredQuizzes.length === 0) {
            quizList.innerHTML = '<p class="no-quiz">該当する問題がありません</p>';
            return;
        }

        filteredQuizzes.forEach(quiz => {
            const quizItem = this.createQuizItem(quiz);
            quizList.appendChild(quizItem);
        });
    }

    // 個別の問題要素を作成
    createQuizItem(quiz) {
        const div = document.createElement('div');
        div.className = 'quiz-item';
        div.dataset.quizId = quiz.id;

        const isAnswered = this.userAnswers[quiz.id] !== undefined;
        const isCorrect = isAnswered && this.checkAnswer(quiz, this.userAnswers[quiz.id]);

        let statusClass = '';
        let statusIcon = '';
        if (isAnswered) {
            statusClass = isCorrect ? 'correct' : 'incorrect';
            statusIcon = isCorrect 
                ? '<i class="fas fa-check-circle"></i>' 
                : '<i class="fas fa-times-circle"></i>';
        }

        const isMultiple = Array.isArray(quiz.correctAnswer);

        div.innerHTML = `
            <div class="quiz-header">
                <span class="quiz-number">問題 ${quiz.id}</span>
                <span class="quiz-chapter">${quiz.chapterName}</span>
                ${statusIcon ? `<span class="quiz-status ${statusClass}">${statusIcon}</span>` : ''}
            </div>
            <div class="quiz-question">
                <p>${quiz.question}</p>
                ${isMultiple ? '<p class="note"><i class="fas fa-info-circle"></i> 複数選択問題です</p>' : ''}
            </div>
            <div class="quiz-options">
                ${quiz.options.map((option, index) => `
                    <div class="quiz-option">
                        <button class="quiz-option-btn ${this.getOptionClass(quiz, index, isAnswered)}" 
                                data-quiz-id="${quiz.id}" 
                                data-option-index="${index}"
                                ${isAnswered ? 'disabled' : ''}>
                            <span class="quiz-option-label">${String.fromCharCode(65 + index)}</span>
                            <span class="quiz-option-text">${option}</span>
                        </button>
                    </div>
                `).join('')}
            </div>
            ${!isAnswered ? `
                <button class="btn-submit-quiz" data-quiz-id="${quiz.id}">
                    <i class="fas fa-paper-plane"></i> 解答する
                </button>
            ` : `
                <div class="quiz-explanation ${statusClass}">
                    <h4>
                        ${isCorrect ? '<i class="fas fa-check-circle"></i> 正解！' : '<i class="fas fa-times-circle"></i> 不正解'}
                    </h4>
                    <p><strong>正解:</strong> ${this.getCorrectAnswerText(quiz)}</p>
                    <p><strong>解説:</strong> ${quiz.explanation}</p>
                </div>
            `}
        `;

        return div;
    }

    // オプションが選択されているか確認
    isOptionSelected(quizId, optionIndex) {
        const answer = this.userAnswers[quizId];
        if (answer === undefined) return false;
        
        if (Array.isArray(answer)) {
            return answer.includes(optionIndex);
        }
        return answer === optionIndex;
    }

    // オプションのクラスを取得
    getOptionClass(quiz, optionIndex, isAnswered) {
        if (!isAnswered) {
            // 未回答の場合、既に選択されているかチェック
            const answer = this.userAnswers[quiz.id];
            if (answer !== undefined) {
                const isSelected = Array.isArray(answer) 
                    ? answer.includes(optionIndex)
                    : answer === optionIndex;
                return isSelected ? 'selected' : '';
            }
            return '';
        }

        const userAnswer = this.userAnswers[quiz.id];
        const correctAnswer = quiz.correctAnswer;
        
        const isCorrectOption = Array.isArray(correctAnswer)
            ? correctAnswer.includes(optionIndex)
            : correctAnswer === optionIndex;
        
        const isUserSelection = Array.isArray(userAnswer)
            ? userAnswer.includes(optionIndex)
            : userAnswer === optionIndex;

        if (isCorrectOption) {
            return 'correct';
        }
        if (isUserSelection && !isCorrectOption) {
            return 'incorrect';
        }
        return '';
    }

    // 正解テキストを取得
    getCorrectAnswerText(quiz) {
        if (Array.isArray(quiz.correctAnswer)) {
            return quiz.correctAnswer
                .map(index => `${String.fromCharCode(65 + index)}. ${quiz.options[index]}`)
                .join(', ');
        }
        return `${String.fromCharCode(65 + quiz.correctAnswer)}. ${quiz.options[quiz.correctAnswer]}`;
    }

    // 回答をチェック
    checkAnswer(quiz, userAnswer) {
        const correctAnswer = quiz.correctAnswer;
        
        if (Array.isArray(correctAnswer)) {
            // 複数選択問題
            if (!Array.isArray(userAnswer)) return false;
            if (correctAnswer.length !== userAnswer.length) return false;
            
            const sortedCorrect = [...correctAnswer].sort();
            const sortedUser = [...userAnswer].sort();
            
            return sortedCorrect.every((val, index) => val === sortedUser[index]);
        } else {
            // 単一選択問題
            return correctAnswer === userAnswer;
        }
    }

    // イベントリスナーの設定
    attachEventListeners() {
        // フィルターボタン
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const filter = e.target.dataset.filter;
                this.currentFilter = filter;
                this.renderQuizList(filter);
            });
        });

        // 解答ボタン（イベント委譲）
        const quizList = document.getElementById('quiz-list');
        if (quizList) {
            quizList.addEventListener('click', (e) => {
                // 選択肢ボタンのクリック
                if (e.target.closest('.quiz-option-btn')) {
                    const btn = e.target.closest('.quiz-option-btn');
                    if (btn.disabled) return;
                    
                    const quizId = parseInt(btn.dataset.quizId);
                    const optionIndex = parseInt(btn.dataset.optionIndex);
                    const quiz = quizData.find(q => q.id === quizId);
                    
                    if (!quiz) return;
                    
                    const isMultiple = Array.isArray(quiz.correctAnswer);
                    
                    if (isMultiple) {
                        // 複数選択：選択状態をトグル
                        btn.classList.toggle('selected');
                    } else {
                        // 単一選択：同じ問題の他の選択肢の選択を解除
                        const quizItem = btn.closest('.quiz-item');
                        const allOptions = quizItem.querySelectorAll('.quiz-option-btn');
                        allOptions.forEach(opt => opt.classList.remove('selected'));
                        btn.classList.add('selected');
                    }
                }
                
                // 解答ボタンのクリック
                if (e.target.closest('.btn-submit-quiz')) {
                    const btn = e.target.closest('.btn-submit-quiz');
                    const quizId = parseInt(btn.dataset.quizId);
                    this.submitAnswer(quizId);
                }
            });
        }

        // リセットボタン
        const resetBtn = document.getElementById('reset-quiz');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetQuiz();
            });
        }
    }

    // 解答を提出
    submitAnswer(quizId) {
        const quiz = quizData.find(q => q.id === quizId);
        if (!quiz) return;

        const isMultiple = Array.isArray(quiz.correctAnswer);
        const quizItem = document.querySelector(`.quiz-item[data-quiz-id="${quizId}"]`);
        const selectedOptions = quizItem.querySelectorAll('.quiz-option-btn.selected');
        
        if (selectedOptions.length === 0) {
            alert('選択肢を選んでください');
            return;
        }

        let userAnswer;
        if (isMultiple) {
            userAnswer = Array.from(selectedOptions).map(btn => parseInt(btn.dataset.optionIndex));
        } else {
            userAnswer = parseInt(selectedOptions[0].dataset.optionIndex);
        }

        this.userAnswers[quizId] = userAnswer;
        
        // 統計更新
        this.quizStats.answered++;
        if (this.checkAnswer(quiz, userAnswer)) {
            this.quizStats.correct++;
        } else {
            this.quizStats.incorrect++;
        }

        this.saveProgress();
        this.updateStats();
        this.renderQuizList(this.currentFilter);

        // 該当する問題にスクロール
        setTimeout(() => {
            const quizItem = document.querySelector(`[data-quiz-id="${quizId}"]`);
            if (quizItem) {
                quizItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }

    // 統計を更新
    updateStats() {
        const answeredElem = document.getElementById('quiz-answered');
        const accuracyElem = document.getElementById('quiz-accuracy');
        
        if (answeredElem) {
            answeredElem.textContent = this.quizStats.answered;
        }
        
        if (accuracyElem) {
            const accuracy = this.quizStats.answered > 0
                ? Math.round((this.quizStats.correct / this.quizStats.answered) * 100)
                : 0;
            accuracyElem.textContent = `${accuracy}%`;
        }

        // 進捗管理システムに通知
        if (window.progressManager) {
            window.progressManager.updateQuizStats(this.quizStats);
        }
    }

    // クイズをリセット
    resetQuiz() {
        if (!confirm('すべての解答をリセットしてよろしいですか？')) {
            return;
        }

        this.userAnswers = {};
        this.quizStats = {
            answered: 0,
            correct: 0,
            incorrect: 0
        };

        this.saveProgress();
        this.updateStats();
        this.renderQuizList(this.currentFilter);

        // サマリーを非表示
        const summary = document.getElementById('quiz-summary');
        if (summary) {
            summary.style.display = 'none';
        }
    }

    // 進捗を保存
    saveProgress() {
        if (typeof(Storage) === "undefined") return;

        localStorage.setItem('genai_quiz_answers', JSON.stringify(this.userAnswers));
        localStorage.setItem('genai_quiz_stats', JSON.stringify(this.quizStats));
    }

    // 進捗を読み込み
    loadProgress() {
        if (typeof(Storage) === "undefined") return;

        const savedAnswers = localStorage.getItem('genai_quiz_answers');
        const savedStats = localStorage.getItem('genai_quiz_stats');

        if (savedAnswers) {
            this.userAnswers = JSON.parse(savedAnswers);
        }

        if (savedStats) {
            this.quizStats = JSON.parse(savedStats);
            this.updateStats();
        }
    }
}

// ページロード時に初期化
document.addEventListener('DOMContentLoaded', () => {
    window.quizManager = new QuizManager();
});
