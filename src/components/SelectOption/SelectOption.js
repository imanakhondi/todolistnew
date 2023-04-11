import Select from "react-select";


const SelectOption = (props) => {
  const options = [
    { value: "all", label: "all" },
    { value: "completed", label: "completed" },
    { value: "uncompleted", label: "uncompleted" },
  ];

  const changeHandler = (selectOption) => {
    props.onChange(selectOption.value);
    props.setOption(selectOption);
  };

  return (
    <div>
      <Select
        value={props.value}
        onChange={changeHandler}
        options={options}
        
      />
    </div>
  );
};

export default SelectOption;
