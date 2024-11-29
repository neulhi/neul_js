/* ----------------------------------- 연산자 ---------------------------------- */
{
  // 표현식 Expressions -> 값을 반환(값으로 평가 될 수 있는 문)
  /*
	리터럴 Literal -> 코드에서 값을 나타내는 표기법
	: 123, '123', true, {}, []

	템플릿 리터럴(Template Literal)
	`${}`

	함수 리터럴
	function() {} 

	빅인트 리터럴(n)
	n -> 123n

	바이너리 리터럴(0b)
	0b -> 0b101
	*/
}

/* -------------------------------------------------------------------------- */
{
  let b; // 선언문
  b = 2; // 표현식, 할당문

  let a = (b = 2);
  console.log(a);
}

/* ---------------------- 산술 연산자 (Arithmetic operators) --------------------- */
{
  // + 더하기
  // - 빼기
  // * 곱하기
  // / 나누기
  // % 나머지값
  // ** 지수 (거듭제곱)

  console.log(5 + 2);
  console.log(5 - 2);
  console.log(5 * 2);
  console.log(5 / 2);
  console.log(5 % 2);
  console.log(5 ** 2); // es7
  console.log(Math.pow(5, 2));

  // + 연산자 주의점!
  let text = '두개의' + '문자를';
  console.log(text);
  text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환됨
  console.log(text);
}

console.clear();

/* -------------------------- 단항연산자 Unary Operators ------------------------- */
{
  // + (양)
  // - (음)
  // ! (부정)
  let a = 5;
  a = -a; // -1 * 5
  console.log(a); // -5
  a = -a;
  console.log(a); // 5

  a = +a;
  console.log(a); // 5

  a = -a; // -5
  a = +a; // +(-5)
  console.log(a); // -5

  let boolean = true;
  console.log(boolean); // true
  console.log(!boolean); // false
  console.log(!!boolean); // true

  console.clear();

  // + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
  console.log(+false); // 0
  console.log(+null); // 0
  console.log(+''); // 0
  console.log(+true); // 1
  console.log(+'text'); // NaN
  console.log(+undefined); // NaN
  console.log(!!1); // ! 부정연산자
  // !! 값을 boolean 타입으로 변환함
}

console.clear();

/* ---------------------- 할당연산자 (Assignment operators) ---------------------- */
{
  let a = 1;
  a = a + 2;
  console.log(a);

  a += 2; // a = a + 2; 축약버전
  console.log(a);

  a -= 2;
  console.log(a);

  a *= 2;
  console.log(a);

  a /= 2;
  a %= 2;
  a **= 2;
}

console.clear();

/* --------------- 증가 & 감소 연산자 Increment & Decrement Operators ------------- */
{
  let a = 0;
  console.log(a);
  a++; // a = a + 1;
  console.log(a);
  a--; // a = a - 1;
  console.log(a);

  console.clear();
  // ⭐주의!⭐
  // a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
  // ++a 값을 먼저 증가하고, 필요한 연산을 함
  a = 0;
  console.log(a++); // 0
  console.log(a); // 1
  let b = a++;
  console.log(b); // 1
  console.log(a); // 2
}

console.clear();

/* ----------------- 대소 관계 비교 연산자 (Relational operators) ----------------- */
{
  // > 크다
  // < 작다
  // >= 크거나 같다
  // <= 작거나 같다
  console.log(2 > 3);
  console.log(2 < 3);
  console.log(3 < 2);
  console.log(3 > 2);
  console.log(3 <= 2);
  console.log(3 <= 3);
  console.log(3 >= 3);
  console.log(3 >= 2);
}

/* ------------------------------- 연산자 우선순위 ------------------------------- */
{
  let a = 2;
  let b = 3;
  let result = ((a + b) * 4) / 5;
  console.log(result); // 4
  result = a++ + b * 4;
  console.log(result); // 14
}

console.clear();

/* ------------------- 동등 비교 관계 연산자 (Equality operators) ----------------- */
{
  // == 값이 같음
  // != 값이 다름
  // === 값과 타입이 둘다 같음
  // !== 값과 타입이 다름
  console.log(2 == 2); // true
  console.log(2 != 2); // false
  console.log(2 != 3); // true
  console.log(2 == 3); // false
  console.log(2 == '2'); // true -> 자동으로 숫자 타입으로 형변환
  console.log(2 === '2'); // ✨ false 
  console.log(true == 1); // true
  console.log(true === 1); // false
  console.log(false == 0); // true
  console.log(false === 0); // false
  console.clear();

  const obj1 = {
    name: 'js',
  };

  const obj2 = {
    name: 'js',
  };

  console.log(obj1 == obj2); // false
  console.log(obj1 === obj2); // false
  console.log(obj1.name == obj2.name); // true
  console.log(obj1.name === obj2.name); // true

  let obj3 = obj2; // 참조 값이 같기 때문에 true
  console.log(obj3 == obj2); // true
  console.log(obj3 === obj2); // true
	console.log(obj2.name);
	obj3.name = 'JS';
	console.log(obj3.name); // JS
	console.log(obj2.name); // JS
	
	
	
}
