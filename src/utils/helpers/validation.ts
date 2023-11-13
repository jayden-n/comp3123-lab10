import { ISubmittedData } from "../../App";

export function isFormValid(data: ISubmittedData) {
	// Extract the keys (array) of the formData object, treating it as an array of keys from "ISubmittedData"
	const formDataKeys = Object.keys(data) as (keyof ISubmittedData)[];

	// Check if all fields are non-empty strings
	return formDataKeys.every((item) => {
		const value = data[item];
		return typeof value === "string" && value.trim() !== "";
	});
}
