function generate() {
	let charArr = ['Æ', 'Ø', 'Þ', 'ß', 'ð', 'Φ', 'Ω', 'Ƣ', 'Ƿ', 'Ȝ']
	let name = ""
	name += (Math.floor(Math.random()*26)+10).toString(36).toUpperCase()
	name += " " + charArr[Math.floor(Math.random()*charArr.length)]
	name += " " + (Math.floor(Math.random()*26)+10).toString(36).toUpperCase() + "-" + Math.floor(Math.random()*89+10)

	document.getElementById('name').value = name
}