import { useState } from "react";
import Dropdown from "../muiComponents/Dropdown";
import Avatar from '@mui/material/Avatar';
import logo from "../../assets/logo.svg"
import "./header.scss"

function Header() {
    const [selectedOption, setSelectedOption] = useState('');
    const user = "David"
    const options = [
        { option: "Demo" },
        { option: "test" }
    ]

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='header'>
            <div className="header__left">
                <div className="header__logo">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="header__dropdown">
                    <Dropdown selectedOption={selectedOption} handleChange={handleChange} options={options} />
                </div>
            </div>
            <div className="header__right">
                <div>
                    {user}
                </div>
                <div>
                    <Avatar>{user[0]}</Avatar>

                </div>
            </div>
        </div>
    )
}



export default Header