const CH_MINUS = '-'.charCodeAt (0)

const CH_0     = '0'.charCodeAt (0)
const CH_9     = '9'.charCodeAt (0)

const CH_AU    = 'A'.charCodeAt (0)
const CH_FU    = 'F'.charCodeAt (0)

const CH_AL    = 'a'.charCodeAt (0)
const CH_FL    = 'f'.charCodeAt (0)

const LEN = 36

const isUuid = s => {
	
	if (typeof s !== 'string') throw TypeError (`Not a UUID "${s}": must be a string, not ${typeof s}`)

	if (s.length !== LEN) throw Error (`Not a UUID "${s}": must be ${LEN} chars long`)
		
	for (let i = 0; i < LEN; i ++) {
		
		const c = s.charCodeAt (i)
		
		switch (i) {
			case 8:
			case 13:
			case 18:
			case 23:
				if (c === CH_MINUS) break
				throw Error (`Not a UUID "${s}": wrong char #${i}`)
			default:
				if (c <  CH_0) throw Error (`Not a UUID "${s}": wrong char #${i}`)
				if (c <= CH_9) break
				if (c <  CH_AU) throw Error (`Not a UUID "${s}": wrong char #${i}`)
				if (c <= CH_FU) break
				if (c <  CH_AL) throw Error (`Not a UUID "${s}": wrong char #${i}`)
				if (c <= CH_FL) break
				throw Error (`Not a UUID "${s}": wrong char #${i}`)
		}
			
	}

	const ver = s.charCodeAt (14) - CH_0

	return ver

}

module.exports = {
	isUuid
}