//all data are kept in string format
// localStorage.setItem("age","10");

// console.log(localStorage.getItem("age"));

const addToLocalStorage = () =>{
  // const name = "Abidul Kabir";

  const person ={
    name: "Abidul",
    age: 134,
    friends: ["who who"]
  }

  localStorage.setItem("abid", person);
  // it become an object Object like:
  console.log(person.toString());

  const convertedPerson = JSON.stringify(person);
  localStorage.setItem("abid", convertedPerson);
}
