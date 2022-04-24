console.log("hello docker")
var today = new Date()
var day = String(today.getDate()).padStart(2, '0')
var month = String(today.getMonth() + 1).padStart(2, '0')
var year = today.getFullYear()
var hour = String(today.getHours()).padStart(2, '0')
var minute = String(today.getMinutes()).padStart(2, '0')

date = `${day}-${month}-${year} ${hour}:${minute}`
console.log(date)
console.log(`Creater : ${process.env.creater}`)