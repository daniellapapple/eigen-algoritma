// reverse alphabet nya dengan angka tetap diakhir

const string = 'NEGIE1'
const split = string.split('')
const reverse = split.reverse()
const splice = reverse.splice(0, 1)

reverse.push('1)

const join = reverse.join('')

console.log(join) // Hasil nya reverse dari 'NEGIE1'
