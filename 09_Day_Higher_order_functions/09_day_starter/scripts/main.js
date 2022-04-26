console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// 1. Sorting by keys
function sort_by(array, key) {
    let array_ = array.slice()
    array_.sort((a, b) => {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
        return 0
    })
    return array_
}

console.log(sort_by(countries, 'name'))
console.log(sort_by(countries, 'capital'))
console.log(sort_by(countries, 'population'))

// 2.
function mostSpokenLanguages(array, n) {
    let languages = {}
    array.forEach(element => {
        element.languages.forEach(lang => {
            if (!languages.hasOwnProperty(lang)) {
                languages[lang] = 0
            }
            languages[lang] += 1
        })
    });

    return Object.entries(languages).sort((a, b) => - a[1] + b[1]).slice(0, n)
}

console.log(mostSpokenLanguages(countries, 10))

// 3.
function mostPopulatedCountries(array, n) {
    return sort_by(array, 'population').reverse().slice(0, n)
}
console.log(mostPopulatedCountries(countries, 10))

// 4.
class Stats {
    constructor(array) {
        this.array = array
    }
    count() {
        return this.array.length
    }
    sum() {
        return this.array.reduce((acc, cur) => acc + cur, 0)
    }
    min() {
        return Math.min(...this.array)
    }
    max() {
        return Math.max(...this.array)
    }
}
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
statistics = new Stats(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ', statistics.var()) // 17.5
console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
