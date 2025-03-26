let id :number=6
let userName : string = "ubey";

let isActive :boolean = true;

let x :any = "hello"


// because x of type any is not give us any error messaj
x = true




// ! arrays of specific type
let ids :number[] = [1,2,3,4,5]


let arr :any[] = [1,"3",true]


// !Tuple 
// the values should be in the same order
let persons :[number,string,boolean] =[2,"ubey",true]

//! Tuple Array 
let employee : [string,number][] = [
    ["ubey",2],
    ["udey",3],
]



// !Unions : if we want  a particular variable to be able to hold more than one type 


let userId : string|number =22;
userId='323df'



//! Enums : allows us to define a set of named constants either numeric or string 

enum direction1 {
    Up=1,
    Down,
    Left,
    Right
}


console.log(direction1)



enum direction2 {
    Up   = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right= 'RIGHT' 
}
console.log(direction2)




//! Objects {eachAtrribute : typeOfAttribute}


//// const userObject :{id:number,name:string}= {
////     id:"1",
////     name:'ubey'
//// }


//  the code above look messy so instead of it we can do 

type User = {
    id:number,
    name:string
}

//  and then instead of having the code above we can do it like this 


const userObject :User= {
    id:1,
    name:'ubey'
}




// and also there a thing that called `interface` which we can use them as the same way to type




//! Type assertion : is explicitly telling the compiler that  we want treat an entity as a different type 

let cid : any ="1f"
let customerId = <number>cid;
// customerId = "g"

let customerId2 = cid as number



//! using types in functions 

function addNum(x:number,y:number):number{
    return x+y;
}

console.log(addNum(3,3))

function log(message:string|number):void{
    console.log(message)
}


log("hello world from the log function")



// ! Interfaces : is kind of lke a custome type or a specific structure of object or function and we can use in a very similar way that we use 'type' 

interface UserInterface{
    // ! if we  wanna a attribute to be just readonly we add `readonly`  before it
    readonly    id:number,
    name:string,
    // !if we  wanna some attributes to be optional we add ? 
    age?:number
}
const user1 :UserInterface = {
    id:2,
    name:"noor"

}

console.log(user1.id)

//  ! The differences between `type` and `interface`

// ! Type can be used with primitives and it can be used with unions


type Point = number|string

const p1 :Point =1
// ! we cannot with interface with primitives and unions but in the case of objects  is where we should use them 

//// interface Point1 = number|string

// ! we can use Interfaces with functions 

interface MathFunc {
    (x:number,y:number):number 
}


const add:MathFunc = (x:number,y:number)=>x+y;
const sub:MathFunc = (x:number,y:number)=>x-y;

//! Classes 

interface PersonInterface{
    readonly id : number ,
    name : string ,
    age?:number,
    register():string
}

//!! using interface inside a class be add `implements interfaceName `
class person  implements PersonInterface{
    // classes use to create objects 
    id : number 
    name : string 


    constructor (id:number,name:string){
        this.id = id;
        this.name = name;
    }
    register ():string{
        return `this person ${this.name} is registered now`
    }

    showId():number{
        return(this.id)
    }
}

const mike = new person(1,"mike")
console.log(mike.showId())
console.log(mike.register())
// console.log(mike.id)

// ! access modifiers , data modifiers 
// in the example above id, name are public by default meaning we can access ,change ,them and that fine 
//! we can change them from public to private or protected 
// ? private  : mean you access it within the class 
// ? protected : mean you can access it within this class or any class that exteded from this class 



//! subClasses 


class Employee extends person{
    position:string
    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position=position
    }
    register():string{
        return `this employee : ${this.name} is registered now`
    }
}


const emp = new Employee(11,'ubey','engineer')

console.log(emp.register())

/// Generics : which generally used to build reusable components 

function getArray(items:any[]):any[]{
    return new Array().concat(items)
}


let numArray=getArray([1,2,3,4])
let strArray = getArray(["!hello","!world"])

numArray.push("arar") //  we are not gonna get any errors because  our get array takes in array of type any and return array of type any  
//! so what we could do is add  generic  to this so that we can create an array of number that has to have number and array of string the at has to have string based on use of this function so 

function getArray2<T>(items:T[]):T[]{
   // T : here is kind of  placeholder so instead of any we put T and T type will be specified when the function get called 

   //generic here is aplace holder for the type 
    return new Array().concat(items)
}


let arrayOfNumbers = getArray2<number>([1,2,3,4])


let arrayOfNumbers2= getArray2([1,2,3,4,'3'])


arrayOfNumbers.push('2')
arrayOfNumbers2.push('2')

