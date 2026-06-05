// Memoria Grammatica Lite 標準デッキ（開発用サンプル）
// 本番配布前に、大学生が覚えておくべき基本文法・構文の正式問題へ差し替えること。
// deckId と正式問題の id は、公開後に変更しないこと。
const quizData = {
  schemaVersion: 1,
  deckId: "university-basic-v1",
  deckTitle: "大学基本英文法・構文（開発用サンプル）",
  items: [
      {
        id: "ub_sample_sort_001", type: "sort",
        questionJa: "彼女は毎朝コーヒーを飲む。",
        words: ["She", "drinks", "coffee", "every", "morning"],
        correctOrder: ["She", "drinks", "coffee", "every", "morning"],
        explanation: "三人称単数現在の文。主語 She に対し動詞は drinks（-s が付く）。頻度を表す every morning は文末に置きます。"
      },
      {
        id: "ub_sample_choice_001", type: "choice",
        questionJa: "次の文の空所に最も適切な語を選びなさい。",
        questionEn: "He has lived in Osaka [   ] 2010.",
        choices: ["since", "for", "from", "in"],
        correctAnswer: "since",
        explanation: "現在完了（継続）。起点となる「時の一点」(2010) を示すには since を使います。期間の長さなら for（for ten years など）。"
      },
      {
        id: "ub_sample_sort_002", type: "sort",
        questionJa: "私はその知らせを聞いて驚いた。",
        words: ["I", "was", "surprised", "to", "hear", "the", "news"],
        correctOrder: ["I", "was", "surprised", "to", "hear", "the", "news"],
        explanation: "感情の原因を表す不定詞（副詞的用法）。be surprised to do で「〜して驚く」。"
      },
      {
        id: "ub_sample_choice_002", type: "choice",
        questionJa: "次の文の空所に最も適切な語を選びなさい。",
        questionEn: "If it [   ] tomorrow, we will stay home.",
        choices: ["rains", "will rain", "rained", "is raining"],
        correctAnswer: "rains",
        explanation: "時・条件を表す副詞節（if節）の中では、未来のことでも現在形で表します。主節は will + 原形。"
      },
      {
        id: "ub_sample_choice_003", type: "choice",
        questionJa: "次の文の空所に最も適切な語を選びなさい。",
        questionEn: "This is the book [   ] I told you about.",
        choices: ["which", "who", "whose", "what"],
        correctAnswer: "which",
        explanation: "先行詞 the book（もの）を受け、関係詞節内で前置詞 about の目的語になっています。物を指す目的格の関係代名詞は which（that も可）。"
      },
      {
        id: "ub_sample_sort_003", type: "sort",
        questionJa: "この本は読む価値がある。",
        words: ["This", "book", "is", "worth", "reading"],
        correctOrder: ["This", "book", "is", "worth", "reading"],
        explanation: "be worth doing で「〜する価値がある」。worth の後ろは動名詞（reading）になります。"
      }
    ]
};
