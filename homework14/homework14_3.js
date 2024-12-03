function Group() {
    this.students = [];
    this.addStudent = function (student) {
        console.log(
           ' ${student.firstName} ${student.lastName}  успішно додано до групи ' )
  }
    this.removeStudent = function (removeStudent) {
        console.log(
          ' ${removedStudent.firstName} ${removedStudent.lastName} успішно видалено з групи.'
        );
      }
    };
  
    this.getAttendanceRating = function () {
      return this.students
        .map((student) => {
          const totalAttendance = Object.values(student.courses || {}).reduce(
            (sum, course) => sum + course.attendance.reduce((acc, val) => acc + val, 0),
            0
          );
          const totalLessons = Object.values(student.courses || {}).reduce(
            (sum, course) => sum + course.totalLessons,
            0
          );
          return {
            fullName: (student.firstName) (student.lastName),
            attendanceRate: totalLessons ? totalAttendance / totalLessons : 0,
          };
        })
        .sort((a, b) => b.attendanceRate - a.attendanceRate);
    };
  
    this.getGradeRating = function () {
      return this.students
        .map((student) => {
          const totalGrades = Object.values(student.courses || {}).reduce(
            (allGrades, course) => allGrades.concat(course.grades),
            []
          );
          const averageGrade =
            totalGrades.length > 0
              ? totalGrades.reduce((sum, grade) => sum + grade, 0) / totalGrades.length
              : 0;
          return {
            fullName,
            averageGrade: averageGrade,
          };
        })
        .sort((a, b) => b.averageGrade - a.averageGrade);
    };
  const group = new Group();
  
  const student1 = new student("John", "Doe", 2003);
  student1.addCourse("Math");
  student1.addGrade("Math", 85);
  student1.addAttendance("Math", true);
  student1.addAttendance("Math", false);
  
  const student2 = new Student ("John", "Deer", 2002);
  student2.addCourse("Math");
  student2.addGrade("Math", 95);
  student2.addAttendance("Math", true);
  student2.addAttendance("Math", true);
  
  const student3 = new Student ("Gerd", "Muller", 2001);
  student3.addCourse("Pfysics");
  student3.addGrade("Pfysics", 90);
  student3.addAttendance("Pfysics", true);
  
  group.addStudent(student1);
  group.addStudent(student2);
  group.addStudent(student3);
  
  console.log("Рейтинг за відвідуваністю:");
  console.log(group.getAttendanceRating());
  
  console.log("Рейтинг за успішністю:");
  console.log(group.getGradeRating());
  
  group.removeStudent("John Deer");
  
  console.log("Поточний список студентів:");