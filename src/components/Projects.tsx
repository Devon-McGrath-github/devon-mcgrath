import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

const height = 300
const width = 500
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

export function PortfolioCarousel() {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCurrent(api.selectedScrollSnap())

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap())
		})
	}, [api])

	return (
		<Carousel
			setApi={setApi}
			opts={{
				loop: true,
				skipSnaps: true,
			}}
			plugins={[
				Autoplay({
					delay: 4000,
					stopOnInteraction: false,
					stopOnFocusIn: true,
				}),
			]}
		>
			<CarouselContent>
				{projects.map((project, index) => (
					<CarouselItem
						key={`project-${project.id}-${index}`}
						className="flex w-full justify-center items-center basis-1/2 md:basis-1/3 lg:basis-1/4 pl-7 "
					>
						<img
							src={project.image}
							width={width}
							height={height}
							alt={project.alt}
							className="rounded-md"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
