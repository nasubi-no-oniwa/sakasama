// =============================================
//  ことば（日本語・English・繁體中文・한국어）
//  ===========================================

(function () {
  var LANGS = ['ja', 'en', 'zh', 'ko'];
  var KEY = 'sakasama-lang';
  var D = {
 "lang_label": [
  "ことば",
  "Language",
  "語言",
  "언어"
 ],
 "home": [
  "なすびのお庭へ",
  "Nasubi's Garden (more games)",
  "前往茄子的庭院",
  "가지의 정원으로"
 ],
 "howto": [
  "あそびかた",
  "How to play",
  "玩法",
  "플레이 방법"
 ],
 "close": [
  "とじる",
  "Close",
  "關閉",
  "닫기"
 ],
 "back": [
  "もどる",
  "Back",
  "返回",
  "돌아가기"
 ],
 "to_title": [
  "タイトルへ",
  "Back to title",
  "回到標題",
  "타이틀로"
 ],
 "again": [
  "もう一回",
  "Play again",
  "再來一局",
  "한 판 더"
 ],
 "easy": [
  "よわい",
  "Easy",
  "簡單",
  "약함"
 ],
 "normal": [
  "ふつう",
  "Normal",
  "普通",
  "보통"
 ],
 "hard": [
  "つよい",
  "Hard",
  "困難",
  "강함"
 ],
 "vs_cpu": [
  "CPUとたいせん",
  "VS CPU",
  "對戰CPU",
  "CPU와 대전"
 ],
 "online": [
  "あいことばで対戦",
  "Play with a passcode",
  "用暗號對戰",
  "암호로 대전"
 ],
 "passcode": [
  "あいことば",
  "Passcode",
  "暗號",
  "암호"
 ],
 "name": [
  "なまえ",
  "Name",
  "名字",
  "이름"
 ],
 "noname": [
  "ななし",
  "Anonymous",
  "無名氏",
  "익명"
 ],
 "online_hint": [
  "同じあいことばを入れた人と対戦。3人目からは観戦になります。",
  "Play against whoever enters the same passcode. From the 3rd person on, you watch.",
  "和輸入相同暗號的人對戰。第3個人開始為觀戰。",
  "같은 암호를 입력한 사람과 대전. 3번째 사람부터는 관전이 됩니다."
 ],
 "join": [
  "はいる",
  "Join",
  "進入",
  "입장"
 ],
 "wait_pre": [
  "あいことば「",
  "Passcode: ",
  "暗號「",
  "암호 「"
 ],
 "wait_post": [
  "」",
  "",
  "」",
  "」"
 ],
 "waiting": [
  "あいてを待っています…",
  "Waiting for an opponent…",
  "等待對手中…",
  "상대를 기다리는 중…"
 ],
 "copy_link": [
  "さそうリンクをコピー",
  "Copy invite link",
  "複製邀請連結",
  "초대 링크 복사"
 ],
 "copied": [
  "コピーしました！",
  "Copied!",
  "已複製！",
  "복사했어요!"
 ],
 "send_link": [
  "このリンクを送ってください",
  "Send this link",
  "請傳送這個連結",
  "이 링크를 보내 주세요"
 ],
 "err_code": [
  "あいことばを入れてください（. # $ / [ ] は使えません）",
  "Enter a passcode (. # $ / [ ] are not allowed)",
  "請輸入暗號（不能使用 . # $ / [ ]）",
  "암호를 입력해 주세요 (. # $ / [ ] 는 사용할 수 없어요)"
 ],
 "err_code_short": [
  "あいことばを入れてください",
  "Enter a passcode",
  "請輸入暗號",
  "암호를 입력해 주세요"
 ],
 "connecting": [
  "つないでいます…",
  "Connecting…",
  "連線中…",
  "연결 중…"
 ],
 "err_net": [
  "通信できませんでした。電波のよいところでもう一度ためしてください",
  "Couldn't connect. Please try again where the signal is better.",
  "無法連線。請在訊號好的地方再試一次。",
  "연결하지 못했어요. 신호가 좋은 곳에서 다시 시도해 주세요."
 ],
 "err_notready": [
  "オンライン対戦はまだ準備中です",
  "Online play isn't ready yet",
  "線上對戰還在準備中",
  "온라인 대전은 아직 준비 중이에요"
 ],
 "err_conn": [
  "つながりませんでした",
  "Couldn't connect",
  "無法連線",
  "연결되지 않았어요"
 ],
 "left_win": [
  "相手が抜けたので、あなたの勝ち！",
  "Your opponent left, so you win!",
  "對手離開了，你贏了！",
  "상대가 나가서 당신의 승리!"
 ],
 "left": [
  "あいてが退室しました",
  "Your opponent left",
  "對手已離開",
  "상대가 퇴장했어요"
 ],
 "watch_in": [
  "観戦で入りました。試合が始まるのを待っています…",
  "You joined as a spectator. Waiting for the game to start…",
  "已用觀戰身分進入。等待比賽開始…",
  "관전으로 입장했어요. 경기 시작을 기다리는 중…"
 ],
 "wait_next": [
  "次の試合が始まるのを待っています…",
  "Waiting for the next game…",
  "等待下一局開始…",
  "다음 경기를 기다리는 중…"
 ],
 "wait_rematch": [
  "あいての「もう一回」を待っています…",
  "Waiting for your opponent to choose \"Play again\"…",
  "等待對手按「再來一局」…",
  "상대의 '한 판 더'를 기다리는 중…"
 ],
 "you": [
  "あなた",
  "You",
  "你",
  "나"
 ],
 "cpu": [
  "CPU",
  "CPU",
  "CPU",
  "CPU"
 ],
 "your_turn": [
  "あなたの番",
  "Your turn",
  "輪到你",
  "내 차례"
 ],
 "cpu_wait_label": [
  "CPU（ふつう）と遊びながら待つ",
  "Play the CPU (Normal) while waiting",
  "一邊和CPU（普通）玩一邊等",
  "기다리는 동안 CPU(보통)와 플레이"
 ],
 "qm_btn": [
  "だれかと対戦",
  "Play someone online",
  "隨機對戰",
  "아무나와 대전"
 ],
 "qm_stat": [
  "対戦待ち <b>{w}</b>人・対戦中 <b>{p}</b>組",
  "<b>{w}</b> waiting · <b>{p}</b> playing",
  "等待中 <b>{w}</b>人・對戰中 <b>{p}</b>組",
  "대기 <b>{w}</b>명 · 대전 중 <b>{p}</b>쌍"
 ],
 "qm_prime_hot": [
  "🔥 いま対戦タイム！（22時まで）",
  "🔥 Battle time now! (until 22:00 JST)",
  "🔥 現在是對戰時間！（到日本時間22點）",
  "🔥 지금은 대전 타임! (일본 시간 22시까지)"
 ],
 "qm_prime": [
  "🌙 毎晩21時〜22時は対戦タイム",
  "🌙 Battle time every night 21:00–22:00 JST",
  "🌙 每晚日本時間21〜22點是對戰時間",
  "🌙 매일 밤 일본 시간 21~22시는 대전 타임"
 ],
 "qm_sub": [
  "いま待っている人と、自動でつながります。",
  "You'll be matched automatically with someone who's waiting.",
  "自動和正在等待的人配對。",
  "기다리고 있는 사람과 자동으로 연결돼요."
 ],
 "qm_go": [
  "さがす",
  "Find a match",
  "尋找",
  "찾기"
 ],
 "qm_badname": [
  "その名前は使えません。ほかの名前にしてね",
  "That name can't be used. Please choose another.",
  "這個名字不能使用，請換一個。",
  "그 이름은 사용할 수 없어요. 다른 이름으로 해 주세요."
 ],
 "qm_searching": [
  "相手をさがしています",
  "Looking for an opponent",
  "正在尋找對手",
  "상대를 찾는 중"
 ],
 "qm_wait_pre": [
  "いま対戦待ち ",
  "Waiting now: ",
  "目前等待中 ",
  "현재 대기 "
 ],
 "qm_wait_post": [
  "人",
  "",
  "人",
  "명"
 ],
 "qm_cpu": [
  "CPUと遊びながら待つ",
  "Play the CPU while waiting",
  "一邊和CPU玩一邊等",
  "기다리는 동안 CPU와 플레이"
 ],
 "qm_cancel": [
  "やめる",
  "Cancel",
  "取消",
  "그만두기"
 ],
 "qm_retry": [
  "もう一度さがす",
  "Search again",
  "再找一次",
  "다시 찾기"
 ],
 "qm_searching_t": [
  "相手をさがしています… {t}",
  "Looking for an opponent… {t}",
  "正在尋找對手… {t}",
  "상대를 찾는 중… {t}"
 ],
 "qm_calling": [
  "CPUと遊んでいる人に声をかけています…",
  "Inviting someone who is playing the CPU…",
  "正在邀請正在和CPU玩的人…",
  "CPU와 플레이 중인 사람에게 신청하는 중…"
 ],
 "qm_declined": [
  "相手が見送りました。ほかの人をさがします",
  "They passed. Looking for someone else.",
  "對方跳過了，改找其他人。",
  "상대가 넘겼어요. 다른 사람을 찾을게요."
 ],
 "qm_found": [
  "相手が見つかりました！",
  "Opponent found!",
  "找到對手了！",
  "상대를 찾았어요!"
 ],
 "qm_avail": [
  "対戦できる相手がいます！",
  "Someone is ready to play!",
  "有可以對戰的對手！",
  "대전할 수 있는 상대가 있어요!"
 ],
 "qm_play": [
  "対戦する",
  "Play",
  "對戰",
  "대전하기"
 ],
 "qm_pass": [
  "見送る",
  "Pass",
  "跳過",
  "넘기기"
 ],
 "qm_taken": [
  "さっきの相手は、ほかの人と対戦を始めました。もう少し待ってね",
  "That player started a match with someone else. Please wait a little longer.",
  "剛才的對手已經和別人開始對戰了。請再等一下。",
  "방금 상대는 다른 사람과 대전을 시작했어요. 조금만 더 기다려 주세요."
 ],
 "qm_fail": [
  "相手とつながりませんでした（{c}）",
  "Couldn't connect to your opponent ({c})",
  "無法和對手連線（{c}）",
  "상대와 연결되지 않았어요 ({c})"
 ],
 "qm_nojoin": [
  "入れませんでした",
  "Couldn't join",
  "無法進入",
  "들어가지 못했어요"
 ],
 "qm_next": [
  "次の相手をさがす",
  "Find next opponent",
  "尋找下一位對手",
  "다음 상대 찾기"
 ],
 "doc_title": [
  "さかさまドロップ",
  "Upside-Down Drop",
  "顛倒掉落",
  "거꾸로 드롭"
 ],
 "doc_desc": [
  "4つつなげて消す落ちものパズル。ゲージが溜まったら相手の盤面をさかさまに！",
  "A falling-block puzzle: connect 4 to pop them. Fill the gauge and flip your opponent's board upside down!",
  "連成4個就消除的掉落式益智遊戲。集滿量表就把對手的盤面上下顛倒！",
  "4개를 이어서 없애는 낙하 퍼즐. 게이지가 차면 상대의 판을 거꾸로 뒤집어라!"
 ],
 "logo_top": [
  "<i>さ</i><i>か</i><i class=\"flip\">さ</i><i class=\"flip\">ま</i>",
  "<i>UPSIDE</i><i class=\"flip\">DOWN</i>",
  "<i>顛</i><i class=\"flip\">倒</i>",
  "<i>거</i><i class=\"flip\">꾸</i><i class=\"flip\">로</i>"
 ],
 "logo_bottom": [
  "ドロップ",
  "DROP",
  "掉落",
  "드롭"
 ],
 "tagline": [
  "4つつなげて消す。<br>溜まったら、相手の盤面を<b>さかさま</b>に。",
  "Connect 4 to pop them.<br>Fill up, then flip your rival's board <b>upside down</b>.",
  "連成4個就消除。<br>集滿了，就把對手的盤面<b>上下顛倒</b>。",
  "4개를 이으면 사라진다.<br>게이지가 차면 상대의 판을 <b>거꾸로</b>."
 ],
 "home_e": [
  "🍆 なすびのお庭へ",
  "🍆 Nasubi's Garden",
  "🍆 茄子的庭院",
  "🍆 가지의 정원"
 ],
 "home_more": [
  "🍆 なすびのお庭へ（ほかのゲーム）",
  "🍆 Nasubi's Garden (more games)",
  "🍆 前往茄子的庭院（其他遊戲）",
  "🍆 가지의 정원으로 (다른 게임)"
 ],
 "land_tip": [
  "スマホを横にすると、相手の盤面も同じ大きさで見えます<br>ブラウザの「ホーム画面に追加」で全画面で遊べます",
  "Turn sideways to see both boards at full size.<br>\"Add to Home Screen\" lets you play full screen.",
  "把手機橫放，就能看到一樣大的對手盤面<br>用瀏覽器的「加入主畫面」可以全螢幕遊玩",
  "휴대폰을 가로로 돌리면 상대의 판도 같은 크기로 보여요<br>브라우저의 \"홈 화면에 추가\"로 전체 화면으로 즐길 수 있어요"
 ],
 "ctrl_touch": [
  "スマホの操作",
  "Touch controls",
  "手機操作",
  "터치 조작"
 ],
 "m_button": [
  "ボタン",
  "Buttons",
  "按鈕",
  "버튼"
 ],
 "m_swipe": [
  "なぞる",
  "Swipe",
  "滑動",
  "스와이프"
 ],
 "pause": [
  "一時停止",
  "Pause",
  "暫停",
  "일시정지"
 ],
 "sound": [
  "音",
  "Sound",
  "聲音",
  "소리"
 ],
 "next": [
  "つぎ",
  "Next",
  "下一個",
  "다음"
 ],
 "score": [
  "スコア",
  "Score",
  "分數",
  "점수"
 ],
 "gauge": [
  "さかさまゲージ",
  "Flip gauge",
  "顛倒量表",
  "뒤집기 게이지"
 ],
 "to_opp": [
  "相手に",
  "Them",
  "對手",
  "상대"
 ],
 "to_self": [
  "自分に",
  "Self",
  "自己",
  "나"
 ],
 "to_opp_k": [
  "相手に<small>Shift</small>",
  "Them<small>Shift</small>",
  "對手<small>Shift</small>",
  "상대<small>Shift</small>"
 ],
 "to_self_k": [
  "自分に<small>C</small>",
  "Self<small>C</small>",
  "自己<small>C</small>",
  "나<small>C</small>"
 ],
 "k_move": [
  "<kbd>←</kbd><kbd>→</kbd> いどう",
  "<kbd>←</kbd><kbd>→</kbd> Move",
  "<kbd>←</kbd><kbd>→</kbd> 移動",
  "<kbd>←</kbd><kbd>→</kbd> 이동"
 ],
 "k_soft": [
  "<kbd>↓</kbd> はやく落とす",
  "<kbd>↓</kbd> Soft drop",
  "<kbd>↓</kbd> 加速落下",
  "<kbd>↓</kbd> 빨리 내리기"
 ],
 "k_hard": [
  "<kbd>↑</kbd> 一気に落とす",
  "<kbd>↑</kbd> Hard drop",
  "<kbd>↑</kbd> 直接落下",
  "<kbd>↑</kbd> 한 번에 내리기"
 ],
 "k_rl": [
  "<kbd>Z</kbd> 左回転",
  "<kbd>Z</kbd> Rotate left",
  "<kbd>Z</kbd> 向左轉",
  "<kbd>Z</kbd> 왼쪽 회전"
 ],
 "k_rr": [
  "<kbd>X</kbd><kbd>スペース</kbd> 右回転",
  "<kbd>X</kbd><kbd>Space</kbd> Rotate right",
  "<kbd>X</kbd><kbd>空白鍵</kbd> 向右轉",
  "<kbd>X</kbd><kbd>Space</kbd> 오른쪽 회전"
 ],
 "k_fo": [
  "<kbd>Shift</kbd> 相手をさかさま",
  "<kbd>Shift</kbd> Flip opponent",
  "<kbd>Shift</kbd> 顛倒對手",
  "<kbd>Shift</kbd> 상대 뒤집기"
 ],
 "k_fs": [
  "<kbd>C</kbd> 自分をさかさま",
  "<kbd>C</kbd> Flip yourself",
  "<kbd>C</kbd> 顛倒自己",
  "<kbd>C</kbd> 나 뒤집기"
 ],
 "a_left": [
  "左",
  "Left",
  "左",
  "왼쪽"
 ],
 "a_down": [
  "下",
  "Down",
  "下",
  "아래"
 ],
 "a_right": [
  "右",
  "Right",
  "右",
  "오른쪽"
 ],
 "a_hard": [
  "一気に落とす",
  "Hard drop",
  "直接落下",
  "한 번에 내리기"
 ],
 "a_fo": [
  "相手をさかさま",
  "Flip opponent",
  "顛倒對手",
  "상대 뒤집기"
 ],
 "a_fs": [
  "自分をさかさま",
  "Flip yourself",
  "顛倒自己",
  "나 뒤집기"
 ],
 "a_rl": [
  "左回転",
  "Rotate left",
  "向左轉",
  "왼쪽 회전"
 ],
 "a_rr": [
  "右回転",
  "Rotate right",
  "向右轉",
  "오른쪽 회전"
 ],
 "swipe_hint": [
  "<span>左右になぞる：いどう</span><span>下になぞる：落とす</span><span>下にはじく：一気に</span><span>左をタップ：↺</span><span>右をタップ：↻</span>",
  "<span>Swipe left/right: move</span><span>Swipe down: drop</span><span>Flick down: hard drop</span><span>Tap left: ↺</span><span>Tap right: ↻</span>",
  "<span>左右滑動：移動</span><span>往下滑：落下</span><span>往下快滑：直接落下</span><span>點左邊：↺</span><span>點右邊：↻</span>",
  "<span>좌우로 밀기: 이동</span><span>아래로 밀기: 내리기</span><span>아래로 튕기기: 한 번에</span><span>왼쪽 탭: ↺</span><span>오른쪽 탭: ↻</span>"
 ],
 "rest": [
  "ひとやすみ",
  "Paused",
  "休息一下",
  "잠깐 휴식"
 ],
 "resume": [
  "つづける",
  "Resume",
  "繼續",
  "계속하기"
 ],
 "no_pause": [
  "オンライン対戦中は止まりません",
  "Online matches don't pause",
  "線上對戰中不會暫停",
  "온라인 대전 중에는 멈추지 않아요"
 ],
 "win": [
  "かち！",
  "WIN!",
  "贏了！",
  "승리!"
 ],
 "lose": [
  "まけ…",
  "LOSE…",
  "輸了…",
  "패배…"
 ],
 "win_left": [
  "かち！（あいてが退室）",
  "WIN! (opponent left)",
  "贏了！（對手離開）",
  "승리! (상대 퇴장)"
 ],
 "x_win": [
  "{name} のかち！",
  "{name} wins!",
  "{name} 贏了！",
  "{name} 승리!"
 ],
 "max_chain": [
  "最大れんさ",
  "Max chain",
  "最大連鎖",
  "최대 연쇄"
 ],
 "flips": [
  "さかさま",
  "Flips",
  "顛倒",
  "뒤집기"
 ],
 "ex_code": [
  "例：ねこ123",
  "e.g. cat123",
  "例：貓咪123",
  "예: 고양이123"
 ],
 "start": [
  "スタート！",
  "GO!",
  "開始！",
  "시작!"
 ],
 "cpu_lv": [
  "CPU {lv}",
  "CPU {lv}",
  "CPU {lv}",
  "CPU {lv}"
 ],
 "chain_n": [
  "{n}れんさ！",
  "{n} CHAIN!",
  "{n}連鎖！",
  "{n}연쇄!"
 ],
 "c_flip": [
  "さかさま！",
  "FLIP!",
  "顛倒！",
  "뒤집기!"
 ],
 "c_reserved": [
  "さかさま予約中",
  "Flip incoming",
  "即將顛倒",
  "뒤집기 예약 중"
 ],
 "c_allclear": [
  "ぜんけし！",
  "ALL CLEAR!",
  "全消！",
  "전부 지우기!"
 ],
 "c_cancel": [
  "うちけし！",
  "OFFSET!",
  "抵銷！",
  "상쇄!"
 ],
 "c_atkup": [
  "こうげきアップ！",
  "ATTACK UP!",
  "攻擊提升！",
  "공격 업!"
 ],
 "h1": [
  "<b>同じ色を4つ</b>つなげると消える。消えたあとに落ちてきて、また4つそろうと<b>れんさ</b>！",
  "Connect <b>4 of the same color</b> to pop them. If the pieces that fall afterwards line up 4 again, that's a <b>chain</b>!",
  "把<b>4個相同顏色</b>連在一起就會消除。消除後掉下來的又湊滿4個，就是<b>連鎖</b>！",
  "<b>같은 색 4개</b>를 이으면 사라져요. 사라진 뒤 떨어진 것들이 또 4개 모이면 <b>연쇄</b>!"
 ],
 "h2": [
  "れんさするほど相手に<b>いし</b>がたくさん降る。いしは隣で色が消えると一緒に消える。",
  "The longer the chain, the more <b>stones</b> fall on your opponent. Stones disappear when colors next to them pop.",
  "連鎖越多，對手頭上就會掉下越多<b>石頭</b>。石頭旁邊有顏色消除時會一起消失。",
  "연쇄할수록 상대에게 <b>돌</b>이 많이 떨어져요. 돌은 옆에서 색이 사라지면 같이 사라져요."
 ],
 "h3": [
  "つぶを消すと<b>さかさまゲージ</b>が溜まる。満タンで<b>さかさま</b>を押すと、<b>相手の盤面が上下反転</b>！　積み上げた形がバラバラになり、思わぬ連鎖が起きることも。",
  "Popping pieces fills the <b>flip gauge</b>. When it's full, press <b>flip</b> to turn <b>your opponent's board upside down</b>! Their stack falls apart, and surprise chains can happen.",
  "消除顆粒會累積<b>顛倒量表</b>。集滿後按<b>顛倒</b>，<b>對手的盤面就會上下翻轉</b>！堆好的形狀會亂掉，有時還會引發意外的連鎖。",
  "알을 없애면 <b>뒤집기 게이지</b>가 차요. 가득 찼을 때 <b>뒤집기</b>를 누르면 <b>상대의 판이 위아래로 뒤집혀요</b>! 쌓아 둔 모양이 흐트러지고, 뜻밖의 연쇄가 일어나기도 해요."
 ],
 "h4": [
  "さかさまは<b>相手に</b>も<b>自分に</b>も使える。相手に使うと組みを崩して邪魔できる。自分に使うと、起きた連鎖は攻撃にならないが、自分に降ってくる予定のいしを消せる（守り）。",
  "You can flip <b>them</b> or <b>yourself</b>. Flip them to wreck their setup. Flip yourself and the chains it causes won't attack, but it clears the stones about to fall on you (defense).",
  "顛倒可以用在<b>對手</b>，也可以用在<b>自己</b>。用在對手可以打亂他的佈局。用在自己時，引發的連鎖不會變成攻擊，但能消掉即將掉到自己身上的石頭（防守）。",
  "뒤집기는 <b>상대</b>에게도 <b>나</b>에게도 쓸 수 있어요. 상대에게 쓰면 쌓은 모양을 무너뜨려 방해할 수 있어요. 나에게 쓰면 일어난 연쇄는 공격이 되지 않지만, 나에게 떨어질 예정인 돌을 없앨 수 있어요 (방어)."
 ],
 "h5": [
  "さかさまを使われた側は、今のつぶを置いて連鎖が終わったあと、次のつぶが出る前に反転する。",
  "The flipped player's board turns over after their current piece lands and its chain ends, before the next piece appears.",
  "被顛倒的一方，會在放下目前的顆粒、連鎖結束後，下一個顆粒出現前翻轉。",
  "뒤집기를 당한 쪽은 지금 알을 놓고 연쇄가 끝난 뒤, 다음 알이 나오기 전에 뒤집혀요."
 ],
 "h6": [
  "<b>あいことばで対戦</b>：同じあいことばを入れた2人で対戦。3人目からは観戦になる。「さそうリンク」を送れば、開くだけで同じ部屋に入れる。",
  "<b>Play with a passcode</b>: two people who enter the same passcode play each other. From the 3rd person on, you watch. Send the \"invite link\" and they join just by opening it.",
  "<b>用暗號對戰</b>：輸入相同暗號的2個人對戰。第3個人開始為觀戰。傳送「邀請連結」，對方只要打開就能進入同一個房間。",
  "<b>암호로 대전</b>: 같은 암호를 입력한 2명이 대전. 3번째 사람부터는 관전이 돼요. \"초대 링크\"를 보내면 열기만 해도 같은 방에 들어올 수 있어요."
 ],
 "h7": [
  "96秒たつと「こうげきアップ」。そこから16秒ごとに、少ない連鎖でもいしがたくさん送れるようになる。",
  "After 96 seconds comes \"Attack up\". Every 16 seconds after that, even small chains send more stones.",
  "96秒後會「攻擊提升」。之後每16秒，就算連鎖少也能送出更多石頭。",
  "96초가 지나면 \"공격 업\". 그 뒤로 16초마다 적은 연쇄로도 돌을 많이 보낼 수 있게 돼요."
 ],
 "h8": [
  "スマホはブラウザの「ホーム画面に追加」をすると、アプリのように全画面で遊べる。",
  "On a phone, use \"Add to Home Screen\" in your browser to play full screen like an app.",
  "手機用瀏覽器的「加入主畫面」，就能像App一樣全螢幕遊玩。",
  "휴대폰에서는 브라우저의 \"홈 화면에 추가\"를 하면 앱처럼 전체 화면으로 즐길 수 있어요."
 ],
 "h9": [
  "盤面をぜんぶ消すと「ぜんけし」。次の連鎖でいしがたくさん送れる。",
  "Clear the whole board for an \"All clear\". Your next chain sends lots of stones.",
  "把盤面全部消光就是「全消」。下一次連鎖能送出很多石頭。",
  "판을 전부 지우면 \"전부 지우기\". 다음 연쇄로 돌을 많이 보낼 수 있어요."
 ],
 "h10": [
  "まん中の<b class=\"x\">×</b>までつぶが積み上がったら負け。",
  "If your pieces stack up to the <b class=\"x\">×</b> in the middle, you lose.",
  "顆粒堆到中間的<b class=\"x\">×</b>就輸了。",
  "알이 가운데 <b class=\"x\">×</b>까지 쌓이면 패배."
 ],
 "hk1_t": [
  "スマホ（ボタン）",
  "Phone (buttons)",
  "手機（按鈕）",
  "휴대폰 (버튼)"
 ],
 "hk1": [
  "◀ ▶ いどう／▼ はやく落とす<br>⤓ 一気に落とす<br>↺ 左回転／↻ 右回転<br>相手に・自分に スキル<br>※なぞる操作も同時に使える",
  "◀ ▶ move / ▼ soft drop<br>⤓ hard drop<br>↺ rotate left / ↻ rotate right<br>Them / Self: flip skill<br>*Swiping works at the same time",
  "◀ ▶ 移動／▼ 加速落下<br>⤓ 直接落下<br>↺ 向左轉／↻ 向右轉<br>對手・自己 技能<br>※也可以同時用滑動操作",
  "◀ ▶ 이동 / ▼ 빨리 내리기<br>⤓ 한 번에 내리기<br>↺ 왼쪽 회전 / ↻ 오른쪽 회전<br>상대·나 스킬<br>※스와이프 조작도 같이 쓸 수 있어요"
 ],
 "hk2_t": [
  "スマホ（なぞる）",
  "Phone (swipe)",
  "手機（滑動）",
  "휴대폰 (스와이프)"
 ],
 "hk2": [
  "左右になぞって いどう<br>下になぞって はやく落とす<br>下にはじいて 一気に落とす<br>左タップ↺／右タップ↻",
  "Swipe left/right to move<br>Swipe down to soft drop<br>Flick down to hard drop<br>Tap left ↺ / tap right ↻",
  "左右滑動 移動<br>往下滑 加速落下<br>往下快滑 直接落下<br>點左邊↺／點右邊↻",
  "좌우로 밀어서 이동<br>아래로 밀어서 빨리 내리기<br>아래로 튕겨서 한 번에 내리기<br>왼쪽 탭↺ / 오른쪽 탭↻"
 ],
 "hk3": [
  "← → いどう／↓ はやく落とす<br>↑ 一気に落とす<br>Z 左回転／X・スペース 右回転<br>Shift 相手に／C 自分に",
  "← → move / ↓ soft drop<br>↑ hard drop<br>Z rotate left / X·Space rotate right<br>Shift: flip them / C: flip self",
  "← → 移動／↓ 加速落下<br>↑ 直接落下<br>Z 向左轉／X・空白鍵 向右轉<br>Shift 對手／C 自己",
  "← → 이동 / ↓ 빨리 내리기<br>↑ 한 번에 내리기<br>Z 왼쪽 회전 / X·스페이스 오른쪽 회전<br>Shift 상대 / C 나"
 ]
};
  function pick() {
    try { var q = new URLSearchParams(location.search).get('lang'); if (q && LANGS.indexOf(q) >= 0) { try { localStorage.setItem(KEY, q); } catch (e) {} return q; } } catch (e) {}
    try { var s = localStorage.getItem(KEY); if (s && LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || 'ja').toLowerCase();
    if (n.indexOf('ja') === 0) return 'ja'; if (n.indexOf('ko') === 0) return 'ko'; if (n.indexOf('zh') === 0) return 'zh'; return 'en';
  }
  var L = pick();
  function t(k, v) {
    var row = D[k]; var i = LANGS.indexOf(L);
    var s = row ? (row[i] != null ? row[i] : row[0]) : k;
    if (v) for (var x in v) s = s.split('{' + x + '}').join(v[x]);
    return s;
  }
  function koFont() {
    if (L !== 'ko' || document.getElementById('ko-font')) return;
    var l = document.createElement('link'); l.id = 'ko-font'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap'; document.head.appendChild(l);
  }
  function apply() {
    koFont();
    var de = document.documentElement;
    de.lang = L === 'zh' ? 'zh-Hant' : L; de.setAttribute('data-lang', L);
    document.querySelectorAll('[data-i]').forEach(function (e) { e.textContent = t(e.dataset.i); });
    document.querySelectorAll('[data-ih]').forEach(function (e) { e.innerHTML = t(e.dataset.ih); });
    document.querySelectorAll('[data-ip]').forEach(function (e) { e.placeholder = t(e.dataset.ip); });
    document.querySelectorAll('[data-ia]').forEach(function (e) { e.setAttribute('aria-label', t(e.dataset.ia)); });
    document.querySelectorAll('.langs button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === L ? 'true' : 'false'); });
    document.title = t('doc_title');
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', t('doc_desc'));
    try { document.dispatchEvent(new CustomEvent('langchange', { detail: L })); } catch (e) {}
  }
  function set(l) { if (LANGS.indexOf(l) < 0) return; L = l; try { localStorage.setItem(KEY, l); } catch (e) {} apply(); }
  function bind() {
    document.querySelectorAll('.langs button').forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.lang); }); });
    apply();
  }
  window.I18N = { t: t, set: set, apply: apply, get lang() { return L; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();
