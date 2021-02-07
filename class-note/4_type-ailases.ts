// 타입 별칭

// interface Person1 {
//     name: string,
//     age: number
// }

//타입 별칭
type Person1 = {
    name: string,
    age: number
}

//interface를 이용한 type 정의
//interface로 사용하면 링크로 연결되어 해당 타입 볼 수 있음
//타입 별칭 사용하면 바로 볼 수 있음 대신 타입은 확장이 안됨
//인터페이스와 타입별칭 가장 큰 차이점 : 확장 가능여부
let yerim: Person1 = {
    name: '예림',
    age: 30
}

// 가독성이 좋아진다는 점이 타입별칭의 장점
type Todo = {id:string, title: string, done: boolean};
function getTodo(todo: Todo) {

}