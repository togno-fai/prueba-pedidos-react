import { useState, useEffect } from 'react'

import AddItemEnvio from './AddItemEnvio'

const AddEnvio = () => {
    const [items, setItems] = useState([])
    return (
        <div className='AddEnvio'>
        <AddItemEnvio></AddItemEnvio>
        </div>
    )
}

export default AddEnvio