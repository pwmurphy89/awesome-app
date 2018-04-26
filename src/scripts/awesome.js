// Final output DOM component reference
const output = document.querySelector(".output")

// Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input component
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return inputField
}


// Create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    return theButton
}

const createCardButton = buttonFactory("button--submit", "Create Card")
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

/*
Attach event listener to button
1. Get value of input field
2. Create card component with text inside
*/
createCardButton.addEventListener("click", function () {
    // 1. Get value of input field
    const userEntry = cardTextInput.value

    // 2. Create card component with text inside
    // ????????????????????
})

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)



// Create card component



output.appendChild(fragment)
