import { create } from 'zustand'

interface DataState {
	// videos
	videos: HTMLVideoElement[]
	setVideos: (videos: HTMLVideoElement[]) => void
}

const useDataStore = create<DataState>((set, get) => ({
	// videos
	videos: [],
	setVideos: (newVideos: HTMLVideoElement[]) =>
		set(() => ({ videos: newVideos })),
}))

export default useDataStore
