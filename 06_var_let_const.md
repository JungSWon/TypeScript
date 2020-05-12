# var , let , const 
> var 말고 let, const 를 사용하자. 
> 코드 가독성이 더 좋다

> https://www.typescriptlang.org/play/index.html 
> TS에서 JS로 실시간 변환, 에러 확인이 편하다. 

##  var 
- ES5까지의 선언/ 할당 방식 
- 변수 유효범위 : 함수 스코프 
- 호이스팅 가능 
  - 호이스팅? 변수를 선언 이전 줄에서 변수 사용하는 경우 끌어올려 쓴다.
- 재선언 가능 
  - 선언 후 다시 같은 변수로 선언 가능 


## let, const 
- ES6 
- 변수 유효범위 : 블록 스코프 
- 호이스팅 불가
- 재선언 불가

### hoisting 호이스팅
``` ts
    // var
console.log(hoisted_var);
var hoisted_var = '변수를 아래서 선언했는데 위에서 사용가능';
    // let
console.log(hoisted_let);
let hoisted_let = '변수를 아래서 선언했는데 위에서 사용불가';
```

### redeclare 재선언
``` ts
    // var
var redeclare_var: string = '한번 선언 했는데';
var redeclare_var: string = '또 선언 가능';
// var redeclare_var: number = 0; (X)
/* 하지만 var 재선언 하더라도 같은 타입이어야 함. */

    //let
let redeclare_let = '한번 선언 했기 때문에';
let redeclare_let = '또 선언 불가';
``` 

### 타입추론 
```ts
    //let
let a: string = '에이'; // 명시적지정 타입: string 
let b = '비이';         // 타입추론 타입 : string
    //const 
const c: string = '씨이'; // 명시적지정 타입 : string  
const d = '디이';         // 타입추론 리터럴타입 : '디이'

```

