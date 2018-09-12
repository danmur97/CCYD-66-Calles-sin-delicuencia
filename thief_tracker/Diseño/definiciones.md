# Tutorial
## (serv)
### Descripcion
* Aporta la informacion necesaria a mostrar en el tutorial
## (GUI)
* Enlazar con el servicio


# Inscripcion 
## (serv)
### Descripcion
* Obtiene los datos nesecarios del usuario para su inscripcion
* Envia al Reporter los datos del usuario
* Identifica si ya esta registrado para omitir
### Metodos
* yaRegistrado()
* inscribir(user_data)
## (GUI)
* Enlazar con el servicio


# Saver
##(serv)
### Descripcion
* Guarda y recupera informacion
### Metodos


# Zona de alarma A
## (model)
### Descripcion
* Objeto conteneor de datos de una zona de alarma
### Propiedades
* radio
* posicionGPS
* usuario
* fecha/hora
* estado
### Metodos
* crearZonaA(posicion,usuario,fecha)


# Administracion de Zonas A
## (serv)
### Descripcion
* Agrega, elimina y recive zonas A
### Propiedades
* zonasA_usuario = []
* zonasA_near = []
### Metodos
* nuevaZonaA()


# Notificador
## (serv)
* Muestra notificacion si se encuentra dendro de una zona de alarma


# Map
## (serv)
* Google maps API
* Mostrar zonas A
## (GUI)
* mostrar mapa

# Reportador
## (serv)
### Descripcion
* Puente de comunicacion con el servidor
### Metodos
* inscribirUsuario()
* reportarZonaA()
* reportarFalsaAlarma()


# GPS
## (serv)
### Descripcion
* Obtener posicion gps del usuario
### Metodos
* getGPS()


# Comando de alarma
## (serv)
### Descripcion
* Avisar cuando el comando de voz se ejecute y dar alarma.
* Permite cancelacion de la alarma.
