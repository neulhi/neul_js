const data = [
  {
    color: ['#ff6a00', '#720400'],
    name: 'EMBER',
    alt: '엠버 포스터',
  },
  {
    color: ['#1ca9f8', '#000054'],
    name: 'WADE',
    alt: '웨이드 포스터',
  },
  {
    color: ['#98d00f', '#002906'],
    name: 'CLOD',
    alt: '클로드 포스터',
  },
  {
    color: ['#d968e6', '#30003c'],
    name: 'GALE',
    alt: '게일 포스터',
  },
];

// 1. DOM 요소 선택
// 웹 페이지에서 자주 사용하는 요소들을 선택하여 변수에 저장합니다.
const body = document.body; // 전체 페이지 배경을 변경하기 위해 body 요소 선택
const container = document.querySelector('.container'); // 메인 컨테이너 요소 선택
const nickNameElement = document.querySelector('.nickName'); // 닉네임 텍스트 요소 선택
const visualImage = document.querySelector('.visual img'); // 메인 이미지 요소 선택
const navList = document.querySelector('.nav ul'); // 썸네일 목록 요소 선택

// 2. 배경색 변경 함수
// 선택된 데이터의 색상 정보를 가져와 컨테이너와 body의 배경색을 변경합니다.
function setBgColor(index) {
  // 선택된 데이터의 색상 배열에서 색상을 추출
  const [colorA, colorB = '#000'] = data[index].color;

  // 배경에 적용할 그라데이션 문자열 생성
  const gradient = `linear-gradient(to bottom, ${colorA}, ${colorB})`;

  // 컨테이너와 body의 배경에 동일한 그라데이션 적용
  container.style.background = gradient;
  body.style.background = gradient;
}

// 3. 메인 이미지 변경 함수
// 선택된 데이터의 이미지 경로와 설명(alt)을 업데이트합니다.
function setImage(index) {
  visualImage.src = `./assets/${data[index].name.toLowerCase()}.jpeg`; // 이미지 경로 설정
  visualImage.alt = data[index].alt; // alt 속성 업데이트
}

// 4. 닉네임 텍스트 변경 함수
// 상단 닉네임 텍스트를 선택된 데이터의 이름으로 변경합니다.
function setNameText(index) {
  nickNameElement.textContent = data[index].name; // 텍스트 업데이트
}

// 5. 이벤트 처리 함수
// 썸네일 클릭 이벤트를 처리하여 UI를 업데이트합니다.
function handleThumbnailClick(event) {
  // 클릭된 요소 중 button과 li를 찾습니다.
  const button = event.target.closest('button'); // 클릭된 button 요소 찾기
  const listItem = event.target.closest('li'); // 클릭된 li 요소 찾기

  // 유효한 button과 li가 클릭된 경우에만 실행
  if (button && listItem) {
    // li의 data-index 값을 기반으로 데이터 배열의 인덱스를 계산
    const index = parseInt(listItem.dataset.index, 10) - 1;

    // 모든 li에서 is-active 클래스를 제거
    navList
      .querySelectorAll('li')
      .forEach((li) => li.classList.remove('is-active'));

    // 클릭된 li에 is-active 클래스 추가
    listItem.classList.add('is-active');

    // 선택된 데이터 기반으로 UI 업데이트
    setBgColor(index); // 배경색 변경
    setImage(index); // 메인 이미지 변경
    setNameText(index); // 닉네임 텍스트 변경
  }
}

// 6. 이벤트 위임 설정
// navList에 클릭 이벤트를 추가하여 이벤트 위임 방식으로 처리
navList.addEventListener('click', handleThumbnailClick);
