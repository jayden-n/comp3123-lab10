import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

export interface ISubmittedData {
	email: string;
	fullName: string;
	address: string;
	city: string;
	province: string;
	postalCode: string;
}

function App(): React.ReactElement {
	const [submittedData, setSubmittedData] = useState<ISubmittedData | null>(
		null,
	);

	const handleFormSubmit = (data: ISubmittedData) => {
		setSubmittedData(data);
	};
	return (
		<div>
			<h1>Data Entry Form</h1>
			<Form onSubmit={handleFormSubmit} />
			{submittedData && (
				<div>
					<h2>Submitted Data:</h2>
					<p>Email: {submittedData.email}</p>
					<p>Full Name: {submittedData.fullName}</p>
					<p>Address: {submittedData.address}</p>
					<p>City: {submittedData.city}</p>
					<p>Province: {submittedData.province}</p>
					<p>Postal Code: {submittedData.postalCode}</p>
				</div>
			)}
		</div>
	);
}

export default App;
