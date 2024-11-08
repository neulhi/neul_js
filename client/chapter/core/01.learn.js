// const hello = '안녕하세요 \n 줄바꿈 햇다~';
// const hello2 = 11;

// console.log(hello);
// console.log(typeof hello);

/* -------------------------------------------------------------------------- */

// const 문자열합치기 = '안녕하세요? ' + '이하늘입니다.';

// console.log(문자열합치기);

/* -------------------------------------------------------------------------- */

// let a = NaN;

// console.log(typeof a);

// console.log(parseInt('3월') - 0);
// console.log(parseInt(10.5555555));
// console.log(Number('3월') - 0);

/* -------------------------------------------------------------------------- */

// console.log(1 + 2 + 3);
// 연산자 우선순위 표를 참고해 3 ** 2 + 1 을 27로 만들어 보세요.
// console.log(3 ** (2 + 1)); // 27

/* -------------------------------------------------------------------------- */

// console.log('&'.charCodeAt());

/* -------------------------------------------------------------------------- */

// ⭐전부 false 이것빼고 나머지는 다 true⭐
// console.log(Boolean(false));
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// console.log(Boolean(document.all)); // 이건 거의 안씀

// 다음 연산 결과가 true가 되게 만들어보세요. 연산자만 추가하거나 수정할 수 있습니다. 정답이 여러 개입니다.
// 5 + 4 + 3 === 27;

/*console.log(Boolean(
	!(5 + 4 + 3 === 27)
	)
);*/

// console.log(Boolean(
// 	5 + 4 + 3 !== 27
// 	)
// );

// console.log(Boolean(
// 	(5 + 4) * 3 === 27
// 	)
// );

// console.log(Boolean(
// 	5 + 4 + 3 != 27
// 	)
// );

// console.log(Boolean(
// 	5 + 4 * 3 !== 27
// 	)
// );

// console.log(Boolean(
// 	5 + 4 * 3 < 27
// 	)
// );

/* -------------------------------------------------------------------------- */

/*// 선언 매개변수(parameter) / 인자 => 매개변수도 변수다
function nickName(parameter) {
	console.log(parameter);
}
// 호출 인수(argument)
nickName('argument')
*/

// function a(w, x, y, z) {
// 	console.log(w, x, y, z);
// 	console.log(arguments);
// }

// a('Hello', 'Parameter', 'Argument')

/*function nickName(a) {
	console.log(a);
}
nickName(1);

function greet(name) {
	console.log("Hello, " + name);  // name은 매개변수
}

greet("Alice");  // "Alice"는 인수, "name"은 매개변수 
// Hello, Alice*/

/*function add(x, y) {
  return x + y; // x와 y의 합을 반환
}

console.log(add(5, 3)); // x와 y의 합을 콘솔에 출력

add(5, 3); //add 함수에 5와 3을 전달하여 호출*/

// 매개변수의 개수를 인수보다 적에 만들면 자동으로 무시된다.
/*function a(w, x) {
  console.log(w, x);
}

a('Hello', 'Prameter', 'Argument');*/

//화살표 함수
// const f = (x, y ,z) => {
//   return x * y * z;
// };

// console.log(f(2, 3, 4));

// {}(중괄호) 와 return 생략 가능
// const f = (x, y, z) => { return x * y * z; }

// const f = (x,y,z) => x * y * z;

// console.log(f(2, 3, 4));

/* -------------------------------------------------------------------------- */

/*console.log(typeof null); // object*/

/* -------------------------------------------------------------------------- */
// 변수(let) 선언하기

// let 변수명선언 = '할당';
// console.log(변수명선언);
// 메모리에 저장된 건 껐다 키면 사라진다
// 디스크에 저장된 건 기억 한다

// let total = 5000 + 8000 + 10000 + 9000;

// console.log(total);

// let numberOne = 135;
// let numberTwo = 248;
// let numberThree = 369;

// console.log(numberOne + numberTwo + numberThree);

