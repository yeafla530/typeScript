//동일한 규칙을 사용하겠다는 약속
interface User {
    age: number,
    name: string
}

//변수에 활용한 인터페이스
let seho: User = {
    age: 33,
    name: '세호'
}



//함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
//User와 같은 type으로 작성해야됨
const capt = {
    age: 100,
    name: '캡틴'
}
getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b:number): number;
}

let sum2: SumFunction;
sum2 = function(a:number, b:number): number {
    return a + b;
}

// 인덱싱 : 가장 많이 쓰임
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10 //오류
arr[0] = 'abc' 


// 딕셔너리 패턴
// RegExp : 정규표현식
interface StringRegexDictionary {
    [key: string]: RegExp
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = 'a' //일반 문자 에러


// key들만 모아서 배열로 만들려고 할 때 
// value가 string으로 되어있는거 확인 가능
Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
interface Person {
    name: string,
    age: number
}

//중복되는 값 상속받기 : extends
interface Developer extends Person{
    language: string,
}

let cat: Developer = {
    language: 'hi',
    name: '고양이',
    age: 30
}

