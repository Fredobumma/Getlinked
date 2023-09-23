import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterForm, Congratulations } from "src/sections";
import { http } from "src/services";
import { notification } from "src/services/notificationServices";

const message = "Required";
const schema = yup
	.object({
		team_name: yup.string().required(message),
		phone_number: yup
			.number()
			.positive()
			.integer()
			.required(message)
			.typeError(message),
		email: yup.string().email().required(message),
		project_topic: yup.string().required(message),
		category: yup.string().required(message),
		group_size: yup.string().required(message),
		privacy_poclicy_accepted: yup.bool().oneOf([true]),
	})
	.required(message);

export const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const [successMessage, setSuccessMessage] = useState(false);

	const onSubmit = async (data) => {
		try {
			const response = await http.request("/registration", data);
			notification(response.statusText);
			setSuccessMessage(!successMessage);
		} catch (error) {
			const message = Object.keys(error.response.data);
			notification(`Error! Please check ${message[0]}`);
		}
	};

	return (
		<>
			<section className="relative">
				<RegisterForm
					register={register}
					handleSubmit={handleSubmit(onSubmit)}
					errors={errors}
					successMessage={successMessage}
					setSuccessMessage={setSuccessMessage}
				/>
				{successMessage && (
					<Congratulations
						successMessage={successMessage}
						setSuccessMessage={setSuccessMessage}
					/>
				)}
			</section>
		</>
	);
};
