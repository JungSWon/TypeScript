class Test{
    constructor(){
        console.log('test');
    }
}

new Test();

// 터미널에서 ./node_modules/.bin/tsc test.ts  로 실행했을 때 
// 별다른 메세지가 뜨지 않으면 제대로 컴파일 된 것이다. 
// test.js가 생성된다. 