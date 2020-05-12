# Class (1)

- 거의 모든 것을 클래스로 작업한다고 보면 된다. 
- interface는 js로 컴파일하면 노출이 안되었는데 
- Class는 그대로 컴파일됨 
  
1. 생성자 함수가 없으면, 디폴트 생성자가 불린다.
2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
   => 오브젝트에 프로퍼티가 아예 존재하지 않는다.
3. 접근제어자 (Access Modifier) 는 public 이 디폴트 이다.


```ts 
class Person {
    name: string;
    age: number;
}

const person = new Person();
// 생성자 함수가 없으면 디폴트 함수가 불리고,
console.log(person); // Person{}
person.age = 35;
console.log(person.name); //undefined


class Person2 {
    name: string;
    age: number;
    constructor(name: string) {
        this.name = name;
    } // 생성자 함수 
}

const person2: Person2 = new Person2('soowon');
// 생성자 함수가 있으면 인자없는 생성자는 없어진다. 없어져야한다?! 
console.log(person)
person.age = 29;
console.log(person2.name);


class Person3 {
    name: string = null; 
    age: number = null;     
    // = null; 준비는 됐지만 사용하지 않는 상황 
}

const person3: Person3 = new Person3();
console.log(person3)

```

### Class and Property (1)
```ts
class Person {
    name: string;
    age: number;

    constructor() {
        console.log(this.name === null); // false
        console.log(this.name === undefined); // true
    }
}

const person: Person = new Person();
person.name = 'Mark';
person.age = 35;
console.log(person); // Person {name: 'mark', age: 35}
```


### Class and Property (2)
- 클래스의 프로퍼티를 선언과 동시에 값을 할당하는 방법도 있다.
- 생성자가 불리기 전에 이미 프로퍼티의 값이 저장되어 있음을 알 수 있다.
``` ts 
class Person {
    name: string = 'Mark';
    age: number = 35;
    id: number = null; // null도 할당 가능하다~ 

    constructor() {
        console.log(this.name); // 'mark'
    }
}

const person: Person = new Person();
console.log(person); // Person {name: 'Mark', age: 35}

```


### Class and modifier(접근제어자) (1)
- _변수명 : 전통적으로 private의 의미, 문법이 아니라 대중적인 코딩컨벤션 
- private 으로 설정된 프로퍼티는 밖에서 인스턴스의 dot 으로 접근할 수 없다.
- 클래스 내부에서는 private 프로퍼티를 사용할 수 있다.

``` ts
class Person {
    public name: string;
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }
}

const person: Person = new Person(35);
person.name = 'Mark';
// person._age (X)
console.log(person); // Person {name: 'Mark', _age: 35}
```

### Class and modifier(접근제어자) (2)
- 기본적으로 부모 프로퍼티는 자식에서 접근 가능, 밖에서는 접근 불가 
- 부모에서 private 으로 설정된 프로퍼티는 상속받은 자식에서도 접근 불가!.
- 부모에서 protected 로 설정된 프로퍼티는 상속을 받은 자식에서 접근 가능.
- 상속받은 자식 클래스에서 부모 클래스에 this 를 통해 접근하려면, 생성자에서 super(); 를 통해 초기화 해야한다.

``` ts
class Parent {
    protected protectedProp: string;
    private privateProp: string;

    protected _FamilyDay: number; 
    private _coupleDay: number;
}

class Child extends Parent {
    constructor() {
        super();

        
        this.protectedProp = 'protected';
        // this.privateProp = 'private'; // (X)

        this._familyDay = 19991212; 
        // this._coupleDay = 00000000; // 사용불가 
    }
}

const person : Child = new Child(); 
console.log(person) 

```


### Class and Default Constructor
- 디폴트 생성자는 프로그래머가 만든 생성자가 없을 때 사용할 수 있다.
  - 사용자가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
```ts 
class Person {
    public name: string;
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }
}

const person: Person = new Person();

```


### Class and Method 
- 이제 클래스의 프로퍼티 말고 메소드에 적용해보자 
- 클래스 내부에 작성된 메서드는 public 이 디폴트
- arrow function 으로 작성 가능
- private 을 이용하면 클래스 외부에서 접근 불가

```ts
class Person {
    constructor(private _name: string, private _age: number) { }

    print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 살 입니다.`);
    }

    printName = (): void => {
        console.log(`이름은 ${this._name} 입니다.`);
    }

    private printAge(): void  {
        console.log(`나이는 ${this._age} 살 입니다.`);
    }
}

const person: Person = new Person('Mark', 35);
person.print(); // 이름은 Mark 이고, 나이는 35 살 입니다.
person.printName(); // 이름은 Mark 입니다.
// person.printAge(); // (X)

```
```ts

class Person {
    // protected _name: string = "soowon";     //1
    private _age: number = null;

    // constructor(name: string, age: number) {   //1과 함께 삭제하고 아래처럼 수정 가능 
    constructor(private _name: string, age: number){
        this._name = name;
        this._age = age;
    }
    hello(): void{ console.log(this._name); }
    hello2 = (): void => { console.log(this._name); }
}
const person: Person = new Person('soowon', 29);
person.hello
person.hello2
```


### Class and Inheritance (상속) (1)
```ts

class Person {
    constructor(protected _name: string, protected age: number){
    }
    hello(): void{ console.log(this._name); }
}
const person: Person = new Person('soowon', 29);
person.hello


class Child extends Person {
    // _name: string = 'SWon Jr.' // 덮어씌우기 

    // 자식에 생성자를 만들 때는 super를 호출해야 한다 
    // super의 인자는 부모 생성자의 인자와 같아야 한다. 
    constructor(){
        super('SWon Jr.',5);
    }

}
// const child: Child = new Child('soowon', 29); 
// 자식 super생성자로 인해 위와같이 인자가 필요한 생성자가 없으므로 아래와 같이. 
const child: Child = new Child(); //
child.hello;
```


### Class and Inheritance (상속) (2)

1. 생성자를 정의하고, this 를 사용하려면, super 를 통해 부모의 생성자를 호출해줘야 한다.
2. super 를 호출할때는 부모 생성자의 입력 타입이 같아야 한다.
3. super 를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.
4. protected 함수를 호출해서 그 안의 private 을 출력하는 것에 주의한다.
```ts
class Parent {
    constructor(protected _name: string, private _age: number) { }

    print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 살 입니다.`);
    }

    protected printName = (): void => {
        console.log(`이름은 ${this._name} 입니다.`);
    }

    protected printAge(): void  {
        console.log(`나이는 ${this._age} 살 입니다.`);
    }
}

class Child extends Parent {
    constructor(age: number) {
        super('Mark Jr.', age);

        this.printName();
        this.printAge();
    }
}

const p: Child = new Child(1);
// 이름은 Son 입니다.
// 나이는 1 살 입니다.

```
