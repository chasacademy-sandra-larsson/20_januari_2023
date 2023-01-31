const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")

one.addEventListener("click", () => console.log("One was clicked!") )
two.addEventListener("click", () => console.log("Two was clicked!"))
three.addEventListener("click", () => console.log("Three was clicked!"))

// const parent = document.querySelector('.one')

// parent.addEventListener("click", (event) => {
 
//   if(event.target.tagName === 'BUTTON') {
//     console.log(event.target.innerHTML)
//   }
// })