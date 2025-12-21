// mos-quiz.js - MOS試験の練習問題

const mosQuizData = [
    {
        id: 1,
        question: 'Excelで、セルA1からセルA10までの合計を求める関数として正しいものはどれですか？',
        options: [
            '=ADD(A1:A10)',
            '=SUM(A1:A10)',
            '=TOTAL(A1:A10)',
            '=SUMUP(A1:A10)'
        ],
        correct: 1,
        explanation: '正解は =SUM(A1:A10) です。SUMは指定した範囲の数値の合計を求める関数です。'
    },
    {
        id: 2,
        question: 'Excelで、条件に一致するセルの個数を数える関数はどれですか？',
        options: [
            'COUNT',
            'COUNTIF',
            'SUMIF',
            'CONDITION'
        ],
        correct: 1,
        explanation: '正解は COUNTIF です。COUNTIFは条件に一致するセルの個数をカウントする関数です。'
    },
    {
        id: 3,
        question: 'Excelで、セル参照$A$1の意味として正しいものはどれですか？',
        options: [
            '相対参照',
            '絶対参照',
            '複合参照（行のみ固定）',
            '複合参照（列のみ固定）'
        ],
        correct: 1,
        explanation: '正解は絶対参照です。$A$1は行と列の両方が固定され、数式をコピーしても参照先が変わりません。'
    },
    {
        id: 4,
        question: 'Excelで、別のセルから値を検索して取得する関数はどれですか？',
        options: [
            'SEARCH',
            'FIND',
            'VLOOKUP',
            'GET'
        ],
        correct: 2,
        explanation: '正解は VLOOKUP です。VLOOKUPは指定した範囲から値を垂直方向に検索して取得する関数です。'
    },
    {
        id: 5,
        question: 'Excelで、エラーが発生した場合に別の値を表示する関数はどれですか？',
        options: [
            'ISERROR',
            'IFERROR',
            'ERROR',
            'NOERROR'
        ],
        correct: 1,
        explanation: '正解は IFERROR です。IFERRORはエラーが発生した場合に指定した値を表示する関数です。'
    },
    {
        id: 6,
        question: 'Wordで、文書全体に統一した書式を適用するために使用する機能はどれですか？',
        options: [
            'テンプレート',
            'スタイル',
            'テーマ',
            'すべて'
        ],
        correct: 3,
        explanation: '正解は「すべて」です。テンプレート、スタイル、テーマのすべてが文書全体に統一した書式を適用するために使用できます。'
    },
    {
        id: 7,
        question: 'Wordで、差し込み印刷に使用できるデータソースはどれですか？',
        options: [
            'Excelブック',
            'Accessデータベース',
            'テキストファイル',
            'すべて'
        ],
        correct: 3,
        explanation: '正解は「すべて」です。Excelブック、Accessデータベース、テキストファイルなど、さまざまな形式のデータソースが使用できます。'
    },
    {
        id: 8,
        question: 'Wordで、目次を自動作成するために必要な設定はどれですか？',
        options: [
            '見出しスタイルの適用',
            'ページ番号の挿入',
            'セクション区切りの挿入',
            'ハイパーリンクの挿入'
        ],
        correct: 0,
        explanation: '正解は見出しスタイルの適用です。見出し1、見出し2などのスタイルを適用することで、目次を自動作成できます。'
    },
    {
        id: 9,
        question: 'PowerPointで、すべてのスライドに共通する要素を設定する機能はどれですか？',
        options: [
            'スライドマスター',
            'スライドレイアウト',
            'テーマ',
            'テンプレート'
        ],
        correct: 0,
        explanation: '正解はスライドマスターです。スライドマスターを編集することで、すべてのスライドに共通する要素（ロゴ、背景など）を一括設定できます。'
    },
    {
        id: 10,
        question: 'PowerPointで、アニメーションの種類として正しくないものはどれですか？',
        options: [
            '開始',
            '強調',
            '終了',
            '停止'
        ],
        correct: 3,
        explanation: '正解は「停止」です。PowerPointのアニメーションには、開始、強調、終了、軌跡の4種類があります。'
    },
    {
        id: 11,
        question: 'Accessで、テーブルの主キーとして設定できないデータ型はどれですか？',
        options: [
            'テキスト型',
            '数値型',
            'オートナンバー型',
            'メモ型'
        ],
        correct: 3,
        explanation: '正解はメモ型です。メモ型（長いテキスト）は主キーとして設定できません。主キーには一意性が必要です。'
    },
    {
        id: 12,
        question: 'Accessで、データの追加・更新・削除を行うクエリの総称はどれですか？',
        options: [
            '選択クエリ',
            'アクションクエリ',
            'パラメータクエリ',
            'クロス集計クエリ'
        ],
        correct: 1,
        explanation: '正解はアクションクエリです。追加クエリ、更新クエリ、削除クエリ、テーブル作成クエリを総称してアクションクエリと呼びます。'
    },
    {
        id: 13,
        question: 'Excelで、ピボットテーブルの主な用途はどれですか？',
        options: [
            'データの入力',
            'データの集計と分析',
            'データの検索',
            'データの並べ替え'
        ],
        correct: 1,
        explanation: '正解はデータの集計と分析です。ピボットテーブルは大量のデータを簡単に集計・分析するための強力なツールです。'
    },
    {
        id: 14,
        question: 'Excelで、条件付き書式の機能として正しくないものはどれですか？',
        options: [
            'セルの値に応じて書式を変更',
            'データバーの表示',
            'カラースケールの適用',
            'グラフの自動作成'
        ],
        correct: 3,
        explanation: '正解は「グラフの自動作成」です。条件付き書式は書式の変更、データバー、カラースケール、アイコンセットなどの表示に使用されますが、グラフの作成機能はありません。'
    },
    {
        id: 15,
        question: 'Wordで、図表番号を挿入する主な目的はどれですか？',
        options: [
            '図表を装飾する',
            '図表を一覧表示する',
            '図表を自動的に番号付けして参照を容易にする',
            '図表のサイズを調整する'
        ],
        correct: 2,
        explanation: '正解は「図表を自動的に番号付けして参照を容易にする」です。図表番号を使用すると、図表が増減しても自動的に番号が更新され、相互参照も簡単に行えます。'
    },
    {
        id: 16,
        question: 'PowerPointで、SmartArtの主な用途はどれですか？',
        options: [
            'グラフの作成',
            '情報を視覚的に表現',
            '画像の編集',
            'アニメーションの設定'
        ],
        correct: 1,
        explanation: '正解は「情報を視覚的に表現」です。SmartArtは組織図、プロセス図、階層構造など、情報を視覚的にわかりやすく表現するために使用されます。'
    },
    {
        id: 17,
        question: 'Accessで、リレーションシップの参照整合性の役割はどれですか？',
        options: [
            'データの重複を防ぐ',
            'データの整合性を保つ',
            'データの検索速度を向上させる',
            'データを自動的にバックアップする'
        ],
        correct: 1,
        explanation: '正解は「データの整合性を保つ」です。参照整合性により、関連テーブル間でデータの矛盾が発生することを防ぎます。'
    },
    {
        id: 18,
        question: 'Excelで、マクロの主な用途はどれですか？',
        options: [
            'データの保護',
            '繰り返し作業の自動化',
            'データの圧縮',
            'グラフの作成'
        ],
        correct: 1,
        explanation: '正解は「繰り返し作業の自動化」です。マクロは一連の操作を記録して自動実行することで、繰り返し作業を効率化します。'
    },
    {
        id: 19,
        question: 'Wordで、セクション区切りを挿入する主な目的はどれですか？',
        options: [
            'ページ番号をリセットする',
            '異なる書式設定を適用する',
            'ヘッダーとフッターを変更する',
            'すべて'
        ],
        correct: 3,
        explanation: '正解は「すべて」です。セクション区切りを使用すると、ページ番号のリセット、異なる書式設定の適用、ヘッダー・フッターの変更など、さまざまな設定を部分的に変更できます。'
    },
    {
        id: 20,
        question: 'PowerPointで、スライドショー実行中に使用できる機能はどれですか？',
        options: [
            'ペンツールで書き込み',
            'レーザーポインター',
            '特定のスライドへのジャンプ',
            'すべて'
        ],
        correct: 3,
        explanation: '正解は「すべて」です。PowerPointのスライドショー実行中は、ペンツールでの書き込み、レーザーポインター、スライドへのジャンプなど、さまざまな機能が使用できます。'
    }
];

