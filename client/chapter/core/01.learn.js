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
// ()소괄호 조건식의 값이 case의 비교 조건식 값 과 일치(===)하면 해당 동작문이 실행된다.
// 보통 조건식에는 변수를 넣고 비교조건식에는 비교할 값을 넣는다.
// break문을 적지 않으면 일치한 조건부터 모두 실행된다.
// case는 else if와 비슷하고 default는 else와 비슷하다고 할수 있다. 조건이 모두 일치 하지않으면 default문이 실행 된다.
// 실제로 if문이 === 연산자만 사용하는 경우 switch문으로 쉽게 대체 가능하다. 다른점은 for문의 else와 다르게 default는 어디에나 위치할 수 있다는거.

// switch (조건식) {
// 	case 비교조건식;
// 	동작문;
// }

// let value = 'A';

// switch (value) {
// 	default:
//     console.log('default는 어디에나 위치할 수 있다.');
//     break;
//   case 'A':
//     console.log('A');
//     break;
//   case 'B':
//     console.log('B');
// 		break;
//   case 'C':
//     console.log('C');
// 		break;
// }

/* -------------------------------------------------------------------------- */

// 조건부 연산자(삼항 연산자) ?와: 같이 사용
// 조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식

/*let value = 5 > 0 ? '참입니다.' : '거짓입니다.';
console.log(value); // '참입니다'*/

// let condition = true;
/*let condition = false;
let value = condition ? '참' : '거짓';

if (condition) {
  value = '참';
} else {
  value = '거짓';
}
 
console.log(value); // '거짓'*/

// let condition1 = false;
// let condition2 = true;

// let value = condition1 ? (condition2 ? '둘 다 참' : 'condition1만 참') : 'condition1 이 거짓';

// console.log(value);

// let cond = true;
// let value = cond ? '참' : '거짓';
// console.log(value);

// let cond = true;
// let value = '';

// switch (cond) {
//   case true:
//     value = '참';
//     break;

//   case false:
//     value = '거짓';
//     break;
// }
// console.log(value);

// let cond = true;
// let value = '';

// if (cond) {
//   value = '참';
// } else {
//   value = '거짓';
// }
// console.log(value);

/* -------------------------------------------------------------------------- */

// 반복문(while)
// while (조건식) {
// 	동작문;
// }

// while (조건식) {
// 	동작문1;
// 	동작문2;
// 	동작문3;
// }

/*let i = 1;

while (i <= 10) {
  console.log('Hello, while!');
  // i = i + 1;
  // i += 1;
  i++;
}*/

// let i = 0;

// while (i < 10) {
//   console.log('Hello, while!');
//   i++;
// }

/* -------------------------------------------------------------------------- */
// 반복문(for)
// for (시작; 조건식; 종료식) {
// 	동작문;
// }

// for (let i = 0; i < 10; i++) {
//   console.log('Hello, for!');
// }

// let i = 0;
// while (i < 10) {
//   console.log(i + 1);
//   i++;
// }

// for(let i = 0; i < 10; i++) {
// 	console.log(i + 1);
// }

// for(let i = 0; i < 10; i = i + 2 ) {
// 	console.log(i + 1);
// }

/* -------------------------------------------------------------------------- */

// break문으로 반복문 멈추기
// let i = 0;
// while (true) {
//   if (i === 5) {
//     break;
//   }
//   i++;
// }
// console.log(i);

// for (let i = 0; ; i++) {
//   if (i === 6) break;
// 	console.log(i);
// }

// continue문으로 코드 실행 건너뛰기
// let i = 0;
// while (i < 10) { // 홀수만 console.log
// 	i++;
// 	if (i % 2 === 0) { // 짝수만
// 		continue // 건너뛰기
// 	}
// 	console.log(i);
// }

// let i = 0;
// while (i < 10) { // 짝수만 console.log
// 	i++;
// 	if (i % 2 !== 0) { // 홀수만
// 		continue // 건너뛰기
// 	}
// 	console.log(i);
// }

/* -------------------------------------------------------------------------- */

// 중첩된 반복문 사용하기
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   if (i % 2 === 0) continue;  // i가 짝수면 건너뛰기 (0,2,4 제외)
//   for (let j = 0; j < 5; j++) {
//     if (j % 2 === 0) continue; // j가 짝수면 건너뛰기 (0,2,4 제외)
//     for (let k = 0; k < 5; k++) {
//       if (k % 2 === 0) continue; // k가 짝수면 건너뛰기 (0,2,4 제외)
//       console.log(`i: ${i}, j: ${j}, k: ${k}`); // 모두 홀수일 때만 출력
//     }
//   }
// }

