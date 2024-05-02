import fs from 'fs'

// const url = 'https://www.proshop.dk/Baerbar-computer';
// const response = await fetch(url)
// const result = await response.text()
// fs.writeFileSync('index.html', result)

const htmlPageString = fs.readFileSync('index.html').toString()

import {load} from 'cheerio'

console.log(htmlPageString)

const $ = load(htmlPageString)

$('#products [product]').each((index, element) => {
    const name = $(element).find('.site-product-link h2').text()
    const description = $(element).find('.site-product-link').text()

    console.log(name)
    const price = $(element).find('.site-currency-lg h2').text()
    console.log(price)
    console.log('-----------------------------------')
})

