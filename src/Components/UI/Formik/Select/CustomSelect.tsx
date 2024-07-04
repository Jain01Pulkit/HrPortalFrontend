import Select from "react-select";
import Label from "../Label/Label";
import "./CustomSelect.scss";

const CustomSelect = (props: {
  options?: any;
  menuIsOpen?: boolean;
  isSearchable?: boolean;
  defaultValue?: any;
  label?: string | number | undefined;
  className?: string | undefined;
  onChange?: any;
  value?: any;
}) => {
  console.log("ccccccccc", props.value);
  return (
    <div
      className={`common-select-wrapper  ${
        props.className ? props.className : ""
      }`}
    >
      {props.label && <Label label={props.label} />}
      <Select
        options={props.options}
        className="common-select"
        classNamePrefix="react-select"
        menuIsOpen={props.menuIsOpen}
        isSearchable={props.isSearchable}
        // defaultValue={props.defaultValue}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default CustomSelect;
