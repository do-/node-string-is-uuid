const {isUuid} = require ('../index')
const {v1, version} = require ('uuid')

test ('perf', () => {

	const N = 1//000000

	const benchmark = (f) => {

		const t = Date.now ()

		for (let i = 0; i < N; i ++) if (f (v1 ()) !== 1) throw Error ('')

		return Date.now () - t

	}

	const benchmark_0 = () => {

		const t = Date.now ()

		for (let i = 0; i < N; i ++) v1 ()

		return Date.now () - t

	}

	const s = [
		benchmark_0 (),
		benchmark (isUuid),
		benchmark (version),
	]
/*
	expect (s [1]).toBeLessThan (s [2])

	s [1] -= s [0]
	s [2] -= s [0]

	console.log ((100 * (s [2] - s [1]) / s [2]).toFixed (2) + '% faster')
*/
})
