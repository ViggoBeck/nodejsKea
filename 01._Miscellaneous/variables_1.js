

//avoid var
//var name = 'Viggo';

//const is NOT a constant value, but a constant reference. You can change properties of the object or reassign it
//That means that const CAN have its value changed
//Const must be initialized

//const name = 'Viggo';

const me = {}; //empty object key-value pair

me.name = 'Viggo';

console.log(typeof me.name);

const hobbies = ["coding"];

// hobbies.pop(); //remove last element

hobbies.push("drawing", "painting");

console.log(hobbies);


const jsObject = {
  whatAmI: "jsObject",
};

const dancerName ="Computer";

console.log("I can't dance!");
console.log('I can dance!');
console.log(`${dancerName} can dance!""""""""
  line 1
  line 2
  """"`); //template literal


// console.log('I can't dance!'); //SyntaxError: Unexpected token 't'



//" console.log, vs. + ' 

const assignmentDescription = "...and the value is...";
const value = 4;

console.log(assignmentDescription, value);


