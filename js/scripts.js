const PROTOCOL = location.protocol;
const HOST = location.host;
const BASE_URL = '/lingua-lift';
const BASE_PATH = PROTOCOL + '//' + HOST + BASE_URL + '/';

let baseUrl = BASE_PATH;

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
    const textInputLabel = document.createElement("label");
    textInputLabel.textContent = label;
    textInputLabel.setAttribute("for", id);
    const input = document.createElement("input");
    input.type = "text";
    input.name = id;
    input.id = id;
    input.required = true;

    textInput.appendChild(textInputLabel)
    textInput.appendChild(input)

    return textInput;
}
