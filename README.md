# lingua-lift
Este proyecto tiene como finalidad el desarrollo de una web simple para llevar registro de los alumnos y clases de un instituto de ingles ficticio denominado lingua-lift

## Set up
Este proyecto está diseñado para ser ejecutado con una aplicacion estilo MAMP (Xamp o Wamp segun sea el sistema operativo)

### Servidor
1. Dentro de uno de los clientes mencionados, ubicar la raiz del proyecto en {local path}/lingua-lift
2. Configurar puerto, usuario y contraseña con los valores deseados, para el caso de Mamp los valores por defecto son:
    - Puerto: 8889
    - Usuario: root
    - Contraseña: root
### Base de datos
1. Ejecutar el script "migraciones.sql" en un cliente de mysql para generar la base de datos y las tablas
2. Ejecutar el script seeders.sql para popular las tablas con data inicial

### Acceso
- Local: http://127.0.0.1:8888/