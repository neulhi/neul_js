/* ---------------------------- 빌트인 객체(built-in) ---------------------------- */
{
  // 래퍼 객체 (Wrapper Object)
  // 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
  const number = 123; // number 원시 타입
  // number 원시타입을 감싸고 있는 Number 객체로 감싸짐
  console.log(number.toString());
  console.log(number); // number 원시 타입

  console.clear();

  const text = '    text   '; // string 문자열 원시타입
  console.log(text);
  text.length; // String 객체
  console.log(text.trim());
}
console.clear();

/* -------------------------------------------------------------------------- */
{
  console.log(Math.round(Math.random() * 10 + 1));
}
console.clear();

/* -------------------------------------------------------------------------- */
{
  // const textObj = new String('Hello World!');

  // ? 1. 문자열의 모든 캐릭터를 하나씩 출력하라
  const text = 'Hello World!';

  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }

  // ? 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
  const ids = 'user1, user2, user3, user4';
  console.log(ids.split(','));

  // ? 3. 1초에 한번씩 시계를 (날짜 포함) 출력해보자
  const now = () => new Date().toLocaleString('ko-KR');

  const currentTime = () => console.log(now());

  // 1초마다 currentTime 호출
  const intervalTime = setInterval(currentTime, 1000);

  // 5초 후 인터벌 중지
  setTimeout(() => clearInterval(intervalTime), 5000);
}
