# Nodejs Fundamentals

This project is about getting information about available courses and being able to enroll any course,
it also has to generate a text file, saving the information of the enrolment and notify if it was or not successful.

#### To access the project:
It is necessary to execute:
#### `git checkout node-fundamentals`
(the branch containing the enrolment activity - first delivery) and the change directory to FirstDelivery

### Dependencies installation for the project:

In the project directory, you can run:
#### `npm i yargs`
To install the dependencies for the project.

**NOTE:** All the files generated for the enrollments in the courses are saved in the directory called **_'enrolments'_**.

To execute the application and view the available courses, you can run:
#### `node app.js` 

To enroll in a course of your interest
#### `node app.js inscribir --name='name' --idnumber='id' --courseid='course'`
or
#### `node app.js inscribir -n='name' -i='id' -c='course'`
(replacing the values of each flag with your data and without the '')



***

### Para acceder al proyecto:
se debe cambiar a la rama node-fundamentals con el comando:
#### `git checkout node-fundamentals`
y cambiar al directorio FirstDelivery

### Dependencias del Proyecto:
En el directorio del proyecto puedes ejecutar: 
#### `npm i yargs` 
para instalar las dependencias.
**NOTA:** Todos los archivos generados como prematriculas en los cursos se guardan en la carpeta **_'enrolments'_**.

Para ejecutar la aplicación y para ver los cursos disponibles, puede ejecutar:
#### `node app.js` 

Para inscribirse en un curso de su interés:
#### `node app.js inscribir --name='name' --idnumber='id' --courseid='course'` 
ó
#### `node app.js inscribir -n='name' -i='id' -c='course'`
(reemplazando los valores después de cada bandera con sus datos y sin las '')


