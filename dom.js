//Selecting Elements



function selectElements() {
    // Select by ID
    const idElement = document.getElementById("myElement");
    console.log(idElement);

    // Select by class
    const classElements = document.getElementsByClassName("myClass");
    console.log(classElements[0]);

    // Select by tag
    const tagElements = document.getElementsByTagName("div");
    console.log(tagElements[0]);

    // Select first by CSS selector
    const firstSelector = document.querySelector(".myClass");
    console.log(firstSelector);

    // Select all by CSS selector
    const allSelectors = document.querySelectorAll("div.myClass");
    console.log(allSelectors);
}




function createModifyElements() {
    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.innerText = "New Div";

    // Append child
    document.getElementById("container").appendChild(newDiv);

    // Remove child
    document.getElementById("container").removeChild(newDiv);

    // Replace child
    const anotherDiv = document.createElement("div");
    anotherDiv.innerText = "Replaced Div";
    document.getElementById("container").replaceChild(anotherDiv, newDiv);

    // Clone element
    const clonedDiv = anotherDiv.cloneNode(true);
    clonedDiv.innerText = "Cloned Div";
    document.getElementById("container").appendChild(clonedDiv);
}



function modifyContent() {
    const contentDiv = document.getElementById("contentDiv");

    // Modify HTML content
    contentDiv.innerHTML = "<strong>Updated with innerHTML</strong>";

    // Modify text content
    contentDiv.textContent = "Updated with textContent";

    // Modify innerText
    contentDiv.innerText = "Updated with innerText";
}



function modifyAttributes() {
    const attrDiv = document.getElementById("attrDiv");

    // Set attribute
    attrDiv.setAttribute("data-custom", "myValue");

    // Get attribute
    console.log(attrDiv.getAttribute("data-custom"));

    // Check attribute
    console.log(attrDiv.hasAttribute("data-custom"));

    // Remove attribute
    attrDiv.removeAttribute("data-custom");
}



function modifyClasses() {
    const classDiv = document.getElementById("classDiv");

    // Add class
    classDiv.classList.add("highlight");

    // Remove class
    classDiv.classList.remove("highlight");

    // Toggle class
    classDiv.classList.toggle("highlight");

    // Check class
    console.log(classDiv.classList.contains("highlight"));
}



function applyStyle() {
    const styleDiv = document.getElementById("styleDiv");

    // Set inline CSS style
    styleDiv.style.color = "blue";
    styleDiv.style.fontSize = "20px";
}


function alertClick() {
    alert("Clicked!");
}

function addEvent() {
    const eventDiv = document.getElementById("eventDiv");
    eventDiv.addEventListener("click", alertClick);
}

function removeEvent() {
    const eventDiv = document.getElementById("eventDiv");
    eventDiv.removeEventListener("click", alertClick);
}




function navigateDOM() {
    const parent = document.getElementById("parent");
    const child1 = document.getElementById("child1");

    console.log(parent.childNodes); // All child nodes
    console.log(parent.children); // Only child elements
    console.log(parent.firstChild); // First child node
    console.log(parent.firstElementChild); // First child element
    console.log(child1.nextSibling); // Next sibling node
    console.log(child1.nextElementSibling); // Next sibling element
}

