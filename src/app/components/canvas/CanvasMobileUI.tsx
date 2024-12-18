import type React from 'react'

interface IProps {
	height: number
}

const CanvasMobileUI: React.FunctionComponent<IProps> = ({ height }) => {
	const canvasContClass = 'canvas-mobile w-full h-full'
	const canvasContStyle = {
		height: `${height}px`,
	}

	return (
		<div className={canvasContClass} style={canvasContStyle}>
			<div />
		</div>
	)
}

export default CanvasMobileUI
