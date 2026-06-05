const quizData = [
  {
    "id": "U01_001",
    "unit": "1. 文の成り立ち",
    "theme": "第1文型 (SV)",
    "difficulty": 1,
    "type": "sort",
    "questionJa": "その店は6時に閉まる。",
    "words": ["6", "The", "at", "closes", "o'clock", "shop"],
    "correctOrder": ["The", "shop", "closes", "at", "6", "o'clock"],
    "explanation": "【第1文型】主語がThe shop、動詞がclosesのSV構造です。at 6 o'clockは時を表す修飾語（副詞句）であり、文の主要な骨格には含まれません。"
  },
  {
    "id": "U01_002",
    "unit": "1. 文の成り立ち",
    "theme": "第2文型 (SVC)",
    "difficulty": 1,
    "type": "sort",
    "questionJa": "その本は面白かった。",
    "words": ["The", "book", "interesting", "was"],
    "correctOrder": ["The", "book", "was", "interesting"],
    "explanation": "【第2文型】主語がThe book、動詞がwas、補語がinterestingのSVC構造です。主語＝補語（The book = interesting）の関係が成り立ちます。"
  },
  {
    "id": "U01_003",
    "unit": "1. 文の成り立ち",
    "theme": "第3文型 (SVO)",
    "difficulty": 1,
    "type": "sort",
    "questionJa": "彼は私の質問に答えた。",
    "words": ["He", "answered", "my", "question"],
    "correctOrder": ["He", "answered", "my", "question"],
    "explanation": "【第3文型】主語がHe、動詞がanswered、目的語がmy questionのSVO構造です。answerは他動詞なので、前置詞を伴わずに直接目的語をとる点に注意しましょう。"
  },
  {
    "id": "U01_004",
    "unit": "1. 文の成り立ち",
    "theme": "第4文型 (SVOO)",
    "difficulty": 2,
    "type": "choice",
    "questionEn": "The photographer showed [   ] his photos.",
    "questionJa": "カメラマンは私たちに彼の写真を見せてくれた。",
    "choices": ["us", "to us", "we", "our"],
    "correctAnswer": "us",
    "explanation": "【第4文型】show O1 O2で「O1（人）にO2（物）を見せる」となります。to usと前置詞を入れる場合は、showed his photos to usのように語順が変わる点に注意しましょう。"
  },
  {
    "id": "U01_005",
    "unit": "1. 文の成り立ち",
    "theme": "第5文型 (SVOC)",
    "difficulty": 2,
    "type": "sort",
    "questionJa": "私はこの本を読むのが難しいとわかった。",
    "words": ["I", "book", "difficult", "found", "read", "this", "to"],
    "correctOrder": ["I", "found", "this", "book", "difficult", "to", "read"],
    "explanation": "【第5文型】find O C で「OがCだとわかる」という構造を作ります。長文の中で見落としやすい「OとCの間にbe動詞を補って意味が通じる関係（this book = difficult）」に気づくことが読解の鍵です。"
  },
  {
    "id": "U01_006",
    "unit": "1. 文の成り立ち",
    "theme": "名詞句",
    "difficulty": 1,
    "type": "sort",
    "questionJa": "私がロンドンを訪れるのはこれが初めてだ。",
    "words": ["London", "This", "first", "is", "my", "to", "visit"],
    "correctOrder": ["This", "is", "my", "first", "visit", "to", "London"],
    "explanation": "【名詞句】my first visit to London（私の初めてのロンドン訪問）が、2語以上で名詞の働きをする「名詞句」として文の補語（C）になっています。"
  },
  {
    "id": "U01_007",
    "unit": "1. 文の成り立ち",
    "theme": "形容詞句（分詞の後置修飾）",
    "difficulty": 2,
    "type": "sort",
    "questionJa": "私は通りを歩いている女の子に話しかけた。",
    "words": ["I", "a", "girl", "on", "street", "talked", "the", "to", "walking"],
    "correctOrder": ["I", "talked", "to", "a", "girl", "walking", "on", "the", "street"],
    "explanation": "【形容詞句（現在分詞）】walking on the street という分詞のカタマリが、直前の名詞 girl を後ろから修飾しています。英語特有の「名詞＋後置修飾」の語順を前から処理する感覚を養いましょう。"
  },
  {
    "id": "U01_008",
    "unit": "1. 文の成り立ち",
    "theme": "副詞句（群前置詞）",
    "difficulty": 2,
    "type": "choice",
    "questionEn": "I had to cancel the trip [   ] ill health.",
    "questionJa": "私は体調不良のために旅行をキャンセルしなければならなかった。",
    "choices": ["because of", "because", "as", "since"],
    "correctAnswer": "because of",
    "explanation": "【副詞句】空所の後ろがSV（主語と動詞）を持つ「節」ではなく、ill healthという「名詞句」であることに注目します。名詞の前に置けるのは接続詞（because等）ではなく前置詞（because of）のみです。"
  },
  {
    "id": "U01_009",
    "unit": "1. 文の成り立ち",
    "theme": "名詞節（接続詞 if）",
    "difficulty": 2,
    "type": "choice",
    "questionEn": "I don't know [   ] Mary likes Chinese food.",
    "questionJa": "メアリーが中華料理を好きかどうか私は知らない。",
    "choices": ["if", "that", "what", "which"],
    "correctAnswer": "if",
    "explanation": "【名詞節】「〜かどうか」という不確実な内容を表す名詞節を作る接続詞 if を選びます。動詞 know の目的語となる大きなカタマリを作っているサインとして if に反応できるようにしましょう。"
  },
  {
    "id": "U01_010",
    "unit": "1. 文の成り立ち",
    "theme": "形容詞節（関係代名詞の省略）",
    "difficulty": 3,
    "type": "sort",
    "questionJa": "その学生は図書館で借りた本を読んでいる。",
    "words": ["The", "a", "book", "borrowed", "from", "he", "is", "library", "reading", "student", "the"],
    "correctOrder": ["The", "student", "is", "reading", "a", "book", "he", "borrowed", "from", "the", "library"],
    "explanation": "【形容詞節】名詞(a book)の直後に主語と動詞(he borrowed...)が続く場合、関係代名詞が省略されています。長文でこの「名詞＋S＋V」のサインを見つけたら、前の名詞を修飾するカタマリだと判断しましょう。"
  }
];
