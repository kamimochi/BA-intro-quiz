// script.js

// === DOM要素の取得 ===
const startButton = document.getElementById('start-btn');
const hintButton = document.getElementById('hint-btn');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const questionProgressElement = document.getElementById('question-progress'); // 問題番号表示用の要素を取得

// (楽曲データ allQuestions はそのままなので省略)
const allQuestions = [
  { mainSound: 'event_01_main.mp3', hintSound: 'event_01_hint.mp3', answer: '桜花爛漫お祭り騒ぎ！~空に徒花 地に忍び~' },
  { mainSound: 'event_02_main.mp3', hintSound: 'event_02_hint.mp3', answer: '革命のイワン・クパーラ 髭とプリンとレッドウィンター' },
  { mainSound: 'event_03_main.mp3', hintSound: 'event_03_hint.mp3', answer: '夏空のウィッシュリスト' },
  { mainSound: 'event_04_main.mp3', hintSound: 'event_04_hint.mp3', answer: '~風紀委員会行政官緊急特務命令~ヒナ委員長のなつやすみっ！' },
  { mainSound: 'event_05_main.mp3', hintSound: 'event_05_hint.mp3', answer: 'ネバーランドでつかまえて' },
  { mainSound: 'event_06_main.mp3', hintSound: 'event_06_hint.mp3', answer: '船上のバニーチェイサー' },
  { mainSound: 'event_08_main.mp3', hintSound: 'event_08_hint.mp3', answer: '227号温泉郷の運営記録！白い吐息は寄り添って' },
  { mainSound: 'event_09_main.mp3', hintSound: 'event_09_hint.mp3', answer: '第68番 新春狂想曲' },
  { mainSound: 'event_10_1_main.mp3', hintSound: 'event_10_1_hint.mp3', answer: 'シャーレのハッピー♡バレンタインパトロール' },
  { mainSound: 'event_10_2_main.mp3', hintSound: 'event_10_2_hint.mp3', answer: '狐坂ワカモの沈黙と祝宴' },
  { mainSound: 'event_11_main.mp3', hintSound: 'event_11_hint.mp3', answer: 'どたばたシスターと古書館の魔術師' },
  { mainSound: 'event_12_main.mp3', hintSound: 'event_12_hint.mp3', answer: '不忍ノ心' },
  { mainSound: 'event_13_main.mp3', hintSound: 'event_13_hint.mp3', answer: 'アビドスリゾート復旧対策委員会' },
  { mainSound: 'event_14_main.mp3', hintSound: 'event_14_hint.mp3', answer: '出張！百夜堂 海の家FC計画' },
  { mainSound: 'event_15_main.mp3', hintSound: 'event_15_hint.mp3', answer: '放課後スイーツ物語 甘い秘密と銃撃戦' },
  { mainSound: 'event_16_main.mp3', hintSound: 'event_16_hint.mp3', answer: 'On Your Mark ＠ Millennium ~ キヴォトス大運動会 晄輪大祭' },
  { mainSound: 'event_17_main.mp3', hintSound: 'event_17_hint.mp3', answer: 'GetSet,GO！～キヴォトス晄輪大祭～' },
  { mainSound: 'event_18_main.mp3', hintSound: 'event_18_hint.mp3', answer: '聖堂のメリークリスマス〜救護騎士団の贈り物〜' },
  { mainSound: 'event_19_main.mp3', hintSound: 'event_19_hint.mp3', answer: '喰積の 前にいささか ～一番勝負～' },
  { mainSound: 'event_20_main.mp3', hintSound: 'event_20_hint.mp3', answer: 'F.SCT攻略戦' },
  { mainSound: 'event_21_main.mp3', hintSound: 'event_21_hint.mp3', answer: 'A-H.A占領戦' },
  { mainSound: 'event_22_main.mp3', hintSound: 'event_22_hint.mp3', answer: 'PHT決戦' },
  { mainSound: 'event_23_main.mp3', hintSound: 'event_23_hint.mp3', answer: 'D.U.シラトリ区 復旧作業' },
  { mainSound: 'event_24_main.mp3', hintSound: 'event_24_hint.mp3', answer: '白亜の予告状～虚飾の館と美学の在り処～' },
  { mainSound: 'event_25_main.mp3', hintSound: 'event_25_hint.mp3', answer: '龍武同舟 ～思い描くは、ひとつの未来～' },
  { mainSound: 'event_26_main.mp3', hintSound: 'event_26_hint.mp3', answer: '夏の特殊作戦！RABBIT小隊と消えたエビの謎' },
  { mainSound: 'event_27_main.mp3', hintSound: 'event_27_hint.mp3', answer: '隠されし遺産を求めて〜トリニティの課外活動〜' },
  { mainSound: 'event_28_main.mp3', hintSound: 'event_28_hint.mp3', answer: '学漫同人物語 ～2人が求める最終回～' },
  { mainSound: 'event_29_main.mp3', hintSound: 'event_29_hint.mp3', answer: 'Trip Trap Train' },
  { mainSound: 'event_31_main.mp3', hintSound: 'event_31_hint.mp3', answer: '(電脳)新春行進曲' },
  { mainSound: 'event_32_main.mp3', hintSound: 'event_32_hint.mp3', answer: '陽ひらく彼女たちの小夜曲' },
  { mainSound: 'event_33_main.mp3', hintSound: 'event_33_hint.mp3', answer: '0068 オペラより愛をこめて！' },
  { mainSound: 'event_34_main.mp3', hintSound: 'event_34_hint.mp3', answer: 'にぎにぎと ゆきゆきて' },
  { mainSound: 'event_35_main.mp3', hintSound: 'event_35_hint.mp3', answer: '-ive aLIVE!' },
  { mainSound: 'event_36_main.mp3', hintSound: 'event_36_hint.mp3', answer: 'Say-Bing!' },
  { mainSound: 'event_37_main.mp3', hintSound: 'event_37_hint.mp3', answer: 'Sheside Outside' },
  { mainSound: 'event_38_main.mp3', hintSound: 'event_38_hint.mp3', answer: '月華夢騒' },
  { mainSound: 'event_39_main.mp3', hintSound: 'event_39_hint.mp3', answer: '五塵来降' },
  { mainSound: 'event_40_main.mp3', hintSound: 'event_40_hint.mp3', answer: 'Serenade Promenade' },
  { mainSound: 'event_41_main.mp3', hintSound: 'event_41_hint.mp3', answer: '秘密のミッドナイトパーティー～オニの手は鐘と共に～' },
  { mainSound: 'event_42_main.mp3', hintSound: 'event_42_hint.mp3', answer: 'Code: BOX ミレニアムに迫る影 ～一つの問いと二つの答え～' },
  { mainSound: 'event_43_main.mp3', hintSound: 'event_43_hint.mp3', answer: 'パンデミック・ハザード ～奇跡の一枚～' },
  { mainSound: 'event_44_main.mp3', hintSound: 'event_44_hint.mp3', answer: 'プレイボール！～目指せ！満塁ホームラン～' },
  { mainSound: 'event_45_main.mp3', hintSound: 'event_45_hint.mp3', answer: 'ハイランダー鉄道爆走事件〜そして列車はなくなった〜' }
];



