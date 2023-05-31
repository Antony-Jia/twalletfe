import { create } from 'zustand';

type isAuthenticatedState = {
    isAuthenticated: boolean
    login: () => void
    logout: () => void
}

const useIsAuthenticatedStore = create<isAuthenticatedState>(set => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false })
}))

export default useIsAuthenticatedStore