const BASE_URL = `https://api.exchangerate.host/latest`;

function left(base){

    const ammount = document.getElementById('onkeyup').value;

    const choices = [];
    const els = document.getElementsByName('right_btn');
    for (const i = 0; i < els.length; i++){
        if ( els[i].checked ) {
            choices.push(els[i].value);
        }
    }

    (async () => {
        const response = await fetch(BASE_URL + `?base=${base}&symbols=${choices[0]}&amount=${ammount}`);
        const data = await response.json();

        document.getElementById('result').value = data.rates[choices[0]].toFixed(3);
    })();

}

function right(base){

    let ammount = document.getElementById('onkeyup').value;

    let choices = [];
    let els = document.getElementsByName('left_btn');
    for (let i = 0; i < els.length; i++){
        if ( els[i].checked ) {
            choices.push(els[i].value);
        }
    }

    (async () => {
        const response = await fetch(BASE_URL + `?base=${choices[0]}&symbols=${base}&amount=${ammount}`);
        const data = await response.json();

        document.getElementById('result').value = data.rates[base].toFixed(3);
    })();

}

function keyup(){

    setTimeout(function() {
        
        const v = document.getElementById('onkeyup').value;

        const choices = [];
        const els = document.getElementsByName('left_btn');
        for (const i = 0; i < els.length; i++){
            if ( els[i].checked ) {
                choices.push(els[i].value);
            }
        }
    
        const choices2 = [];
        const els2 = document.getElementsByName('right_btn');
        for (const i = 0; i < els2.length; i++){
            if ( els2[i].checked ) {
                choices2.push(els2[i].value);
            }
        }
    
        (async () => {
            const response = await fetch(BASE_URL + `?base=${choices[0]}&symbols=${choices2[0]}&amount=${v}`);
            const data = await response.json();
    
            document.getElementById('result').value = data.rates[choices2[0]].toFixed(3);
        })();
    }, 1000);
}