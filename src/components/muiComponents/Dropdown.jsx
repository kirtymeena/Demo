import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown({ selectedOption, handleChange, options }) {
    return (
        <FormControl sx={{ m: 2, minWidth: 120 }}>
            <Select
                size='small'
                value={selectedOption}
                onChange={(e) => handleChange(e)}
            >
                {
                    options.map((option, idx) =>
                        <MenuItem key={idx} value={option.option}>{option.option}</MenuItem>
                    )
                }

            </Select>
        </FormControl>
    )
}

export default Dropdown