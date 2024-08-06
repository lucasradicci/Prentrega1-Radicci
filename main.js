let electrodomestico1 = "Televisor";
let electrodomestico1Precio = 300;

let electrodomestico2 = "Heladera";
let electrodomestico2Precio = 500;

let electrodomestico3 = "Microondas";
let electrodomestico3Precio = 100;

let electrodomestico4 = "Lavadora";
let electrodomestico4Precio = 400;

let electrodomestico5 = "Horno electrico";
let electrodomestico5Precio = 200;

// Función para mostrar los productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    console.log("1. " + electrodomestico1 + " - " + electrodomestico1Precio);
    console.log("2. " + electrodomestico2 + " - " + electrodomestico2Precio);
    console.log("3. " + electrodomestico3 + " - " + electrodomestico3Precio);
    console.log("4. " + electrodomestico4 + " - " + electrodomestico4Precio);
    console.log("5. " + electrodomestico5 + " - " + electrodomestico5Precio);
}

// Función para seleccionar productos y calcular el costo total
function seleccionarProductos() {
    let total = 0;
    let continuar = true; 

    while (continuar) {
        let seleccion = prompt("Seleccione un producto (1-5) o escriba 'fin' para terminar:");

        // Algoritmo condicional para verificar la selección
        if (seleccion === 'fin') {
            continuar = false;
        } else {
            seleccion = parseInt(seleccion, 10);
            if (seleccion === 1) {
                total += electrodomestico1Precio;
                console.log("Añadido: " + electrodomestico1 + " - " + electrodomestico1Precio);
            } else if (seleccion === 2) {
                total += electrodomestico2Precio;
                console.log("Añadido: " + electrodomestico2 + " - " + electrodomestico2Precio);
            } else if (seleccion === 3) {
                total += electrodomestico3Precio;
                console.log("Añadido: " + electrodomestico3 + " - " + electrodomestico3Precio);
            } else if (seleccion === 4) {
                total += electrodomestico4Precio;
                console.log("Añadido: " + electrodomestico4 + " - " + electrodomestico4Precio);
            } else if (seleccion === 5) {
                total += electrodomestico5Precio;
                console.log("Añadido: " + electrodomestico5 + " - " + electrodomestico5Precio);
            } else {
                console.log("Selección inválida. Por favor, seleccione un número del 1 al 5 o 'fin' para terminar.");
            }
        }
    }

    console.log("El costo total es: " + total);
}

// Inicializar el simulador
function iniciarSimulador() {
    mostrarProductos();
    seleccionarProductos();
}


iniciarSimulador();