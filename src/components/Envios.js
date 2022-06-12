import Envio from './Envio'
import AddEnvio from './AddEnvio'
const Envios = ({ envios }) => {
    return (
        <>
        <AddEnvio>

        </AddEnvio>
            {envios.map((envio) => (
                <Envio envio={envio} key={envio.id} />
            ))}
        </>
    )
}

export default Envios