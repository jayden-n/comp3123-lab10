import { FC } from "react";
import { ISubmittedData } from "../App";

interface ISubmittedDataProps {
	// data
	data: ISubmittedData | null;
}
const SubmittedData: FC<ISubmittedDataProps> = ({ data }) => {
	return (
		<>
			{data && (
				<div>
					<h2>Submitted Data:</h2>
					<p>Email: {data.email}</p>
					<p>Full Name: {data.fullName}</p>
					<p>Address: {data.address}</p>
					<p>City: {data.city}</p>
					<p>Province: {data.province}</p>
					<p>Postal Code: {data.postalCode}</p>
				</div>
			)}
		</>
	);
};

export default SubmittedData;
