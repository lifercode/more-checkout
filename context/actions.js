export const defaultActions = {
  setCart: () => {},
  addToCart: () => {},
  removeToCart: () => {},
}

export const setCart = (state, setState, cart) => {
    setState({ ...state, cart })
}

export const addToCart = (state, setState, product) => {
    if (!state.cart.filter(({ id }) => id === product.id).length) {
        setState({ ...state, cart: [...state.cart, { ...product, qty: 1 }] })
    } else {
        setState({
            ...state,
            cart: [
                ...state.cart
                    .map((item) => (
                        item.id === product.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    ))
            ]
        })
    }
}

export const removeToCart = (state, setState, product) => {
    if (state.cart.filter(({ id }) => id === product.id).length) {
        const data = [
            ...state.cart
                .map((item) => (
                    item.id === product.id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                ))
        ]

        setState({
            ...state,
            cart: data.filter(({ qty }) => qty >= 1)
        })
    }
}
