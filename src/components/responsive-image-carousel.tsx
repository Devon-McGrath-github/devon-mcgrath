import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Sample image data (replace with your actual image data)
const images = [
	{ src: '/placeholder.svg?height=400&width=600', alt: 'Image 1' },
	{ src: '/placeholder.svg?height=400&width=600', alt: 'Image 2' },
	{ src: '/placeholder.svg?height=400&width=600', alt: 'Image 3' },
	{ src: '/placeholder.svg?height=400&width=600', alt: 'Image 4' },
	{ src: '/placeholder.svg?height=400&width=600', alt: 'Image 5' },
]

const height = 400
const width = 600
const IMAGE = `https://placehold.co/${width}x${height}`

const projects = [
	{
		id: 1,
		title: 'Portfolio Website',
		description:
			'A personal portfolio website showcasing my projects, skills, and experience. Built with HTML, CSS, and JavaScript.',
		image: IMAGE,
		alt: 'Screenshot of a portfolio website with project showcase and contact information.',
	},
	{
		id: 2,
		title: 'E-commerce Platform',
		description:
			'A fully functional e-commerce website with a shopping cart, checkout system, and user authentication. Built using React and Node.js.',
		image: IMAGE,
		alt: 'Screenshot of an e-commerce platform showing a product page and shopping cart.',
	},
	{
		id: 3,
		title: 'Task Management App',
		description:
			'A task management tool that helps users organize and prioritize their tasks with drag-and-drop functionality. Developed with Vue.js and Firebase.',
		image: IMAGE,
		alt: 'Screenshot of a task management app with tasks listed in a drag-and-drop interface.',
	},
	{
		id: 4,
		title: 'Weather Dashboard',
		description:
			'A weather dashboard app that displays current weather and a 5-day forecast for any location. Built using JavaScript and the OpenWeather API.',
		image: IMAGE,
		alt: 'Screenshot of a weather dashboard displaying temperature and weather icons for a city.',
	},
]

export default function ResponsiveImageCarousel() {
	// const [emblaRef, emblaApi] = useEmblaCarousel()

	// const [isHovered, setIsHovered] = useState(false)

	// const onMouseEnter = useCallback(() => {
	// 	setIsHovered(true)
	// 	emblaApi?.stop()
	// }, [emblaApi])

	// const onMouseLeave = useCallback(() => {
	// 	setIsHovered(false)
	// 	emblaApi?.play()
	// }, [emblaApi])

	// useEffect(() => {
	// 	if (emblaApi) {
	// 		emblaApi.on('pointerDown', () => {
	// 			emblaApi.stop()
	// 		})
	// 	}
	// }, [emblaApi])

	return (
		<Carousel
			opts={{
				loop: true,
				skipSnaps: true,
				align: 'start',
			}}
			plugins={[
				Autoplay({
					delay: 1000,
					stopOnInteraction: false,
					stopOnFocusIn: true,
					stopOnMouseEnter: true,
				}),
			]}
			className="w-full max-w-screen-2xl mx-auto"
			// onMouseEnter={onMouseEnter}
			// onMouseLeave={onMouseLeave}
		>
			<CarouselContent>
				{projects.map((project, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<img
										src={project.image}
										alt={project.alt}
										width={width}
										height={height}
										className="rounded-md object-cover"
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
