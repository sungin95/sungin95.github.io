const quotes = [
  {
    quote: "아무것도 안하는 기업은 실패한다.",
    author: "-이멜트 GE 회장-",
  },
  {
    quote: "여윈 자유는 살찐 노예보다 낫다.",
    author: "-존 레이-",
  },
  {
    quote: "나는 생각한다. 고로 존재한다. ",
    author: "-데카르트-",
  },
  {
    quote: "불행은 누가 진정한 친구가 아닌지를 보여준다.",
    author: "-아리스토 텔레스-",
  },
  {
    quote: "과학에서 중요한 것은 새로운 사실을 얻는 것보다"
     +" 새로운 사실을 생각해 내는 법을 찾아내는 것이다.",
    author: "-윌리엄 브래그-",
  },
  {
    quote: "모두를 사랑하되, 몇 사람만 믿으라. 누구에게도 잘못을 저지르지 말라.",
    author: "-윌리엄 셰익스피어-",
  },
  {
    quote: "나는 성공의 열쇠를 모른다. 그러나 실패의 열쇠는 모두의 비위를 맞추려 하는 것이다. ",
    author: "-빌 코스비-",
  },
  {
    quote: "주가 변동을 적으로 보지 말고 친구로 보라. 어리석음에 동참하지 말고 오히려 그것을 이용해서 이익을 내라.",
    author: "-워런 버핏-",
  },
  {
    quote: "내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.",
    author: "-랄프 왈도 에머슨-",
  },
  {
    quote: "나는 법을 가르칠 수 없는 자에게는 더 빨리 추락하는 법을 가르쳐라.",
    author: "-프레드리히 니체-",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
