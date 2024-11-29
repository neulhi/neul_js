/* -------------------------------- function -------------------------------- */
{
  // !함수의 이름은 함수를 참조하고 있다.

  // 사용예제 1
  function sum(a, b) {
    console.log('function');
    return a + b;
  }
  const result = sum(1, 2);
  console.log(result);

  // 사용예제 2
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  let lastName = '김';
  let firstName = '지수';
  // let fullName = `${lastName} ${firstName}`;
  console.log(fullName(firstName, lastName));

  let lastName2 = '박';
  let firstName2 = '철수';
  console.log(fullName(firstName2, lastName2));
}

console.clear();

/* ---------------------------------함수와 메모리 ------------------------------- */
{
  function add(a, b) {
    return a + b;
  }
  const sum = add; // 참조(같은 메모리 주소)
  console.log(sum(1, 2));
  console.log(add(1, 2));
}

console.clear();

/* ---------------------------------- 반환이란? --------------------------------- */
{
  // return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
  function add(a, b) {
    // return a + b;
    return undefined;
  }

  const result = add(1, 2);
  console.log(result);

  console.clear();

  // return을 함수 중간에 하게 되면 함수가 종료됨
  // 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!

  function print(num) {
    if (num < 0) {
      return;
    }
    console.log(num);
  }
  print(11);
  print(-11);
}
console.clear();

/* --------------------------------- 함수의 인자 --------------------------------- */
{
  // 매개변수의 기본값은 무조건 undefined
  // 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
  // 매개변수 기본값 Default Parameters a = 1, b = 1

  function add(a = 1, b = 2) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
    return a + b;
  }
  add();

  // Rest 매개변수 Rest Parameters
  function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
  }
  sum(1, 2, 3, 4, 5, 6, 7, 8);
}
console.clear();

/* ---------------------------------- 함수표현식 --------------------------------- */
{
  // 함수 선언문 function name() { }
  // 함수 표현식 const name = function () { }

  let add = function (a, b) {
    return a + b;
  };
  console.log(add(1, 2));

  // 화살표 함수 const name = () => { }
  // add = (a, b) => {
  // 	return a + b
  // }
  add = (a, b) => a + b;
  console.log(add(1, 2));

  // IIFE (Immediately-Invoked Function Expressions)
  (function run() {
    console.log('😍');
  })();
}
console.clear();

/* ---------------------------------- 콜백함수 ---------------------------------- */
{
  /* 
		? 일급객체(first-class object) / 일급함수(first-class function)
		일반 객체처럼 모든 연산이 가능한 것 / 함수가 일반 객체처럼 모든 연산이 가능한 것
		1. 함수의 매개변수로 전달 가능
		2. 함수의 반환값으로 사용 가능
		3. 할당 명령문 가능
		4. 동일 비교 대상
	*/

  /* 
		? 고차함수(Higher-order function)
		1. 인자로 함수를 받거나(콜백함수) / input
		2. 함수를 반환하는 함수를 고차함수 / output
	*/

  // 콜백함수
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  // 전달된 action은 콜백함수이다.
  // 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
  // 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
  // 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
  function calculator(a, b, action) {
    if (a < 0 || b < 0) {
      return;
    }

    let result = action(a, b);
    console.log(result);
    return result;
  }

  calculator(-1, -1, add);
  calculator(1, 2, multiply);
}
console.clear();

/* ------------------------------- 함수 만들기 퀴즈 ------------------------------ */
{
  // 주어진 숫자 만큼 0부터 순회는 함수
  // 순회하면서 주어진 특정한 일을 수행해야 함
  // 5, 순회하는 숫자를 다 출력하고 싶음
  // 5, 순회하는 숫자를 두배값을 다 출력하고 싶음
  // function iterate(max, action)
  function iterate(max, action) {
    for (let i = 0; i < max; i++) {
      action(i);
    }
  }

  function log(num) {
    console.log(num);
  }

  function doubleAndLog(num) {
    console.log(num * 2);
  }

  iterate(3, log);
  iterate(3, doubleAndLog);

  // iterate(3, (num) => console.log(num));
  // iterate(3, (num) => console.log(num * 2));

  // setTimeout(() => {
  //   console.log('1초뒤 이 함수가 실행 됨!');
  // }, 1000);
}
console.clear();

/* ---------------------------- 불변성(immutability) --------------------------- */
{
  // 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다💩
  // 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
  // 원시값 - 값에 의한 복사
  // 객체값 - 참조에 의한 복사 (메모리주소)
	function display(num) {
		num = 5; // ❌
		console.log(num);
	}
	const value = 4;
	display(value);
	console.log(value);

	function displayObj(obj) {
		obj.name = 'Bob'; // ❌❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
		console.log(obj);
	}
	const ellie = { name: 'Ellie' };
	displayObj(ellie);
	console.log(ellie);
	
	function changeName(obj) { // 이름부터 변경하는 느낌을 주도록!
		return { ...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트 만들기!
	}
}
