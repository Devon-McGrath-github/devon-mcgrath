import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import React from 'react'
import { Button } from './ui/button'

export function PortfolioCarousel() {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	// const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		if (!api) {
			return
		}

		// setCount(api.scrollSnapList().length)
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
			}}
		>
			<CarouselContent>
				<CarouselItem>1</CarouselItem>
				<CarouselItem>2</CarouselItem>
				<CarouselItem>3</CarouselItem>
			</CarouselContent>
			<div className="flex gap-3">
				<Button onClick={() => api?.scrollTo(current - 1)}>Left</Button>
				<Button onClick={() => api?.scrollTo(current + 1)}>Right</Button>
			</div>
			{/* <CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	)
}
