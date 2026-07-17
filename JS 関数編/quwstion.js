// 確認問題（基礎文法）の問4で解いたコードを関数にしましょう。
// 例題. リンゴの数をユーザに聞き、リンゴの単価（120円）で支払い金額を求める
//let appleCount = Number(prompt('欲しいリンゴの数を入力してください。'));
//const applePrice = 120;
//console.log(appleCount * applePrice);

// 正解
//function getPrice(appleCount){
//  const applePrice = 120;
//  return appleCount * applePrice;
//}
// テスト実行
//console.log(getPrice(10));

// A. 書籍の価格と個数から合計金額を計算しよう
// ・書籍1冊1800円の購入冊数をユーザに聞く
// ・「合計金額：xxxx円」と表示する
// ・totalPriceを返り値にしましょう

//const bookPrice = 1800;
//let bookCount = Number(prompt('購入する書籍の冊数を入力してください。'));
//let totalPrice = bookPrice * bookCount;
//console.log(`合計金額: ${totalPrice} 円`);

// 上記内容を関数化した内容を解答してください。
function getBookPrice(bookCount){
  const bookPrice = 1800;
  const totalPrice = bookPrice * bookCount;
  return totalPrice;
}
// テスト実行
let bookCount = Number(prompt('購入する書籍の冊数を入力してください。'));
console.log(getBookPrice(bookCount));

// B. 商品の価格と税率を使って税込み金額を計算しよう
// ・商品の価格をユーザに聞く
// ・商品の個数をユーザに聞く
// ・消費税率10%を載せた税込金額を「税込金額：xxxx円」と表示する
// ・totalPriceを返り値にしましょう

//let productPrice = Number(prompt('商品の価格を入力してください（円）:'));
//let productCount = Number(prompt('購入する個数を入力してください:'));
//const taxRate = 1.1;
//let totalPrice = productPrice * productCount * taxRate;
//console.log(`税込金額：${totalPrice}円`);

// 上記内容を関数化した内容を解答してください。
function getTaxPrice(productPrice,productCount){
  const taxRate = 1.1;
  const totalPrice = productPrice * productCount * taxRate;
  return totalPrice;
}
// テスト実行
let productPrice = Number(prompt('商品の価格を入力してください（円）:'));
let productCount = Number(prompt('購入する個数を入力してください:'));
console.log(getTaxPrice(productPrice,productCount));

// C. 旅行の予定を作成しよう
// ・旅行先（大阪、京都等）をユーザに聞く
// ・旅行の日数をユーザに聞く
// ・「あなたは〇〇にxx日間の旅行に行きます！」と表示する
// ・返り値の無い関数にしましょう。

//let destination = prompt('旅行先を入力してください（大阪、京都など）:');
//let travelDays = Number(prompt('旅行日数を入力してください:'));
//console.log(`あなたは ${destination} に ${travelDays} 日間の旅行に行きます！`);

// 上記内容を関数化した内容を解答してください。
function showTrip(destination,travelDays){
  console.log(`あなたは ${destination} に ${travelDays} 日間の旅行に行きます！`)
}
// テスト実行
let destination = prompt('旅行先を入力してください（大阪、京都など）:');
let travelDays = Number(prompt('旅行日数を入力してください:'));
console.log(showTrip(destination,travelDays));
console.log(showTrip("北海道",7));

// 確認問題（基礎文法）の問5で解いたコードを関数にしましょう。
// 例題. ユーザーに テストの点数 を入力してもらい、以下の成績を判定してください。
// ・90以上: "A"
// ・70以上90未満: "B"
// ・70未満: "C"
// ・点数のデフォルト引数値を70にする

//const score = Number(prompt("Enter your score:"));
//if (score >= 90) {
//  console.log("A");
//} else if (score >= 70) {
//  console.log("B");
//} else {
//  console.log("C");
//}
// 上記内容を関数化した内容を解答してください。
function getGrade(score = 70){
  if (score >= 90) {
  return("A");
} else if (score >= 70) {
  return("B");
} else {
  return("C");
}
}
// テスト実行
const score = Number(prompt("Enter your score:"));
console.log(getGrade(score));
console.log(getGrade(90));
console.log(getGrade(50));

// A. ユーザーに 数値 を入力してもらい、偶数か奇数を判定してください。
// ・偶数なら "偶数"
// ・奇数なら "奇数"
// ・偶数か奇数を判定する関数を作る
// ・その関数の引数を1～10まで変えて実行する。

