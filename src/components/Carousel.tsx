// src/Carousel.tsx (предполагаемое расположение)
import { useMemo } from 'react'
import { ImageComponent } from './ImageComponent'

interface CarouselProps {
	imageUrls: string[]
	isReversed: boolean
	speed: 'normal' | 'slow'
}

export function Carousel({
	imageUrls,
	isReversed,
	speed = 'slow',
}: CarouselProps) {
	if (!imageUrls || imageUrls.length === 0) {
		return null
	}

	const duplicatedImageUrls = useMemo(
		() => [...imageUrls, ...imageUrls],
		[imageUrls]
	)

	const animationClass =
		speed == 'normal'
			? 'animate-infinite-scroll-normal'
			: 'animate-infinite-scroll-slow'

	const reverseAnimationClass = isReversed
		? '[animation-direction:reverse]'
		: ''

	return (
		<div className='w-full overflow-hidden select-none group'>
			<div className={`flex ${animationClass} ${reverseAnimationClass}`}>
				{duplicatedImageUrls.map((imageUrl, index) => (
					<div key={`${imageUrl}-${index}`} className='flex-shrink-0'>
						<ImageComponent src={imageUrl} />
					</div>
				))}
			</div>
		</div>
	)
}
