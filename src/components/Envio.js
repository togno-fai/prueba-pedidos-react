import ItemEnvio from './ItemEnvio'

const Envio = ({ envio }) => {
    return (
        <div className="Envio" key={envio.id}>
            <div>{envio.dir} </div>
            <div>{envio.wame} </div>
            {envio.items.map((item) => (
                <ItemEnvio itemEnvio={item} key={item.prod} />
            ))}
            <div>envio ${envio.envio} </div>
            <div>total ${envio.total}</div>
        </div>
    )
}

export default Envio