
const ItemEnvio = ({ itemEnvio }) => {
    return (
        <div>
            {itemEnvio.cant} x {itemEnvio.prod} ${itemEnvio.precio}
        </div>
    )
}
export default ItemEnvio