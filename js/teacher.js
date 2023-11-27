var baseUrl = location.protocol + "//" + location.host + location.pathname;

async function getTeachers(element) {
    if (element) {
        checkButton(element);
    }

    try {
        const data = await getTeachersList();
        showTeachersTable(data);
    } catch (error) {
        alert("Error al obtener la lista de profesores");
    }
}

function getTeachersList() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: baseUrl + "App/Controllers/TeacherController.php",
            dataType: "json",
            data: {
                action: "getTeachers"
            },
            success: function (data) {
                resolve(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.responseText);
                reject(thrownError);
            }
        });
    });
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

    form = [
        {id: 'teacher_name', name: 'Nombre'},
        {id: 'teacher_last_name', name: 'Apellido'},
        {id: 'teacher_dni', name: 'Dni'},
        {id: 'teacher_age', name: 'Edad'},
        {id: 'teacher_country', name: 'Nacionalidad'},
        {id: 'teacher_residency', name: 'Pais de residencia'},
        {id: 'teacher_weekly_hours', name: 'Horas disponibles'},
        {id: 'teacher_occupation', name: 'Ocupacion'},
        {id: 'teacher_title', name: 'Titulo'},
    ]

    showForm(form, 'createTeacher()')
}

function deleteTeacher(element) {
    $.ajax({
        type: "POST",
        url: baseUrl + "App/Controllers/TeacherController.php",
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

function createTeacher() {
    const formDatosPersonales = document.getElementById('formDatosPersonales');
    const formData = new FormData(formDatosPersonales);
    const formDataObject = Object.fromEntries(formData);

    $.ajax({
        type: "POST",
        url: baseUrl + "App/Controllers/TeacherController.php",
        dataType: "json",
        data: {
            action: "addTeacher",
            body: formDataObject
        },
        success: function(data) {
            alert('Profesor agregado correctamente! ')
        },
        error: function (xhr, ajaxOptions, thrownError) {
            event.preventDefault();
            alert(thrownError);
        }
    });
}