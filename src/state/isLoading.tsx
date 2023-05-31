import { create } from 'zustand';

type isLoadingState = {
    isLoading: boolean
    login: () => void
    logout: () => void
}

const useIsLoadingStore = create<isLoadingState>(set => ({
    isLoading: false,
    login: () => set({ isLoading: true }),
    logout: () => set({ isLoading: false })
}))

export default useIsLoadingStore