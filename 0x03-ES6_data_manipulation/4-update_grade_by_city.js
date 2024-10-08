/**
 * Retrieves  an array of students for a specific city with their new grade.
 * @param {Array} studentList - An array of student objects, each containing
 * - {number} id - The student's unique identifier.
 * - {string} firstName - The student's first name
 * - {string} location - The city where the student is located.
 * @param {string} city - The name of the city to filter students by.
 * @param {Array} newGrade - an array of object containing the grade of the
 * student and the student id.
 *
 * @returns {Array} an array of students for a specific city with their new grade.
 */

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (studentList instanceof Array) {
    return studentList
      .filter((student) => student.location === city)
      .map((student) => {
        const gradeUpdate = newGrades
          .find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: gradeUpdate ? gradeUpdate.grade : 'N/A',
        };
      });
  }
  return [];
}
