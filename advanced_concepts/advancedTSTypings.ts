/**
 * Topics to be covered 
 * 
 *  - this is a summary designed such that in its complete study, one will be efficiently equipped
 *       in typings in Typescript, and well abled to type any variable, class or function despite the situation's complexity 
 *  - Leaner should come to this only after completing the basics of Typescipt (as stated in the prerequisites below)
 *      - prerequisites 
 *          - What is Typescript and why we need it ( what failures of JS does Typescript cover and fix)
 *          - How the typescript code is executed and how to setup a basic tsconfig.json file to run TS code
 *          - what is a type and how to do basic typing 
 *          - primitive data types e.g number, string, boolean, null, undefined, infinte
 *          - how to define custom types using the 'type' and 'interface' keywords
 *          - what is type inference 
 *          - write and successfully run ts code that is fully statically typed
 *  
 *  a. Previsit on 
 *      . union types
 *      . conjuction types
 *
 *  1. Generics in TypeScript
 *      - what are generic types and what problem they solve 
 *      - examples 
 * 
 *  2. Built-In Utility types in TypeScript 
 *      - Partial <T>
 *      - Readonly<T> 
 *      - Required<T>
 *      - Omit<T, ...omitFields>
 *      - Pick<T, ...pickFields>
 *      - Record<K, V>
 * 
 * 3. Advanced Typing concepts 
 *      - the 'keyof' keyword
 *      - the 'typeof' keyword 
 *  
 *  4. mapped types 
 *  
 *  5. conditional types  
 */

/* Union types 
    - used to provide a list of choices of types that a variable can take
      but the variable must be of one of the listed types 'acheived via the | character'
*/
type numWord = number | string;
const a : numWord = 8;
const b : numWord = "waithaka" 

// the types can also be definite values e.g words or numbers 
type Role = "Admin" | "user"
const employee1: Role = "Admin";
const employee2: Role = "user"
// const employee3: Role = "employee" -- error -- type Role only accepts two values either "Admin" or "user"

/* Conjuction types
   - used to provide a list of types that a varible must be of
*/

type employee = {
    id: number
    name: string
}
type User = employee & { 
    role: Role
} 
// a variable of type User must be of type employee and must have a role field of type Role

const user1: User = {
    id: 4532,
    name: "Amos",
    role: "Admin"
} 

/* Generic types 
 - used to provide type safe reusable code without restricting to a single datatype
*/
interface collection<T> {  // 'T' is used to rep a datatype that is to be provided later
    items: T[]
}

// to create a colletion of numbers using the collection interface 
const numCollection: collection<number> = {
   items: [3,4,5,6,7]
}

// to create a collection of strings using the collection interface 
const wordCollection: collection<string> = {
    items: ["one", " Two", "Three"]
}
    
/* Built in Utility types */
/* Partial
    - used to make a type to be optional or
     some of the types on a list of union types to be optional
*/
type PersonalPrimary ={
   name: string
    id: number
    age: number 
    gender: "male" | "female"
}

type PersonalOther = {
    sport: string
    work: string
}

type PersonAll = PersonalPrimary & PersonalOther
type person = PersonAll |PersonalPrimary & Partial<PersonalOther>

// to get the details of a person we really don't necessarily
//  require the sport and work 
const person1: person = {
    name: "Amos",
    id: 123456,
    age: 18,
    gender: "male"
}

/* Required 
 * - Basically makes a type to be required (not optional) - 
 *      - it's the opposite of the Partial type
*/

type AllPersonalData = PersonalPrimary & Required<PersonalOther>

// Now all the values including the work and sport must be provided
const person2: AllPersonalData = {
    id: 12345,
    name: "Jane",
    gender: "female",
    age: 23,
    sport: "Hockey",
    work: "Software Developer"
}

/* Readonly
 *      - ensure the value of a variable with the Readonly type cannot be changed once declared
 */
type PersonalInfo = Readonly<AllPersonalData>
let man1: PersonalInfo = {
    age: 34, sport: "Football", id: 45565, 
    name: "mbappe", work: "Teacher",
    gender: "male"
}

// This won't work
// man1.age = 35

/* Omit<SelectedType, ...listOfOmittedTpes>
 *  - used to create a type by omitting some fields of another type 
 */
type CrucialInfoOnly = Omit<person, "gender"> // a type with all person field except the gender
const info1: CrucialInfoOnly = {
    // gender - not an accepted field
    age: 21, name: 'Waith', work: "Coder", id: 890,sport: "TableTennis"
}

/* Pick<SelectedType ...listOfTheAcceptedTypes>
 *   - used to create a type by selecting some fields of another type
 */
type QuickInfo = Pick<person, "name"| "gender" | "id">
const info2: QuickInfo = {
    name: "Wanjira", gender: "female", id: 8900
}

/* Record<K, T>
 *  - used to createe a type with specific keys(K), and value type(T)
 */
type Job = Record<"job", string>
const job1:Job = {job: "Instrumentalist"}

type JobRoles = "Janitor" | "Manager" | "Receptionist" | "HR" | "Producer"

type RoleSalary = Record<JobRoles, number>
const role1: RoleSalary = {
    Janitor: 39000, Manager: 100000,
    Producer: 250000, Receptionist: 41500, HR: 50000 
}
/** keyof and typeof */ 
/* keyof - returns a union of keys of a given type */
type PersonKeys = keyof person; // "age" | "gender" | "work" | "sport" e.t.c

const sth: PersonKeys = "age"

/* typeof - returns the type of a variable
    - can also be used to derive a type from an already define variable 
*/
console.log(typeof person1);

// deriving a type from an already define variable
const obj = {
    distance: 1000,
    transport: "air"
}

type TravelInfo = typeof obj;

const obj2: TravelInfo = { // expects the transport and distance fields
    distance: 3000,
    transport: "road"
}

/* Mapped types
 *      - used to loop through keys of a given type and modify them 
 */
type Optional<T> = {
    [k in keyof T]? : T[k]
}

type OptionalUser = Optional<User>
// now I can create a variable of type person without passing any field
const woman: OptionalUser = {}

/* Conditional types 
    - used to assign types based on a condition
*/
type IsNumber<T> = T extends number ? number : null;

/* More examples to look into */
// typing an object where the value is always a number
type A = {
    [a: string]: number 
}
function doThis (obj:A): A {
    return {
        a: 2000
    }
}

// typing an object 
type B = {
    [a: string]: any
}
function doThat (obj:B): B {
    return {
        c: 2000
    }
}

// typing and array of objects of type B
const array: B[] = [{d: 45}, {g: 67}]
