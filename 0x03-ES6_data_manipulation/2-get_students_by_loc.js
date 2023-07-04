export default function getStudentsByLocation(students, lookup) {
  return students.filter((student) => student.location === lookup);
}