// === グローバル変数 ===
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let mainAudio = null;
let hintAudio = null;

// === イベントリスナー ===
startButton.addEventListener('click', startQuiz);
hintButton.addEventListener('click', playHint);

// === クイズ処理 ===

function startQuiz() {
    // ★要望2: 開始ボタンを非表示にする
    startButton.classList.add('hide');
    
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    
    currentQuestionIndex = 0;
    score = 0;

    shuffledQuestions = [...allQuestions];
    shuffleArray(shuffledQuestions);
    
    showQuestion();
}

function showQuestion() {
    resetState();

    if (currentQuestionIndex < shuffledQuestions.length) {
        // ★要望3: 現在の問題番号を表示する
        questionProgressElement.textContent = `${currentQuestionIndex + 1} / ${shuffledQuestions.length} 問目`;

        const currentQuestion = shuffledQuestions[currentQuestionIndex];

        mainAudio = new Audio('music/' + currentQuestion.mainSound);
        mainAudio.play().catch(error => {
            console.error("メインBGMの再生に失敗:", currentQuestion.mainSound, error);
            feedbackElement.textContent = `音楽ファイル(${currentQuestion.mainSound})の読込に失敗`;
            feedbackElement.classList.remove('hide');
        });

        hintButton.classList.remove('hide');
        hintButton.disabled = false;

        const choices = generateChoices(currentQuestion.answer);
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.classList.add('choice-btn');
            choicesElement.appendChild(button); // #choices に直接追加
            button.addEventListener('click', selectAnswer);
        });
    } else {
        showResult();
    }
}

// (playHint, selectAnswer 関数は変更なしなので省略)

function playHint() {
    if (mainAudio) mainAudio.pause();
    if (hintAudio) hintAudio.pause();

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    hintAudio = new Audio('music/' + currentQuestion.hintSound);
    hintAudio.play().catch(error => {
         console.error("ヒントBGMの再生に失敗:", currentQuestion.hintSound, error);
    });

    hintButton.disabled = true;
}

function selectAnswer(e) {
    Array.from(choicesElement.children).forEach(button => { button.disabled = true; });
    hintButton.disabled = true;

    if (mainAudio) mainAudio.pause();
    if (hintAudio) hintAudio.pause();

    const selectedBtn = e.target;
    const selectedAnswer = selectedBtn.innerText;
    const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackElement.textContent = '正解！';
        feedbackElement.className = 'feedback correct';
        selectedBtn.classList.add('correct');
    } else {
        feedbackElement.textContent = `残念！正解は「${correctAnswer}」でした。`;
        feedbackElement.className = 'feedback incorrect';
        selectedBtn.classList.add('incorrect');
        Array.from(choicesElement.children).forEach(button => {
            if (button.innerText === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }
    feedbackElement.classList.remove('hide');

    currentQuestionIndex++;
    setTimeout(showQuestion, 3000);
}


function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.textContent = `${shuffledQuestions.length}問中 ${score}問 正解！`;
    
    // 結果画面で「もう一度挑戦する」ボタンとして再表示する
    startButton.innerText = 'もう一度挑戦する';
    startButton.classList.remove('hide');
}

// (ヘルパー関数 resetState, generateChoices, shuffleArray は変更なしなので省略)

function resetState() {
    if (mainAudio) mainAudio.pause();
    if (hintAudio) hintAudio.pause();
    
    feedbackElement.classList.add('hide');
    hintButton.classList.add('hide');

    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild);
    }
}

function generateChoices(correctAnswer) {
    const choices = [correctAnswer];
    const wrongAnswers = allQuestions
        .filter(q => q.answer !== correctAnswer)
        .map(q => q.answer);

    shuffleArray(wrongAnswers);
    for (let i = 0; i < 3 && i < wrongAnswers.length; i++) {
        choices.push(wrongAnswers[i]);
    }
    shuffleArray(choices);
    return choices;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
