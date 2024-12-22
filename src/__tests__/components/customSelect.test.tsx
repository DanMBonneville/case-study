import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomSelect from '../../components/CustomSelect';

describe('CustomSelect Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const defaultOption = { value: 'option1', label: 'Option 1' };

  it('should prevent user interaction when isDisabled is true', async () => {
    const mockHandleChange = jest.fn();
    render(
      <CustomSelect
        data-testid="route-select"
        placeholder="placeholder text"
        options={options}
        isDisabled={true}
        selectedValue={null}
        handleChange={mockHandleChange}
      />
    );

    const selectWrapper = screen.getByTestId('route-select');
    const inputElement = selectWrapper.querySelector('input');
    expect(inputElement).toBeDisabled();
  });

  it('should display the selectedValue property on render', () => {
    const mockHandleChange = jest.fn();
    render(
      <CustomSelect
        data-testid="route-select"
        placeholder="placeholder text"
        options={options}
        selectedValue={defaultOption}
        handleChange={mockHandleChange}
        isDisabled={false}
      />
    );

    const selectElement = screen.getByTestId('route-select');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveTextContent('Option 1');
  });

  it('should call handleChange with correct parameters on a selection from the dropdown', async () => {
    const mockHandleChange = jest.fn();
    render(
      <CustomSelect
        data-testid="route-select"
        placeholder="placeholder text"
        options={options}
        selectedValue={defaultOption}
        isDisabled={false}
        handleChange={mockHandleChange}
      />
    );
    userEvent.click(screen.getByText('Option 1'));

    const secondOptionElement = await screen.findByText('Option 2');
    await userEvent.click(secondOptionElement);

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(
      { value: 'option2', label: 'Option 2' },
      { action: 'select-option', name: 'custom-select', option: undefined }
    );
  });
});
