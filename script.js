const eventFileMap = {
  'event_01.mp3': '桜花爛漫お祭り騒ぎ！~空に徒花 地に忍び~',
  'event_02.mp3': '革命のイワン・クパーラ 髭とプリンとレッドウィンター',
  'event_03.mp3': '夏空のウィッシュリスト',
  'event_04.mp3': '~風紀委員会行政官緊急特務命令~ヒナ委員長のなつやすみっ！',
  'event_05.mp3': 'ネバーランドでつかまえて',
  'event_06.mp3': '船上のバニーチェイサー',
  'event_08.mp3': '227号温泉郷の運営記録！白い吐息は寄り添って',
  'event_09.mp3': '第68番 新春狂想曲',
  'event_10_1.mp3': 'シャーレのハッピー♡バレンタインパトロール',
  'event_10_2.mp3': '狐坂ワカモの沈黙と祝宴',
  'event_11.mp3': 'どたばたシスターと古書館の魔術師',
  'event_12.mp3': '不忍ノ心',
  'event_13.mp3': 'アビドスリゾート復旧対策委員会',
  'event_14.mp3': '出張！百夜堂 海の家FC計画',
  'event_15.mp3': '放課後スイーツ物語 甘い秘密と銃撃戦',
  'event_16.mp3': 'On Your Mark ＠ Millennium ~ キヴォトス大運動会 晄輪大祭',
  'event_17.mp3': 'GetSet,GO！～キヴォトス晄輪大祭～',
  'event_18.mp3': '聖堂のメリークリスマス〜救護騎士団の贈り物〜',
  'event_19.mp3': '喰積の 前にいささか ～一番勝負～',
  'event_20.mp3': 'F.SCT攻略戦',
  'event_21.mp3': 'A-H.A占領戦',
  'event_22.mp3': 'PHT決戦',
  'event_23.mp3': 'D.U.シラトリ区 復旧作業',
  'event_24.mp3': '白亜の予告状～虚飾の館と美学の在り処～',
  'event_25.mp3': '龍武同舟 ～思い描くは、ひとつの未来～',
  'event_26.mp3': '夏の特殊作戦！RABBIT小隊と消えたエビの謎',
  'event_27.mp3': '隠されし遺産を求めて〜トリニティの課外活動〜',
  'event_28.mp3': '学漫同人物語 ～2人が求める最終回～',
  'event_29.mp3': 'Trip Trap Train',
  'event_31.mp3': '(電脳)新春行進曲',
  'event_32.mp3': '陽ひらく彼女たちの小夜曲',
  'event_33.mp3': '0068 オペラより愛をこめて！',
  'event_34.mp3': 'にぎにぎと ゆきゆきて',
  'event_35.mp3': '-ive aLIVE!',
  'event_36.mp3': 'Say-Bing!',
  'event_37.mp3': 'Sheside Outside',
  'event_38.mp3': '月華夢騒',
  'event_39.mp3': '五塵来降',
  'event_40.mp3': 'Serenade Promenade',
  'event_41.mp3': '秘密のミッドナイトパーティー～オニの手は鐘と共に～',
  'event_42.mp3': 'Code: BOX ミレニアムに迫る影 ～一つの問いと二つの答え～',
  'event_43.mp3': 'パンデミック・ハザード ～奇跡の一枚～',
  'event_44.mp3': 'プレイボール！～目指せ！満塁ホームラン～',
  'event_45.mp3': 'ハイランダー鉄道爆走事件〜そして列車はなくなった〜'
};

