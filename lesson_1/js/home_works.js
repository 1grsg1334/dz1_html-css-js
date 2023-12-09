const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /[a-z0-9]{6}@gmail.com$/gi

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "Not OK"
        gmailResult.style.color = "red"
    }
}

function moveRight(parentBlock, childBlock, position) {
    if (position <= parentBlock.clientWidth - childBlock.clientWidth) {
        childBlock.style.left = position + 'px';
        setTimeout(() => moveRight(parentBlock, childBlock, position + 1), 10);
    }
}

const parentBlock = document.querySelector('.parent_block');
const childBlock = parentBlock.querySelector('.child_block');

moveRight(parentBlock, childBlock, 0);