

function handleClick() {
    var x = 10;
    debugger;
    if (x > 10) {
        console.log('greater');
    }
    else{
        console.log('less');
    }
    
}

document.addEventListener('click', handleClick);