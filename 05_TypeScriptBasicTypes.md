#  TypeScript 기본자료형 

- TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- 사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개짐
- JavaScript 기본 자료형을 포함 (superset)
  + ECMAScript 표준에 따른 기본 자료형은 6가지
    >Boolean
    >Number
    >String
    >Null
    >Undefined
    >Symbol (ECMAScript 6 에 추가)
    >Array : object 형
  + 프로그래밍을 도울 몇가지 타입이 더 제공 됨
    >Any
    >Void
    >Never
    >Enum
    >Tuple : object 형

### Primitive Type 
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브 형의 내장 함수가 사용가능한 것은 자바스크립트 처리 방식 덕분
- ``` ts
  let name = 'mark';
  name.toString(); 
  ```

### literal 
- 값 자체가 변하지 않는 값을 의미 
- 그 자체가 값이자 그릇
- cf) 상수 : 상수를 가리키는 포인터가 고정이라는 개념
- ```ts 
    35; // number 리터럴
    'mark' // string 리터럴
    true // boolean 리터럴
    {
        name: 'mark',
        age: 35
    } // object 리터럴
    ``` 

### Boolean / boolean 
- 가장 기본적인 데이터타입 
- 단순 true / false 값 
- JS / TS 에서 'boolean'이라고 부름 
- 권장은 `boolean`
  - boolean : 프리미터 타입의 불린
  - Boolean : ref object의 생성자로부터의 불린 
- ``` ts 
    let isDone: boolean = false;
    typeof isDone === 'boolean' // true

    // Type 'boolean' is assignable to type 'Boolean'.
    let isOk: Boolean = true;

    // Type 'Boolean' is not assignable to type 'boolean'.
    // 'boolean' is a primitive, but 'Boolean' is a wrapper object.
    // Prefer using 'boolean' when possible.
    let isNotOk: boolean = new Boolean(true);
    ```

###  Number / number 
- JS 와 같이, TS 의 모든 숫자는 부동 소수점 값
- TS는 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수 지원
- ```ts 
    let decimal: number = 6; // 10진수 리터럴

    let hex: number = 0xf00d; // 16진수 리터럴

    let binary: number = 0b1010; // 2진수 리터럴

    let octal: number = 0o744; // 8진수 리터럴
    ``` 

### String / string 
- 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 `string` 형식을 사용
- JS 와 마찬가지로, TS 또한 문자열 데이터를 둘러싸기 위해  `"`, `'` 사용


