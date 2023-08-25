import readDatabase from "../utils";

export default class StudentsController{
    static getAllStudents(request, response) {
        let report = "This is the list of our students\n";
        readDatabase('./database.csv').then((data) => {
            for (const [field, group] of Object.entries(data)) {
                report += `Number of students in ${field}:  ${group.length}. List: ${group.join(', ')}\n`;
            }
            response.statusCode = 200
            response.write(report)
            response.end()
        }).catch((error) => response.send(error.message))
    }
    static getAllStudentsByMajor(request, response) {
        const major = request.params.major;
        if (!['CS', 'SWE'].includes(major)) {
            return response.send(500, `Major must be CS or SWE`)
        }
        readDatabase('./database.csv').then((data) => {
            const group = data[major]
            const report = `Number of students in ${major}:  ${group.length}. List: ${group.join(', ')}\n`;
            response.send(200, report)
        }).catch((error) => response.send(error.message))
    }
}