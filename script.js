const eventFileMap = {
  'event_01_main.mp3': '桜花爛漫お祭り騒ぎ！~空に徒花 地に忍び~',
  'event_01_hint.mp3': '桜花爛漫お祭り騒ぎ！~空に徒花 地に忍び~ (ヒント)',
  'event_02_main.mp3': '革命のイワン・クパーラ 髭とプリンとレッドウィンター',
  'event_02_hint.mp3': '革命のイワン・クパーラ 髭とプリンとレッドウィンター (ヒント)',
  'event_03_main.mp3': '夏空のウィッシュリスト',
  'event_03_hint.mp3': '夏空のウィッシュリスト (ヒント)',
  'event_04_main.mp3': '~風紀委員会行政官緊急特務命令~ヒナ委員長のなつやすみっ！',
  'event_04_hint.mp3': '~風紀委員会行政官緊急特務命令~ヒナ委員長のなつやすみっ！ (ヒント)',
  'event_05_main.mp3': 'ネバーランドでつかまえて',
  'event_05_hint.mp3': 'ネバーランドでつかまえて (ヒント)',
  'event_06_main.mp3': '船上のバニーチェイサー',
  'event_06_hint.mp3': '船上のバニーチェイサー (ヒント)',
  'event_08_main.mp3': '227号温泉郷の運営記録！白い吐息は寄り添って',
  'event_08_hint.mp3': '227号温泉郷の運営記録！白い吐息は寄り添って (ヒント)',
  'event_09_main.mp3': '第68番 新春狂想曲',
  'event_09_hint.mp3': '第68番 新春狂想曲 (ヒント)',
  'event_10_1_main.mp3': 'シャーレのハッピー♡バレンタインパトロール',
  'event_10_1_hint.mp3': 'シャーレのハッピー♡バレンタインパトロール (ヒント)',
  'event_10_2_main.mp3': '狐坂ワカモの沈黙と祝宴',
  'event_10_2_hint.mp3': '狐坂ワカモの沈黙と祝宴 (ヒント)',
  'event_11_main.mp3': 'どたばたシスターと古書館の魔術師',
  'event_11_hint.mp3': 'どたばたシスターと古書館の魔術師 (ヒント)',
  'event_12_main.mp3': '不忍ノ心',
  'event_12_hint.mp3': '不忍ノ心 (ヒント)',
  'event_13_main.mp3': 'アビドスリゾート復旧対策委員会',
  'event_13_hint.mp3': 'アビドスリゾート復旧対策委員会 (ヒント)',
  'event_14_main.mp3': '出張！百夜堂 海の家FC計画',
  'event_14_hint.mp3': '出張！百夜堂 海の家FC計画 (ヒント)',
  'event_15_main.mp3': '放課後スイーツ物語 甘い秘密と銃撃戦',
  'event_15_hint.mp3': '放課後スイーツ物語 甘い秘密と銃撃戦 (ヒント)',
  'event_16_main.mp3': 'On Your Mark ＠ Millennium ~ キヴォトス大運動会 晄輪大祭',
  'event_16_hint.mp3': 'On Your Mark ＠ Millennium ~ キヴォトス大運動会 晄輪大祭 (ヒント)',
  'event_17_main.mp3': 'GetSet,GO！～キヴォトス晄輪大祭～',
  'event_17_hint.mp3': 'GetSet,GO！～キヴォトス晄輪大祭～ (ヒント)',
  'event_18_main.mp3': '聖堂のメリークリスマス〜救護騎士団の贈り物〜',
  'event_18_hint.mp3': '聖堂のメリークリスマス〜救護騎士団の贈り物〜 (ヒント)',
  'event_19_main.mp3': '喰積の 前にいささか ～一番勝負～',
  'event_19_hint.mp3': '喰積の 前にいささか ～一番勝負～ (ヒント)',
  'event_20_main.mp3': 'F.SCT攻略戦',
  'event_20_hint.mp3': 'F.SCT攻略戦 (ヒント)',
  'event_21_main.mp3': 'A-H.A占領戦',
  'event_21_hint.mp3': 'A-H.A占領戦 (ヒント)',
  'event_22_main.mp3': 'PHT決戦',
  'event_22_hint.mp3': 'PHT決戦 (ヒント)',
  'event_23_main.mp3': 'D.U.シラトリ区 復旧作業',
  'event_23_hint.mp3': 'D.U.シラトリ区 復旧作業 (ヒント)',
  'event_24_main.mp3': '白亜の予告状～虚飾の館と美学の在り処～',
  'event_24_hint.mp3': '白亜の予告状～虚飾の館と美学の在り処～ (ヒント)',
  'event_25_main.mp3': '龍武同舟 ～思い描くは、ひとつの未来～',
  'event_25_hint.mp3': '龍武同舟 ～思い描くは、ひとつの未来～ (ヒント)',
  'event_26_main.mp3': '夏の特殊作戦！RABBIT小隊と消えたエビの謎',
  'event_26_hint.mp3': '夏の特殊作戦！RABBIT小隊と消えたエビの謎 (ヒント)',
  'event_27_main.mp3': '隠されし遺産を求めて〜トリニティの課外活動〜',
  'event_27_hint.mp3': '隠されし遺産を求めて〜トリニティの課外活動〜 (ヒント)',
  'event_28_main.mp3': '学漫同人物語 ～2人が求める最終回～',
  'event_28_hint.mp3': '学漫同人物語 ～2人が求める最終回～ (ヒント)',
  'event_29_main.mp3': 'Trip Trap Train',
  'event_29_hint.mp3': 'Trip Trap Train (ヒント)',
  'event_31_main.mp3': '(電脳)新春行進曲',
  'event_31_hint.mp3': '(電脳)新春行進曲 (ヒント)',
  'event_32_main.mp3': '陽ひらく彼女たちの小夜曲',
  'event_32_hint.mp3': '陽ひらく彼女たちの小夜曲 (ヒント)',
  'event_33_main.mp3': '0068 オペラより愛をこめて！',
  'event_33_hint.mp3': '0068 オペラより愛をこめて！ (ヒント)',
  'event_34_main.mp3': 'にぎにぎと ゆきゆきて',
  'event_34_hint.mp3': 'にぎにぎと ゆきゆきて (ヒント)',
  'event_35_main.mp3': '-ive aLIVE!',
  'event_35_hint.mp3': '-ive aLIVE! (ヒント)',
  'event_36_main.mp3': 'Say-Bing!',
  'event_36_hint.mp3': 'Say-Bing! (ヒント)',
  'event_37_main.mp3': 'Sheside Outside',
  'event_37_hint.mp3': 'Sheside Outside (ヒント)',
  'event_38_main.mp3': '月華夢騒',
  'event_38_hint.mp3': '月華夢騒 (ヒント)',
  'event_39_main.mp3': '五塵来降',
  'event_39_hint.mp3': '五塵来降 (ヒント)',
  'event_40_main.mp3': 'Serenade Promenade',
  'event_40_hint.mp3': 'Serenade Promenade (ヒント)',
  'event_41_main.mp3': '秘密のミッドナイトパーティー～オニの手は鐘と共に～',
  'event_41_hint.mp3': '秘密のミッドナイトパーティー～オニの手は鐘と共に～ (ヒント)',
  'event_42_main.mp3': 'Code: BOX ミレニアムに迫る影 ～一つの問いと二つの答え～',
  'event_42_hint.mp3': 'Code: BOX ミレニアムに迫る影 ～一つの問いと二つの答え～ (ヒント)',
  'event_43_main.mp3': 'パンデミック・ハザード ～奇跡の一枚～',
  'event_43_hint.mp3': 'パンデミック・ハザード ～奇跡の一枚～ (ヒント)',
  'event_44_main.mp3': 'プレイボール！～目指せ！満塁ホームラン～',
  'event_44_hint.mp3': 'プレイボール！～目指せ！満塁ホームラン～ (ヒント)',
  'event_45_main.mp3': 'ハイランダー鉄道爆走事件〜そして列車はなくなった〜',
  'event_45_hint.mp3': 'ハイランダー鉄道爆走事件〜そして列車はなくなった〜 (ヒント)',
};

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

