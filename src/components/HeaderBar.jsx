import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
const HeaderBar = () => {
	const [colorFormTab, setColorFormTab] = useState(true)
	const [colorTableTab, setColorTableTab] = useState(false)

	const setFormColor = () => {
		setColorFormTab(!colorFormTab)
		setColorTableTab(!colorTableTab)
	}

	useEffect(() => {
		console.log('colorFormTab', colorFormTab)
		console.log('colorTableTab', colorTableTab)
	})
	return (
		<Navbar>
			<SLink to={'/'}>
				<FormTab formColor={colorFormTab} onClick={setFormColor}>
					Form
				</FormTab>
			</SLink>
			<SLink to={'/Table'}>
				<TableTab tableColor={colorTableTab} onClick={setFormColor}>
					Table
				</TableTab>
			</SLink>
		</Navbar>
	)
}

const Navbar = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 0.3rem solid #a9a9a9;
`
const FormTab = styled.div`
	cursor: pointer;
	border-bottom: ${(props) =>
		props.formColor ? '0.2rem solid ' + '#8a2be2' : '0.2rem solid ' + '#fff'};
`
const TableTab = styled.div`
	cursor: pointer;
	margin-left: 1rem;
	border-bottom: ${(props) =>
		props.tableColor
			? '0.2rem solid ' + '#8a2be2'
			: '0.2rem solid ' + '#fff'}; ;
`

const SLink = styled(NavLink)`
	text-decoration: none;
	color: black;
`
export default HeaderBar
