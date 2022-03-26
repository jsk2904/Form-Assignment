import { IoIosCheckmarkCircle } from 'react-icons/io'
import { BsXCircle } from 'react-icons/bs'
import { useState } from 'react'
import './Model.css'
const Model = ({ formState }) => {
	const [modal, setModal] = useState(false)

	console.log(formState.beverage)
	const toggleModel = () => {
		console.log(formState)
		if (formState) {
			let val = Object.values(formState)
			for (const ele of val) {
				if (ele === '') return
			}
			setModal(!modal)
		}
	}

	//to prevent user from using our website interface when modal is open

	if (modal) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}
	return (
		<div>
			<button
				onClick={toggleModel}
				className='fluid ui button green btn-modal'
				type='submit'
			>
				Submit
			</button>

			{modal && (
				<div className='btn-modal'>
					<div onClick={toggleModel}>
						<div className='overlay'></div>
						<div className='modal-content'>
							<h2>
								<IoIosCheckmarkCircle
									style={{
										color: 'green',
									}}
								/>
							</h2>
							<p>Form Submited</p>
							<div className='close-modal' onClick={toggleModel}>
								<BsXCircle
									style={{
										color: 'red',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Model
