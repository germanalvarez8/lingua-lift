<!DOCTYPE html>
<html>
<head>
    <title>Mi Página</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="Public/styles.css">
</head>
<body>
    <nav>
        <div class="logo">linguaLift</div>
        <div class="nav-options">
            <button id="buttonTeachers" class="nav-option" onclick="getTeachers(this)">Profesores</button>
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
            class="button"
            onclick="mostrarModalAgregar()"
        >
            <span class="icon">+</span>Agregar
        </button>
        <br>
        <br>
        <button
            class="button"
        >
            <span class="icon">-</span>Eliminar
        </button>
        </div>
        <div class="body" id="contenido"></div>
        <div class="footer">5</div>
    </section>

    <div id="modalAgregar" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Agregar Profesor</h2>
            <form id="formAgregarProfesor">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <br>
                <button type="submit">Agregar</button>
            </form>
        </div>
    </div>
    <script src="js/scripts.js"></script>
</body>
</html>