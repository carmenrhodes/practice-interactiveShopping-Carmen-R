let nameItem = document.getElementById("name-item");
let shoppingList = document.getElementById("shopping-list");
let addItem = document.getElementById("add-item")

function addToList() {
    const item = document.createElement("li");

    const itemText = document.createElement("span");
    itemText.textContent = nameItem.value;
    item.appendChild(itemText);

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";

    item.appendChild(removeButton);
    item.appendChild(editButton);

    shoppingList.appendChild(item);

    removeButton.addEventListener("click", () => {
        item.remove();
    });
    
    editButton.addEventListener("click", () => {
        editItem(item, itemText, editButton);
    });

    nameItem.value = "";

}

addItem.addEventListener("click", addToList)

function editItem(item, itemText, editButton) {
    if (editButton.textContent === "Edit") {
        
        const input = document.createElement("input");
        input.type = "text";
        input.value = itemText.textContent;

        item.replaceChild(input, itemText);
        editButton.textContent = "Save";
    } else {
        
        const input = item.querySelector("input");
        itemText.textContent = input.value;

        item.replaceChild(itemText, input);
        editButton.textContent = "Edit";
    }
}