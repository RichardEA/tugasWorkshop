import { useContext } from "react"
import { DataContext } from "./Home"

function Cart(){

    const {cartItem, tes} = useContext(DataContext)

    return (
        <div>
            <p>{tes}</p>
        </div>
    )
}

export default Cart;