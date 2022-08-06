const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Start Machine') {
        btn.text = 'Stop Machine';
    text.textContent = 'The machine is running!';
    } else {
        btn.textContent = 'Start Machine';
        txt.textContent = 'The machine is stopped.';
    }
}