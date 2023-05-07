/*
Level 2.7
#1
'a bc def ghij'
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

'A BC DEF ghij'

Dana is not defined:

'a bc def ghij'
Convert to upper case all substrings in which the number of letters is less than or equal to three. In our case, the following will happen:

'A BC DEF ghij'
*/
((word) => {
  console.log(
    word.replace(/[a-zA-Z]{1,3}\s/g, function (match) {
      return match.toLocaleUpperCase();
    })
  );
})("a bc def ghij");
/*
#2
Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
Given a symbol. collect, in some register this character - in open or closed.
*/
((letter) => {
  if (letter === letter.toUpperCase()) {
    console.log("big");
  } else {
    console.log("small");
  }
})("j");
/*
No. 3
Дано некоторое число, например, такое:

123789
Удалите из этого числа все нечетные цифры. 
В нашем случае получится такой результат:

28
Given a Norwegian number, for example:

123789
Remove all odd digits from this number. In our case, we get the following result:

28
*/
((word) => {
  console.log(word.match(/[^1,3,5,7,9]/g).join(""));
})("123789");
