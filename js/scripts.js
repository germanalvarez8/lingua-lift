$( document ).ready(function() {
    getTeachers('#buttonTeachers')
})

function mostrarModalAgregar(id) {
    let modal = document.getElementById("modalAgregar");
    modal.style.visibility = "visible";
}

function ocultarModal() {
    event.preventDefault()
    let modal = document.getElementById("modalAgregar");
    modal.style.visibility = "hidden";
}

function checkButton(element) {
    let els = document.getElementsByClassName("nav-option hovered");

    [].forEach.call(els, function (el) {
        el.classList.remove("hovered")
    });

    $(element).addClass("hovered");
}

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

function getCourses()
{
    $.ajax({
        type: "POST",
        url: "app/controllers/CourseController.php",
        dataType: "json",
        data: {
            action: "getCourses"
        },
        success: function(data) {
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}

function showForm(formFields, submitMethod) {
    const formDatosPersonales = document.getElementById("formDatosPersonales");
    const elementsToRemove = Array.from(formDatosPersonales.children).filter(element => !element.classList.contains("close"));

    elementsToRemove.forEach(element => {
        formDatosPersonales.removeChild(element);
    });

    const submitButton = document.createElement("button");
    submitButton.setAttribute("class", "btn btn-success");
    submitButton.setAttribute("name", "enviar");
    submitButton.setAttribute("onclick", submitMethod);
    submitButton.textContent = 'Agregar';

    formFields.forEach(field => {
        field = makeTextInput(field.name, field.id);
        formDatosPersonales.appendChild(field);
    });

    formDatosPersonales.appendChild(submitButton);
}

function makeTextInput(label, id) {
    let textInput = document.createElement("div");
    const nombreEstudianteLabel = document.createElement("label");
    nombreEstudianteLabel.textContent = label;
    nombreEstudianteLabel.setAttribute("for", id);
    const nombreEstudianteInput = document.createElement("input");
    nombreEstudianteInput.type = "text";
    nombreEstudianteInput.name = id;
    nombreEstudianteInput.id = id;

    textInput.appendChild(nombreEstudianteLabel)
    textInput.appendChild(nombreEstudianteInput)

    return textInput;
}

function showBooksTable(data) {
    let contenido = document.getElementById("contenido");

    let htmlContent = "<table>";
    htmlContent += `<tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Editorial</th>
        <th>Fecha de publicacion</th>
    </tr>`;

    data.forEach(book => {
        htmlContent += "<tr>";
        htmlContent += "<td>" + book.id + "</td>";
        htmlContent += "<td>" + book.nombre + "</td>";
        htmlContent += "<td>" + book.editorial + "</td>";
        htmlContent += "<td>" + book.fecha_publicacion + "</td>";
        htmlContent += "</tr>";
    });

    htmlContent += "</table>";
    contenido.innerHTML = htmlContent;

    form = [
        {id: 'teacher_name', name: 'Titulo'},
        {id: 'teacher_editorial', name: 'Editorial'},
        {id: 'teacher_publication_date', name: 'Fecha de publicacion'},
    ]

    showForm(form, 'createBook()')
}