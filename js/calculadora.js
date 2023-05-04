const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

//Botones operaciones
botones.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
        if(boton.id == 'ce'){
            pantalla.value = ' ';
        }else if(boton.id == 'division'){
            pantalla.value += '/';
        }else if(boton.id == 'multi'){
            pantalla.value += '*';
        }else if(boton.id == 'resta'){
            pantalla.value += '-';
        }else if(boton.id == 'suma'){
            pantalla.value += '+';
        }else if(boton.id == 'borrar'){
            pantalla.value = pantalla.value.slice(0,-1);
        }else if(boton.id == 'punto'){
            pantalla.value += '.';
        }else if(boton.id == 'igual'){
                pantalla.value = eval(pantalla.value);
                
        }
    })
})

//Botones números
botones.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
        if(boton.id == 'siete'){
            pantalla.value += '7';
        }else if(boton.id == 'ocho'){
            pantalla.value += '8';
        }else if(boton.id == 'nueve'){
            pantalla.value += '9';
        }else if(boton.id == 'cuatro'){
            pantalla.value += '4';
        }else if(boton.id == 'cinco'){
            pantalla.value += '5';
        }else if(boton.id == 'seis'){
            pantalla.value += '6';
        }else if(boton.id == 'uno'){
            pantalla.value += '1';
        }else if(boton.id == 'dos'){
            pantalla.value += '2';
        }else if(boton.id == 'tres'){
            pantalla.value += '3';
        }else if(boton.id == 'cero'){
            pantalla.value += '0';
        }else if(boton.id == 'doble'){
            pantalla.value += '00';
        }
    })
})



