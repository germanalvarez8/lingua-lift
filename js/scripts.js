$( document ).ready(function() {
    getTeachers('#buttonTeachers')
})

function mostrarModalAgregar() {
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

function getTeachers()
{
    checkButton('#buttonTeachers')

    $.ajax({
        type: "POST",
        url: "app/controllers/TeacherController.php",
        dataType: "json",
        data: {
            action: "getTeachers"
        },
        success: function(data) {
            console.log(data);
            showTeachersTable(data)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}

function getStudents(element)
{
    checkButton(element)

    $.ajax({
        type: "POST",
        url: "app/controllers/StudentController.php",
        dataType: "json",
        data: {
            action: "getStudents"
        },
        success: function(data) {
            console.log(data);
            showStudentsTable(data)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
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
            console.log(data);
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
            console.log(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}

function showStudentsTable(data) {
    let contenido = document.getElementById("contenido");

    let htmlContent = "<table>";
    htmlContent += `<tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Dni</th>
        <th>Edad</th>
        <th>Nacionalidad</th>
        <th>Lugar de Residencia</th>
        <th>Teléfono</th>
        <th>Email</th>
        <th>Horas Semanales</th>
        <th>Objetivo</th>
        <th>Tiene Deudas</th>
    </tr>`;

    data.forEach(student => {
        deudas = student.atraso_pagos == "0" ? 'No' : 'Si'
        htmlContent += "<tr>";
        htmlContent += "<td>" + student.id + "</td>";
        htmlContent += "<td>" + student.nombre + "</td>";
        htmlContent += "<td>" + student.apellido + "</td>";
        htmlContent += "<td>" + student.dni + "</td>";
        htmlContent += "<td>" + student.edad + "</td>";
        htmlContent += "<td>" + student.nacionalidad + "</td>";
        htmlContent += "<td>" + student.residencia + "</td>";
        htmlContent += "<td>" + student.telefono + "</td>";
        htmlContent += "<td>" + student.mail + "</td>";
        htmlContent += "<td>" + student.horas_cursado + "</td>";
        htmlContent += "<td>" + student.objetivo + "</td>";
        htmlContent += "<td>" + deudas + "</td>";
        htmlContent += "</tr>";
    });

    htmlContent += "</table>";
    contenido.innerHTML = htmlContent;
}

function showTeachersTable(data) {
    let contenido = document.getElementById("contenido");

    let htmlContent = "<table>";
    htmlContent += `<tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Dni</th>
        <th>Edad</th>
        <th>Nacionalidad</th>
        <th>Pais de residencia</th>
        <th>Horas disponibles</th>
        <th>Ocupacion</th>
        <th>Titulo</th>
        <th>Trabaja con niños</th>
        <th></th>
    </tr>`;

    data.forEach(teacher => {
        hasTitle = teacher.titulo == "0" ? 'No' : 'Si'
        workWithKids = teacher.trabaja_ninos == "0" ? 'No' : 'Si'

        htmlContent += "<tr>";
        htmlContent += "<td>" + teacher.id + "</td>";
        htmlContent += "<td>" + teacher.nombre + "</td>";
        htmlContent += "<td>" + teacher.apellido + "</td>";
        htmlContent += "<td>" + teacher.dni + "</td>";
        htmlContent += "<td>" + teacher.edad + "</td>";
        htmlContent += "<td>" + teacher.nacionalidad + "</td>";
        htmlContent += "<td>" + teacher.pais_residencia + "</td>";
        htmlContent += "<td>" + teacher.horas_disponibles + "</td>";
        htmlContent += "<td>" + teacher.ocupacion + "</td>";
        htmlContent += "<td>" + hasTitle + "</td>";
        htmlContent += "<td>" + workWithKids + "</td>";
        htmlContent += `<td><button value="${teacher.id}" class="btn btn-danger" onclick="deleteTeacher(this)">Borrar</button></td>`;
        htmlContent += "</tr>";
    });

    htmlContent += "</table>";
    contenido.innerHTML = htmlContent;
}

function deleteTeacher(element) {
    $.ajax({
        type: "POST",
        url: "app/controllers/TeacherController.php",
        dataType: "json",
        data: {
            action: "deleteTeacher",
            body: {teacherId: element.value}
        },
        success: function(data) {
            if (data) {
                getTeachers()
            }
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
}

function createTeacher() {
    const formDatosPersonales = document.getElementById('formDatosPersonales');
    const formData = new FormData(formDatosPersonales);
    const formDataObject = Object.fromEntries(formData);

    $.ajax({
        type: "POST",
        url: "app/controllers/TeacherController.php",
        dataType: "json",
        data: {
            action: "addTeacher",
            body: formDataObject
        },
        success: function(data) {
            console.log(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            alert(thrownError);
        }
    });
}