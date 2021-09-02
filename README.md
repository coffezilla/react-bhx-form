# react-bhx-form

This form is a very useful project for all kinds of usage in ReactJS projects. Was made using create-react-app and Typescript for a better implementation.

## Feat

- Typescript
- ReactJS ( sample was made using create-react-app )

## How to use

To use this form, put the component folder (FormValidation) inside your project component's folder.

Now, you can import a function for validation and the interface (typescript) to deal with useEffects type.

```tsx
import { useState } from 'react';
import { validateForm, IForm } from './components/FormValidation';
```

```tsx
const [formFields, setFormFields] = useState<IForm['inputs']>([
	{
		name: 'name',
		value: '',
		error: '',
		type: 'text',
		isRequired: true,
	},
]);
```

```tsx
// validation of the form
const validationForm = () => {
	const inputRequired = validateForm(formFields, setFormFields);
	const hasNoErrors = inputRequired.hasPassed;

	return hasNoErrors;
};

// generic handle for inputs
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

// submit handle
// if isValid so you can submit the form
const handleSubmit = (e: any) => {
	e.preventDefault();
	const isValid = validationForm();

	if (isValid) {
		// use async function for server validation
		alert('SUBMITED!!!');
	}
};
```

Set your html

```tsx
<form onSubmit={handleSubmit}>
	<label htmlFor={formFields[0].name}>
		Name:
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
	<button type="submit">Submit Form</button>
</form>
```

In order to make everything work properly you have to set your input following the index number used in your useState.

## Error message

```html
<span>{formFields[0].error}</span>
```

## Inside view - @types

```tsx
type inputTypes =
	| 'text'
	| 'select'
	| 'radio'
	| 'checkbox'
	| 'textarea'
	| 'email'
	| 'password'
	| 'tel';

interface IInput {
	name: string;
	value: string;
	error: string;
	type: inputTypes;
	maxLength?: number;
	minLength?: number;
	isEqual?: boolean | string;
	isRequired?: boolean;
}

export interface IForm {
	inputs: IInput[];
}
```

## View

![form.gif](react-bhx-form%2081e845e634d146d3ba332816dca6720d/form.gif)