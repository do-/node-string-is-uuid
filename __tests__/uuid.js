const {isUuid} = require ('../index')
const {v1, v3, v4, v5, v6, v7} = require ('uuid')

const vv = [v1, null, v3, v4, v5, v6, v7]

test ('bad', () => {

	expect (() => isUuid (0)).toThrow ()
	expect (() => isUuid ('1b671a64-40d5-491e-99b0-da01ff1f33411b671a64-40d5-491e-99b0-da01ff1f3341')).toThrow ()

})

test ('special', () => {

	expect (isUuid ('FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF')).toBe (15)
	expect (isUuid ('ffffffff-ffff-ffff-ffff-ffffffffffff')).toBe (15)

})

test ('version', () => {

	for (let i = 0; i < 100; i ++) {

		let ver = Math.floor (Math.random () * 7)

		if (ver === 1) continue

		const val = ver === 2 || ver === 4 ? vv [ver] ('', '1b671a64-40d5-491e-99b0-da01ff1f3341') : vv [ver] ()
	
		ver ++

		expect (isUuid (val)).toBe (ver)	
		expect (isUuid (val.toUpperCase ())).toBe (ver)	

		for (const c of [' ', '=', '_', '~']) {

			for (let index = 0; index < 36; index ++) {

				const s = val.substring (0, index) + c + val.substring (index + 1)

				expect (() => isUuid (s)).toThrow ('#' + index)

			}	

		}

	}
  
})