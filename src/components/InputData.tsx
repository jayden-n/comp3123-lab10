import { FC, FormEvent } from "react";
import { provinces } from "../utils/helpers/provincesList";

interface IFormDataProps {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const InputData: FC<IFormDataProps> = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			{/* email */}
			<label>
				Email:
				<input type='email' name='email' />
			</label>
			<br />
			<br />
			{/* full name */}
			<label>
				Full Name:
				<input type='text' name='fullName' />
			</label>
			<br />

			<br />
			{/* address */}
			<label>
				Address:
				<textarea name='address' />
			</label>
			<br />
			<br />
			{/* city */}
			<label>
				City:
				<input type='text' name='city' />
			</label>
			<br />
			<br />
			{/* province */}
			<label>
				Province:
				<select name='province'>
					{/* fix: default has to be disabled */}
					<option value='' disabled>
						{provinces[0]}
					</option>

					{/* fix: starts from index 1 */}
					{provinces.slice(1).map((province, i) => (
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
				<input type='text' name='postalCode' />
			</label>
			<br />
			<br />
			<fieldset>
				<legend>How did you find us?</legend>
				<div>
					<input
						type='checkbox'
						id='google'
						name='acquisition'
						value='google'
					/>
					<label htmlFor='google'>Google</label>
				</div>
				{/* checkbox */}
				<div>
					<input
						type='checkbox'
						id='friend'
						name='acquisition'
						value='friend'
					/>
					<label htmlFor='friend'>Referred by friend</label>
				</div>

				<div>
					<input type='checkbox' id='other' name='acquisition' value='other' />
					<label htmlFor='other'>Other</label>
				</div>
			</fieldset>

			<button style={{ display: "block", margin: "0 auto", marginTop: "2rem" }}>
				Submit
			</button>
		</form>
	);
};

export default InputData;
