var baseUrl = location.protocol + "//" + location.host + location.pathname;

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

function showForm(formFields, submitMethod) {
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
