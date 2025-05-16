import { useMemo } from 'react'
import { Carousel } from './Carousel'

const mediaModules = import.meta.glob('/assets/*.(png|jpg|jpeg|gif|svg|mp4)', {
	eager: true,
})

const mediaUrls: string[] = Object.values(mediaModules).map(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(module: any) => module.default
)

function shuffleArray<T>(array: T[]): T[] {
	const newArray = [...array]
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
	}
	return newArray
}

export function Background() {
	const numRows = 3

	const rowsOfMediaUrls = useMemo(() => {
		const shuffledUrls = shuffleArray(mediaUrls)
		const newRows: string[][] = []

		if (shuffledUrls.length === 0) {
			return Array(numRows).fill([])
		}

		const totalMediaItems = shuffledUrls.length
		let currentIndex = 0

		for (let i = 0; i < numRows; i++) {
			const itemsInThisRow = Math.ceil(
				(totalMediaItems - currentIndex) / (numRows - i)
			)
			const endIndex = Math.min(currentIndex + itemsInThisRow, totalMediaItems)

			if (currentIndex < endIndex) {
				newRows.push(shuffledUrls.slice(currentIndex, endIndex))
				currentIndex = endIndex
			} else {
				newRows.push([])
			}
		}
		while (newRows.length < numRows) {
			newRows.push([])
		}
		return newRows
	}, [])

	return (
		<div className='fixed inset-0 z-0 h-screen w-screen flex flex-col justify-around items-center'>
			{rowsOfMediaUrls.map((rowUrls, rowIndex) => (
				<Carousel
					key={rowIndex}
					mediaUrls={rowUrls}
					speed={'normal'}
					isReversed={rowIndex % 2 === 0}
				/>
			))}
		</div>
	)
}
