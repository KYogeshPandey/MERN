const object_of_student = 
{
  top_ranker : 'Yogesh',
  marks : 96,
  percentage : 98,
  favourite_subjects : 'Maths, Science',
  coding_languages : 'Java, JavaScript, Python',
  address : {
    permanent : 'Meerut institute of engineering and technology',
    local : 'Meerut, Uttar Pradesh',
    current : "googlemap/live/location?you.com"
  },
  phone : {
    help_line : 1800-123-456,
    whatsapp_number : 8755263636,
    personal_number : 8759964857,
    home : null
  },

  course : {

    technical : {
      c1 : 'DSA',
      c2 : 'DS',
      c3 : 'OS'
    },
    non_technical : {
      communication : 'soft_skills, speaking_skills',
      Leadership : 'aasaan hai'

    }
  }

}
// print object data
// console.log(object_of_student);

// access object property using dot notation
// console.log(object_of_student.address);
// console.log(object_of_student.marks);

// access object property using square bracket notation -- best approach
// we can use typeof of each property of object which can be primitive as well as non-primitive
// console.log(typeof object_of_student['address']);

// modification of object data
object_of_student.topranker = 'Mohit';
object_of_student.marks = 100;
object_of_student.course.non_technical.music = 'music by ma saraswati';
console.log(object_of_student);
