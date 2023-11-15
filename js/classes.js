async function getCourses(element)
{
    if (element) {
        checkButton(element)
    }

    try {
        const data = await getClassesList();
        showClassesTable(data);
    } catch (error) {
        console.error(error);
        alert("Error al obtener la lista de profesores");
    }
}

function getClassesList() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "app/controllers/CourseController.php",
            dataType: "json",
            data: {
                action: "getCourses"
            },
            success: function(data) {
                resolve(data)
            },
            error: function (xhr, ajaxOptions, thrownError) {
                reject(thrownError);
            }
        });
    });
}

async function showClassesTable(data) {
    let contenido = document.getElementById("contenido");

    let htmlContent = "<table>";
    htmlContent += `<tr>
        <th>Profesor</th>
        <th>Alumno</th>
        <th>Libro</th>
        <th></th>
    </tr>`;

    data.forEach(clase => {
        htmlContent += "<tr>";
        htmlContent += "<td>" + clase.nombre_profesor + "</td>";
        htmlContent += "<td>" + clase.nombre_alumno + "</td>";
        htmlContent += "<td>" + clase.nombre + "</td>";
        htmlContent += `<td><button value="${clase.id}" class="btn btn-danger" onclick="deleteCourse(this)">Borrar</button></td>`;
        htmlContent += "</tr>";
    });

    htmlContent += "</table>";
    contenido.innerHTML = htmlContent;

    let teachers = await getTeachersList()
    let students = await getStudentsList()
    let books = await getBooksList()

    let form = [
        { id: 'course_teacher', name: 'Profesor', values: teachers},
        { id: 'course_student', name: 'Alumno', values: students},
        { id: 'course_book', name: 'Libro', values: books},
    ];

    console.log(teachers, students, books);
    showCoursesForm(form, 'submitCourse()');
}

function showCoursesForm(formFields, submitMethod) {
    const formDatosPersonales = document.getElementById("formDatosPersonales");

    if (formDatosPersonales.children) {
        const elementsToRemove = Array.from(formDatosPersonales.children).filter(element => !element.classList.contains("close"));

        elementsToRemove.forEach(element => {
            formDatosPersonales.removeChild(element);
        });
    }

    const submitButton = document.createElement("button");
    submitButton.setAttribute("class", "btn btn-success");
    submitButton.setAttribute("name", "enviar");
    submitButton.setAttribute("onclick", submitMethod);
    submitButton.textContent = 'Agregar';

    formFields.forEach(field => {
        const select = document.createElement("select");
        select.setAttribute("name", field.id);

        field.values.forEach(value => {
            const option = document.createElement("option");
            option.setAttribute("value", value.id);
            option.textContent = `${value.nombre} ${value.apellido || ''}`;
            select.appendChild(option);
        });

        formDatosPersonales.appendChild(select);
    });

    formDatosPersonales.appendChild(submitButton);
}

function submitCourse() {
    event.preventDefault()

    const formCurso = document.getElementById('formDatosPersonales');
    const formData = new FormData(formCurso);
    const formDataObject = Object.fromEntries(formData);

    $.ajax({
        type: "POST",
        url: "app/controllers/CourseController.php",
        dataType: "json",
        data: {
            action: "addCourse",
            body: formDataObject
        },
        success: function(data) {
            event.preventDefault()

            getCourses()
        },
        error: function (xhr, ajaxOptions, thrownError) {
            event.preventDefault()

            console.log(xhr, ajaxOptions, thrownError);
            alert(thrownError);
        }
    });
}

function deleteCourse(element) {
    $.ajax({
        type: "POST",
        url: "app/controllers/CourseController.php",
        dataType: "json",
        data: {
            action: "deleteCourse",
            body: {courseId: element.value}
        },
        success: function(data) {
            event.preventDefault()
            getCourses()
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}