function Student(firstName, lastName, birthYear, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.course = course;
    this.grades = [];
    this.attendance = [];
    this.totalLessons = this.course * 10;
  
    this.addGrade = function (grade) {
      this.grades.push(grade);
    };
  
    this.addAttendance = function (present) {
      this.attendance.push(present ? 1 : 0);
    };
  
    this.getAverageGrade = function () {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((a, b) => a + b, 0);
      return sum / this.grades.length;
    };
  
    this.getAverageAttendance = function () {
      if (this.attendance.length === 0) return 0;
      const sum = this.attendance.reduce((a, b) => a + b, 0);
      return sum / this.attendance.length;
    };
  
    this.getPassedLessons = function () {
      return this.attendance.length;
    };
  
    this.changeCourse = function (newCourse) {
      this.course = newCourse;
      this.totalLessons = this.course * 10;
      this.attendance = [];
      console.log(`Курс змінено на ${newCourse}.`);
    };
  
    this.getInfo = function () {
      return {
        fullName: this.firstName + this.lastName,
        birthYear: this.birthYear,
        course: this.course,
        averageGrade: this.getAverageGrade(),
        averageAttendance: this.getAverageAttendance(),
        totalLessons: this.totalLessons,
        passedLessons: this.getPassedLessons(),
      };
    };
  }
  const student = new Student("John", "Doe", 2000, 2);
  
  student.addGrade(88);
  student.addGrade(99);
  student.addAttendance(true);
  student.addAttendance(false);
  
  console.log(student.getInfo());
  
  student.changeCourse(3);
  student.addAttendance(true);
  
  console.log(student.getInfo());
  
  student.changeCourse(4);
  student.addAttendance(true);
  
  console.log(student.getInfo());