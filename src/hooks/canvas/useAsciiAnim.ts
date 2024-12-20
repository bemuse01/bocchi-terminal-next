import useDataStore from '@/stores/dataStore'
import { useMemo } from 'react'
import AsciiAnim from '@/utils/ascii/AsciiAnim'

const useAsciiAnim = () => {
	// store
	const videos = useDataStore((state) => state.videos)
	const videoIdx = useDataStore((state) => state.videoIdx)

	// ascii
	const asciiAnims = useMemo<AsciiAnim[]>(() => {
		return videos.map((video, idx) => new AsciiAnim(video, idx))
	}, [videos])
	const asciiAnim = useMemo<AsciiAnim | null>(() => {
		if (asciiAnims.length === 0) return null

		for (const asciiAnim of asciiAnims) {
			asciiAnim?.playVideo(videoIdx)
			asciiAnim?.stopVideo(videoIdx)
		}

		return asciiAnims[videoIdx]
	}, [asciiAnims, videoIdx])

	return asciiAnim
}

export default useAsciiAnim
