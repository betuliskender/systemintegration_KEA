//date
console.log(new Date())

//string
console.log(Date())

//number
console.log(Date.now())

// ISO 8601

const date = new Date()

const danishDate = new Intl.DateTimeFormat("da-DK").format(date)
console.log(danishDate)
const americanDate = new Intl.DateTimeFormat("en-US").format(date)
console.log(americanDate)