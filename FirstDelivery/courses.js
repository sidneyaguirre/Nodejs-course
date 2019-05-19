let courses = [
   {
      id: 10,
      name: 'Linear Algebra',
      duration: 3, //month
      cost: 2500, //COP
   }, 
   {
      id: 12,
      name: 'Programming',
      duration: 2, //month
      cost: 1500, //COP
   },
   {
      id: 13,
      name: 'English',
      duration: 3, //month
      cost: 2000, //COP
   },
   {
      id: 14,
      name: 'History',
      duration: 2, //month
      cost: 800, //COP
   },
   {
      id: 16,
      name: 'Geometry',
      duration: 3, //month
      cost: 2000, //COP
   },
];


function find_subject(a){
   let subject = courses.find(subject => subject.id === a);
   console.log(a);
   return subject;
}

let showCourses = () => {
   for(let i = 0; i < courses.length; i++) {
      setTimeout(function(){
         console.log(courses[i])
      }, i*2000);
   };
};

module.exports = {
   courses,
   find_subject,
   showCourses,
};

