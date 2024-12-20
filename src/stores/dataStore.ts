import { create } from 'zustand'

interface DataState {
	// videos
	videos: HTMLVideoElement[]
	setVideos: (videos: HTMLVideoElement[]) => void

	// video idx
	videoIdx: number
	setVideoIdx: (idx: number) => void
}

const useDataStore = create<DataState>((set, get) => ({
	// videos
	videos: [],
	setVideos: (newVideos: HTMLVideoElement[]) =>
		set(() => ({ videos: newVideos })),

	// video idx
	videoIdx: 0,
	setVideoIdx: (idx: number) => set(() => ({ videoIdx: idx })),
}))

export default useDataStore
