import React, { useState } from 'react'

import { initialState } from './state'
import {
    defaultActions,
    setCart,
    addToCart,
    removeToCart
} from './actions'

export const StateContext = React.createContext({
    state: initialState,
    actions: defaultActions
})

export const Context = props => {
    const [state, _setState] = useState(initialState)

    const setState = (_state) => {
        const newState = { ...state, ..._state }
        _setState(newState)
    }

    const actions = {
        setCart: setCart.bind(null, state, setState),
        addToCart: addToCart.bind(null, state, setState),
        removeToCart: removeToCart.bind(null, state, setState)
    }

    return (
        <StateContext.Provider value={{ state, actions }} >
            {props.children}
        </StateContext.Provider>
    )

}