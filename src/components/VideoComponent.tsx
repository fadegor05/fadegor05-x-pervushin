interface VideoComponentProps {
	src: string
	className?: string
}

export function VideoComponent({ src, className }: VideoComponentProps) {
	return (
		<video
			src={src}
			autoPlay
			loop
			muted
			playsInline
			className={`h-90 object-contain opacity-50 ${className || ''}`}
		/>
	)
}
