# Nodejs Fundamentals

This project is about getting information about available courses and being able to enroll any course,
it also has to generate a text file, saving the information of the enrolment and notify if it was or not successful.

### Dependencies installation for the project:

In the project directory, you can run:
#### `npm i yargs`
To install the dependencies for the project.
All the files generated for the enrollments in the courses are saved in the directory called **_'enrolments'_**.

To execute the application, you can run:

#### `node app.js` 
to view the available courses

#### `node app.js inscribir --name='name' --idnumber='id' --courseid='course'`
or
#### `node app.js inscribir -n='name' -i='id' -c='course'`
to enroll in a course of your interest
(replacing the values after '=' with your data and without the '')



***
### Dependencias del Proyecto:
En el directorio del proyecto puedes ejecutar: `npm i yargs` para instalar las dependencias.
Todos los archivos generados como prematriculas en los cursos se guardan en la carpeta **_'enrolments'_**.

Para ejecutar la aplicación, puede ejecutar:

#### `node app.js` 
para ver los cursos disponibles

#### `node app.js inscribir --name='name' --idnumber='id' --courseid='course'` 
ó
#### `node app.js inscribir -n='name' -i='id' -c='course'`
Para inscribirse en un curso de su interés.
(reemplazando los valores después de '=' con sus datos y sin las '')

