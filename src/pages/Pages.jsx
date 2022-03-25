import { Route, Routes } from 'react-router-dom'
import Table from './Table'
import Form from './Form'

const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<Form />} />
			<Route path='/Table' element={<Table />} />
		</Routes>
	)
}

export default Pages
