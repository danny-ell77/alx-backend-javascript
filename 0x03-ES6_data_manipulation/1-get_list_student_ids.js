export default function getListStudentIds(value) {
  if (value instanceof Array) {
    return value.map((item) => item.id);
  }
  return [];
}
