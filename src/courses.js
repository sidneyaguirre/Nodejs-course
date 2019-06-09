/* List of courses available */

let courses = [
   {
      id: 10,
      name: 'Algebra Lineal',
      duration: 3, //month
      cost: 2500, //COP
   }, 
   {
      id: 11,
      name: 'Programacion',
      duration: 2, //month
      cost: 1500, //COP
   },
   {
      id: 12,
      name: 'Ingles',
      duration: 3, //month
      cost: 2000, //COP
   },
   {
      id: 13,
      name: 'Historia',
      duration: 2, //month
      cost: 800, //COP
   },
   {
      id: 18,
      name: 'Dibujo',
      duration: 2, //month
      cost: 2000, //COP
   },
   {
      id: 19,
      name: 'Pintura',
      duration: 2, //month
      cost: 2000, //COP
   },
];


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

/* Exports the list of courses */
module.exports = {
   courses,
   signup,
};

