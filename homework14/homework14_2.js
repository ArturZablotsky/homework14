function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.courses = {};
  
    this.addCourse = function (courseName) {
      if (this.courses[courseName]) {
        console.error(`Курс "${courseName}" вже доданий.`);
        return;
      }
      this.courses[courseName] = {
        grades: [],
        attendance: [],
      };
      console.log(`Курс "${courseName}" успішно додано.`);
    };
  
    this.removeCourse = function (courseName) {
      if (!this.courses[courseName]) {
        console.error(`Курс "${courseName}" не знайдено.`);
        return;
      }
      delete this.courses[courseName];
      console.log(`Курс "${courseName}" успішно видалено.`);
    };
  
    this.getInfo = function () {
      const coursesInfo = {};
      for (const [courseName, data] of Object.entries(this.courses)) {
        coursesInfo[courseName] = {
        };
      }
      return {
        fullName: this.firstName + this.lastName,
        birthYear: this.birthYear,
        courses: coursesInfo,
      };
    };
  }
  
  const student = new Student("John", "Doe", 2000);
  
  student.addCourse("Math");
  student.addCourse("Art");
  
  console.log(student.getInfo());
  
  student.removeCourse("Art");
  
  console.log(student.getInfo());
  student.addCourse("Math");
  student.addCourse("Physics");
  
  console.log(student.getInfo());