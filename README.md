# Nodejs Fundamentals

This project is about getting information about available courses and being able to enroll any course,
it also has to generate a text file, saving the information of the enrolment and notify if it was or not successful.

#### To access the project:
It is necessary to change directory to FirstDelivery and then to execute:
#### `git checkout node-fundamentals`
(the branch containing the enrolment activity - first delivery) 

### Dependencies installation for the project:

To install the dependencies for the project, in the project directory, you can run:
#### `npm i yargs`

**NOTE:** All the files generated for the enrollments in the courses are saved in the directory called **_'enrolments'_**.

To execute the application and view the available courses, you can run:
#### `node app.js` 

To view the courses available:
#### `node app.js oferta`

To enroll in a course of your interest:
#### `node app.js inscribir --name='name' --idnumber='id' --courseid='course'`
or
#### `node app.js inscribir -n='name' -i='id' -c='course'`
(replacing the values of each flag with your data and without the '')



***

### Para acceder al proyecto:
Estando en el directorio del proyecto, se debe cambiar al directorio FirstDelivery
Luego se debe cambiar a la rama node-fundamentals con el comando:
#### `git checkout node-fundamentals`

### Dependencias del Proyecto:
Para instalar las dependencias, en el directorio del proyecto puedes ejecutar: 
#### `npm i yargs` 

**NOTA:** Todos los archivos generados como prematriculas en los cursos se guardan en la carpeta **_'enrolments'_**.

Para ejecutar la aplicación y para ver los cursos disponibles, puede ejecutar:
#### `node app.js` 

Para ver la oferta de cursos:
#### `node app.js oferta`

Para inscribirse en un curso de su interés:
#### `node app.js inscribir --name='name' --idnumber='id' --courseid='course'` 
ó
#### `node app.js inscribir -n='name' -i='id' -c='course'`
(reemplazando los valores después de cada bandera con sus datos y sin las '')


#### PASOS:
1. Clonar repositorio
2. Acceder al directorio: Nodejs-introduction
3. Cambiarse de la rama master a la rama node-fundamentals usando el comando `git checkout node-fundamentals`
4. Ejecutar el comando `npm i yargs`
5. Ejecutar la aplicación
