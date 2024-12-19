import { VIDEOS_PATH, VIDEOS } from '@/config/data'
import useDataStore from '@/stores/dataStore'
import { useCallback, useEffect } from 'react'

const setVideoByPromise = (src: string) => {
	return new Promise<HTMLVideoElement>((resolve, reject) => {
		const video = document.createElement('video')
		video.src = src
		video.muted = true
		video.loop = true

		video.oncanplaythrough = () => {
			resolve(video)
		}
		video.onerror = (err) => {
			reject(err)
		}
	})
}

const useVideos = () => {
	// store
	const { setVideos } = useDataStore()
	// const videos = useDataStore((state) => state.videos)

	//
	const setVideosByAsync = useCallback(async () => {
		const callbacks = VIDEOS.map((video) =>
			setVideoByPromise(VIDEOS_PATH + video)
		)
		const newVideos = await Promise.all(callbacks)

		setVideos(newVideos)
	}, [setVideos])

	useEffect(() => {
		setVideosByAsync()
	}, [setVideosByAsync])

	// useEffect(() => {
	// 	console.log(videos)
	// }, [videos])
}

export default useVideos
