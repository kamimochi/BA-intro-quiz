const eventFileMap = {
  'event_01.mp3': '桜花爛漫お祭り騒ぎ！~空に徒花 地に忍び~',
  'event_02.mp3': '革命のイワン・クパーラ 髭とプリンとレッドウィンター',
  'event_03.mp3': '夏空のウィッシュリスト',
  'event_04.mp3': '~風紀委員会行政官緊急特務命令~ヒナ委員長のなつやすみっ！',
  'event_05.mp3': 'ネバーランドでつかまえて',
  'event_06.mp3': '船上のバニーチェイサー',
  'event_07.mp3': '初音ミクのスペシャルライブ in キヴォトス～リハーサル編～(コラボ)',
  'event_08.mp3': '227号温泉郷の運営記録！白い吐息は寄り添って',
  'event_09.mp3': '第68番 新春狂想曲',
  'event_10.mp3': 'シャーレのハッピー♡バレンタインパトロール　狐坂ワカモの沈黙と祝宴',
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
  'event_30.mp3': 'とある科学の青春記録(コラボ)',
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
  { sound: 'event_07.mp3', answer: '初音ミクのスペシャルライブ in キヴォトス～リハーサル編～(コラボ)' },
  { sound: 'event_08.mp3', answer: '227号温泉郷の運営記録！白い吐息は寄り添って' },
  { sound: 'event_09.mp3', answer: '第68番 新春狂想曲' },
  { sound: 'event_10.mp3', answer: 'シャーレのハッピー♡バレンタインパトロール　狐坂ワカモの沈黙と祝宴' },
  { sound: 'event_11.mp3', answer: 'どたばたシスターと古書館の魔術師' },
  { sound: 'event_12.mp3': '不忍ノ心' },
  { sound: 'event_13.mp3': 'アビドスリゾート復旧対策委員会' },
  { sound: 'event_14.mp3': '出張！百夜堂 海の家FC計画' },
  { sound: 'event_15.mp3': '放課後スイーツ物語 甘い秘密と銃撃戦' },
  { sound: 'event_16.mp3': 'On Your Mark ＠ Millennium ~ キヴォトス大運動会 晄輪大祭' },
  { sound: 'event_17.mp3': 'GetSet,GO！～キヴォトス晄輪大祭～' },
  { sound: 'event_18.mp3': '聖堂のメリークリスマス〜救護騎士団の贈り物〜' },
  { sound: 'event_19.mp3': '喰積の 前にいささか ～一番勝負～' },
  { sound: 'event_20.mp3': 'F.SCT攻略戦' },
  { sound: 'event_21.mp3': 'A-H.A占領戦' },
  { sound: 'event_22.mp3': 'PHT決戦' },
  { sound: 'event_23.mp3': 'D.U.シラトリ区 復旧作業' },
  { sound: 'event_24.mp3': '白亜の予告状～虚飾の館と美学の在り処～' },
  { sound: 'event_25.mp3': '龍武同舟 ～思い描くは、ひとつの未来～' },
  { sound: 'event_26.mp3': '夏の特殊作戦！RABBIT小隊と消えたエビの謎' },
  { sound: 'event_27.mp3': '隠されし遺産を求めて〜トリニティの課外活動〜' },
  { sound: 'event_28.mp3': '学漫同人物語 ～2人が求める最終回～' },
  { sound: 'event_29.mp3': 'Trip Trap Train' },
  { sound: 'event_30.mp3': 'とある科学の青春記録(コラボ)' },
  { sound: 'event_31.mp3': '(電脳)新春行進曲' },
  { sound: 'event_32.mp3': '陽ひらく彼女たちの小夜曲' },
  { sound: 'event_33.mp3': '0068 オペラより愛をこめて！' },
  { sound: 'event_34.mp3': 'にぎにぎと ゆきゆきて' },
  { sound: 'event_35.mp3': '-ive aLIVE!' },
  { sound: 'event_36.mp3': 'Say-Bing!' },
  { sound: 'event_37.mp3': 'Sheside Outside' },
  { sound: 'event_38.mp3': '月華夢騒' },
  { sound: 'event_39.mp3': '五塵来降' },
  { sound: 'event_40.mp3': 'Serenade Promenade' },
  { sound: 'event_41.mp3': '秘密のミッドナイトパーティー～オニの手は鐘と共に～' },
  { sound: 'event_42.mp3': 'Code: BOX ミレニアムに迫る影 ～一つの問いと二つの答え～' },
  { sound: 'event_43.mp3': 'パンデミック・ハザード ～奇跡の一枚～' },
  { sound: 'event_44.mp3': 'プレイボール！～目指せ！満塁ホームラン～' },
  { sound: 'event_45.mp3': 'ハイランダー鉄道爆走事件〜そして列車はなくなった〜' }
];

