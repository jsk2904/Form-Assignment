import { useEffect, useState } from 'react'
import './Table.css'
const Table = () => {
	const [values, setValues] = useState([])
	const getData = () => {
		let arr = []
		let keys = Object.keys(localStorage)
		let i = keys.length
		while (i--) {
			console.log(localStorage.getItem(keys[i]))
			let tempJSON = localStorage.getItem(keys[i])

			let tempObj = JSON.parse(tempJSON)
			console.log(tempObj)
			arr.push(tempObj)
		}
		console.log(arr.length, arr)
		setValues([...arr])
	}
	useEffect(() => {
		getData()
	}, [])

	const renderTableData = (values) => {
		return values.map((values) => {
			const {
				beverage,
				username,
				cleanliness,
				diningExperience,
				email,
				phone,
				service,
				textField,
			} = values //destructuring
			return (
				<tr key={email}>
					<td>{username}</td>
					<td>{email}</td>
					<td>{beverage}</td>
					<td>{diningExperience}</td>
					<td>{service}</td>
					<td>{cleanliness}</td>
					<td>{phone}</td>
					<td>{textField}</td>
				</tr>
			)
		})
	}

	return (
		<div>
			<h1>all Feedbacks</h1>
			<table className='ui celled table'>
				<tbody>
					<tr>
						<th>USERNAME</th>
						<th>EMAIL ID</th>
						<th>beverage</th>
						<th>diningExperience</th>
						<th>service</th>
						<th>cleanliness</th>
						<th>phone</th>
						<th>textField</th>
					</tr>
					{renderTableData(values)}
				</tbody>
			</table>
		</div>
	)
}

export default Table
