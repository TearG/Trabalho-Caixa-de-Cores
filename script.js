// usando um evento ao enves de uma chamado por ID, igual estava usando antes

function changeColorValue(event, color) {
    let value = event.target.value;

    document.querySelector(`#${color}Text`).value = value;

    changeSquareColor();
}

// simplificando o script

function changeSquareColor() {
    let red = document.querySelector('#redText').value;
    let green = document.querySelector('#greenText').value;
    let blue = document.querySelector('#blueText').value;

    document.querySelector('.coloredBox').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// usando let, pois no javascript é melhor que usar var, isso evita o problema com valores


function resetColors() {
    document.querySelector('#red').value = 0;
    document.querySelector('#green').value = 0;
    document.querySelector('#blue').value = 0;

    document.querySelector('#redText').value = 0;
    document.querySelector('#greenText').value = 0;
    document.querySelector('#blueText').value = 0;

    changeSquareColor();
}