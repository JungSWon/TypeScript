# 인터페이스 

- TS의 인터페이스 부분은 JS로 변환된 소스코드에서 보이지 않는다. 

### 기본적용과 입출력 
``` ts 
    // 인터페이스 미적용 
function hello(person: { name: string; age: number; }): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p: { name: string; age: number; } = {
    name: 'Mark',
    age: 35
};

hello(p); // 안녕하세요! Mark 입니다.


    // 인터페이스 적용
interface Person {
    name: string;
    age: number;
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p: Person = {
    name: 'Mark',
    age: 35
};

hello(p); // 안녕하세요! Mark 입니다.

``` 

### Optional Property (1)
```ts
interface Person {
    name: string;
    age?: number; // 프로퍼티? : 없어도 컴파일에러가 뜨지 않는다. 
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person = {
    name: 'Mark',
    age: 35
};

const p2: Person = {
    name: 'Anna'
    // age가 없지만 괜찮다. 
};

hello(p1); // 안녕하세요! Mark 입니다.
hello(p2); // 안녕하세요! Anna 입니다.
``` 


### Optional Property (2)
- indexable type 
- array / dictionary 타입이 들어간다
``` ts 
interface Person {
    name: string;
    age?: number;
    [index: number]: string; // string이나 int 둘중하나
    [idx: string]: any;  // 그냥 any를 쓰는게 좋음. 어차피 둘중 하나
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person = {
    name: 'Mark',
    age: 35,
};

const p2: Person = {
    name: 'Anna',
    systers: [
        'Sung',
        'Chan'
    ]
};

const p3: Person = {
    name: 'Bokdaengi',
    father: p1,
    mother: p2
};

const p4 : Person = {};
p2[0] = 'hi';
p2[100] = 'hello';


hello(p1); // 안녕하세요! Mark 입니다.
hello(p2); // 안녕하세요! Anna 입니다.
hello(p3); // 안녕하세요! Bokdaengi 입니다.
```


### function in interface 
- ineterface에 `hello():void;` 을 추가하고 
  - ` hello:function(){ }` 나 
  - ` hello: () => { }` 에로우 펑션으로 생성
- 또는 아예 한번에 `hello: (): string => { return "hello";}` 생성 
- 개인적으로 이렇게 한번에가 좋은 듯 `hello() : string { return 'Hello';}`
```ts
interface Person {
    name: string;
    // hello():void;
}

const person: Person ={
    name:'Mark',
    // hello:function(){ }
    // hello: ()=>{}
    // hello: (): string => { return "hello";}
    hello() : string { return 'Hello';}
}
```

### Class implements interface 
``` ts
interface IPerson{
    name: string;
    hello(): void;
}

class Person implements IPerson {
    name: string = null;
    constructor(name: string) { this.name = name;}

    hello(): void{
        console.log('hello, I am ${this.name}');
    }
    public hi(): void {
        console.log('hello, ${this.name}')
    }
}

const person: Person = new Person('Mark');
const iperson: IPerson = new Person('Soowon');
person.hi();
iperson.hello(); // 여기엔 hi()가 없음 
``` 

### interface extends interface 
```ts
interface Person{
    name: String;
    age?: number;
}

interface Korean extends Person {
    city: string;
}

const k: Korean = {
    name: 'Soowon',
    city: 'Seoul'
};
```

### function interface 
```ts
interface HelloPerson {
    // (name: string, age: number): void;
    (name: string, age?: number): void;
}

let HelloPerson: HelloPerson = function (name: string) {
    console.log('hello I am {$name}');
};

HelloPerson('Mark'); // hello I am Mark

// 함수 타입체크를 할당할 때 가 아니라 사용할 때 한다는 점.
```


