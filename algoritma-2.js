// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

function longest_string(str_ara) {
  var split = str_ara.split(' ')
  var max = split[0].length;
  split.map(v => max = Math.max(max, v.length));
  result = split.filter(v => v.length == max);
  return result[0];
}

console.log(longest_string('saya mencoba untuk membuatnya')) // hasil nya adalah 'membuatnya'.
