// src/ImageComponent.tsx (предполагаемое расположение)
interface ImageComponentProps {
	src: string
	alt?: string
}

export function ImageComponent({ src, alt = '' }: ImageComponentProps) {
	return (
		<img
			src={src}
			alt={alt}
			className='h-90 object-contain opacity-50' // object-contain, чтобы изображение целиком помещалось
		/>
	)
}
