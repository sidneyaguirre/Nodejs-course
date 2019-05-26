const { courses } = require('./details');
const fs = require('fs')


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
      /* Creates the text structure for the file */
      let enrollmentDetails = 'Datos de Inscripción:' + '\n' +
         'Nombre del estudiante: ' + ip + '\n' +
         'Cédula del estudiante: ' + idn + '\n' + 'Código: [' + subject.id + ']\n' +
         'Materia: ' + subject.name + '\n' +
         'Duracion: ' + subject.duration + ' meses \n' +
         'Costo: ' + subject.cost + ' COP\n' + '\n*COP: Pesos Colombianos';
      let filename = 'prematricula_' + ip + idn;
      let filepath = './enrolments/' + filename;
      if(fs.existsSync(filepath)){
         let f = Math.round(Math.random()*10)
         filepath = filepath + '_' + f
      }
      /* Creates and saves the file in the especified directory*/
      fs.writeFile(filepath, enrollmentDetails, (err) => {
         if(err) throw err;
         /* Notification of success */
         console.log('Inscripción realizada.');
         console.log(`\n${ip} con documento número ${idn} ha quedado inscrito en el curso de ${subject.name} con codigo[${subject.id}],\nel cual tiene una duracion de ${subject.duration} meses y un costo de ${subject.cost} COP\n`);
      });
   }

/* Print all the courses offered and their information */
//function definition: 
let show_courses = () => {
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


module.exports = {
   signup_file,
   show_courses,
}