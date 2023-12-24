/**
 * Loops - For, for in & while Loops
 * 
 */

console.log("-------- For Loops  -------")

for (let i = 0; i < 10; i++) {
    console.log("i => ", i)
}

student = {
    name: "Tom Sawyer",
    age: 22, 
    class: "Grade 12",
    GPA: 3.89
}
console.log(`-------- For ___ In (Student ${student})Loops -   -------`)

for (const varKey in student) {
    if (Object.hasOwnProperty.call(student, varKey)) {
        // const element = object[varKey];
        console.log(varKey, student[varKey])
    }
}

console.log("-------- For Each Loops -------")

names = ["Tom", "jenkins", "Delgado", "Ricky", "Sawyer"]
names.forEach(nameObj => {
    console.log(nameObj.toUpperCase())
});

console.log("-------- For Of Loops -------")
for (varName of names) {
    console.log(varName)
}

console.log("----- While Loops ----")

let i = 10; 
while (i > 5) {
    console.log("i => ", i--);
}