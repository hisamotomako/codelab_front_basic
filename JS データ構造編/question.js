// JavaScript構文ドリル：実践力確認用（問題）

//【1】配列の基本操作
// Q1.1: 気温を表すtemperatures配列を 18, 25, 30, 22 で定義してください。
// 解答:
let temperatures = [18,25,30,22];
// Q1.2: 上記配列の3番目の値を28に書き換えてください。
// 解答:
temperatures[2] = 28;

// Q1.3: 配列の要素数をコンソールに表示してください。
// 解答:
console.log(temperatures.length);

//【2】配列の追加・削除　（【1】で作成したtemperatures配列を使用します）
// Q2.1: 配列の末尾に 27 を追加してください。
// 解答:
temperatures.push(27);

// Q2.2: 配列の末尾の要素を1つ削除してください。
// 解答:
temperatures.pop();

// Q2.3: 配列の先頭に15を追加してください。
// 解答:
temperatures.unshift(15);

// Q2.4: 配列の先頭の要素を1つ削除してください。
// 解答:
temperatures.shift();


//【3】ループと反復処理
// Q3.1: temperaturesの全要素をfor文で1行ずつ出力してください。
// 解答:
for (let i = 0; i < temperatures.length; i++){
  console.log(temperatures[i]);
}

// Q3.2: forEachを使ってインデックスと値を「index: 値」の形式で表示してください。
// 解答:
temperatures.forEach((value, index)=>{
  console.log(index + ": " + value);
});

//【4】配列の集計・加工
// Q4.1: temperaturesの合計値を「合計: 値」の形式で出力してください。
// 解答:
let sum = 0;
temperatures.forEach((value) => {
  sum += value;
});

console.log("合計: " + sum);

// Q4.2: 平均値を計算して「平均: 値」の形式で出力してください。
// 解答:
let average = sum / temperatures.length;

console.log("平均: " + average);

// Q4.3: 以下の税抜き価格の配列に対して、税込価格の配列を作成し出力してください。
// const costs = [2500, 4000, 1500];
// 解答:
const costs = [2500, 4000, 1500];
const taxPrices = costs.map((price) => {
  return Math.round(price * 1.1);
});

console.log(taxPrices);

// Q4.4: 税込価格に「〇〇円」という値にして配列として出力してください。
// 数字は小数点以下を四捨五入し、3桁毎にカンマ区切りにしましょう。
// 解答:
const taxPricesWithYen = costs.map((price) => {
  return Math.round(price * 1.1).toLocaleString() + "円";
});

console.log(taxPricesWithYen);

// Q4.5: costsの配列から2000より大きい価格だけを取り出して新しい配列にして出力ください。
// 解答:
const filteredList = costs.filter((price) =>{
  return price > 2000;
});

console.log(filteredList);

// Q4.6: 次の配列から、偶数だけを取り出して新しい配列にして出力してください。
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 解答:
const numbers = [1,2,3,4,5,6,7,8,9,10];

const even = numbers.filter((number)=> {
  return number % 2 === 0;
});

console.log(even);

// Q4.7: 次の配列の数値を、2桁(1桁の場合はゼロ埋め）にし、新しい配列にして出力してください。
// [3, 12, 5, 7, 23]
// 解答:
const numbers2 = [3, 12, 5, 7, 23];

const result = numbers2.map(num => String(num).padStart(2,"0"));

console.log(result);
// Q4.8: 次の配列の中の「-」をすべて「/」に置換して、新しい配列にして出力してください。
// ["2025-04-01", "2025-04-15", "2025-05-03"]
// 解答:
const detes = ["2025-04-01", "2025-04-15", "2025-05-03"];

const newDetes = detes.map(dete =>dete.replace(/-/g,"/"));

console.log(newDetes);

// Q4.9: 次の配列から、6文字以上の単語だけを抽出し、すべて小文字に変換して、新しい配列として出力してください。
// ["Apple", "Banana", "Cherry", "Watermelon", "mongo"]
// 解答:
const words = ["Apple", "Banana", "Cherry", "Watermelon", "mongo"];

const filteredWords = words
   .filter(word => word.length >= 6)
   .map(word => word.toLowerCase());

console.log(filteredWords);

//【5】オブジェクトの操作
// Q5.1: javascript: 85, python: 92 を持つ userScores オブジェクトを作成してください。
// 解答:
const userScores = {
  javascript: 85,
  python: 92
};

// Q5.2: javascript を90、python を95に変更してください。
// 解答:
userScores.javascript = 90;
userScores.python = 95;

console.log(userScores);

// Q5.3: sql:80 を追加し、javascript を削除してください。
// 解答:
userScores.sql = 80;