/* -------------------------------------------------------------------------- */

// 변수 이름짓기

// 숫자로만, 숫자가 맨앞, 특수는자는 $_ 2가지만 가능, 띄어쓰기 대신 대문자(nickName 이런 식으로), 예약어 안됨

/* -------------------------------------------------------------------------- */

// 변수 수정하기

/*let change = '바꿔 봐';
console.log(change); // '바꿔 봐'

change = '바꿨다';
console.log(change); // '바꿧다'*/

// 의도적으로 비워둘 때는 null 추천

/*let number = 5;
console.log(number); // 5*/

/*number += 3; // number = number + 3;
console.log(number); // 8*/

/* -------------------------------------------------------------------------- */

// 상수(const) 선언하기

// const a = '값을 무조건 넣어야함';

// a, b 값 서로 바꿔보기

// let a = 5;
// let b = 3;
/*console.log(a); // 5
console.log(b); // 3*/

/*let temp = a; // a의 값을 잠깐 저장할 변수*/
/*console.log(temp); // 5*/

// a = b;
// b = temp;
/*console.log(a); // 3
console.log(b); // 5*/

/* -------------------------------------------------------------------------- */

// 조건문(if)

// if(조건식){
// 	동작문;
// }

// if(조건식){
// 	동작문1;
// 	동작문2;
// 	동작문3;
// }

// if(로그인한 사용자){
// 정보를 보여준다;
// }

/*let condition = true;
if (condition) {
	console.log('Hello, if!'); // Hello, if!
}*/

/*let value = '사과';
let condition = true;

if (condition) {
  value = '바나나';
}
console.log(value); // 바나나*/

/* -------------------------------------------------------------------------- */

// if문은 필수고 else if문은 if문과 else문(생략가능) 사이에 원하는 만큼 넣을 수 있다.

/*if (조건식) { // 조건이 참(true)인 값일 때 실행
  동작문;
} else {     // 조건이 거짓(false) 값일 때 실행
  동작문; 
}*/

/*let value = '사과';
let condition = false; // else 문이 실행됨*/

/*if (condition) {
  value = '바나나';
} else {
  value = '포도';
}
console.log(value); // 포도*/

// if (조건식) {
// 	동작문;
// } else if (조건식) {
// 	동작문;
// } else {
// 	동작문;
// }

// if (조건식) {
// 	동작문;
// } else if (조건식) {
// 	동작문;
// } else if (조건식) {
// 	동작문;
// }

/*const score = 90;

if (score >= 90) { // 90점 이상
	console.log('A+');
} else if (score < 90 && score >= 80 ) { // 90점 미만 80점 이상
	console.log('A');
} else if (score < 80 && score >= 70) { // 80점 미만 70점 이상
	console.log('B+');
} else if (score < 70 && score >= 60) { // 70점 미만 60점 이상
	console.log('B');
} else { // 60점 미만
	console.log('F');
}*/

/*const score = 80;

if (score >= 90) { // 90점 이상
	console.log('A+');
} else if (score >= 80 ) { // 90점 미만 80점 이상
	console.log('A');
} else if (score >= 70) { // 80점 미만 70점 이상
	console.log('B+');
} else if (score >= 60) { // 70점 미만 60점 이상
	console.log('B');
} else { // 60점 미만
	console.log('F');
}*/

// 중첩 if문

/*let first = true;
let second = false;

if (first && second) { // first 와 second 모두 true
  console.log('첫 번째 조건 충족!');
	console.log('두번째 조건 충족!');
} else if(first) {     // first만 ture
	console.log('첫 번째 조건 충족!');
  console.log('두번째 조건 불충족!');
} else {               // 둘 다 false
	console.log('첫번째 조건 불충족!');
}*/

/* -------------------------------------------------------------------------- */
// switch문

// switch (조건식) {
// 	case 비교조건식;
// 	동작문;
// }

// let value = 'A';

// switch (value) {
// 	case 'A' : console.log('A');
// }

