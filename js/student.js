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
        <th>Accion</th>
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
        htmlContent += `<td><button value="${student.id}" class="btn btn-danger" onclick="deleteStudent(this)">Borrar</button></td>`;
        htmlContent += "</tr>";
    });

    htmlContent += "</table>";
    contenido.innerHTML = htmlContent;

    form = [
        {id: 'student_dni', name: 'Dni del Estudiante'},
        {id: 'student_name', name: 'Nombre del Estudiante'},
        {id: 'student_last_name', name: 'Apellido del Estudiante'},
        {id: 'student_age', name: 'Edad'},
        {id: 'student_country', name: 'Nacionalidad'},
        {id: 'student_residency', name: 'Lugar de Residencia'},
        {id: 'student_phone', name: 'Teléfono'},
        {id: 'student_email', name: 'Email'},
        {id: 'student_weekly_hours', name: 'Horas Semanales'},
        {id: 'student_goal', name: 'Objetivo'},
        {id: 'student_debts', name: 'Tiene Deudas'},
    ]

    showForm(form, 'createStudent()')
}

async function getStudents(element)
{
    if (element) {
        checkButton(element)
    }

    try {
        const data = await getStudentsList();
        showStudentsTable(data);
    } catch (error) {
        console.error(error);
        alert("Error al obtener la lista de estudiantes");
    }
}

function getStudentsList() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: baseUrl + "App/Controllers/StudentController.php",
            dataType: "json",
            data: {
                action: "getStudents"
            },
            success: function(data) {
                resolve(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.responseText);
                reject(thrownError);
            }
        });
    });
}

function createStudent() {
    event.preventDefault();
    const formDatosPersonales = document.getElementById('formDatosPersonales');
    const formData = new FormData(formDatosPersonales);
    const formDataObject = Object.fromEntries(formData);

    $.ajax({
        type: "POST",
        url: baseUrl + "App/Controllers/StudentController.php",
        dataType: "json",
        data: {
            action: "addStudent",
            body: formDataObject
        },
        success: function(data) {
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
            alert(thrownError);
        }
    });
}

function deleteStudent(element) {
    $.ajax({
        type: "POST",
        url: baseUrl + "App/Controllers/StudentController.php",
        dataType: "json",
        data: {
            action: "deleteStudent",
            body: {studentId: element.value}
        },
        success: function(data) {
            if (data) {
                getStudents()
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}