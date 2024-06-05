import { Button } from './components/ui/button'
import './styles/App.css'

function App() {
	return (
		<>
			<div className="w-dvh h-dvh p-16">
				<div className="grid grid-rows-2 grid-cols-2 w-full h-full border-4 rounded-[2px] ">
					<h1>Devon McGrath</h1>

					<div className="flex flex-row gap-4 row-start-2 col-start-2 items-end justify-end">
						{/* <Button variant={'ghost'}>
							<a href="" >Portfolio</a>
						</Button> */}
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
					</div>
				</div>
			</div>
		</>
	)
}

export default App