let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = [];
let currentQuestion;
let canAnswer = false;
let playDuration = 1; // 問題の再生時間 (1秒)
let hintDuration = 2; // ヒントの再生時間 (2秒)
let numberOfQuestions = 10;
let hintPlayed = false;

const audioPlayer = document.getElementById('audioPlayer');
const questionNumberDisplay = document.getElementById('questionNumber');
const totalQuestionsDisplay = document.getElementById('totalQuestions');
const optionsArea = document.getElementById('optionsArea');
const nextButton = document.getElementById('nextButton');
const resultArea = document.getElementById('resultArea');
const difficultySelectArea = document.getElementById('difficultySelectArea');
const questionNumberSelectArea = document.getElementById('questionNumberSelectArea');
const startButton = document.getElementById('startButton');
const hintButton = document.createElement('button'); // ヒントボタンを生成

// 難易度選択エリアを非表示にする
difficultySelectArea.style.display = 'none';
questionNumberSelectArea.style.display = 'flex';
startButton.style.display = 'block';

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
  // ここで allQuestions からランダムに numberOfQuestions 個の問題を選ぶ処理が入ります
  // (const allQuestions は省略されているため、具体的な実装は割愛します)
  // 例: currentQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, numberOfQuestions);
  document.getElementById('questionArea').style.display = 'block';
  document.getElementById('optionsArea').style.display = 'grid';
  nextButton.style.display = 'block';
  resultArea.textContent = '';
  loadQuestion();
});

