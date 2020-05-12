# Class 

- 거의 모든 것을 클래스로 작업한다고 보면 된다. 
- interface는 js로 컴파일하면 노출이 안되었는데 
- Class는 그대로 컴파일됨 
```ts 
class Person {
    name: string;
    age: number;
}

const person: Person = new Person();
console.log(person); // Person {}
person.age = 35;
console.log(person.name); // undefined

/*

1. 생성자 함수가 없으면, 디폴트 생성자가 불린다.

2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
=> 오브젝트에 프로퍼티가 아예 존재하지 않는다.

3. 접근제어자 (Access Modifier) 는 public 이 디폴트 이다.

*/
```