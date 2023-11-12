import { ChangeEvent, FormEvent, useState, type FC } from "react";
import { ISubmittedData } from "../App";
import { provinces } from "../utils/helpers/provincesList";
import FormData from "./FormData";

type IFormProps = {
	onSubmit: (data: ISubmittedData) => void;
};

const Form: FC<IFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<ISubmittedData>({
		email: "",
		fullName: "",
		address: "",
		city: "",
		province: provinces[0],
		postalCode: "",
	});

	const handleChange = (
		// for province dropdown menu type too
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		// pull out the name, value
		const { name, value } = e.target;

		setFormData({
			// (update state objects without directly modifying the original state.)
			...formData,
			[name]: value,
		});
		// console.log(name);
	};

	// ERROR HANDLING: IF USER DIDN'T SUBMIT ANYTHING...
	const isFormValid = () => {
		// extract the keys (array) of the formData object | treating it as array of keys from "ISubmittedData"
		const formDataKeys = Object.keys(formData) as (keyof ISubmittedData)[];

		// check if all fields have non-empty values
		return formDataKeys.every((item) => formData[item].trim() !== "");
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		// prevent refreshing
		e.preventDefault();
		if (!isFormValid()) {
			alert("All fields are required. Please fill out the form completely.");
			// stop passing any data
			return;
		}
		onSubmit(formData);
	};

	return (
		<>
			<FormData
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
			/>
		</>
	);
};

export default Form;
