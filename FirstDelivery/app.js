const { courses } = require('./courses');
const fs = require('fs')


/* Print all the courses offered and their information */
//function definition: 
let showCourses = () => {
   console.log('\nEducación Superior\n     Cursos disponibles:\n');
   let course, info = ''
   for(let i = 0; i < courses.length; i++) {
      setTimeout(function() {
         course = courses[i]
         info = `El curso codigo[${course.id}] - ${course.name} - tiene una duración de ${course.duration} meses y un costo de $${course.cost} COP`
         console.log(info)
      }, i * 2000);
   };
};


/* To find a course given its id */
//function definition: 
function find_subject(a) {
   let subject = courses.find(subject => subject.id === a);
   /* If it is not possible to find the course in the list of available courses */
   if(subject == undefined) {
      console.log('No existe el curso con el id ' + a + '. Por favor verifique la informacion')
   }
   return subject;
};




/* Declares the details of the enrollment: 
name of the interested person, 
citizen card id number & course id */
signup = {
   name: {
      alias: 'n',
      demand: true,
   },
   idnumber: {
      alias: 'i',
      demand: true,
   },
   courseid: {
      alias: 'c',
      demand: true,
   }
}

/* allows the implementation of the command line for the enrollment */
const argv = require('yargs')
   .command('inscribir', 'enroll a course', signup)
   .argv


/* Application */
if(((argv._).length >= 1) && (argv._[0] === 'inscribir')) {

   /* Creation of the file within the details of the enrollment */
   //function definition: 
   let signup_file = (course, name, identification) => {
      /* gets the id provided by the person who wants to enroll the course */
      let ci = course;
      let ip = name;
      let idn = identification;
      /* Looks for the existance of the course */
      let subject = find_subject(ci);
      /* In the case where the course is not in the list of available courses */
      if(subject == undefined) {
         console.log('No es posible realizar la inscripcion')
         return;
      };
      console.log(`\nEl curso de ${subject.name} con codigo[${subject.id}] tiene una duracion de ${subject.duration} meses y un costo de ${subject.cost} COP\n`);
      /* Creates the text structure for the file */
      let enrollmentDetails = 'Nombre del estudiante: ' + ip + '\n' +
         'Cédula del estudiante: ' + idn + '\n' + 'Código: [' + subject.id + ']\n' +
         'Materia: ' + subject.name + '\n' +
         'Duracion: ' + subject.duration + ' meses \n' +
         'Costo: ' + subject.cost + ' COP\n' + '\n*COP: Pesos Colombianos';
      let filename = 'prematricula' + ip + idn;
      let filepath = './enrolments/' + filename;
      /* Creates and saves the file in the especified directory*/
      fs.writeFile(filepath, enrollmentDetails, (err) => {
         if(err) throw err;
         /* Notification of success */
         console.log('Inscripción realizada.');
      });
   }

   /* gets the id of the course provided by the person who wants to enroll the course */
   let ci = argv.courseid;
   /* gets the name of the person who wants to enroll the course */
   let ip = argv.name;
   /* gets the identification number of the person who wants to enroll the course */
   let idn = argv.idnumber;

   /* Creates the enrollment file with the course information and interested person */
   signup_file(ci, ip, idn);

} else if((argv._).length === 0) {

   //function calling:
   showCourses();

} else {
   /* When any other command is trying to be executed */
   console.log('No se reconoce el comando ingresado, por favor intentelo de nuevo.');
};