import { BrowserRouter } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import Pages from './pages/Pages.jsx'
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<HeaderBar />
				<Pages />
			</BrowserRouter>
		</div>
	)
}
export default App
