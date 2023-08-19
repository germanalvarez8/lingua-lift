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
            <button id="buttonTeachers" class="nav-option" onclick="getTeachers()">Profesores</button>
            <button id="buttonStudents" class="nav-option" onclick="getStudents(this)">Alumnos</button>
            <button id="buttonBooks" class="nav-option" onclick="getBooks(this)">Libros</button>
            <div class="dropdown">
                <button class="nav-option">Mi Perfil</button>
                <div class="dropdown-content">
                <a href="#">Mi Perfil</a>
                <a href="#">Salir</a>
                </div>
            </div>
        </div>
    </nav>
    <section class="layout">
        <div class="sidebar">
        <button
            class="btn btn-success"
            onclick="mostrarModalAgregar()"
        >
            <span class="icon">+</span>Agregar
        </button>
        </div>
        <div class="body" id="contenido"></div>
        <div class="footer">5</div>
    </section>

    <div id="modalAgregar" class="modal">
        <form id="formDatosPersonales" class="modal-content" name="formDatosPersonales">
            <button class="close" onclick="ocultarModal()">×</button>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre"/>

            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido"/>

            <label for="dni">Dni</label>
            <input type="text" name="dni" id="dni"/>

            <label for="edad">Edad</label>
            <input type="text" name="edad" id="edad"/>

            <label for="nacionalidad">Nacionalidad</label>
            <input type="text" name="nacionalidad" id="nacionalidad"/>

            <label for="pais_residencia">Pais de residencia</label>
            <input type="text" name="pais_residencia" id="pais_residencia"/>

            <label for="horas_disponibles">Horas disponibles</label>
            <input type="text" name="horas_disponibles" id="horas_disponibles"/>

            <label for="ocupacion">Ocupacion</label>
            <input type="text" name="ocupacion" id="ocupacion"/>

            <label for="titulo">Titulo</label>
            <input type ="text" name="titulo" id="titulo"/>

            <button class="btn btn-success" name="enviar" onclick="createTeacher(this)">Agregar</button>
        </form>
    </div>
    <script src="js/scripts.js"></script>
</body>
</html>