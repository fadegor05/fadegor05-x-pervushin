import { useState, useEffect } from 'react'

const REFERENCE_DATE_STRING = '2024-10-18T15:56:39+03:00'

const MILLISECONDS_IN_AVERAGE_YEAR = 1000 * 60 * 60 * 24 * 365.25

export function Content() {
	const [durationString, setDurationString] = useState('0.00000000 лет')

	useEffect(() => {
		const referenceDate = new Date(REFERENCE_DATE_STRING)

		if (isNaN(referenceDate.getTime())) {
			console.error(
				'Неверный формат строки для целевой даты:',
				REFERENCE_DATE_STRING
			)
			setDurationString('Ошибка даты')
			return
		}

		const intervalId = setInterval(() => {
			const now = new Date()
			const differenceMs = now.getTime() - referenceDate.getTime()

			const yearsElapsed = differenceMs / MILLISECONDS_IN_AVERAGE_YEAR
			setDurationString(`${yearsElapsed.toFixed(10)} лет`)
		}, 20)
		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className='z-10 text-center'>
			<h1 className='text-amber-100 font-black text-5xl'>
				<a href='https://github.com/fadegor05' className='underline'>
					fadegor05
				</a>{' '}
				&{' '}
				<a href='https://github.com/alexpervushin' className='underline'>
					pervushin
				</a>
			</h1>
			<h2 className='text-amber-300 font-bold text-2xl '>
				легендарная коллаба уже {durationString}
			</h2>
		</div>
	)
}
