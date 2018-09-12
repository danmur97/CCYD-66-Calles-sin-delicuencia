# Administradorde usuario
## Descripcion
Obtiene los datos nesecarios del usuario para su inscripcion
Identifica si ya esta registrado para omitir
## Metodos
yaRegistrado()
inscribir(user_data)


# Tutorial
## Descripcion
Aporta la informacion necesaria a mostrar en el tutorial

#Saver
## Descripcion
Guarda y recupera informacion
## Metodos


# Zona de alarma A
## Descripcion
Objeto conteneor de datos de una zona de alarma
## Propiedades
radio
posicionGPS
usuario
fecha/hora
estado
## Metodos
crearZonaA(posicion,usuario,fecha)


# Administracion de Zonas A
## Descripcion
Agrega, elimina y recive zonas A
## Propiedades
zonasA_usuario = []
zonasA_near = []
## Metodos
nuevaZonaA()


# Reportador
## Descripcion
Puente de comunicacion con el servidor
## Metodos
inscribirUsuario()
reportarZonaA()
reportarFalsaAlarma()


# GPS
## Descripcion
Obtener posicion gps del usuario
## Metodos
getGPS()


# Comando de alarma
## Descripcion
Avisar cuando el comando de voz se ejecute y dar alarma.
Permite cancelacion de la alarma.
