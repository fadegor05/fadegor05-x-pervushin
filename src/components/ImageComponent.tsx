interface ImageComponentProps {
	src: string
	alt?: string
	className?: string
}

export function ImageComponent({
	src,
	alt = '',
	className,
}: ImageComponentProps) {
	return (
		<img
			src={src}
			alt={alt}
			className={`h-90 object-contain opacity-50 ${className || ''}`}
		/>
	)
}
