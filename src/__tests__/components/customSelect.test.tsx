import { fireEvent, render, screen } from "@testing-library/react";
import CustomSelect from "../../components/CustomSelect";

describe("CustomSelect Component", () => {
	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" },
	];

	const defaultOption = {
		value: "default-option",
		label: "default-option",
	};

	const mockHandleChange = jest.fn();

	it("verifies basic select functions", () => {
		render(
			<CustomSelect
				data-testid="route-select"
				placeholder="placeholder text"
				options={options}
				isDisabled={false}
				selectedValue={defaultOption}
				handleChange={mockHandleChange}
			/>
		);

		const customSelectComponent = screen.getByTestId("route-select");

		fireEvent.mouseDown(customSelectComponent);
		fireEvent.click(screen.getByText("Option 1"));

		expect(mockHandleChange).toHaveBeenCalledTimes(1);
		expect(customSelectComponent).toHaveTextContent("Option 1");
	});
});