//const number = Number(prompt("数値を入力してください:"));
//if (number % 2 === 0) {
//  console.log("偶数");
//} else {
//  console.log("奇数");
//}
// 上記内容を関数化した内容を解答してください。
function judgeNumber(number){
  if (number % 2 === 0) {
  return("偶数");
} else {
  return("奇数");
}
}
// 1～10までを判定
const number = Number(prompt("数値を入力してください:"));
console.log(judgeNumber(number));
console.log(judgeNumber(1));
console.log(judgeNumber(2));
console.log(judgeNumber(3));
console.log(judgeNumber(4));
console.log(judgeNumber(5));
console.log(judgeNumber(6));
console.log(judgeNumber(7));
console.log(judgeNumber(8));
console.log(judgeNumber(9));
console.log(judgeNumber(10));

// B. ユーザーに年齢を入力してもらい、以下のルールで判定してください。
// ・12歳以下: "子供"
// ・13歳～19歳: "ティーン"
// ・20歳～64歳: "大人"
// ・65歳以上: "高齢者"
// ・年齢のデフォルト引数値を50にする

//const age = Number(prompt("年齢を入力してください:"));
//if (age >= 0 && age <= 12) {
//  console.log("子供");
//} else if (age >= 13 && age <= 19) {
//  console.log("ティーン");
//} else if (age >= 20 && age <= 64) {
//  console.log("大人");
//} else if (age >= 65) {
//  console.log("高齢者");
//} else {
//  console.log("正しい年齢を入力してください");
//}

// 上記内容を関数化した内容を解答してください。
function judgeAge(age = 50){
  if (age >= 0 && age <= 12) {
  return("子供");
} else if (age >= 13 && age <= 19) {
  return("ティーン");
} else if (age >= 20 && age <= 64) {
  return("大人");
} else if (age >= 65) {
  return("高齢者");
} else {
  return("正しい年齢を入力してください");
}
}
// テスト実行
const age = Number(prompt("年齢を入力してください:"));
console.log(judgeAge(age));
console.log(judgeAge(30));
console.log(judgeAge(10));
console.log(judgeAge(-1));

// C. ユーザーに 購入金額 を入力してもらい、以下のルールで割引を適用し、その割引率と最終価格を表示してください。
// ・10000円以上: "最終価格: XXXX円（20% 割引適用）"
// ・5000円以上: "最終価格: XXXX円（10% 割引適用）"
// ・それ以外: "最終価格: XXXX円"
// ・金額のデフォルト値を5000にする

//const price = Number(prompt("購入金額を入力してください（円）:"));
//let discountRate = 0; // 割引率

//if (price >= 10000) {
//  discountRate = 0.2; // 20% 割引
//} else if (price >= 5000) {
//  discountRate = 0.1; // 10% 割引
//}

//const discountedPrice = price * (1 - discountRate); // 割引後の価格を計算

//if (discountRate > 0) {
//  console.log(`最終価格: ${discountedPrice}円（${discountRate * 100}% 割引適用）`);
//} else {
//  console.log(`最終価格: ${discountedPrice}円`);
//}

// 上記内容を関数化した内容を解答してください。
function getTotalPrice(number = 5000){
  let discountRate = 0; // 割引率

  if (number >= 10000) {
    discountRate = 0.2; // 20% 割引
  } else if (number >= 5000) {
    discountRate = 0.1; // 10% 割引
  }

const discountedPrice = number * (1 - discountRate); // 割引後の価格を計算

if (discountRate > 0) {
  return(`最終価格: ${discountedPrice}円（${discountRate * 100}% 割引適用）`);
} else {
  return(`最終価格: ${discountedPrice}円`);
}
}
// テスト実行
const price = Number(prompt("購入金額を入力してください（円）:"));
console.log(getTotalPrice(price));
console.log(getTotalPrice(5000));
console.log(getTotalPrice(10000));
console.log(getTotalPrice(2500));

// 確認問題（基礎文法）の問6で解いたコードを無名関数を使って関数化しましょう。
// 例題. ユーザーに red, yellow, blue, green のいずれかを入力してもらい、以下のメッセージを表示してください。
// red: "Stop!"
// yellow : "Slow down!"
// blue もしくは green: "Go!"
// それ以外: "Unknown color"