delete userScores.javascript;

console.log(userScores);

// Q5.4: Object.entries を使ってキーと値を1行ずつ出力してください。
// 解答:
Object.entries(userScores).forEach(([Key, value]) => {
  console.log(Key, value);
});

// Q5.5: 合計値と平均値を出力してください。
// 解答:
const scores = Object.values(userScores);

const total = scores.reduce((sum, score) => sum + score, 0);

const scoreAverage = total / scores.length;

console.log(total);
console.log(scoreAverage);


//【6】その他の配列操作
// 以下の配列について、指示に従った処理にしてください。
// ["HTML", "CSS", "JavaScript", "PHP"]
// Q6.1: "CSS" を削除して、配列を出力してください。
//解答
const languages = ["HTML", "CSS", "JavaScript", "PHP"];

languages.splice(1, 1);

console.log(languages);

// Q6.2: 「削除したい言語を入力してください。（HTML,CSS,JavaScript,PHP）」と確認して入力された言語を削除して、配列を出力してください。
// ["HTML", "CSS", "JavaScript", "PHP"]
//解答
const languages2 = ["HTML", "CSS", "JavaScript", "PHP"];

const deleteLanguage = prompt("削除したい言語を入力してください。(HTML,CSS,JavaScript,PHP)");

const index = languages2.indexOf(deleteLanguage);

if (index !== -1){
  languages2.splice(index, 1);
}

console.log(languages2);

// Q6.3: "JavaScript" の後に "TypeScript" を追加してください。
const languages3 = ["HTML", "CSS", "JavaScript", "PHP"];

const q63Index = languages3.indexOf("JavaScript");

languages3.splice(q63Index + 1, 0, "TypeScript");

console.log(languages3);


// Q6.4: 「追加したい言語と、どの言語の後に追加するかを半角スペースで区切って入力してください。（HTML,CSS,JavaScript,PHP）入力例：TypeScript JavaScript」と確認して入力された言語を指定した言語の後に挿入し、配列を出力してください。
//解答
const languages4 = ["HTML","CSS","JavaScript","PHP"];

const input = prompt(
  "追加したい言語と、どの言語の後に追加するかを半角スペースで区切って入力してください。（HTML,CSS,JavaScript,PHP）\n入力例：TypeScript JavaScript"
);

const [newLanguage,afterLanguage] = input.split(" ");

const q64Index = languages4.indexOf(afterLanguage);

if (q64Index !== -1){
  languages4.splice(q64Index + 1, 0, newLanguage);
}

console.log(languages4);

// Q6.5: JavaScriptをTypeScriptに置換して、配列を出力してください。
//解答
const languages5 = ["HTML", "CSS", "JavaScript", "PHP"];

const q65Index = languages5.indexOf("JavaScript");

languages5.splice(q65Index, 1, "TypeScript");

console.log(languages5);

// Q6.6: 「置換前の言語と、置換後の言語（HTML,CSS,JavaScript,PHP）を半角スペースで区切って入力してください。入力例：JavaScript TypeScript」と確認して入力された言語を指定した言語の後に置換し、配列を出力してください。
//解答
const languages6 = ["HTML","CSS","JavaScript","PHP"];

const promptMessage = prompt(
  "置換前の言語と、置換後の言語（HTML,CSS,JavaScript,PHP）を半角スペースで区切って入力してください。\n入力例：JavaScript TypeScript"
);

const data = promptMessage.split(" ");

const beforeLanguage = data[0];
const convertedLanguage = data[1];

const q66Index = languages6.indexOf(beforeLanguage);

if (q66Index !== -1){
  languages6[q66Index] = convertedLanguage;
}

console.log(languages6);

// Q6.7: 「日本語に変換したい日付を入力してください。入力例：2026-3-4」と確認して、入力された日付を2026年03月04日の形式で出力してください。
//解答

const guideMessage = prompt(
  "日本語に変換したい日付を入力してください。\n入力例：2026-3-4"
);

const date = guideMessage.split("-");

const year = date[0];
const month = date[1].padStart(2, "0");
const day = date[2].padStart(2, "0");

console.log(`${year}年${month}月${day}日`);

// Q6.8: 「性、名、都道府県をカンマ区切りで入力してください。入力例：山田,太郎,東京都」と確認して、入力された文字列を{last_name: '山田', first_name: '太郎', pref: '東京都'}のようにオブジェクトにしてから出力してください。
//解答
const userInstruction = prompt(
  "性、名、都道府県をカンマ区切りで入力してください。\n入力例：山田,太郎,東京都"
);

const q68Data = userInstruction.split(",");