// 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보세요. continue문을 사용하세요.
// 힌트 : 짝수인지 아닌지는 % 연산자를 사용하면 알 수 있습니다.

// for (let i = 0; i < 10; i++) { // i는 0부터 9까지 반복
//   if (i % 2 === 0) continue;  // i가 짝수라면 다음 i로 건너뜁니다.
//   for (let j = 0; j < 10; j++) { // j도 0부터 9까지 반복
//     if (j % 2 === 0) continue; // j가 짝수라면 다음 j로 건너뜁니다.
//     console.log(i, '*', j, '=', i * j); // i와 j가 모두 홀수일 때만 i * j를 출력합니다.
//   }
// }

// for (let i = 0; i < 10; i++) { // i는 0부터 9까지 반복
//   for (let j = 0; j < 10; j++) { // j도 0부터 9까지 반복
//     if (i % 2 === 0 || j % 2 === 0) continue; // i 또는 j가 짝수라면, 현재 반복을 건너뜁니다.
//     console.log(i, '*', j, '=', i * j); // i와 j가 모두 홀수일 때만 i * j를 출력합니다.
//   }
// }

// 별찍기
// *
// **
// ***
// ****
// *****
// for (let i = 0; i < 5; i++) {
//   console.log('*'.repeat(i + 1));
// }

// 별찍기
// *****
// ****
// ***
// **
// *
// for (let i = 5; i >= 1; i--) {
//   console.log('*'.repeat(i));
// }

// for (let i = 0; i < 5; i++) {
//   console.log('*'.repeat(5 - i));
// }

// 별찍기
// *
// ***
// *****
// *******
// *********
// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log('*'.repeat(i + 1));
// }

// 별찍기
// *********
// *******
// *****
// ***
// *
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log('*'.repeat(10 - i));
// }

// 별찍기
//  *****
//   ****
//    ***
//      *
// for (let i = 0; i < 5; i++) {
//   console.log(' '.repeat(i + 1) + '*'.repeat(5 - i));
// }

// 별찍기
//      *
//    ***
//   ****
//  *****
// for (let i = 0; i < 5; i++) {
// 	console.log(' '.repeat(5 - i) + '*'.repeat(i + 1))
// }

// 별찍기
//     *
//    ***
//   *****
//  *******
// **********
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue; // i가 짝수일 때는 건너뛰기
//   console.log(' '.repeat(5 - i / 2) + '*'.repeat(i));
// }

/* -------------------------------------------------------------------------- */

// 객체(object)
// 객체는 자료형의 일종으로 다양한 값을 모아둔 또 다른 값이다.
// 객체(object)의 종류는 크게 배열(array), 함수(function), 배열이나 함수가 아닌 객체로 나눌 수 있다.

// 배열(array)
// 자릿수가 0 부터 시작한다.
// 프로그래밍에서는 자릿수를 인덱스(index)라고 한다.
// 배열 안에 다른 배열이나 변수를 넣을 수도 있다.

// const fruit = ['사과', '오렌지', '배', '딸기'];
// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);

// const arrayOfArray = [[1, 2, 3],[4, 5]];
// console.log(arrayOfArray[0]); // [1, 2, 3]
// const a = 10;
// const b = 20;
// const variableArray = [a, b, 30]
// console.log(variableArray); // [10, 20, 30]
// console.log(variableArray[1]); //20 (b의 값)

// 배열 내부의 값은 중독되어도 되고, 아무 값이 없는 배열도 만들 수 있다.
// 배열 뒤에.length를 하면 배열이 개수를 셀 수 있다.
// 배열의 마지막 요소는 배열 뒤에.length - 1를 하면 찾을 수 있다.

// const everything = ['사과', 1, undefined, true, '배열', null];
// const duplicated = ['가', '가', '가', '가', '가'];
// const empty = [];
// console.log(everything);
// console.log(everything.length);
// console.log(everything[everything.length - 1]);
// console.log(duplicated);
// console.log(duplicated.length);
// console.log(empty);
// console.log(empty.length);

/* -------------------------------------------------------------------------- */

