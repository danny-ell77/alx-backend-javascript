export interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [key: string]: any
}

export interface Director extends Teacher {
    numberOfReports: number
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

export function printTeacher(firstName: string, lastName: string): string{
    return `${firstName[0]}. ${lastName}`;
}

export interface StudentConstructorInterface {
    new(firstName: string, lastName: string): StudentInterface
}

export interface StudentInterface {
    workOnHomework(): string
    displayName(): string
}

export class StudentClass implements StudentInterface {
    private firstName;
    private lastName;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName
    }
}