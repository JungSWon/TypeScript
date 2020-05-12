# 타입 별칭 
- 인터페이스와 비슷해보임 
- Primitive , Union Type , Tuple 
- 외 직접 작성해야 하는 타입을 다른 이름으로 지정 가능
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아님 
  
### Aliasing Primitive 
- 별 의미가 없다 
- 잘 안쓴다 
``` ts
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;
```


###  Aliasing Union Type 
- A 타입도 될수있고, B 타입도 될수있는 다중타입
```ts
let person: string | number = 0;  // sting이나 number가 될 수있다. 
person = 'Mark';

type StringOrNumber = string | number | ; // 타입을 변수에 저장해놓고

let another: StringOrNumber = 0; //사용가능
another = 'Anna';
function test(arg:StringOrNumber) : StringOrNumber{ // 편-리
    return arg ;
}

```


### Aliasing Tuple 
- tuple : array처럼 생겼는데 요소 타입이 두개 이상인 것 
``` ts 
let person: [string, number] = ['Mark', 35];

type PersonTuple = [string, number];

let another: PersonTuple = ['Anna', 24];

/*
1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
*/
```

## Quiz
- Type Alias로 Generic 표현하기 
- Type Alias와 keyof 키워드 사용하기 
- https://www.youtube.com/playlist?list=PLV6pYUAZ-ZoE8uRXG51003heNA0EATIxN


### Interface와 차이점 
- Type Alias와 어떤 차이가 있을까. 
- Type Alias 와 keyof 키워드 사용하기
- https://www.youtube.com/playlist?list=PLV6pYUAZ-ZoE8uRXG51003heNA0EATIxN


#### 차이점 (1)   
- 에러가 났을때, 
  - type alias 는 alias가 아닌 객체의 literal type을 가리키고 
  - interface 는 interface 를 가리킨다. 
```ts
type Alias = { num: number }

interface Interface {
    num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
```

#### 차이점 (2)
- 당연하게도 type alias 끼리는 extends, implements 상속 불가
- interface extends type alias 가능
- class implements type alias 가능 
- class extends type alias 불가: 클래스가 alias 상속받지 못함 (interface 도 마찬가지)
- 마치 interface 처럼 동작한다.

```ts
type PersonAlias = {
    name: string;
    age: number;
};

interface IPerson extends PersonAlias {

}

let ip: IPerson = {
    name: 'Mark',
    age: 35
};

class PersonImpl implements PersonAlias {
    name: string;
    age: number;

    hello() {
        console.log('안녕하세요');
    }
}

let pi: PersonImpl = new PersonImpl();
pi.hello();

class PersonChild extends PersonAlias {
    
}
```