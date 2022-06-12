import Select from 'react-select'
import NumericInput from 'react-numeric-input';

const options = [
    { value: 'fernet', label: 'fernet' },
    { value: 'coca', label: 'coca' },
    { value: 'pack', label: 'pack' }
]

const AddItemEnvio = () => {
    return (
        // ese Envio dsps borrarlo
        <form className="AddItemEnvio">
            <NumericInput className='InputCant'></NumericInput>
            <Select options={options} className='InputProducto'></Select>
            <NumericInput className='InputPrecio' step={50}></NumericInput>
        </form>
    )
}
export default AddItemEnvio