//const color = prompt("信号機の色をいれてください:");
//switch (color) {
//  case "red":
//    console.log("Stop!");
//    break;
//  case "yellow":
//    console.log("Slow down!");
//    break;
//  case "blue":
//  case "green":
//    console.log("Go!");
//    break;
//  default:
//    console.log("Unknown color");
//}
// 上記内容を無名関数化した内容を解答してください。
const judgeSignal = function(color){
  switch (color) {
    case "red":
      return("Stop!");
    case "yellow":
      return("Slow down!");
    case "blue":
    case "green":
      return("Go!");
    default:
      return("Unknown color");
  }
};
// テスト実行
const color = prompt("信号機の色をいれてください:");
console.log(judgeSignal(color));
console.log(judgeSignal("blue"));
console.log(judgeSignal("red"));
console.log(judgeSignal("black"));

// A. ユーザーに日本語の曜日を入力してもらい、英語の曜日を表示する処理を作成してください。
// ・日: "Sunday"
// ・月: "Monday"
// ・火: "Tuesday"
// ・水: "Wednesday"
// ・木: "Thursday"
// ・金: "Friday"
// ・土: "Saturday"

//const day = prompt("日本語の曜日を入力してください（日, 月, 火, 水, 木, 金, 土）:");

//switch (day) {
//  case "日":
//    console.log("Sunday");
//    break;
//  case "月":
//    console.log("Monday");
//    break;
//  case "火":
//    console.log("Tuesday");
//    break;
//  case "水":
//    console.log("Wednesday");
//    break;
//  case "木":
//    console.log("Thursday");
//    break;
//  case "金":
//    console.log("Friday");
//    break;
//  case "土":
//    console.log("Saturday");
//    break;
//  default:
//    console.log("無効な曜日です");
//}

// 上記内容を無名関数化した内容を解答してください。
const getDayOfWeek = function(day){
  switch (day) {
    case "日":
      return("Sunday");
    case "月":
      return("Monday");
    case "火":
      return("Tuesday");
    case "水":
      return("Wednesday");
    case "木":
      return("Thursday");
    case "金":
      return("Friday");
    case "土":
      return("Saturday");
    default:
      return("無効な曜日です");
  }
};
// テスト実行
const day = prompt("日本語の曜日を入力してください（日, 月, 火, 水, 木, 金, 土）:");
console.log(getDayOfWeek(day));
console.log(getDayOfWeek("金"));
console.log(getDayOfWeek("日"));
console.log(getDayOfWeek("祝日"));

// B. ユーザーに月の数字を入れてもらい、その月の末日を表示する処理を作成してください。
// ・1、3、5、7、8、10、12: "◯月は31日が末日です。"
// ・4、6、9、11: "◯月は30日が末日です。"
// ・2: "◯月は28日が末日です。"

//const month = Number(prompt("月の数字を入力してください（1～12）:"));

//switch (month) {
//  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//    console.log(`${month}月は31日が末日です。`);
//    break;
//  case 4: case 6: case 9: case 11:
//    console.log(`${month}月は30日が末日です。`);
//    break;
//  case 2:
//    console.log(`${month}月は28日が末日です。`);
//    break;
//  default:
//    console.log("無効な月の入力です。1～12の数字を入力してください。");
//}

// 上記内容を無名関数化した内容を解答してください。
const showDay = function(month){
  switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    return(`${month}月は31日が末日です。`);
  case 4: case 6: case 9: case 11:
    return(`${month}月は30日が末日です。`);
  case 2:
    return(`${month}月は28日が末日です。`);
  default:
    return("無効な月の入力です。1～12の数字を入力してください。");
}
};
// テスト実行
const month = Number(prompt("月の数字を入力してください（1～12）:"));
console.log(showDay(month));
console.log(showDay(7));
console.log(showDay(12));
console.log(showDay(15));

// C. ユーザーに購入金額とくじの色を入れてもらい、くじの色によって、購入金額を割引する処理を作成してください。
// くじの色が
// ・金: "最終価格: XXXX円（30% 割引適用）"
// ・銀: "最終価格: XXXX円（20% 割引適用）"
// ・銅: "最終価格: XXXX円（10% 割引適用）"
// ・その他: "最終価格: XXXX円"

//const price = Number(prompt("購入金額を入力してください（円）:"));
//const lotteryColor = prompt("くじの色を入力してください（金, 銀, 銅）:");

//let discountRate = 0; // 割引率

//switch (lotteryColor) {
//  case "金":
//    discountRate = 0.3; // 30% 割引
//    break;
//  case "銀":
//    discountRate = 0.2; // 20% 割引
//    break;
//  case "銅":
//    discountRate = 0.1; // 10% 割引
//    break;
//  default:
//    discountRate = 0; // 割引なし
//}

//const finalPrice = price * (1 - discountRate); // 割引後の価格を計算

