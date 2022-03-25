import { useEffect, useState } from 'react'

const Table = () => {
	const getData = () => {
		var values = [],
			keys = Object.keys(localStorage)
		let i = keys.length
		while (i--) {
			values.push(localStorage.getItem(keys[i]))
		}
		values.forEach((val) => {
			let temp = JSON.parse(val)
			console.log(temp)
		})
	}
	useEffect(() => {
		getData()
	})
	return <div>Table</div>
}

export default Table
