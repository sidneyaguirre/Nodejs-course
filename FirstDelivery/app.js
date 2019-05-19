const { courses, find_subject } = require('./courses');
let { id, name, duration, cost } = courses;

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
showCourses();