let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = []; // 現在プレイする問題の配列
let currentQuestion;
let canAnswer = false;
let playDuration = 5; // デフォルトの再生時間（イージー）
let numberOfQuestions = 10; // デフォルトの問題数

const audioPlayer = document.getElementById('audioPlayer');
const questionNumberDisplay = document.getElementById('questionNumber');
const totalQuestionsDisplay = document.getElementById('totalQuestions');
const optionsArea = document.getElementById('optionsArea');
const nextButton = document.getElementById('nextButton');
const resultArea = document.getElementById('resultArea');
const difficultySelectArea = document.createElement('div'); // 難易度選択エリア
const questionNumberSelectArea = document.getElementById('questionNumberSelectArea'); // 問題数選択エリア
const startButton = document.createElement('button'); // スタートボタン

// 難易度選択ボタンを作成
const easyButton = createDifficultyButton('イージー', 5);
const normalButton = createDifficultyButton('ノーマル', 3);
const hardButton = createDifficultyButton('ハード', 1);

// 難易度選択エリアに追加
difficultySelectArea.appendChild(easyButton);
difficultySelectArea.appendChild(normalButton);
difficultySelectArea.appendChild(hardButton);

// スタートボタンを作成
startButton.textContent = 'スタート';
startButton.addEventListener('click', startGame);
startButton.style.padding = '10px 20px';
startButton.style.fontSize = '1.2em';
startButton.style.cursor = 'pointer';
startButton.style.backgroundColor = '#007bff';
startButton.style.color = '#fff';
startButton.style.border = 'none';
startButton.style.borderRadius = '5px';
startButton.style.marginTop = '20px';

// 難易度選択エリアと問題数選択エリアとスタートボタンをbodyに追加
document.body.insertBefore(difficultySelectArea, document.getElementById('questionArea'));
document.body.insertBefore(questionNumberSelectArea, document.getElementById('questionArea'));
document.body.insertBefore(startButton, document.getElementById('questionArea'));
document.getElementById('questionArea').style.display = 'none';
document.getElementById('optionsArea').style.display = 'none';
document.getElementById('nextButton').style.display = 'none'; // ← ここで初期表示を none に設定
document.getElementById('resultArea').style.display = 'none';

function createDifficultyButton(text, duration) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.padding = '10px 15px';
  button.style.fontSize = '1em';
  button.style.marginRight = '10px';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = '#f8f9fa';
  button.style.color = '#343a40';
  button.style.border = '1px solid #ced4da';
  button.style.borderRadius = '5px';
  button.addEventListener('click', () => selectDifficulty(duration));
  return button;
}

function selectDifficulty(duration) {
  playDuration = duration;
  difficultySelectArea.style.display = 'none';
  questionNumberSelectArea.style.display = 'block';
  startButton.style.display = 'block';
}

function startGame() {
  const selectedQuestionNumber = parseInt(document.getElementById('questionNumberSelect').value);
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
  document.getElementById('nextButton').style.display = 'block'; // ← ここでゲーム開始時に表示
  document.getElementById('resultArea').textContent = '';
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex < currentQuestions.length) {
    currentQuestion = currentQuestions[currentQuestionIndex];
    audioPlayer.src = 'bgm/' + currentQuestion.sound; // パスを修正
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
    }, 500); // 少し遅らせて再生

    setTimeout(() => {
      if (!canAnswer) {
        resultArea.textContent = '時間切れ
