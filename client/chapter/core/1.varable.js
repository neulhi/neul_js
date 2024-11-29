// 원시타입은 값이 복사되어 전달됨
{
  let a = 1;
  let b = a; // 1
  b = 2;
  console.log(a); // 1
  console.log(b); // 2

  // 객체 타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
  let apple = {
    // 0x1234 -> 같은 메모리 주소
    name: '사과',
  };

  let orange = apple; // 0x1234 -> 같은 메모리 주소
  orange.name = '오렌지';
  console.log(apple);
  console.log(orange);
}

console.clear();

/* ------------------------------- 상수 변수 const ------------------------------ */
{
  // let 재할당이 가능
  let a = 1;
  a = 2;
  console.log(a); // 2

  // const 재할당이 불가능
  // 1. 상수
  // 2. 상수변수 또는 변수
  const text = 'hello';
  // text = 'hi'; 이렇게 하면 안됨!

  // 1. 상수
  const MAX_FRUITS = 5;

  // 2. 재할당 불가능한 상수변수 또는 변수
  const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
  };
  // apple = {};
  // 객체 타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
  // let -> 재할당 가능(Reassignable), 객체의 값 즉 안의 내용은 변경 가능(Mutable)
  // const -> 재할당 불가, 객체의 값 즉 안의 내용은 변경 가능
  console.log(apple);
  apple.name = 'orange';
  apple.display = '🍏';
  console.log(apple);
}

console.clear();

/* ----------------------------- 타입 확인 법(typeof) ---------------------------- */
{
  // typeof: 데이터 타입을 확인
  // 값을 타입 문자열로 반환
  let variable;
  console.log(typeof variable); // undefined

  variable = '';
  console.log(typeof variable); // string

  variable = 123; // <- 할당된 값에 따라 타입이 결정됨!
  console.log(typeof variable); // number

  variable = {};
  console.log(typeof variable); // object

  variable = function () {};
  console.log(typeof variable); // function

  variable = Symbol();
  console.log(typeof variable); // symbol

  console.log(typeof 123); // number
  console.log(typeof '123'); // string
}

console.clear();

/* ------------------------------ 변수 중요 포인트 ------------------------------ */
{
	/*
	변수(Variables)
	: 값을 저장하는 공간
	: 자료를 저장할 수 있는 이름이 주어진 기억장소

	변수 이름짓기(Naming Variables)
	: 저장된 값을 잘 나타낼 수 있는 의미있는 이름 
	: 구체적일 수록 좋다 -> 이 변수에는 어떤 값이 들어 있는지 알기 쉽게
	*/
	
}