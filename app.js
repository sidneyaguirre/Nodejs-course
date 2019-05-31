const { signup_file, show_courses } = require('./app/enrolment')


/* allows the implementation of the command line for the enrollment */
const argv = require('yargs')
   .command('inscribir', 'enroll a course', signup)
   .command('oferta', 'see the available courses')
   .argv


/* Application */
if(((argv._).length >= 1) && (argv._[0] === 'inscribir')) {

   /* gets the id of the course provided by the person who wants to enroll the course */
   let ci = argv.courseid;
   /* gets the name of the person who wants to enroll the course */
   let ip = argv.name;
   /* gets the identification number of the person who wants to enroll the course */
   let idn = argv.idnumber;

   /* Creates the enrollment file with the course information and interested person */
   signup_file(ci, ip, idn);

} else if(((argv._).length >= 1) && (argv._[0] === 'oferta')) {

   //function calling:
   show_courses();

} else {
   /* When any other command is trying to be executed */
   console.log('No se reconoce el comando ingresado, por favor intentelo de nuevo.');
};