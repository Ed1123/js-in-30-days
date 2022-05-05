// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function cleanText(s) {
    let pattern = /[%$@&#;]/g
    return s.replace(pattern, '')
}

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let cleanedText = cleanText(sentence)
console.log(cleanedText)

console.log(cleanedText.match(/\S+/g).length)
