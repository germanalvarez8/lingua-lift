function getBooks(element)
{
    checkButton(element)

    $.ajax({
        type: "POST",
        url: "app/controllers/BookController.php",
        dataType: "json",
        data: {
            action: "getBooks"
        },
        success: function(data) {
            showBooksTable(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}

function showBooksTable(data) {
    let contenido = document.getElementById("contenido");

    let htmlContent = "<table>";
    htmlContent += `<tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Editorial</th>
        <th>Fecha de publicacion</th>
        <th>Accion</th>
    </tr>`;

    data.forEach(book => {
        htmlContent += "<tr>";
        htmlContent += "<td>" + book.id + "</td>";
        htmlContent += "<td>" + book.nombre + "</td>";
        htmlContent += "<td>" + book.editorial + "</td>";
        htmlContent += "<td>" + book.fecha_publicacion + "</td>";
        htmlContent += `<td><button value="${book.id}" class="btn btn-danger" onclick="deleteBook(this)">Borrar</button></td>`;
        htmlContent += "</tr>";
    });

    htmlContent += "</table>";
    contenido.innerHTML = htmlContent;

    form = [
        {id: 'book_name', name: 'Titulo'},
        {id: 'book_editorial', name: 'Editorial'},
        {id: 'book_publication_date', name: 'Fecha de publicacion'},
    ]

    showForm(form, 'createBook()')
}

function createBook() {
    const formDatosPersonales = document.getElementById('formDatosPersonales');
    const formData = new FormData(formDatosPersonales);
    const formDataObject = Object.fromEntries(formData);

    $.ajax({
        type: "POST",
        url: "app/controllers/BookController.php",
        dataType: "json",
        data: {
            action: "addBook",
            body: formDataObject
        },
        success: function(data) {
            getBooks()
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            alert(thrownError);
        }
    });
}

function deleteBook(element) {
    $.ajax({
        type: "POST",
        url: "app/controllers/BookController.php",
        dataType: "json",
        data: {
            action: "deleteBook",
            body: {bookId: element.value}
        },
        success: function(data) {
            event.preventDefault()
            getBooks()
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}