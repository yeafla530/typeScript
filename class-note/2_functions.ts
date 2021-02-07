// 함수의 파라미터에 타입을 정의하는 방식
function sum(a:number, b:number) {
    return a + b
}
sum(10, 20);

//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum1(a:number, b:number): number {
    return a + b
}

//오류 확인 가능 
sum1(10, 20, 30, 40); 
sum1(10)

//옵셔널 파라미터(선택적 파라미터) | ?
function log(a:string, b:string, c?:string) {
    return a
}

//선택적 파라미터 사용으로 error안뜸
log('hello ts', 'abc')