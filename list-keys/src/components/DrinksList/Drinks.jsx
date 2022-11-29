import { drinksArray } from '../../fakeApi'
import { useState } from 'react'

const Drinks = () => {

    const [drinks, setDrinks] = useState(drinksArray)

    return (
        <section>
            <h2>Bebidas</h2>
            {
                drinks.map((elm, idx) => {
                    return <p key={idx}>{elm}</p>
                })
            }
        </section>
    )
}

export default Drinks