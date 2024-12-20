import type React from 'react'
import Ascii from './ascii/Ascii'

const CanvasMobileUI = () => {
	const canvasMobileClass = 'canvas-mobile flex-1 h-full relative'

	return (
		<div className={canvasMobileClass}>
			<Ascii />
		</div>
	)
}

export default CanvasMobileUI
