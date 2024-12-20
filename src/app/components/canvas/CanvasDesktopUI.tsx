import type React from 'react'
import Ascii from './ascii/Ascii'

const CanvasDesktopUI = () => {
	const canvasDesktopClass = 'canvas-desktop flex-1 h-full relative'

	return (
		<div className={canvasDesktopClass}>
			<Ascii />
		</div>
	)
}

export default CanvasDesktopUI
