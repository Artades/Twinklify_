import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CreateButton = () => {
	return (
		<div className="ml-2 w-14 h-14 flex items-center justify-center rounded-full bg-teal-600 shadow-xl cursor-pointer hover:bg-teal-800 hover:shadow-2xl transition">
			<AiOutlinePlus size={21} color="white" />
		</div>
	);
};

export default CreateButton;
