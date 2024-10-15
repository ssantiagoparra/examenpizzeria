function calcularTotal() {
    let pizzaPrecio = parseInt(document.getElementById('pizza').value);

    let cantidad = parseInt(document.getElementById('cantidad').value);

    let total = pizzaPrecio * cantidad;

    let extras = "";

    if (document.getElementById('maiz').checked) 
    {
        total += parseInt(document.getElementById('maiz').value);
        extras += "Maiz ";
    }
    if (document.getElementById('queso').checked)
    {
        total += parseInt(document.getElementById('queso').value);
        extras += "Queso ";
    }
    if (document.getElementById('peperoni').checked) 
    {
        total += parseInt(document.getElementById('peperoni').value);
        extras += "Peperoni ";
    }
    if (document.getElementById('gaseosa').checked) 
    {
        total += parseInt(document.getElementById('gaseosa').value);
        extras += "Gaseosa ";
    }

    let pizzaElegida = document.getElementById('pizza').options[document.getElementById('pizza').selectedIndex].text;
    document.getElementById('resultado').innerHTML = 
    
    `
        Pizza elegida: ${pizzaElegida}
        <br>
        Extras: ${extras ? extras : "Ninguno"}
        <br>
        Total a pagar: $${total}
    `;
}