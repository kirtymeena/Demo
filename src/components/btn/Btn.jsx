import "./btn.scss"

function Btn({ option, handleOptionchange, selectedOption }) {
    const { title, id } = { ...option }
    return (
        <button className={`btn ${selectedOption === title && 'btn-selected'}`} key={id} onClick={() => handleOptionchange(title)}>{title}</button>
    )
}

export default Btn