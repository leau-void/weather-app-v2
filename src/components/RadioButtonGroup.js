import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioButtonGroup = (props) => {
  const { value, setValue, options, title, sx } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={sx} component="fieldset">
      <FormLabel color="text" component="legend">
        {title}
      </FormLabel>
      <RadioGroup row aria-label={title} value={value} onChange={handleChange}>
        {options.map((option, i) => (
          <FormControlLabel
            value={option.value}
            control={<Radio color="text" />}
            label={option.label}
            key={i}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
