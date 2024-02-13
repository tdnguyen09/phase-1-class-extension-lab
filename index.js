// Your code here
class Polygon {
    constructor(arr){
        this.arr = arr
    }
    get countSides(){
        for ( let i = 0; i < this.arr.length; i++){
            return this.arr.length;
        }
    }
    get perimeter(){
        let sum = this.arr.reduce((acc, value) => acc + value );
        return sum;
    }
}
class Triangle extends Polygon{
    get isValid(){
        if (this.arr.length !== 3){
            return false;
        }
        const [a, b, c] = this.arr;
        if ( a + b > c && a + c > b && b + c > a){
            return true;
        }else {
            return false;
        }
    }
}
class Square extends Polygon{
    get isValid(){
        if (this.arr.length !==4){
            return false;
        }
        return this.arr.every(val => val === this.arr[0])
    }
    get area(){
        return this.arr[0] **2;
    }
}