import AsciiUI from './AsciiUI'
import { useCallback, useEffect, useRef } from 'react'
import useAsciiAnim from '@/hooks/canvas/useAsciiAnim'
import { CANVAS_FONT_COLOR, CANVAS_FONT_RATIO } from '@/config/style'
import useDevice from '@/hooks/util/useDevice'

const Ascii = () => {
	// hooks
	const isMobile = useDevice()
	const asciiAnim = useAsciiAnim()

	// canvas
	const asciiRef = useRef<HTMLDivElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const ctx = useRef<CanvasRenderingContext2D | null | undefined>(null)

	const initCanvas = useCallback(() => {
		if (asciiRef.current === null) return
		if (canvasRef.current === null) return

		const { width, height } = asciiRef.current.getBoundingClientRect()
		const vmin = Math.min(width, height)

		//
		if (isMobile) {
			canvasRef.current.width = height
			canvasRef.current.height = width
		} else {
			canvasRef.current.width = width
			canvasRef.current.height = height
		}

		//
		ctx.current = canvasRef.current?.getContext('2d')

		if (ctx.current === null) return

		const fontSize = ~~(vmin * CANVAS_FONT_RATIO)

		ctx.current.textAlign = 'center'
		ctx.current.font = `${fontSize}px UbuntuMonoRegular`
		ctx.current.fillStyle = CANVAS_FONT_COLOR
	}, [isMobile])

	const drawCanvas = useCallback(() => {
		if (asciiRef.current === null) return
		if (canvasRef.current === null) return
		if (ctx.current === null || ctx.current === undefined) return
		if (asciiAnim === null) return

		const data = asciiAnim.getVideoData()
		if (data === undefined) return

		//
		const { width, height } = asciiRef.current.getBoundingClientRect()
		const vmin = Math.min(width, height)
		const fontSize = ~~(vmin * CANVAS_FONT_RATIO)
		const rows = data.length

		//
		let x = 0
		let offsetY = 0

		if (isMobile) {
			ctx.current.clearRect(0, 0, height, width)

			x = height / 2
			offsetY = width / 2 - (data.length * fontSize) / 2
		} else {
			ctx.current.clearRect(0, 0, width, height)

			x = width / 2
			offsetY = height / 2 - (data.length * fontSize) / 2
		}

		for (let i = 0; i < rows; i++) {
			const characters = data[i].join(' ')
			const y = offsetY + i * fontSize

			ctx.current.fillText(characters, x, y)
		}
	}, [asciiAnim, isMobile])

	// method

	// animate
	const raf = useRef<number | null>(null)
	const animate = useCallback(() => {
		drawCanvas()

		raf.current = requestAnimationFrame(animate)
	}, [drawCanvas])

	// resize
	const onResize = useCallback(() => {
		initCanvas()
	}, [initCanvas])

	//
	useEffect(() => {
		initCanvas()
		animate()
		window.addEventListener('resize', onResize)

		return () => {
			if (raf.current) cancelAnimationFrame(raf.current)
			window.removeEventListener('resize', onResize)
		}
	}, [initCanvas, animate, onResize])

	return <AsciiUI asciiRef={asciiRef} canvasRef={canvasRef} />
}

export default Ascii
