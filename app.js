const button = document.getElementsByTagName("button");

function createNameDiv(name) {
    const newDiv = document.createElement("div");
    const nameContainer = document.getElementById("name-container");
    let nameInput = document.createElement("p");

    nameInput.innerText = name;

    nameContainer.append(newDiv);
    newDiv.append(nameInput);

    form.reset();
}

function handleNameInputs(e) {
    e.preventDefault();

    let nameValue = document.getElementById("name").value;

    createNameDiv(nameValue);
}

const form = document.getElementById("form");
form.addEventListener("submit", handleNameInputs);