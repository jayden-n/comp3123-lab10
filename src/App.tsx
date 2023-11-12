import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import SubmittedData from "./components/SubmittedData";

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
			<SubmittedData data={submittedData} />
		</div>
	);
}

export default App;
