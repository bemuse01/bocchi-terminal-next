import AsciiAnim from '@/utils/ascii/AsciiAnim'
import AsciiUI from './AsciiUI'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useDataStore from '@/stores/dataStore'

const Ascii = () => {
	// store
	const videos = useDataStore((state) => state.videos)

	// ascii
	const asciiAnims = useMemo<AsciiAnim[]>(() => {
		return videos.map((video) => new AsciiAnim(video))
	}, [videos])

	// canvas
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const draw = useCallback(() => {
		if (canvasRef.current === null) return
	}, [])

	// method
	const raf = useRef<number | null>(null)
	const animate = useCallback(() => {
		draw()

		raf.current = requestAnimationFrame(animate)
	}, [draw])

	useEffect(() => {
		animate()

		return () => {
			if (raf.current) cancelAnimationFrame(raf.current)
		}
	}, [animate])

	return <AsciiUI canvasRef={canvasRef} />
}

export default Ascii
