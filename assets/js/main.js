
setInterval(()=> makeTime('time'), 1000)

const makeTime = el => {
	let t = new Date()
	let h = t.getHours()
	let m = t.getMinutes()
	let s = t.getSeconds()
	let e = document.getElementById(el)
	if (e) e.innerHTML = `${nn(h)}:${nn(m)}:${nn(s)}`
}

const nn = a => a < 10 ? `0${a}` : a
