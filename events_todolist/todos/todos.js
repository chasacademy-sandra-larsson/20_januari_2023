const form = document.querySelector(".add-items")
const todoList = document.querySelector(".todos")
const items = []


// LÄgg till en todo
function addItem(event) {
    event.preventDefault()
    //console.log(this)
    const text = this.querySelector("[name=form]").value
    console.log(text)
    const item = {
        text: text,
        done: false
    }
    items.push(item)
    populateList(items, todoList)
    // Resetta input-rutans värd
    this.reset()

}

function populateList(items, todoList) {

    todoList.innerHTML = items.map((item, index) => {
        return `
            <li> 
                <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? "checked": ''}>
                <label for="item${index}"> ${item.text} </label>
            </li>`
    }).join('')

}

// const check = document.querySelectorAll("input")

// check.forEach(input => {
//       input.addEventListener("click", () => {
//         console.log("check")
//       })
// })

function toggleDone(event) { 
   if(!event.target.matches("input")) return
   const element = event.target
   console.log(element)
   const index = element.dataset.index;
   // TOGGLE DONE 
   items[index].done = !items[index].done
   populateList(items, todoList)

}

form.addEventListener("submit", addItem)
todoList.addEventListener("click", toggleDone)