// 練習問題の表示
document.addEventListener('DOMContentLoaded', function() {
    const quizList = document.getElementById('quiz-list');
    
    if (!quizList) {
        console.log('quiz-listが見つかりません');
        return;
    }
    
    console.log('MOSクイズデータ:', mosQuizData.length, '問');
    
    if (mosQuizData.length === 0) {
        quizList.innerHTML = '<p class="no-quiz">練習問題がありません。</p>';
        return;
    }
    
    // 各問題をHTMLとして生成
    mosQuizData.forEach((quiz, index) => {
        const quizItem = document.createElement('div');
        quizItem.className = 'quiz-item';
        quizItem.id = `quiz-${quiz.id}`;
        
        let optionsHTML = '';
        quiz.options.forEach((option, optIndex) => {
            optionsHTML += `
                <li class="quiz-option">
                    <button class="quiz-option-btn" data-quiz-id="${quiz.id}" data-option-index="${optIndex}">
                        <span class="option-label">${String.fromCharCode(65 + optIndex)}</span>
                        <span class="option-text">${option}</span>
                    </button>
                </li>
            `;
        });
        
        quizItem.innerHTML = `
            <div class="quiz-question">
                <h3>
                    <span class="question-number">問題 ${index + 1}</span>
                    ${quiz.question}
                </h3>
                <ul class="quiz-options">
                    ${optionsHTML}
                </ul>
                <button class="btn-submit-quiz" data-quiz-id="${quiz.id}" style="display: none;">
                    <i class="fas fa-check-circle"></i> 解答を確認
                </button>
                <div class="quiz-result" data-quiz-id="${quiz.id}" style="display: none;">
                    <div class="result-content"></div>
                </div>
            </div>
        `;
        
        quizList.appendChild(quizItem);
    });
    
    // 選択肢のクリックイベント
    quizList.addEventListener('click', function(e) {
        const optionBtn = e.target.closest('.quiz-option-btn');
        if (!optionBtn) return;
        
        const quizId = parseInt(optionBtn.dataset.quizId);
        const optionIndex = parseInt(optionBtn.dataset.optionIndex);
        
        // 同じ問題の他の選択肢の選択を解除
        const allOptions = quizList.querySelectorAll(`.quiz-option-btn[data-quiz-id="${quizId}"]`);
        allOptions.forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // クリックされた選択肢を選択状態に
        optionBtn.classList.add('selected');
        
        // 解答確認ボタンを表示
        const submitBtn = quizList.querySelector(`.btn-submit-quiz[data-quiz-id="${quizId}"]`);
        if (submitBtn) {
            submitBtn.style.display = 'block';
            submitBtn.dataset.selectedIndex = optionIndex;
        }
    });
    
    // 解答確認ボタンのクリックイベント
    quizList.addEventListener('click', function(e) {
        const submitBtn = e.target.closest('.btn-submit-quiz');
        if (!submitBtn) return;
        
        const quizId = parseInt(submitBtn.dataset.quizId);
        const selectedIndex = parseInt(submitBtn.dataset.selectedIndex);
        const quiz = mosQuizData.find(q => q.id === quizId);
        
        if (!quiz) return;
        
        const isCorrect = selectedIndex === quiz.correct;
        
        // 結果表示エリア
        const resultDiv = quizList.querySelector(`.quiz-result[data-quiz-id="${quizId}"]`);
        const resultContent = resultDiv.querySelector('.result-content');
        
        // 選択肢のフィードバック表示
        const allOptions = quizList.querySelectorAll(`.quiz-option-btn[data-quiz-id="${quizId}"]`);
        allOptions.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === quiz.correct) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // 結果メッセージ
        resultContent.innerHTML = `
            <div class="result-badge ${isCorrect ? 'correct' : 'incorrect'}">
                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                ${isCorrect ? '正解です！' : '不正解です'}
            </div>
            <div class="explanation">
                <strong><i class="fas fa-lightbulb"></i> 解説：</strong>
                <p>${quiz.explanation}</p>
            </div>
        `;
        
        resultDiv.style.display = 'block';
        submitBtn.style.display = 'none';
        
        // スムーズにスクロール
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    
    console.log('MOSクイズ初期化完了');
});