// class문법 연습
/*class Product {  // 추상화
  name = '';
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get Price() {
    return this.price + '만원';
  }

	set Price(price) {
		if (price < 0) {
			throw Error ('마이너스 값 안됨')
		}
		this.price = price;
	}
} // 캡슐화

class TV extends Product { // 상속  
  size = '';

  constructor(name, price, size) { // 생성자
    super(name, price);
    this.size = size;
  }
}

let tv1 = new TV('티비1', 100, '32inch');

console.log(tv1); // tv1 함수 본체가 나옴
console.log(tv1.Price); // 100만원
console.log(tv1.Price = 1000); // 1000으로 변경
console.log(tv1.Price); // 1000만원

class User {
  #password;

  constructor(userID, userPW) {
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw) {
    return 'hashCODE' + pw + '소금챱챱';
  }

	checkPassword(pw) {
		return this.#password === this.hashPassword(pw);
	}
}
const user = new User('tiger', 'hello123');
console.log(user);*/

/* -------------------------------------------------------------------------- */

// this는 함수가 호출될때 결정이 된다.
/*const car = {
  name: 'KIA',
  getName: function () {
    console.log('car getName', this);
  },
};

car.getName(); // 'car getName', car 객체 (this는 car 객체를 참조)

const globalCar = car.getName;
globalCar(); // 'car getName', window 객체 (this는 전역 객체를 참조)

const car2 = {
  name: 'hyundai',
  getName: car.getName,
};

// car2.getName(); // 'car getName', car2 객체 (this는 car2 객체를 참조)

const bindGetname = car2.getName.bind(car); // this를 car 객체로 고정
bindGetname(); // car 객체가 나옴

const btn = document.getElementById('button');
btn.addEventListener('click', car.getName); // btn이 호출해서 this는 btn요소 이다. -> <button id="button">this는 누굴까?</button>*/

/*const testCar = {
  name: 'benz',

  // getName 메서드: `testCar` 객체의 `name` 속성을 출력하고,
  // 내부에 정의된 `innerFunc` 함수를 호출합니다.
  getName: function () {
    console.log('getName', this.name); // 여기서 `this`는 `testCar` 객체를 참조하므로 `benz` 출력

    // innerFunc 함수: getName 메서드 내에서 정의된 일반 함수입니다.
    // 일반 함수 호출로 사용되기 때문에 `this`는 전역 객체(`window` 객체)를 참조합니다.
    const innerFunc = function () { // 화살표 함수로 바꾸면 상위 스코프의 `this`를 참조해서 `this`는 `testCar` 객체를 참조하므로 `benz` 출력
      console.log('innerFunc', this.name); // 여기서 `this`는 전역 객체를 참조하므로 `undefined` 출력 (strict 모드에서는 에러)
    };
    
    innerFunc(); // innerFunc 호출 시 `this`는 전역 객체를 참조
  }
};

testCar.getName();*/

// const ageTest = {
//   unit: '살',
//   ageList: [10, 20, 30],

//   getAgeList: function () {
//     const result = this.ageList.map(function (age) {
//       return age + this.unit;
//     });

//     console.log(result);
//   },
// };
// ageTest.getAgeList();

// const ageTest_arrow = {
//   unit: '살',
//   ageList: [10, 20, 30],

//   getAgeList: function () {
//     const result = this.ageList.map((age) => {
//       return age + this.unit;
//     });

//     console.log(result);
//   },
// };
// ageTest_arrow.getAgeList();

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

// const _forEach = (f, i) => {
//   for (const a of i) {
//     f(a);
//   }
// };

// _forEach((item) => {console.log(item);}, products);

// products.forEach((a) => {
//   console.log(a);
// });

// for (const a of products) {
// 	console.log(a);
// }

// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

// array1.forEach((element, index) => console.log(index));
// array1.forEach((e, i, arr) => console.log(arr[0]));

// const _map = (f, i) => {
//   const arr = [];

//   for (const a of i) {
//     arr.push(f(a));
//   }

//   return arr;
// };

// const newMap = _map((item) => { return item.price; }, products);
// console.log(newMap);

// const _filter = (f, i) => {
//   const arr = [];

//   for (const a of i) {
//     if (f(a)) {
//       arr.push(a);
//     }
//   }

//   return arr;
// };

// const product = _filter((item) => { return item.price < 15000; }, products);
// console.log(product);

// const _reduce = (f, acc, i) => {
//   if (!i) {
//     i = acc;
//     acc = i.shift();
//   }

//   for (const a of i) {
//     acc = f(acc, a);
//   }

//   return acc;
// };

// const t = _reduce((acc, cur) => { return acc + cur.price; }, products);
// console.log(t);

// const add = (a, b) => a + b;

