let nameItem = document.getElementById("name-item");
let shoppingList = document.getElementById("shopping-list");
let addItem = document.getElementById("add-item")

function addToList() {
    const item = document.createElement("li")
    item.innerHTML = nameItem.value
    item.id = nameItem.value
    shoppingList.appendChild(item)

    const removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    shoppingList.appendChild(removeButton)


    const editButton = document.createElement("button")
    editButton.innerHTML = "Edit"
    shoppingList.appendChild(editButton)

    removeButton.addEventListener("click", removeItem)
    editButton.addEventListener("click", editItem)
}

addItem.addEventListener("click", addToList)

function removeItem(itemName) {
    const listItem = document.getElementById(nameItem.value)
    listItem.remove();
}

function editItem() {
    const edit = document.createElement("input")
    edit.value = nameItem.value
    shoppingList.appendChild(edit)
}

