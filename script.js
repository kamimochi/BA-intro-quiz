// script.js

// === DOM要素の取得 ===
const startButton = document.getElementById('start-btn');
const hintButton = document.getElementById('hint-btn');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

// === グローバル変数 ===
const totalTracks = 43; // 楽曲の総数 (1から43まで)
let musicList = []; // 全楽曲のリスト
let shuffledQuestions = []; // シャッフルされた問題リスト
let currentQuestionIndex = 0;
let score = 0;
let mainAudio = null;
let hintAudio = null;


// === 楽曲リストの自動生成 ===
// ページ読み込み時に一度だけリストを作成
(function createMusicList() {
    for (let i = 1; i <= totalTracks; i++) {
        // "1" -> "01", "10" -> "10" のように2桁の数字にフォーマット
        const trackNumber = String(i).padStart(2, '0'); 
        musicList.push({
            mainFile: `event_${trackNumber}_main.mp3`,
            hintFile: `event_${trackNumber}_hint.mp3`,
            title: `Event ${trackNumber}` // 正解の表示名
        });
    }
})();


// === イベントリスナー ===
startButton.addEventListener('click', startQuiz);
hintButton.addEventListener('click', playHint);


// === クイズ処理 ===

// クイズ開始
function startQuiz() {
    startButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    
    currentQuestionIndex = 0;
    score = 0;

    // 元のリストのコピーを作ってからシャッフルする
    shuffledQuestions = [...musicList];
    shuffleArray(shuffledQuestions);
    
    showQuestion();
}

// 問題を表示
function showQuestion() {
    resetState(); // 前の問題の状態をリセット

    if (currentQuestionIndex < shuffledQuestions.length) {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];

        // メインBGMを再生
        mainAudio = new Audio('music/' + currentQuestion.mainFile);
        mainAudio.play().catch(error => {
            console.error("メインBGMの再生に失敗しました:", error);
            feedbackElement.textContent = "音楽ファイルの読み込みに失敗しました。";
            feedbackElement.classList.remove('hide');
        });

        // ヒントボタンを表示して有効化
        hintButton.classList.remove('hide');
        hintButton.disabled = false;

        // 選択肢を生成して表示
        const choices = generateChoices(currentQuestion.title);
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.classList.add('choice-btn');
            button.addEventListener('click', selectAnswer);
            choicesElement.appendChild(button);
        });
    } else {
        showResult();
    }
}

// ヒントBGMを再生
function playHint() {
    if (mainAudio) {
        mainAudio.pause(); // メインBGMを停止
    }
    if (hintAudio) {
        hintAudio.pause(); // 念のため前のヒントを停止
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    hintAudio = new Audio('music/' + currentQuestion.hintFile);
    hintAudio.play().catch(error => {
         console.error("ヒントBGMの再生に失敗しました:", error);
    });

    hintButton.disabled = true; // ヒントは1問につき1回まで
}


// 回答を選択したときの処理
function selectAnswer(e) {
    // すぐに全てのボタンを無効化する
    Array.from(choicesElement.children).forEach(button => {
        button.disabled = true;
    });
    hintButton.disabled = true;

    // 再生中のBGMをすべて停止
    if (mainAudio) mainAudio.pause();
    if (hintAudio) hintAudio.pause();

    const selectedBtn = e.target;
    const selectedAnswer = selectedBtn.innerText;
    const correctAnswer = shuffledQuestions[currentQuestionIndex].title;

    // 正誤判定とフィードバック表示
    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackElement.textContent = '正解！';
        feedbackElement.className = 'feedback correct';
        selectedBtn.classList.add('correct');
    } else {
        feedbackElement.textContent = `残念！正解は「${correctAnswer}」でした。`;
        feedbackElement.className = 'feedback incorrect';
        selectedBtn.classList.add('incorrect');
        // 不正解のときに正解ボタンをハイライト
        Array.from(choicesElement.children).forEach(button => {
            if (button.innerText === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }
    feedbackElement.classList.remove('hide');

    // 次の問題へ
    currentQuestionIndex++;
    setTimeout(showQuestion, 2500); // 2.5秒後に次の問題へ
}

// 結果表示
function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.textContent = `${shuffledQuestions.length}問中 ${score}問 正解！`;
    startButton.innerText = 'もう一度挑戦する';
    startButton.classList.remove('hide');
}


// === ヘルパー関数 ===

// 状態をリセットする（次の問題に移る前に呼ばれる）
function resetState() {
    // 再生中の音を止める
    if (mainAudio) mainAudio.pause();
    if (hintAudio) hintAudio.pause();
    
    feedbackElement.classList.add('hide');
    hintButton.classList.add('hide');

    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild);
    }
}

// 選択肢を生成する（正解1つ＋不正解3つ）
function generateChoices(correctAnswerTitle) {
    const choices = [correctAnswerTitle];
    const wrongAnswers = musicList
        .filter(music => music.title !== correctAnswerTitle)
        .map(music => music.title);

    shuffleArray(wrongAnswers);

    for (let i = 0; i < 3 && i < wrongAnswers.length; i++) {
        choices.push(wrongAnswers[i]);
    }

    shuffleArray(choices);
    return choices;
}

// 配列をシャッフルする（Fisher-Yatesアルゴリズム）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
