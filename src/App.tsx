import { PortfolioCarousel } from './components/Projects'
import { Button } from './components/ui/button'
import './styles/App.css'

function App() {
	return (
		<>
			<main className="flex flex-col h-full">
				<div className="-skew-y-[15deg] bg-red-200 h-1/3 w-full -z-10 absolute overflow-hidden"></div>

				<nav className="flex flex-row gap-4 row-start-2 col-start-2 items-end justify-center">
					<Button variant={'ghost'}>
						<a href="https://github.com/Devon-McGrath-github" target="_blank">
							Github
						</a>
					</Button>
					<Button variant={'ghost'}>
						<a href="https://www.linkedin.com/in/devon-mcgrath-17462558/" target="_blank">
							Linkedin
						</a>
					</Button>
					<Button variant={'ghost'}>
						<a href="">Contact</a>
					</Button>
				</nav>
				<div className="flex flex-col flex-[1_0_auto]">
					<h1>Devon McGrath</h1>
				</div>

				<div className="shrink-0 flex items-center justify-center">
					<PortfolioCarousel />
				</div>
			</main>
		</>
	)
}

export default App
