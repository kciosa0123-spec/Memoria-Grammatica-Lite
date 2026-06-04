// questions.js
const quizData = [
  {
    id: 1,
    type: "sort",
    questionJa: "もし明日晴れたら、私たちはピクニックに行きます。",
    words: ["sunny", "tomorrow,", "will go", "we", "on a picnic.", "If", "it", "is"],
    correctOrder: ["If", "it", "is", "sunny", "tomorrow,", "we", "will go", "on a picnic."],
    explanation: "時や条件を表す副詞節（If〜など）の中では、未来のことでも現在形（is）を使うのがルールです。"
  },
  {
    id: 2,
    type: "choice",
    questionEn: "I am looking forward to [   ] you.",
    questionJa: "正しい形を選びなさい。",
    choices: ["see", "seeing", "saw", "be seen"],
    correctAnswer: "seeing",
    explanation: "look forward to の 'to' は前置詞です。前置詞の後ろには名詞相当語句が来るため、動名詞（-ing）が正解となります。"
  },
  {
    id: 3,
    type: "sort",
    questionJa: "彼女は私が思っていたよりもずっと親切だった。",
    words: ["much", "than", "I", "thought.", "kinder", "She", "was", "had"],
    correctOrder: ["She", "was", "much", "kinder", "than", "I", "had", "thought."],
    explanation: "「思っていた」のは「親切だった」という過去の時点よりもさらに前のことなので、過去完了形（had thought）を使います。"
  }
];