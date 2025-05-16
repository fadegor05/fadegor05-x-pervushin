import { Background } from './components/Background'
import { Content } from './components/Content'

export function App() {
	return (
		<div className='flex flex-col justify-center items-center h-screen bg-black'>
			<Background></Background>
			<Content></Content>
		</div>
	)
}
