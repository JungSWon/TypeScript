# 타입 어설션 

- cf)형변환 : 실제 데이터 구조를 바꿈 
- '타입이 이것이다'라고 컴파일러에게 알려주는 것을 의미 
  - 행동에 대해 작성자가 신뢰하는 것이 중요
- 문법적으로는 두가지 방법 
  - `변수 as 강제할타입`
  - `<강제할타입> 변수`
``` ts 
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
let strLength: number = (<string>someValue).length;

/*
1. 주로 넓은 타입에서 좁은 타입으로 강제하는 경우가 많다.
2. jsx 에서는 as 를 쓴다.
*/
```

