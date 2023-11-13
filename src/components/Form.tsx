import { FC, FormEvent, useState } from "react";
import { ISubmittedData } from "../App";
import { isFormValid } from "../utils/helpers/validation";
import InputData from "./InputData";

type IFormProps = {
	onSubmit: (data: ISubmittedData) => void;
};

const Form: FC<IFormProps> = ({ onSubmit }) => {
	// ERROR HANDLING: when user submit nothing...
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	// submitting form
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const fd = new FormData(event.target as HTMLFormElement);

		// fix: such multi "same" value input fields are lost
		const acquisitionChannel: string[] = [];
		fd.getAll("acquisition").forEach((value) => {
			if (typeof value === "string") {
				acquisitionChannel.push(value);
			}
		});

		const data: ISubmittedData = Object.fromEntries(fd.entries());

		if (isFormValid(data)) {
			// adding a new property
			data.acquisition = acquisitionChannel;
			onSubmit(data);
			setErrorMessage(null); // reset error message if form submission is successful
		} else {
			setErrorMessage("Please fill in all required fields."); // set an error message for the user
		}
	};

	return (
		<>
			<InputData handleSubmit={handleSubmit} />
			{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
		</>
	);
};

export default Form;
