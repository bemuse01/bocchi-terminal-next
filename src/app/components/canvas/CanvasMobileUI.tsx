import type React from 'react'
import Ascii from './ascii/Ascii'

const CanvasMobileUI = () => {
	const canvasMobileClass = 'canvas-mobile w-full h-full absolute'

	return (
		<div className={canvasMobileClass}>
			<Ascii />
		</div>
	)
}

export default CanvasMobileUI
