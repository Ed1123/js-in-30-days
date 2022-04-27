// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const langs = new Set()

countries.forEach(country => {
    country['languages'].forEach(language => {
        langs.add(language)
    })
})

console.log(langs)
console.log(langs.size)