const user = {
  last_name: q68Data[0],
  first_name: q68Data[1],
  pref: q68Data[2]
};

console.log(user);

// Q6.9: Q6.8で作成したオブジェクトを使ってURLのクエリパラメータの形式で出力してください。出力例：「?last_name='山田'&first_name='太郎'&pref='東京都';」
//解答
const userName = {
  last_name: "山田",
  first_name: "太郎",
  pref: "東京都"
};

const query = `?last_name='${userName.last_name}'&first_name='${userName.first_name}'&pref='${userName.pref}';`;

console.log(query);

//【7】分割代入・スプレッド・コピー
// Q7.1: 分割代入を使って、"Yamada Taro,Suzuki Hanako,Tanaka Ichiro"の文字列から以下のように出力してください。
// My Name Is Taro Yamada
// My Name Is Hanako Suzuki
// My Name Is Ichiro Tanaka
//解答
const names = "Yamada Taro,Suzuki Hanako,Tanaka Ichiro".split(",");

const [person1, person2, person3] = names;

const [last1, first1] = person1.split(" ");
const [last2, first2] = person2.split(" ");
const [last3, first3] = person3.split(" ");

console.log(`My Name Is ${first1} ${last1}`);
console.log(`My Name Is ${first2} ${last2}`);
console.log(`My Name Is ${first3} ${last3}`);

// Q7.2: 分割代入を使って、"2025-04-01,2025-12-25,2026-01-01"の文字列から以下のように出力してください。
// April 1, 2025
// December 25, 2025
// January 1, 2026
//解答
const dates = "2025-04-01,2025-12-25,2026-01-01".split(",");

const [date1, date2, date3] = dates;

const [year1, month1, day1] = date1.split("-");
const [year2, month2, day2] = date2.split("-");
const [year3, month3, day3] = date3.split("-");

const months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

console.log(`${months[Number(month1)]} ${Number(day1)}, ${year1}`);
console.log(`${months[Number(month2)]} ${Number(day2)}, ${year2}`);
console.log(`${months[Number(month3)]} ${Number(day3)}, ${year3}`);

// Q7.3: レスト構文を使って、["太郎", "二郎", "三郎", "四郎"]の配列を
// 長男:太郎
// 2男:二郎
// 3男:三郎
// 4男:四郎
// のように出力してください。
//解答
const brothers = ["太郎", "二郎", "三郎", "四郎"];

const [first, ...rest] = brothers;

console.log(`長男：${first}`);
console.log(`2男：${rest[0]}`);
console.log(`3男：${rest[1]}`);
console.log(`4男：${rest[2]}`);

// Q7.4: レスト構文を使って「example.com/taro/15/Tokyo」のアドレスから、ドメイン部分とパラメータ部分を分けて、以下のように出力してください。※パラメータ部分はオブジェクトにすること
// ドメイン:example.com
// {name: 'taro', age: '15', pref: 'Tokyo"'}
//解答
const url = "example.com/taro/15/Tokyo";

const [domain, ...parameters] = url.split("/");

console.log(`ドメイン:${domain}`);

const [name, age, pref] = parameters;

const profile = {
  name,
  age,
  pref
};

console.log(profile);

// Q7.5: スプレッド構文を使って、以下の2つのオブジェクトを結合し、CSS形式で出力してください。
// { "font-size": "1.2em",
//   "font-weight": "bold",
//   "text-align": "center"}
// { "padding": "8px",
//   "background-color": "#ddd",
//   "margin-bottom": "15px"}
// 出力
// font-size:1.2em;
// font-weight:bold;
// text-align:center;
// padding:8px;
// background-color:#ddd;
// margin-bottom:15px;
//解答
const style1 = {
  "font-size": "1.2em",
  "font-weight": "bold",
  "text-align": "center"
};

const style2 = {
  "padding": "8px",
  "background-color": "#ddd",
  "margin-bottom": "15px"
};

const styles = {
  ...style1,
  ...style2
};

for (const key in styles) {
  console.log(`${key}:${styles[key]};`);
}

// Q7.6: スプレッド構文を使って、[5, 30, 15, 20] を関数に渡し、最大値を計算して出力してください。
//解答
const targetNumbers = [5, 30, 15, 20];

console.log(Math.max(...targetNumbers));

// Q7.7:
// 1.関数の引数にレスト構文を使って、受け取る引数の個数に制限がない関数を作りましょう。
// 2.関数の中では、受け取ったすべての値の中から「偶数だけ」を取り出して、配列として戻してください。
// 3.配列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] をスプレッド構文を使って関数に渡し、偶数だけが出力されることを確認してください。
//解答
function getEvenNumbers(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}

const filteredNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbers(...filteredNumbers));