const allQuestions = [
  { sound: 'event_01.mp3', answer: '桜花爛漫お祭り騒ぎ！~空に徒花 地に忍び~' },
  { sound: 'event_02.mp3', answer: '革命のイワン・クパーラ 髭とプリンとレッドウィンター' },
  { sound: 'event_03.mp3', answer: '夏空のウィッシュリスト' },
  { sound: 'event_04.mp3', answer: '~風紀委員会行政官緊急特務命令~ヒナ委員長のなつやすみっ！' },
  { sound: 'event_05.mp3', answer: 'ネバーランドでつかまえて' },
  { sound: 'event_06.mp3', answer: '船上のバニーチェイサー' },
  { sound: 'event_08.mp3', answer: '227号温泉郷の運営記録！白い吐息は寄り添って' },
  { sound: 'event_09.mp3', answer: '第68番 新春狂想曲' },
  { sound: 'event_10_1.mp3', answer: 'シャーレのハッピー♡バレンタインパトロール' },
  { sound: 'event_10_2.mp3', answer: '狐坂ワカモの沈黙と祝宴' },
  { sound: 'event_11.mp3', answer: 'どたばたシスターと古書館の魔術師' },
  { sound: 'event_12.mp3', answer: '不忍ノ心' },
  { sound: 'event_13.mp3', answer: 'アビドスリゾート復旧対策委員会' },
  { sound: 'event_14.mp3', answer: '出張！百夜堂 海の家FC計画' },
  { sound: 'event_15.mp3', answer: '放課後スイーツ物語 甘い秘密と銃撃戦' },
  { sound: 'event_16.mp3', answer: 'On Your Mark ＠ Millennium ~ キヴォトス大運動会 晄輪大祭' },
  { sound: 'event_17.mp3', answer: 'GetSet,GO！～キヴォトス晄輪大祭～' },
  { sound: 'event_18.mp3', answer: '聖堂のメリークリスマス〜救護騎士団の贈り物〜' },
  { sound: 'event_19.mp3', answer: '喰積の 前にいささか ～一番勝負～' },
  { sound: 'event_20.mp3', answer: 'F.SCT攻略戦' },
  { sound: 'event_21.mp3', answer: 'A-H.A占領戦' },
  { sound: 'event_22.mp3', answer: 'PHT決戦' },
  { sound: 'event_23.mp3', answer: 'D.U.シラトリ区 復旧作業' },
  { sound: 'event_24.mp3', answer: '白亜の予告状～虚飾の館と美学の在り処～' },
  { sound: 'event_25.mp3', answer: '龍武同舟 ～思い描くは、ひとつの未来～' },
  { sound: 'event_26.mp3', answer: '夏の特殊作戦！RABBIT小隊と消えたエビの謎' },
  { sound: 'event_27.mp3', answer: '隠されし遺産を求めて〜トリニティの課外活動〜' },
  { sound: 'event_28.mp3', answer: '学漫同人物語 ～2人が求める最終回～' },
  { sound: 'event_29.mp3', answer: 'Trip Trap Train' },
  { sound: 'event_31.mp3', answer: '(電脳)新春行進曲' },
  { sound: 'event_32.mp3', answer: '陽ひらく彼女たちの小夜曲' },
  { sound: 'event_33.mp3', answer: '0068 オペラより愛をこめて！' },
  { sound: 'event_34.mp3', answer: 'にぎにぎと ゆきゆきて' },
  { sound: 'event_35.mp3', answer: '-ive aLIVE!' },
  { sound: 'event_36.mp3', answer: 'Say-Bing!' },
  { sound: 'event_37.mp3', answer: 'Sheside Outside' },
  { sound: 'event_38.mp3', answer: '月華夢騒' },
  { sound: 'event_39.mp3', answer: '五塵来降' },
  { sound: 'event_40.mp3', answer: 'Serenade Promenade' },
  { sound: 'event_41.mp3', answer: '秘密のミッドナイトパーティー～オニの手は鐘と共に～' },
  { sound: 'event_42.mp3', answer: 'Code: BOX ミレニアムに迫る影 ～一つの問いと二つの答え～' },
  { sound: 'event_43.mp3', answer: 'パンデミック・ハザード ～奇跡の一枚～' },
  { sound: 'event_44.mp3', answer: 'プレイボール！～目指せ！満塁ホームラン～' },
  { sound: 'event_45.mp3', answer: 'ハイランダー鉄道爆走事件〜そして列車はなくなった〜' }
];