//if (discountRate > 0) {
//  console.log(`最終価格: ${finalPrice}円（${discountRate * 100}% 割引適用）`);
//} else {
//  console.log(`最終価格: ${finalPrice}円`);
//}

// 上記内容を無名関数化した内容を解答してください。
const getFinalPrice = function(price,lotteryColor){
  let discountRate = 0; // 割引率

switch (lotteryColor) {
  case "金":
    discountRate = 0.3; // 30% 割引
    break;
  case "銀":
    discountRate = 0.2; // 20% 割引
    break;
  case "銅":
    discountRate = 0.1; // 10% 割引
    break;
  default:
    discountRate = 0; // 割引なし
}

const finalPrice = price * (1 - discountRate); // 割引後の価格を計算

if (discountRate > 0) {
  return(`最終価格: ${finalPrice}円（${discountRate * 100}% 割引適用）`);
} else {
  return(`最終価格: ${finalPrice}円`);
}
}
// テスト実行
const lotteryPrice = Number(prompt("購入金額を入力してください（円）:"));
const lotteryColor = prompt("くじの色を入力してください（金, 銀, 銅）:");
console.log(getFinalPrice(lotteryPrice,lotteryColor));
console.log(getFinalPrice(10000,"銀"));
console.log(getFinalPrice(10000,"金"));
console.log(getFinalPrice(10000,"白"));

// 確認問題（基礎文法）の問7で解いたコードをアロー関数式を使って関数化しましょう。
// 例題. 1からXまでの合計を計算し、最後に"合計:xxx"と表示してください。
// Xについては、ユーザーが入力した数値まで計算すること。

//const X = Number(prompt("1からXまでの合計を計算します。Xの値を入力してください:"));
//let sum = 0;
//for (let i = 1; i <= X; i++) {
//  sum += i;
//}
//console.log(`合計: ${sum}`);

//const calculateSumUp = (x) => {
//  let sum = 0;
//  for (let i = 1; i <= x; i++) {
//    sum += i;
//  }
//  return `合計: ${sum}`;
//};

// テスト実行
//console.log(calculateSumUp(5));   // 合計: 15
//console.log(calculateSumUp(10));  // 合計: 55
//console.log(calculateSumUp(100)); // 合計: 5050

// 正解
//const calculateSumUp = (x) => {
//  let sum = 0;
//  for (let i = 1; i <= x; i++) {
//    sum += i;
//  }
//  return `合計: ${sum}`;
//};

// テスト実行
//console.log(calculateSumUp(5));   // 合計: 15
//console.log(calculateSumUp(10));  // 合計: 55
//console.log(calculateSumUp(100)); // 合計: 5050


// B. 以下のようなピラミッドパターンを作成してください。
// *
// * *
// * * *
// * * * *
// * * * * *

//for (let i = 1; i <= 5; i++) {
//  let row = "";
//  for (let j = 1; j <= i; j++) {
//    row += "* ";
//  }
//  console.log(row);
//}

// 上記内容をアロー関数式を使って関数化した内容を解答してください。
const Pyramid = (height) =>{
  let result = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    result += row + "\n";
  }

  return result;
};
// テスト実行
const height = Number(prompt("数値を入力してください"))
console.log(Pyramid(height));

// C. 1からXまでの数を表示し、
// 3の倍数のとき "Fizz"
// 5の倍数のとき "Buzz"
// 両方の倍数のとき "FizzBuzz" を表示してください。
// Xについては、ユーザーに入力させること。

// 実行例: X=15の場合
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

//const X = Number(prompt("1からXまでの合計を計算します。Xの値を入力してください:"));

//for (let i = 1; i <= 100; i++) {
//  for (let i = 1; i <= X; i++) {
//    console.log("FizzBuzz");
//  } else if (i % 3 === 0) {
//    console.log("Fizz");
//  } else if (i % 5 === 0) {
//    console.log("Buzz");
//  } else {
//    console.log(i);
//  }
//}

// 上記内容をアロー関数式を使って関数化した内容を解答してください。
const fizzBuzz = (X) =>{
  let result = "";

  for (let i = 1; i <= X; i++) {
    if (i % 3 === 0 && i % 5 ===0){
      result += "FizzBuzz\n"
    } else if (i % 3 === 0) {
      result += "Fizz\n";
    } else if (i % 5 === 0) {
      result += "Buzz\n";
    } else {
      result += i + "\n";
    }
  }
  return result;
};
// テスト実行
const X = Number(prompt("1からXまでの合計を計算します。Xの値を入力してください:"));
console.log(fizzBuzz(X));
console.log(fizzBuzz(25));
console.log(fizzBuzz(30));
console.log(fizzBuzz(15));

