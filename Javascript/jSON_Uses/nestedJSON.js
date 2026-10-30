const Student = [
    {
        name: "krishna",
        age: 20,
        course: "CSE",
        fee: 78000,
        subjects: [{subject1: "Maths", subject2: "English", subject3: "hindi"}],
    },
    {
        name: "saurabh",
        age: 20,
        course: "CSE",
        fee: 78000,
        subjects: [{subject1: "Maths", subject2: "English", subject3: "hindi"}],
    },
    {
        name: "rupesh",
        age: 19,
        course: "CSE",
        fee: 78000,
        subjects: [{subject1: "Maths", subject2: "English", subject3: "hindi"}],
    },
    {
        name: "pushkar",
        age: 18,
        course: "CSE",
        fee: 78000,
        subjects: [{subject1: "Maths", subject2: "English", subject3: "hindi"}],
    }
]

console.log(Student);

Student[1].fee = 80000;
Student[0].subjects[0].subject2 = "chemistry";
Student[2].age = 20;

delete Student[1].subjects;


