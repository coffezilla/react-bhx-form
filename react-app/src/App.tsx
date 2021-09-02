/* eslint-disable operator-linebreak */
import { useState } from 'react';
import { validateForm, IForm } from './components/FormValidation';

function App() {
	const [formFields, setFormFields] = useState<IForm['inputs']>([
		{
			name: 'name',
			value: '',
			error: '',
			type: 'text',
			isRequired: true,
		},
		{
			name: 'nickname',
			value: '',
			error: '',
			type: 'text',
		},
		{
			name: 'accept',
			value: '',
			error: '',
			type: 'checkbox',
			isRequired: true,
		},
		{
			name: 'email',
			value: '',
			error: '',
			type: 'email',
		},
		{
			name: 'password',
			value: '',
			error: '',
			type: 'password',
		},
		{
			name: 'passwordConfirm',
			value: '',
			error: '',
			type: 'password',
		},
		{
			name: 'genre',
			value: '2',
			error: '',
			type: 'select',
		},
		{
			name: 'age',
			value: '2',
			error: '',
			type: 'radio',
		},
		{
			name: 'message',
			value: '',
			error: '',
			type: 'textarea',
		},
		{
			name: 'phone',
			value: '',
			error: '',
			type: 'text',
		},
	]);

	const validationForm = () => {
		const inputRequired = validateForm(formFields, setFormFields);
		const hasNoErrors = inputRequired.hasPassed;

		return hasNoErrors;
	};

	const handleChange = (e: any) => {
		const isCheckBox = e.target.type === 'checkbox';
		let currentValue = e.target.value;

		// OPTIONAL: clean spaces
		if (
			e.target.name === 'nickname' ||
			e.target.name === 'password' ||
			e.target.name === 'passwordConfirm' ||
			e.target.name === 'phone'
		) {
			currentValue = currentValue.replace(/\s/g, '');
			currentValue = currentValue.toLowerCase();
		}

		setFormFields(
			formFields.map((field: any) => {
				if (field.name === e.target.name) {
					return {
						...field,
						value: isCheckBox ? e.target.checked : currentValue,
						error: '',
					};
				}
				return { ...field };
			}),
		);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const isValid = validationForm();

		if (isValid) {
			// use async function for server validation
			alert('SUBMITED!!!');
		}
	};

	return (
		<div>
			<h1>Form Validation</h1>
			{/* <pre style={{ fontSize: '.7rem' }}>{JSON.stringify(formFields, null, 1)}</pre> */}
			<form onSubmit={handleSubmit}>
				<label htmlFor={formFields[0].name}>
					Name *:
					<input
						type={formFields[0].type}
						name={formFields[0].name}
						id={formFields[0].name}
						maxLength={formFields[0].maxLength}
						value={formFields[0].value}
						onChange={handleChange}
					/>
					<span>{formFields[0].error}</span>
				</label>
				<br />
				<label htmlFor={formFields[1].name}>
					Nickname:
					<input
						type={formFields[1].type}
						name={formFields[1].name}
						id={formFields[1].name}
						maxLength={formFields[1].maxLength}
						value={formFields[1].value}
						onChange={handleChange}
					/>
					<span>{formFields[1].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[2].name}>
					My agreement *:
					<input
						type={formFields[2].type}
						name={formFields[2].name}
						id={formFields[2].name}
						maxLength={formFields[2].maxLength}
						value={formFields[2].value}
						onChange={handleChange}
					/>
					<span>{formFields[2].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[3].name}>
					My E-mail:
					<input
						type={formFields[3].type}
						name={formFields[3].name}
						id={formFields[3].name}
						maxLength={formFields[3].maxLength}
						value={formFields[3].value}
						onChange={handleChange}
					/>
					<span>{formFields[3].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[4].name}>
					password:
					<input
						type={formFields[4].type}
						name={formFields[4].name}
						id={formFields[4].name}
						maxLength={formFields[4].maxLength}
						value={formFields[4].value}
						onChange={handleChange}
					/>
					<span>{formFields[4].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[5].name}>
					Password Confirm:
					<input
						type={formFields[5].type}
						name={formFields[5].name}
						id={formFields[5].name}
						maxLength={formFields[5].maxLength}
						value={formFields[5].value}
						onChange={handleChange}
					/>
					<span>{formFields[5].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[6].name}>
					Genre:
					<select
						value={formFields[6].value}
						name={formFields[6].name}
						id={formFields[6].name}
						onChange={handleChange}
					>
						<option value="1">1 - Female</option>
						<option value="2">2 - Male</option>
					</select>
					<span>{formFields[6].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[7].name}>
					Age:
					<input
						type={formFields[7].type}
						name={formFields[7].name}
						id={formFields[7].name}
						maxLength={formFields[7].maxLength}
						value="1"
						onChange={handleChange}
						defaultChecked={formFields[7].value === '1' && true}
					/>
					Young
					<input
						type={formFields[7].type}
						name={formFields[7].name}
						id={formFields[7].name}
						maxLength={formFields[7].maxLength}
						value="2"
						onChange={handleChange}
						defaultChecked={formFields[7].value === '2' && true}
					/>
					Old
					<span>{formFields[7].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[8].name}>
					Message:
					<textarea
						name={formFields[8].name}
						id={formFields[8].name}
						maxLength={formFields[8].maxLength}
						value={formFields[8].value}
						onChange={handleChange}
					/>
					<span>{formFields[8].error}</span>
				</label>
				<br />

				<label htmlFor={formFields[9].name}>
					Phone:
					<input
						type={formFields[9].type}
						name={formFields[9].name}
						id={formFields[9].name}
						maxLength={formFields[9].maxLength}
						value={formFields[9].value}
						onChange={handleChange}
					/>
					<span>{formFields[9].error}</span>
				</label>
				<br />

				<button type="submit">Submit Form</button>
			</form>
		</div>
	);
}

export default App;
