import { useState } from "react"
import Btn from "../btn/Btn"
import "./subHeader.scss"

function SubHeader() {
    const [selectedOption, setSelectedOption] = useState('Dashboard')
    const headerOptions = [
        {
            title: "Dashboard",
            id: 1
        },
        {
            title: "Analytics",
            id: 2
        }
    ]

    const handleOptionchange = (title) => {

        setSelectedOption(title)
    }
    return (
        <div className="subHeader__container">
            {
                headerOptions.map(option =>
                    <Btn option={option} handleOptionchange={handleOptionchange} selectedOption={selectedOption} />
                )
            }
        </div>
    )
}

export default SubHeader