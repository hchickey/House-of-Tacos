

export const OrderButton = ({submitOrder}) => {
    return (
        <button onClick={
            () => {
                submitOrder()
            }
        }>
            Submit Order
        </button>
    )
}