let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = [];
let currentQuestion;
let canAnswer = false;
let playDuration = 5;
let numberOfQuestions = 10;

const audioPlayer = document.getElementById('audioPlayer');
const questionNumberDisplay = document.getElementById('questionNumber');
const totalQuestionsDisplay = document.getElementById('totalQuestions');
const optionsArea = document.getElementById('optionsArea');
const nextButton = document.getElementById('nextButton');
const resultArea = document.getElementById('resultArea');
const difficultySelectArea = document.getElementById('difficultySelectArea');
const questionNumberSelectArea = document.getElementById('questionNumberSelectArea');
const startButton = document.getElementById('startButton');

// 難易度選択
difficultySelectArea.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'easyButton':
                playDuration = 5;
                break;
            case 'normalButton':
                playDuration = 3;
                break;
            case 'hardButton':
                playDuration = 1;
                break;
        }
        difficultySelectArea.style.display = 'none';
        questionNumberSelectArea.style.display = 'flex';
        startButton.style.display = 'block';
    });
});

// スタートボタン
startButton.addEventListener('click', () => {
    const selectedQuestionNumber = parseInt(questionNumberSelectArea.querySelector('input').value);
    if (isNaN(selectedQuestionNumber) || selectedQuestionNumber < 5 || selectedQuestionNumber > 45) {
        alert('問題数は5から45の間で入力してください。');
        return;
    }
    numberOfQuestions = selectedQuestionNumber;

    startButton.style.display = 'none';
    questionNumberSelectArea.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    currentQuestions = shuffledQuestions.slice(0, numberOfQuestions);
    document.getElementById('questionArea').style.display = 'block';
    document.getElementById('optionsArea').style.display = 'grid';
    nextButton.style.display = 'block';
    resultArea.textContent = '';
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        currentQuestion = currentQuestions[currentQuestionIndex];
        audioPlayer.src = 'bgm/' + currentQuestion.sound;
        questionNumberDisplay.textContent = currentQuestionIndex + 1;
        totalQuestionsDisplay.textContent = currentQuestions.length;
        optionsArea.innerHTML = '';
        resultArea.textContent = '';
        nextButton.disabled = true;
        canAnswer = false;

        // 正解を含む選択肢をランダムに作成
        const correctOption = currentQuestion.answer;
        const otherOptions = allQuestions
            .filter(q => q.answer !== correctOption)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(q => q.answer);
        const options = [...otherOptions, correctOption].sort(() => Math.random() - 0.5);

        options.forEach(optionText => {
            const optionButton = document.createElement('button');
            optionButton.textContent = optionText;
            optionButton.addEventListener('click', () => checkAnswer(optionText));
            optionsArea.appendChild(optionButton);
        });

        // 指定された秒数後に回答可能にする
        setTimeout(() => {
            audioPlayer.play();
            canAnswer = true;
        }, 500);

        // タイムアウト処理
        setTimeout(() => {
            if (!canAnswer) {
                resultArea.textContent = '時間切れ！';
                nextButton.disabled = false;
            }
        }, (playDuration + 1) * 1000);

    } else {
        resultArea.textContent = `ゲーム終了！あなたのスコアは ${score} / ${currentQuestions.length} でした。`;
        document.getElementById('questionArea').style.display = 'none';
        document.getElementById('optionsArea').style.display = 'none';
        nextButton.style.display = 'none';
        // 必要に応じてリスタートボタンなどを追加
    }
}

function checkAnswer(selectedAnswer) {
    if (!canAnswer) return;

    canAnswer = false;
    audioPlayer.pause();
    const correctAnswer = currentQuestion.answer;

    if (selectedAnswer === correctAnswer) {
        resultArea.textContent = '正解！';
        score++;
    } else {
        resultArea.textContent = `不正解... 正解は「${correctAnswer}」です。`;
    }
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});
