var addButton = document.getElementById("add");

addButton.onclick = function () {

      var itemsDiv = document.getElementById("items");

    // Step 4: Create a new div for the item
    var newItem = document.createElement("div");
    newItem.className = "item";

    // Step 5: Create the checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "item-completed";

    // Step 6: Create the text input
    var textBox = document.createElement("input");
    textBox.type = "text";
    textBox.className = "item-description";
    textBox.placeholder = "To-Do item ...";

    // Step 7: Add checkbox and text box to the new item
    newItem.appendChild(checkbox);
    newItem.appendChild(textBox);

    // Step 8: Add the new item to the items container
    itemsDiv.appendChild(newItem);
};