###  Template String 
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick (= backquote) 기호에 둘러쌓여 있음
- 포함된 표현식은 `${ expr }` 와 같은 형태로 사용
- ``` ts
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;

    let sentence: string = `Hello, my name is ${ fullName }.

    I'll be ${ age + 1 } years old next month.`;

    // template string 을 사용하지 않을 경우
    let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
        "I'll be " + (age + 1) + " years old next month.";
    ```

###  Undefined & Null 
- TypeScript 에서 'undefined' 와 'null' 은 실제로 각각 'undefined' 와 'null' 이라는 고유한 타입을 가짐
- 'void' 와 마찬가지로, undefined 와 null 은 그 자체로는 무쓸모
- 둘다 소문자만 존재
- ```ts 
    // 이 변수들에 할당할 수 있는 것들은 거의 없다.
    let u: undefined = undefined;
    let n: null = null;
    ```

### undefined & null are subtypes of all other types 
- 기본 설정
- number 에 null 또는 undefined 를 할당 할 수 있다는 의미
- 그러나, 컴파일 옵션에서 `--strictNullChecks`사용 하면
- null 과 undefined 는 void나 자기 자신에게만 할당할 수 있음
- 이 경우, null 과 undefined 를 할당할 수 있게 하려면 
- union type 을 이용해야 함
- ``` ts 
    let name: string = null;
    let age: number = undefined;

    // strictNullChecks => true
    // Type 'null' is not assignable to type 'string'.
    let name: string = null; // (X)

    // null => null || void, 
    // undefined => undefined || void
    // Type 'null' != assignable to type 'undefined'
    let u: undefined = null; // (X)

    let v: void = undefined; // (O)

    let union: string | null | undefined = 'str'; 
    ``` 

### null in JavaScript 
- null 이라는 값으로 할당된 것을 null 이라고 함
- 무언가가 있는데, 사용할 준비가 덜 된 상태.
- null 타입은 null 이라는 값만 가질 수 있음
- typeof(null) = object
- ``` ts 
  let n: null = null;
  console.log(n); // null
  console.log(typeof n); // object
    ``` 

### undefined in JavaScript 
- 값을 할당하지 않은 변수는 undefined 라는 값을 가짐
- 무언가가 아예 준비가 안된 상태
- object의 property가 없을 때도 undefined
- typeof(객체) = undefined
- ``` ts 
  let u: undefined = undefined;
  console.log(u); // undefined
  console.log(typeof u); // undefined
  ``` 

### void 
- 타입이 없는 상태 
- `any` 와 반대의미 
- `Void`는 없음. 소문자!
- 주로 함수 리턴이 없을 때 사용, 그 외에는 사용 할 일이 없음 
- ``` ts
  function returnVoid(message): void {
    console.log(message);
  }

  returnVoid('리턴이 없다');```

### Any 
- 어떤 타입이어도 상관없음 
- 최대한 쓰지 않는 것이 핵심 
- 왜냐면, 컴파일 타임에 타입체크가 비정상 처리되기 때문 
- 그래서 컴파일 옵션 중에는 any를 쓰면 오류를 out하도록 하는 옵션 `nolmplicitAny`도 존재 
- ``` ts
  function returnAny(message): any {
    console.log(message);
  }

  returnVoid('리턴은 아무거나');```

### Never 
- 리턴에 주로 사용
- 아래 3가지 정도의 경우가 대부분 
- ``` ts
  // Function returning never must have unreachable end point
  function error(message: string): never {
      throw new Error(message);
  }
  
  // Inferred return type is never
  function fail() {
      return error("Something failed");
  }
  
  // Function returning never must have   unreachable end point
  function infiniteLoop(): never {
      while (true) {
      }
  } 
  ```

### Array 
- JS에서 array는 객체 
- `Array<타입>`
- `타입[]` 
- ```ts
  let list: number[] = [1, 2, 3];

  let list: Array<number> = [1, 2, 3]; 
  ``` 

### Tuple 
- 배열인데 타입이 한가지가 아닌 경우 
- 마찬가지로 객체 
- 꺼내 사용할 때 주의! 
  - 배열을 Desrtucting하면 타입이 제대로 얻어짐 
- ``` ts
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ["hello", 10]; // OK
  // Initialize it incorrectly
  x = [10, "hello"]; // Error
  
  x[3] = "world"; // OK, 'string' can be   assigned to 'string | number'
  
  console.log(x[5].toString()); // OK, 'string'   and 'number' both have 'toString'
  
  x[6] = true; // Error, 'boolean' isn't 'string   | number'
  
  const person: [string, number] = ['mark', 35];
  
  const [name, age] = person;
  ```

### Enum 
- C와 동일 
- 아래 예제만 이해하면 됨 
- ``` ts 
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;
  
  enum Color {Red = 1, Green, Blue}
  let c: Color = Color.Green;
  
  enum Color {Red = 1, Green = 2, Blue = 4}
  let c: Color = Color.Green;
  
  enum Color {Red = 1, Green, Blue}
  let colorName: string = Color[2];
  ``` 

### Symbol 
- ECMAScript 2015 의 Symbol
- 프리미티브 타입의 값을 담아서 사용
- 고유하고 수정불가능한 값으로 만들어 줌
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많음 
- ``` ts
  let sym = Symbol();
  
  let obj = {
      [sym]: "value"
  };
  
  console.log(obj[sym]); // "value"
  ```
  
