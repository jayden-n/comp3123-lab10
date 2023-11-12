import { ChangeEvent, FormEvent, useState, type FC } from "react";
import { ISubmittedData } from "../App";
import { provinces } from "../utils/helpers/provincesList";

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
		// for province dropdown menu too
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		// pull out the name, value
		const { name, value } = e.target;
		// ... and pass to "setFormData" state
		setFormData({
			// (update state objects without directly modifying the original state.)
			...formData,
			[name]: value,
		});
		// console.log(name);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		// prevent refreshing
		e.preventDefault();

		onSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* email */}
			<label>
				Email:
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<br />
			{/* full name */}
			<label>
				Full Name:
				<input
					type='text'
					name='fullName'
					value={formData.fullName}
					onChange={handleChange}
				/>
			</label>
			<br />

			<br />
			{/* address */}
			<label>
				Address:
				<textarea
					name='address'
					value={formData.address}
					onChange={handleChange}
				/>
			</label>
			<br />
			<br />
			{/* city */}
			<label>
				City:
				<input
					type='text'
					name='city'
					value={formData.city}
					onChange={handleChange}
				/>
			</label>
			<br />
			<br />
			{/* province */}
			<label>
				Province:
				<select
					name='province'
					value={formData.province}
					onChange={handleChange}
				>
					{provinces.map((province, i) => (
						<option key={i} value={province}>
							{province}
						</option>
					))}
				</select>
			</label>
			<br />
			<br />
			{/* postal code */}
			<label>
				Postal Code:
				<input
					type='text'
					name='postalCode'
					value={formData.postalCode}
					onChange={handleChange}
				/>
			</label>
			<button
				type='submit'
				style={{ display: "block", margin: "0 auto", marginTop: "2rem" }}
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
