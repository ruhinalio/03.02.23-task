//1 ededden tek olana qeder reqemleri cemini cixmaq
// var a = prompt("ededi daxil edin");
// var cem = 0;

// for (var i = 0; i < a.length; i++) {
//   cem += +a[i];
// }
// var c = true;
// while (c) {
//   a -= cem;
//   if (a % 2 !== 0) {
//     c = false;
//     console.log(a);
//   }
// }
//================================================================================
// 2 ededin tersinin bolenlerini tap
// var a = prompt("ededi daxil edin").split("").reverse("").join("");
// var bolenler = "".split("");

// for (var i = 0; i <= a; i++) {
//   if (a % i == 0) {
//     bolenler.push(i);
//   }
// }
// console.log(bolenler);
//===================================================================================
// 3 daxil olan ededlerin ededi ortasini tapin
// var a = prompt("daxil edeceyniz ededlerin sayini yazin");
// var ededlerinCemi = 0;
// var ortalama = 0;
// for (var i = 0; i < a; i++) {
//   var b = prompt("ededleri daxil edin");
//   ededlerinCemi += +b;
//   ortalama = ededlerinCemi / a;
// }
// console.log(ortalama);
//======================================================
//4 daxil oolan ededden sonraki ilk sade ededi tapin
// var a = prompt("ededi daxil edin");
// var c = true;
// while (c) {
//   +a++;
//   let counter = 0;
//   for (var i = a; i < a; i++) {
//     if (a % i == 0) {
//       counter++;
//     }
//     if (counter == 2) {
//       c = false;
//       console.log(a);
//     }
//   }
// }
//=======================================================
//5. arraydaki reqemlerin cut olub olmadigina baxmag ucun
// var a = [2, 3, 4, 5, 6];
// for (var i = 0; i < a.length; i++) {
//   if (+a[i] % 2 == 0) {
//     console.log(`${a[i]} cut ededlerdir`);
//   } else {
//     console.log(`${a[i]} coxlugunda tek eded var`);
//   }
// }
//=======================================================
//6. array icerisindeki tek ededlerin cemini tapin
// var a = [2, 3, 4, 5, 6, 7, 8];
// var teklerinCemi = 0;
// for (var i = 0; i < a.length; i++) {
//   if (+a[i] % 2 !== 0) {
//     teklerinCemi = teklerinCemi + a[i];
//   }
// }
// console.log(teklerinCemi);
//====================================================
// 7.array icerisinde nece element oldugunu tapin
// var a = ('sallam').split('')
// var counter = a.length
// console.log(counter);
//======================================================
//8. arraydaki ededilerin ededi ortasini tapin
// var a = prompt("reqemler olan soz yazin");
// var counter = 0;
// var cem = 0;
// for (var i = 0; i < a.length; i++) {
//   if (a[i] % 1 == 0) {
//     counter++;
//     cem = cem + +a[i];
//   }
// }
// var ortalama = cem / counter;
// console.log(ortalama);
//9. array icerisinde a ile baslayan sozu tapin
// var a= ("cumleni daxil edin").split("")
