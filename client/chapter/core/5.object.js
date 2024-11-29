/* ------------------------------- 객체(Object) ------------------------------- */
/* --------------------------------- 객체 리터럴 --------------------------------- */
{
  // Object literal { key: value }
  // new Object()
  // Object.create();
  // key - 문자, 숫자, 문자열, 심볼
  // value - 원시값, 객체 (함수)
  let apple = {
    name: 'apple',
    'hello-bye': '✋',
    0: 1,
    ['hello-bye1']: '✋',
  };

  // 속성, 데이터에 접근하기 위해서는
  apple.name; // 마침표 표기법 dot notation
  console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
  apple['name'];

  // 속성 추가
  apple.emoji = '🍎';
  console.log(apple.emoji);
  console.log(apple['emoji']);

  // 속성 삭제
  delete apple.emoji;
  console.log(apple);
}
console.clear();

/* ---------------------------- 객체 동적으로 접근하기 ---------------------------- */
{
  const obj = {
    name: '엘리',
    age: 20,
  };
  // 코딩하는 시점에, 정적으로 접근이 확정됨
  obj.name;
  obj.age;

  // 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
  function getValue(obj, key) {
    return obj[key];
  }
  console.log(getValue(obj, 'name'));

  function addKey(obj, key, value) {
    obj[key] = value;
  }
  addKey(obj, 'job', 'engineer');
  console.log(obj);

  function deleteKey(obj, key) {
    delete object[key];
  }
}
// console.clear();
/* ------------------------------- 객체 축약 버전 ------------------------------- */
{
  const x = 0;
  const y = 0;
  const coordinate = { x, y }; //{ x: x, y: y };
  console.log(coordinate);

  function makeObj(name, age) {
    return {
      name,
      age,
    };
  }
}
console.clear();

/* ----------------------------------- 클래스 ---------------------------------- */
// 접근자 프로퍼티 (Accessor Property)
{
  class Student {
    constructor(firstName, lastName) {
      // 클래스의 생성자. 새로운 Student 객체를 생성할 때 호출됨.
      // 첫 번째 인수로 firstName, 두 번째 인수로 lastName을 받아 초기화.
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get fullName() {
      // fullName이라는 getter 메서드.
      // 객체의 fullName 프로퍼티에 접근할 때 호출되며,
      // this.firstName와 this.lastName을 조합하여 반환함.
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
      // fullName이라는 setter 메서드.
      // 객체의 fullName 프로퍼티에 값을 할당하려고 할 때 호출됨.
      // 할당된 값(value)을 콘솔에 출력만 하고, 실제로 firstName이나 lastName에 변경 사항을 적용하지는 않음.
      console.log(value);
    }
  }

  // 새로운 Student 객체를 생성.
  // 생성자의 매개변수로 '하늘'과 '이'를 전달하여 초기화.
  const student = new Student('하늘', '이');

  // Student 객체의 firstName 프로퍼티를 'HaNeul'로 변경.
  student.firstName = 'HaNeul';

  // 변경된 firstName을 콘솔에 출력.
  console.log(student.firstName); // 'HaNeul'

  // Student 객체 전체를 콘솔에 출력 (객체의 상태 확인).
  console.log(student);
  // 출력: Student { firstName: 'HaNeul', lastName: '이' }

  // fullName getter 메서드를 호출하여 fullName을 콘솔에 출력.
  console.log(student.fullName);
  // 출력: 'HaNeul 이'

  // fullName setter 메서드를 호출하여 값을 할당.
  // 하지만, 이 setter는 할당된 값을 로그로 출력하기만 하고 실제로는 firstName이나 lastName을 변경하지 않음.
  student.fullName = 'Lee Ha Neul';
  // 콘솔 출력: 'Lee Ha Neul'
}
console.clear();

// 상속
{
  class Animal {
    constructor(color) {
      this.color = color;
    }

    eat() {
      console.log('먹다!');
    }

    sleep() {
      console.log('잔다~');
    }
  }

  class Tiger extends Animal {}
  const tiger = new Tiger('노랑이');
  console.log(tiger);
  tiger.eat();
  tiger.sleep();

  class Dog extends Animal {
    constructor(color, ownerName) {
      super(color);
      this.ownerName = ownerName;
    }

    // 오버라이딩 overriding
    eat() {
      super.eat();
      console.log('강아지가 먹는다');
    }

    sleep() {
      super.sleep();
      console.log('누룽이 잔다~~~~');
    }
  }

  const dog = new Dog('누룽이', '하늘');
  console.log(dog);
  dog.eat();
  dog.sleep();
}
console.clear();

// 퀴즈1
{
  // 카운터 만들기
  // 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
  // Counter 클래스 만들기

  class Counter {
    // 1. private 필드 #value 선언
    //    Counter 클래스 내부에서만 사용할 수 있는 값으로 초기화될 변수
    #value;

    // 2. 생성자 (constructor)
    //    Counter 객체를 생성할 때 초기값을 설정
    constructor(startValue = 0) {
      // 초기값이 숫자가 아니거나 음수일 경우, #value를 0으로 설정
      if (isNaN(startValue) || startValue < 0) {
        this.#value = 0; // 잘못된 값 -> 기본값 0
      } else {
        this.#value = startValue; // 올바른 값 -> startValue로 초기화
      }
    }

    // 3. getter 메서드: value
    //    현재 #value 값을 외부에서 읽을 수 있도록 제공
    get value() {
      return this.#value; // private 필드 #value의 값을 반환
    }

    // 4. increment 메서드
    //    #value를 1 증가시키는 함수. 화살표 함수로 선언되어, this가 클래스 인스턴스를 가리킴
    increment = () => {
      this.#value++; // 현재 값에 1을 더함
    };
  }

  // 5. Counter 클래스의 인스턴스 생성
  const counter = new Counter(0); // 초기값: 0

  // 6. increment 메서드 호출
  //    현재 값을 1 증가 -> #value는 1
  counter.increment(); // 1

  // 7. increment 메서드 다시 호출
  //    현재 값을 1 증가 -> #value는 2
  counter.increment(); // 2

  // 8. getter로 현재 값을 출력
  //    #value 값인 2를 출력
  console.log(counter.value); // 2
}
console.clear();

// 퀴즈2
{
  // 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
  // 직원들의 정보: 이름, 부서이름, 한달 근무시간
  // 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
  // 정직원은 시간당 10000원
  // 파트타임 직원은 시간당 8000원

  class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
      this.name = name;
      this.department = department;
      this.hoursPerMonth = hoursPerMonth;
      this.payRate = payRate;
    }

    calculatePay() {
      return this.hoursPerMonth * this.payRate;
    }
  }

  class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
      super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
  }

  class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
      super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
  }

  const king = new FullTimeEmployee('킹', 's/w', 30);
  const bob = new PartTimeEmployee('밥', 's/w', 20);
  console.log(king.calculatePay());
  console.log(bob.calculatePay());
}
console.clear();

/* -------------------------------------------------------------------------- */
{
	const number = 123;
	console.log(number.toString());
}
