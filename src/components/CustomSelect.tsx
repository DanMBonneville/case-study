import React from 'react';
import Select, { StylesConfig } from 'react-select';

const CustomSelect: React.FC<CustomSelectProps> = ({
  'data-testid': testId,
  placeholder,
  options,
  selectedValue,
  isDisabled,
  handleChange
}) => {
  const customStyles: StylesConfig<SelectOptionType, false> = {
    container: (provided, state) => ({
      ...provided,
      width: '100%',
      opacity: state.isDisabled ? 0.4 : 1
    })
  };

  return (
    <div data-testid={testId} className="custom-select-wrapper">
      <Select
        name="custom-select"
        aria-label={testId}
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