function loadQuestion() {
  if (currentQuestionIndex < currentQuestions.length) {
    currentQuestion = currentQuestions[currentQuestionIndex];
    questionNumberDisplay.textContent = currentQuestionIndex + 1;
    totalQuestionsDisplay.textContent = currentQuestions.length;
    optionsArea.innerHTML = '';
    resultArea.textContent = '';
    nextButton.disabled = true;
    canAnswer = false;
    hintPlayed = false;

    // 選択肢の生成処理 (const allQuestions は省略されているため、具体的な実装は割愛します)
    // 例: const correctOption = currentQuestion.answer;
    //     const otherOptions = [...allQuestions].filter(q => q.answer !== correctOption).sort(() => Math.random() - 0.5).slice(0, 3).map(q => q.answer);
    //     const options = [...otherOptions, correctOption].sort(() => Math.random() - 0.5);
    //     options.forEach(optionText => { ... });

    // ヒントボタンの設置
    hintButton.textContent = 'ヒントを聞く';
    hintButton.addEventListener('click', playHint);
    optionsArea.parentNode.insertBefore(hintButton, nextButton); // nextButton の前にヒントボタンを配置

    // 問題音源を再生 (currentQuestion.mainSound は allQuestions の構造に依存します)
    if (currentQuestion && currentQuestion.mainSound) {
      audioPlayer.src = 'bgm/' + currentQuestion.mainSound;
      audioPlayer.play();
      canAnswer = true; // 問題再生直後に回答可能にする
    }

    // タイムアウト処理 (問題再生時間 + わずかな猶予)
    setTimeout(() => {
      if (!canAnswer) {
        resultArea.textContent = '時間切れ！';
        nextButton.disabled = false;
        hintButton.disabled = true;
      }
    }, (playDuration + 0.1) * 1000); // わずかな猶予 (0.1秒)

  } else {
    resultArea.textContent = `ゲーム終了！あなたのスコアは ${score} / ${numberOfQuestions} でした。`; // スコア表示を変更
    document.getElementById('questionArea').style.display = 'none';
    document.getElementById('optionsArea').style.display = 'none';
    nextButton.style.display = 'none';
    hintButton.style.display = 'none'; // ゲーム終了時にヒントボタンを非表示
    // 必要に応じてリスタートボタンなどを追加
  }
}

function playHint() {
  if (!hintPlayed && currentQuestion && currentQuestion.hintSound) {
    audioPlayer.src = 'bgm/' + currentQuestion.hintSound;
    audioPlayer.play();
    hintPlayed = true;
    hintButton.disabled = true; // 一度ヒントを再生したらボタンを無効化
  }
}

function checkAnswer(selectedAnswer) {
  if (!canAnswer) return;

  canAnswer = false;
  audioPlayer.pause();
  if (currentQuestion && currentQuestion.answer) {
    const correctAnswer = currentQuestion.answer;
    if (selectedAnswer === correctAnswer) {
      resultArea.textContent = '正解！';
      score++;
    } else {
      resultArea.textContent = `不正解... 正解は「${correctAnswer}」です。`;
    }
  }
  nextButton.disabled = false;
  hintButton.disabled = true; // 回答後はヒントボタンを無効化
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  loadQuestion();
});
