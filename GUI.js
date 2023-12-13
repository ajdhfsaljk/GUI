const guiContainer = document.createElement('div');
guiContainer.style.backgroundColor = '#221f1f';
guiContainer.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
guiContainer.style.borderRadius = '10px';
guiContainer.style.padding = '20px';
guiContainer.style.textAlign = 'center';
guiContainer.style.position = 'absolute';
guiContainer.style.top = '50%';
guiContainer.style.left = '50%';
guiContainer.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(guiContainer);

const header = document.createElement('div');
header.textContent = 'GUI Menu for Skids';
header.style.fontFamily = 'Arial, sans-serif';
header.style.fontWeight = 'bold';
header.style.fontSize = '2em';
header.style.marginBottom = '20px';
header.style.color = '#00aae4';
guiContainer.appendChild(header);

let isDragging = false;
let offsetX, offsetY;

function handleMouseDown(event) {
    isDragging = true;
    offsetX = event.clientX - guiContainer.getBoundingClientRect().left;
    offsetY = event.clientY - guiContainer.getBoundingClientRect().top;
}

function handleMouseMove(event) {
    if (isDragging) {
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        guiContainer.style.left = `${x}px`;
        guiContainer.style.top = `${y}px`;
    }
}

function handleMouseUp() {
    isDragging = false;
}


guiContainer.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

const buttonStyle = `
    background-color: #00aae4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
    font-size: 1.2em;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out;
`;


const button1 = document.createElement('button');
button1.textContent = 'button 1';
button1.style.cssText = buttonStyle + 'background-color: #00aae4;';
guiContainer.appendChild(button1);


const button2 = document.createElement('button');
button2.textContent = 'button 2';
button2.style.cssText = buttonStyle + 'background-color: #ff4f00;';
guiContainer.appendChild(button2);

button1.addEventListener('click', function () {
    alert('your a skid ');
});

button2.addEventListener('click', function () {
    alert('welcome you skid');
});
