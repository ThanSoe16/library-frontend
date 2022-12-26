import {persist, devtools} from 'zustand/middleware'
import { useMemo} from  'react'
import create from 'zustand'


let store

const initialState = {
    user: {role: 'user'},
    error: '',
    success: '',
    loading: '',
    readyToLogout: false,
    isAuthenticated: true
}

function initStore(preloadedState) {
    return create(
        devtools(
            persist(
                (set, get) => ({
                    ...initialState,
                    ...preloadedState,

                    login: async ({}) => {
                    }
                }),
                {
                    name: 'session',
                    getStorage:() => sessionStorage,
                    partialize: (state) => ({
                        user: state.user,

                    })
                }
            )
        )
    )
}
export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    if (typeof window === 'undefined') return _store

    if (!store) store = _store

    return _store
}

export function useHydrate(initialState) {
    const state =
        typeof initialState === 'string' ? JSON.parse(initialState) : initialState
    const store = useMemo(() => initializeStore(state), [state])
    return store
}