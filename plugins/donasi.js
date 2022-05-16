let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087823406145]
│ • Telkomsel [082283541084]
╰────

╭─「 Donasi • Cip Higgs domino 」
│ • ID 1   [ 312501015 ]
│ • ID 2   [ 305037960 ]
╰────
╭─「 Sosial Media Owner 」
│ • INSTAGRAM 
| × https://instagram.com/armnd.at
│ • OWNER
| × wa.me/6287823406145
| • GITHUB
| × https://github.com/Dilucal
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
