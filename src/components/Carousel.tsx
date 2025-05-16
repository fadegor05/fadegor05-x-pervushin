// src/Carousel.tsx
import { useMemo } from 'react'
import { ImageComponent } from './ImageComponent'
import { VideoComponent } from './VideoComponent'

interface CarouselProps {
	mediaUrls: string[]
	isReversed: boolean
	speed: 'normal' | 'slow'
}

export function Carousel({
	mediaUrls,
	isReversed,
	speed = 'slow',
}: CarouselProps) {
	if (!mediaUrls || mediaUrls.length === 0) {
		return null
	}

	const duplicatedMediaUrls = useMemo(
		() => [...mediaUrls, ...mediaUrls],
		[mediaUrls]
	)

	const animationClass =
		speed === 'normal'
			? 'animate-infinite-scroll-normal'
			: 'animate-infinite-scroll-slow'

	const reverseAnimationClass = isReversed
		? '[animation-direction:reverse]'
		: ''

	const getMediaType = (url: string): 'image' | 'video' | 'unknown' => {
		const extension = url.split('.').pop()?.toLowerCase()
		if (!extension) return 'unknown'

		if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(extension)) {
			return 'image'
		}
		if (['mp4'].includes(extension)) {
			return 'video'
		}
		return 'unknown'
	}

	return (
		<div className='w-full overflow-hidden select-none group'>
			<div className={`flex ${animationClass} ${reverseAnimationClass}`}>
				{duplicatedMediaUrls.map((mediaUrl, index) => {
					const mediaType = getMediaType(mediaUrl)
					return (
						<div key={`${mediaUrl}-${index}`} className='flex-shrink-0'>
							{mediaType === 'image' && <ImageComponent src={mediaUrl} />}
							{mediaType === 'video' && <VideoComponent src={mediaUrl} />}
						</div>
					)
				})}
			</div>
		</div>
	)
}