// console.log(
//   _reduce(
//     add,
//     _map(
//       (p) => p.price,
//       _filter((p) => p.price < 20000, products)
//     )
//   )
// );

// currying function
// reduce,
// add,
// map,
// filter,
// log(products)

/* -------------------------------------------------------------------------- */

// generator function -> function* 별표(*)붙여서 사용
// 호출 시에만 생산하기 때문에 무한루프에 빠지지 않는다
// 1. 일관된 반복 동작 제공(for..of)
// 2. 커스텀 반복 제어 가능(내가 필요한 만큼)
// 3. 지연 계산 (고효율 반복)⭐
// 4. 무한 시퀀스 생성(무한대의 값 생성)⭐
// 5. 비동기 반복 작업
// 6. 다양한 데이터 소스 통합(Map, Set)

/*	function* gen() {
		yield 1;
		yield 2;
		yield 3;
	}
	
	const _gen = gen();
	console.log(_gen);
	console.log(_gen.next());
	console.log(_gen.next());
	
	function* idGenerator() { // 호출 시에만 생산하기 때문에 무한루프에 빠지지 않는다 
		while (true) {
			yield `user=${crypto.randomUUID()}`;
		}
	}
	
	const id = idGenerator();
	console.log(id);
	console.log(id.next().value);
	console.log(id.next().value);
	console.log(id.next().value);
	console.log(id.next().value);
	*/

/* -------------------------------------------------------------------------- */

// reduce
// Q9. compute students' average score
// class Student {
//   constructor(name, age, enrolled, score) {
//     this.name = name;
//     this.age = age;
//     this.enrolled = enrolled;
//     this.score = score;
//   }
// }

// const students = [
//   new Student('A', 29, true, 45),
//   new Student('B', 28, false, 80),
//   new Student('C', 30, true, 90),
//   new Student('D', 40, false, 66),
//   new Student('E', 18, true, 88),
// ];

// {
// 	const result = students.reduce((prev, curr) =>{
// 		console.log('------------');
// 		console.log(prev);
// 		console.log(curr);
// 		return prev + curr.score;
// 	},0);
// 	console.log(result / students.length);
// }

/* -------------------------------------------------------------------------- */

// 구조 분해 할당 (Destructuring assignment)

{
  const student = {
    name: 'Anna',
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['🐶', '😸'];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  const [first, second] = animals;
  console.log(first, second);
}

/* -------------------------------------------------------------------------- */

// Spread syntax -> 참조 복사 (메모리 주소가 같음)
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🥭', '🍎'];
  const fruits2 = ['🍇', '🍌'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge -> key가 같으면 마지막 값으로 덮어 씌운다.
  const dog1 = { dog: '🐕' };
  const dog2 = { dog: '🐶' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

console.clear();

/* -------------------------------------------------------------------------- */
// Default parameters -> 파라미터 기본값 설정
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }

  // ✨
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
}

console.clear();

/* -------------------------------------------------------------------------- */
// Ternary Operator 삼항 연산자

{
  const isCat = true;

  // 💩
  {
    let component;
    if (isCat) {
      component = '😸';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? '😸' : '🐶';
    console.log(component);
    console.log(isCat ? '😸' : '🐶');
  }
  console.clear();
}

/* -------------------------------------------------------------------------- */
// Template Literals
{
  const weather = '🌤️';
  const temperature = '16ºC';

  // 💩
  {
    console.log(
      'Today weather is ' + weather + ' and temperature is ' + temperature + '.'
    );
  }

  // ✨
  {
    console.log(
      `Today weather is ${weather} and temperature is ${temperature}.`
    );
  }
  console.clear();
}

/* -------------------------------------------------------------------------- */
// Optional chaining (ES11)
{
  const person1 = {
    name: 'HN',
    job: {
      title: 'Frontend Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  // 💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1); // Bob
    // printManager(person2); // Error
  }

  // 💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
  console.clear();
}

/* -------------------------------------------------------------------------- */
// Nullish Coalescing Operator (ES11)
{
  // Logical OR operator
  // false : false, '', 0, -0, NaN, undefined, null
  {
    const name = 'HN';
    const userName = name || 'Guset';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guset';
    console.log(userName);
  }

  // 💩
  {
    const name = '';
    const userName = name || 'Guset';
    console.log(userName);

    const num = 0;
    const message = num || 'undefined';
    console.log(message);
  }

  // ✨ Nullish Coalescing Operator (ES11) -> 값이 있으면 반환
  {
    const name = '';
    const userName = name ?? 'Guset';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
  }
	console.clear();
}
