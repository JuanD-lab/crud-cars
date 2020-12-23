const autos = [
    {
        id: 1,
        brand: 'Ford',
        model: 'Fiesta',
        color: 'White',
        date: 2020,
        price: 250000
    },
    {
        id: 2,
        brand: 'Chevrolet',
        model: 'Camaro',
        color: 'White',
        date: 2020,
        price: 450000
    },
    {
        id: 3,
        brand: 'Ford',
        model: 'Fiesta',
        color: 'White',
        date: 2020,
        price: 250000
    },
    {
        id: 4,
        brand: 'Ford',
        model: 'Fiesta',
        color: 'White',
        date: 2020,
        price: 250000
    }
];

function totalAutos() {
    const total = document.getElementById('total-autos');
    let html = autos.length;
    total.innerHTML = html;
}

function printAutos() {
    const container = document.getElementById('container-autos');
    let html = '';
    autos.forEach((auto) => {
        html += `<tr>
                    <td>${auto.brand}</td>
                    <td>${auto.model}</td>
                    <td>${auto.color}</td>
                    <td>${auto.date}</td>
                    <td>${auto.price}</td>
                    <td>
                        <button onclick="deleteAuto(${auto.id})" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteAuto(id) {
    const index = autos.findIndex((auto) => auto.id == id );
    autos.splice(index, 1);

    printAutos();
    totalAutos();
}

function addAutos() {
    const id = autos.length === 0 ? 1 : autos[autos.length -1].id + 1;

    const brand = document.getElementById('brand').value;

    const model = document.getElementById('model').value;

    const color = document.getElementById('color').value;

    const date = document.getElementById('date').value;

    const price = document.getElementById('price').value;
    

    const newAuto = {
        id,
        brand,
        model,
        color,
        date,
        price
    }
    autos.push(newAuto);
    printAutos();
    totalAutos();

    document.getElementById('form-auto').reset();
}

totalAutos();
printAutos();