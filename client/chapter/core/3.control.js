/* ------------------------ 조건문 Conditional Statement ----------------------- */
{
  // if(조건) { }
  // if(조건) { } else {}
  // if(조건1) { } else if(조건2) {} else {}

  let fruit = 'orange';
  if (fruit === 'apple') {
    console.log('사과');
  } else if (fruit === 'orange') {
    console.log('오렌지');
  } else {
    console.log('👻');
  }

  if (2 < 1) {
    console.log('출력되면 안됨!');
  }
}

console.clear();

/* ---------------------- 삼항 조건 연산자 Ternary Operator ---------------------- */
{
  // 조건식 ? 참인경우 : 거짓인경우
  let fruit = 'apple';
  if (fruit === 'apple') {
    console.log('사과');
  } else if (fruit === 'orange') {
    console.log('오렌지');
  } else {
    console.log('👻');
  }
  fruit === 'apple' ? console.log('사과') : console.log('👻');

  let emoji = fruit === 'apple' ? '🍎' : '👻';
  console.log(emoji);
}

/* ----------------------------------- 퀴즈 ----------------------------------- */
{
  let num = 2;
  // num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
  // if문
  if (num % 2 === 0) {
    console.log('👍');
  } else if (!num % 2 === 0) {
    console.log('👎');
  }

  // 삼항 조건 연산자
  num % 2 === 0 ? console.log('👍') : console.log('👎');
  let emoji = num % 2 !== 0 ? '👍' : '👎';
  console.log(emoji);
}

console.clear();

/* ------------------------ 조건문 Conditional Statement ----------------------- */
{
  // if else if else if else if ... else <- if문 예시
  /*
		switch
  : 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
	*/

  let day = 10; // 0:월요일, 1: 화요일... 6: 일요일
  let dayName;
  if (day === 0) {
    dayName = '월요일';
  } else if (day === 1) {
    dayName = '화요일';
  } else if (day === 2) {
    dayName = '수요일';
  } else if (day === 3) {
    dayName = '목요일';
  } else if (day === 4) {
    dayName = '금요일';
  } else if (day === 5) {
    dayName = '토요일';
  } else if (day === 6) {
    dayName = '일요일';
  }

  switch (day) {
    case 0:
      dayName = '월요일';
      break;
    case 1:
      dayName = '화요일';
      break;
    case 2:
      dayName = '수요일';
      break;
    case 3:
      dayName = '목요일';
      break;
    case 4:
      dayName = '금요일';
      break;
    case 5:
      dayName = '토요일';
      break;
    case 6:
      dayName = '일요일';
      break;
    default:
      console.log('해당하는 요일이 없음!');
  }
  console.log(dayName);

  let condition = 'good'; // okay, good  -> 좋음!, bad -> 나쁨!
  let text;
  switch (condition) {
    case 'okay':
    case 'good':
      text = '좋음!';
      break;
    case 'bad':
      text = '나쁨!';
      break;
  }
  console.log(text);
}

console.clear();

/* --------------------------- 반복문 Loop Statement --------------------------- */
{
  // for(변수선언문; 조건식; 증감식) { }
  // 실행순서:
  // 1. 변수선언문
  // 2. 조건식의 값이 참이면  { } 코드블럭을 수행
  // 3. 증감식을 수행
  // 4. 조건식이 거짓이 될때까지 2번과 3번을 반복함

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(i, j);
    }
  }

  // 무한루프 💩
  // for (;;) {
  // }

  console.clear();

  // 반복문 제어: continue, break;
  for (let i = 0; i < 20; i++) {
    if (i === 10) {
      continue;
      console.log('i가 드디어 10이 되었다!');
      break;
    }
    console.log(i);
  }
}

console.clear();

/* --------------------------------- while문 --------------------------------- */
{
  // while(조건) {}
  // 조건이 false가 될때까지 {} 코드를 반복 실행

  let num = 5;
  while (num >= 0) {
    console.log(num);
    num--;
  }

  let isActive = false;
  let i = 0;
  while (isActive) {
    console.log('아직 살아있다!');
    if (i === 100) {
      break;
    }
    i++;
  }

  do {
    console.log('do..while 아직 살아있다!');
  } while (isActive);
}

console.clear();

/* ------------------------- 논리연산자 Logical operator ------------------------- */
{
  // && 그리고
  // || 또는
  // ! 부정(단항연산자에서 온것)
  // !! 불리언값으로 변환 (단항연산자 응용버전)

  let num = 8;
  if (num >= 0 || num > 20) {
    console.log('👍');
  }
  if (num != 9) {
    console.log('👎');
  }

  console.log(true && true); // true
  console.log(true && false); // false
  console.log(false && true); // false
  console.log(false && false); // false

  console.log(true || true); // true
  console.log(true || false); // true
  console.log(false || true); // true
  console.log(false || false); // false

  console.log(!'text'); // false
  console.log(!!'text'); // true
}
