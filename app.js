const inputNombre = document.getElementById('input-nombre');
const inputMonto = document.getElementById('input-monto');
const inputSubmit = document.getElementById('input-submit');
const listaUsuarios = document.getElementById('resultados');
const mostrarTotal = document.getElementById('total')
const mostrarPagoIndividual = document.getElementById('division')
let gastos = [];

const eliminarGasto = (i, persona) => {
    console.log(gastos);
    console.log(i );
    gastos = gastos.filter(e => e !== persona);
    console.log(gastos);

    crearItem();
    vaciarInputs();
    mostrarCalculos();
}

const agregarGastos = (val1, val2) => {
    gastos.push([val1, val2]);
}
const crearItem = () =>{
    listaUsuarios.innerHTML = '';
    gastos.forEach((persona, index)=>{
        let fila = document.createElement('div');
        let nombreHTML = document.createElement('p');
        let montoHTML = document.createElement('p');
        let borrarHTML = document.createElement('button');
        let borrarHTMLContainer = document.createElement('div');
        borrarHTMLContainer.appendChild(borrarHTML);
        borrarHTML.classList.add('btn')
        borrarHTML.classList.add('btn-danger')
        borrarHTML.textContent = 'Borrar gasto'
        borrarHTML.addEventListener('click', ()=>{eliminarGasto(index, persona)});
        nombreHTML.innerHTML = persona[0];
        montoHTML.innerHTML = persona[1];
        nombreHTML.classList.add('col-sm')
        nombreHTML.classList.add('d-flex')
        nombreHTML.classList.add('justify-content-center')
        nombreHTML.classList.add('mb-0')
        nombreHTML.classList.add('align-items-center')
        montoHTML.classList.add('col-sm')
        montoHTML.classList.add('d-flex')
        montoHTML.classList.add('justify-content-center')
        montoHTML.classList.add('mb-0')
        montoHTML.classList.add('align-items-center')
        borrarHTMLContainer.classList.add('col-sm')
        borrarHTMLContainer.classList.add('d-flex')
        borrarHTMLContainer.classList.add('justify-content-center')
        fila.classList.add('row');
        fila.classList.add('mr-5');
        fila.classList.add('ml-5');
        fila.classList.add('p-2');
        fila.classList.add('bg-light');
        fila.appendChild(nombreHTML);
        fila.appendChild(montoHTML);
        fila.appendChild(borrarHTMLContainer);
        fila.setAttribute("id",`persona-${index}`);
        listaUsuarios.appendChild(fila);
    })
}
const vaciarInputs = () =>{
    inputNombre.value = '';
    inputMonto.value = '';
}
const mostrarCalculos = () => {
    let totalFinal = 0;
    gastos.forEach((persona)=>{
        totalFinal += parseInt(persona[1]);
    })
    let totalInfividial = totalFinal/(gastos.length);
    mostrarTotal.innerHTML = totalFinal.toFixed(2);
    if (typeof(totalInfividial) == 'number' && !isNaN(totalInfividial)) {
        mostrarPagoIndividual.innerHTML = totalInfividial.toFixed(2);
    } else{
        mostrarPagoIndividual.innerHTML = '0.00';
    }
}







//APP
inputSubmit.addEventListener('click', ()=>{
    if (inputNombre.value !== '' && inputMonto.value !== '') {
        agregarGastos(inputNombre.value, inputMonto.value)
        crearItem();
        vaciarInputs();
        mostrarCalculos();
        
    } else{
        alert('Debes completar ambos campos')
    }
});