/** constとletの変数宣言文について */

// var val1 = "変数です";
// console.log(val1);

// let val2 = "let変数だよ";
// console.log(val2);

// //let変数は上書きが可能です/

// val2 = "let変数上書きしたよ";
// console.log(val2);

// //let変数は再宣言できないよ/
// let val2 = "let変数上書きしたよ";
// console.log(val2);

// //constで定義した変数はプロパティの変更が可能/
// const val3 = "const変数"
// console.log(val3);

// const val4 = {
//   name: "ががが",
//   age: 28,
// };
// console.log(val4);
// val4.name = "ゲゲゲ",
// val4.address = "千葉県";

// //constで定義した配列はプロパティの変更が可能/
// const val5 = ['dog' , 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列について
 */
// const name = "ゲゲゲ";
// const age = 28;
// console.log(name);

/**
 * テンプレート文字列を用いた方法
 */

// const message2 =`私の名前は${name}です。`;
// console.log(message2)

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("私はfunc2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

//分割代入
// const myProfile = {
//   'name': "シンタロウ",
//   'age': "28",
// };

// const message1 = `私の名前は、${myProfile.name}です。
// 年齢は、${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `私の名前は、${name}です。
// 年齢は、${age}歳です。`;
// console.log(message2);

// const myProfile = ['シンタロウ' , 28];
// const message3 = `私の名前は、${myProfile[0]}です。年齢は、${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `わたいは、${name}です。歳は、${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name ="ゲスト") => console.log(`こんにちわ!${name}さん`);
// sayHello();

/**
 * スプレッド構文 ...
 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(num1);
// console.log(num2);
// console.log(array3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列処理
 *  */
const NameArr = ["田中", "山田", "シンタロウ"];
// for(let index = 0; index < NameArr.length; index++) {
// console.log(`${index + 1}番目は、${NameArr[index]}さんです。`);
// }

// const NameArr2 = NameArr.map((name)=>{
//   return name;
// })
// console.log(NameArr2);

NameArr.map((name, index) =>
  console.log(`${index + 1}番目は、${name}さんです。`)
);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
