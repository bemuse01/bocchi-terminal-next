import type React from 'react'
import Ascii from './ascii/Ascii'

const CanvasDesktopUI = () => {
	const canvasDesktopClass = 'canvas-desktop w-full h-full absolute'

	return (
		<div className={canvasDesktopClass}>
			<Ascii />
		</div>
	)
}

export default CanvasDesktopUI
