import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactForm } from "src/sections";
import { http } from "src/services";
import { notification } from "src/services/notificationServices";

const message = "Required";
const schema = yup
	.object({
		email: yup.string().email().required(message),
		first_name: yup.string().required(message),
		message: yup.string().required(message),
	})
	.required();

export const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			const response = await http.request("/contact-form", data);
			notification(response.statusText);
		} catch (error) {
			notification(error.message);
		}
	};

	return (
		<>
			<ContactForm
				register={register}
				handleSubmit={handleSubmit(onSubmit)}
				errors={errors}
			/>
		</>
	);
};
