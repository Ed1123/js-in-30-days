// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(array) {
    const r = []
    for ([name, skills, scores] of array) {
        r.push(
            {
                name: name,
                skills: skills,
                scores: scores
            }
        )
    }
    return r
}

console.log(convertArrayToObject(students))

let student = convertArrayToObject(students)[0]

student