export function createInputs() {
    for (var i = 0; i < 2; i++) {
        let myInputs = document.createElement('input');
        document.body.appendChild(myInputs);
    }
};

export function createButtons() {
    let types = ['+', '-', ':', '*'];
    let myDiv = document.createElement('div');
    myDiv.classList.add('calc');
    document.body.appendChild(myDiv);
    for (var i = 0; i < types.length; i++) {
        let myButtons = document.createElement('button');
        myButtons.innerHTML = types[i];
        myDiv.appendChild(myButtons);
    }
};

export function createOutput() {
    let myDiv = document.createElement('div');
    myDiv.classList.add('output');
    document.body.appendChild(myDiv);
};