// 確認問題（基礎文法）の問8で解いたコードをアロー関数式を使って関数化しましょう。
// while版かdo-while版のどちらか一方でOK

// 問題. ユーザーに 「目標貯金額（X）」 と 「毎月の貯金額（Y）」 を数値で入力させ、以下の形式で表示してください。
// Y円ずつ毎月貯めると、◯年◯ヶ月でX円を超えます。

//let X = Number(prompt("目標貯金額（円）を入力してください:"));
//let Y = Number(prompt("毎月の貯金額（円）を入力してください:"));

//let totalSavings = 0; // 貯金額
//let months = 0; // 経過月数

//while (totalSavings < X) {
//    totalSavings += Y; // 貯金を加算
//    months++; // 月数を増やす
//}

//let years = Math.floor(months / 12);
//let remainingMonths = months % 12;

//console.log(`${Y}円ずつ毎月貯めると、${years}年${remainingMonths}ヶ月で${X}円を超えます。`);

//let X = Number(prompt("目標貯金額（円）を入力してください:"));
//let Y = Number(prompt("毎月の貯金額（円）を入力してください:"));

//let totalSavings = 0; // 貯金額
//let months = 0; // 経過月数

//do {
//    totalSavings += Y; // 貯金を加算
//    months++; // 月数を増やす
//} while (totalSavings < X);

//let years = Math.floor(months / 12);
//let remainingMonths = months % 12;

//console.log(`${Y}円ずつ毎月貯めると、${years}年${remainingMonths}ヶ月で${X}円を超えます。`);

// 上記内容をアロー関数式を使って関数化した内容を解答してください。
const calculateSavings = (x,y) => {
  let totalSavings = 0; // 貯金額
  let months = 0; // 経過月数

  while (totalSavings < x) {
      totalSavings += y; // 貯金を加算
      months++; // 月数を増やす
  }

  let years = Math.floor(months / 12);
  let remainingMonths = months % 12;

  return `${y}円ずつ毎月貯めると、${years}年${remainingMonths}ヶ月で${x}円を超えます。`;
};
// テスト実行
let x = Number(prompt("目標貯金額（円）を入力してください:"));
let y = Number(prompt("毎月の貯金額（円）を入力してください:"));
console.log(calculateSavings(x,y));

// 確認問題（基礎文法）の問9で解いたコードをアロー関数式を使って関数化しましょう。

// 以下のルールで処理を実装してください。

// 問題. ユーザーに「Xまでの素数を表示します。Xの値を入力してください:」と聞き、答えた数までの素数を表示してください。
// もし、Xに2未満の数字が入力された場合には、「2以上の正しい数値を入力してください。」とアラートで表示すること。
// 実行例: X=20の場合
// 1から20までの素数:
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19

// 実行例: X=1の場合
// 2以上の正しい数値を入力してください。

//let X = Number(prompt("Xまでの素数を表示します。Xの値を入力してください:"));

// 2 以上の数値で処理を開始
//if (X >= 2) {
//    console.log(`1から${X}までの素数:`);

//    for (let num = 2; num <= X; num++) {
//        let isPrime = true;

// 2 から num の平方根までの整数で割れるかチェック
//        for (let divisor = 2; divisor * divisor <= num; divisor++) {
//            if (num % divisor === 0) {
//                isPrime = false;
//                break; // これ以上の判定は不要なのでループを抜ける
//            }
//        }

//        if (!isPrime) {
//            continue; // 素数でないならスキップ
//        }

//        console.log(num); // 素数なら表示
//    }
//} else {
//    alert("2以上の正しい数値を入力してください。");
//}

// 上記内容をアロー関数式を使って関数化した内容を解答してください。
const showPrimes = (primeX) => {
  if (primeX >= 2) {
    let result = `1から${primeX}までの素数:\n`;

    for (let num = 2; num <= primeX; num++) {
        let isPrime = true;

        // 2 から num の平方根までの整数で割れるかチェック
        for (let divisor = 2; divisor * divisor <= num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break; // これ以上の判定は不要なのでループを抜ける
            }
        }

        if (!isPrime) {
            continue; // 素数でないならスキップ
        }

        result += num + "\n"; // 素数なら表示
    }
    return result;
  } else {
    alert("2以上の正しい数値を入力してください。");
  }
};
// テスト実行
let primeX = Number(prompt("Xまでの素数を表示します。Xの値を入力してください:"));
console.log(showPrimes(primeX));
console.log(showPrimes(15));
console.log(showPrimes(20));
console.log(showPrimes(1));