<!DOCTYPE html>
<html>
<head>
    <title>Lingua Lift</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="Public/styles.css">
</head>
<body>
    <nav>
        <div class="logo">linguaLift</div>
        <div class="nav-options">
            <button id="buttonTeachers" class="nav-option" onclick="getTeachers(this)">Profesores</button>
            <button id="buttonStudents" class="nav-option" onclick="getStudents(this)">Alumnos</button>
            <button id="buttonBooks" class="nav-option" onclick="getBooks(this)">Libros</button>
            <button id="buttonClasses" class="nav-option" onclick="getCourses(this)">Clases</button>
            <!-- <div class="dropdown">
                <button class="nav-option">Mi Perfil</button>
                <div class="dropdown-content">
                <a href="#">Mi Perfil</a>
                <a href="#">Salir</a>
                </div>
            </div> -->
        </div>
    </nav>
    <section class="layout">
        <div class="sidebar">
        <button
            id="form_add_button"
            class="btn btn-success"
            onclick="mostrarModalAgregar()"
        >
            <span class="icon">+</span>Agregar
        </button>
        </div>
        <div class="body" id="contenido"></div>
    </section>

    <div id="modalAgregar" class="modal">
        <form id="formDatosPersonales" class="modal-content" name="formDatosPersonales">
            <button class="close" onclick="ocultarModal()">×</button>
            <!-- <button class="btn btn-success" name="enviar" onclick="createTeacher(this)">Agregar</button> -->
        </form>
    </div>
    <script src="js/scripts.js"></script>
    <script src="js/teacher.js"></script>
    <script src="js/student.js"></script>
    <script src="js/book.js"></script>
    <script src="js/classes.js"></script>
</body>
</html>