let original = {
    name : 'babu'
}

let copied = Object.create(original)

// class in es6

class Service{
    doSomething(){
        console.log(`[class Service] doSomething`);
    }
}
let service = new Service();

function something(){}

let c = new something()

let arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9];
let thatperson;
for(let i = 0;i <arr.length/2+1;i++){
    
}