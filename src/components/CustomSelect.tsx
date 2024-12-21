import React from "react";
import Select from "react-select";

const CustomSelect: React.FC<CustomSelectProps> = ({
	"data-testid": testId,
	placeholder,
	options,
	selectedValue,
	isDisabled,
	handleChange,
}) => {
	const customStyles = {
		container: (provided: any, state: any) => ({
			...provided,
			width: "100%",
			opacity: state.isDisabled ? 0.4 : 1,
		}),
		menu: (provided: any) => ({
			...provided,
		}),
		option: (provided: any, state: any) => ({
			...provided,
		}),
	};

	return (
		<div data-testid={testId} className="custom-select-wrapper">
			<div className={"nav-icon "} />
			<Select
				name="custom-select"
				styles={customStyles}
				placeholder={placeholder}
				options={options}
				value={selectedValue}
				isDisabled={isDisabled}
				onChange={handleChange}
				isClearable
			/>
		</div>
	);
};

export default CustomSelect;
