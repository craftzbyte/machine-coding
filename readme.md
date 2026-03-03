#repos for machine coding

lazy initialization
const [count, setCount] = useState(() => {
return Number(localStorage.getItem('count') || 0);
});
he funciton will run just once in the initial render, thats it
useState cant store a funciton . if it detects type == function it will execute it thinkng its a lazy initialization funciton .

🔑 Senior insight: useCallback is USELESS without React.memo on the child. The entire point is to prevent referential changes from defeating memo. If the child isn't memo'd, you're just adding overhead for zero benefit.

Setting state to the same value silently bails out — but with a catch. React uses Object.is to compare old and new state. If they're identical, React skips re-rendering children. But the component itself may still execute once more before React decides to bail out. This means you might see your component function body run even though no visible update happens.

Non-Primitive Types (Reference Types)
These are mutable and stored by reference:\
// Primitives are immutable

Output based
console.log([11, 2, 31] + [4, 5, 6]);

let x = 5;
let y = x++;
console.log(y);
console.log(x)

console.log(10 + "5");
console.log("5" + 10);

const arr1 = [1,2,3];
const arr2 = [1,2,3];
const str = "1,2,3";

console.log(arr1 == str);
console.log(arr1 == arr2);

const arr = [11, 0, '', false, 2, 1];
const filtered = arr.filter(Boolean);
console.log(filtered);

const person = {
firstName: 'Surbhi',
};
const { lastName="dighe" } = person;
console.log(lastName);

var a = 10;
let a = 20;
console.log(a)

const arr = ["A","B","C","D","E"]
console.log(Object.keys(arr));

var array = [1,2,3,4,5];
delete array[2];
console.log(array.length);

let text;
switch (1) {
case 0:
text = "This is zero";
break;
case 1:
text = "This is one";
case 2:
text = "This is two";
break;
default:
text = "No matches found!";
}
console.log(text);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const finalObj = Object.assign({}, obj1, obj2);
console.log(finalObj);
// strings
// extensively use sets maps and all

function printName(firstName, lastName) {
firstName = "Aman";
lastName = "Bhoria";
return arguments[0] + " " + arguments[1];
}

let name = printName("John", "Doe");
console.log(name)

// this key word
