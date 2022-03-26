import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import validator from 'validator'
import content from '../radioButtonFields/index.js'
import Modal from '../components/Model'
const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const [state, setState] = useState({
		username: '',
		email: '',
		beverage: '',
		diningExperience: '',
		service: '',
		cleanliness: '',
		phone: '',
		textField: '',
	})
	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}
	useEffect(() => {
		console.log(state)
	})
	const onSubmit = () => {
		for (const [key, value] of Object.entries(state)) {
			if (value === '') return
		}
		localStorage.setItem(`${state.email}`, JSON.stringify({ ...state }))
	}

	const handleChangeRadioButton = (e) => {
		console.log(e.target.value, e.target.name)
		setState({ ...state, [e.target.name]: e.target.value })
	}

	console.log(errors)

	return (
		<div className='ui form'>
			<h4 className='ui blue header'>Aromatic Bar</h4>
			<p>
				We are committed to providing you with the best dining experience
				possible, so we welcome your comments. Please fill out this
				questionnaire. Thank you.
			</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='ui segment'>
					<div className='ui two column very relaxed grid'>
						<div className='column'>
							<div className='ui divider'></div>
							<div className='ui form'>
								<div className='field'>
									<label htmlFor=''>Name</label>
									<input
										{...register('username', {
											required: 'username is required',
										})}
										type='text'
										name='username'
										value={state.username}
										placeholder='username'
										onChange={handleChange}
									/>
								</div>
								<Err>{state.username ? '' : errors.username?.message}</Err>
								<div className='field'>
									<label htmlFor=''>Email</label>
									<input
										{...register('email', { required: 'Email is required' })}
										type='text'
										value={state.email}
										name='email'
										placeholder='Email'
										onChange={handleChange}
									/>
									{console.log(validator.isEmail(state.email))}
									{validator.isEmail(state.email) ? (
										<p></p>
									) : (
										<Err>"Enter valid Email"</Err>
									)}
								</div>
								<p>
									<label>Phone Field:</label>
								</p>
								<p>
									<PhoneInput
										country={'in'}
										value={state.phone}
										onChange={(phone, e) => {
											console.log(phone, e)
											setState({ ...state, ['phone']: phone })
										}}
									/>
									{state.phone.length < 12 ? (
										<Err>Enter Valid phone no</Err>
									) : (
										<p></p>
									)}
								</p>

								<div className='field'>
									<label htmlFor=''>Text Feild</label>
									<input
										{...register('textField', {
											required: 'text field is required',
										})}
										type='text'
										name='textField'
										value={state.textField}
										placeholder='textField'
										onChange={handleChange}
									/>
								</div>
								<Err>{state.textField ? '' : errors.textField?.message}</Err>
							</div>
						</div>
						<div className='column'>
							<div>
								{content.inputs.map((ele) => {
									return (
										<div className='ui form' key={ele?.name}>
											<label>{ele.label}</label>
											<div className='inline fields'>
												<div className='field'>
													<div className='ui radio checkbox'>
														<input
															{...register(`${ele.name}`, {
																required: `${ele.name} is required`,
															})}
															type='radio'
															value={content.options[0]}
															onChange={handleChangeRadioButton}
														/>
														<label>{content.options[0]}</label>
													</div>
												</div>
												<div className='field'>
													<div className='ui radio checkbox'>
														<input
															{...register(`${ele.name}`, {
																required: `${ele.name} is required`,
															})}
															type='radio'
															value={content.options[1]}
															onChange={handleChangeRadioButton}
														/>
														<label>{content.options[1]}</label>
													</div>
												</div>
												<div className='field'>
													<div className='ui radio checkbox'>
														<input
															{...register(`${ele.name}`, {
																required: `${ele.name} is required`,
															})}
															type='radio'
															value={content.options[2]}
															onChange={handleChangeRadioButton}
														/>
														<label>{content.options[2]}</label>
													</div>
												</div>
												<div className='field'>
													<div className='ui radio checkbox'>
														<input
															{...register(`${ele.name}`, {
																required: `${ele.name} is required`,
															})}
															type='radio'
															value={content.options[3]}
															onChange={handleChangeRadioButton}
														/>
														<label>{content.options[3]}</label>
													</div>
												</div>
											</div>
											<div>
												{state[ele.name] ? (
													<p></p>
												) : (
													<Err>{`please fill the field`}</Err>
												)}
											</div>
										</div>
									)
								})}
							</div>

							<Modal formState={state} />
							{/* <button className='fluid ui button green' type='submit'>
								submit
							</button> */}
						</div>
					</div>
					<div className='ui vertical divider'></div>
				</div>
			</form>
		</div>
	)
}
const Err = styled.p`
	color: red;
`
export default Form
