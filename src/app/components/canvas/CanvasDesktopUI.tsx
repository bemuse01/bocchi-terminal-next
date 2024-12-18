import type React from 'react'

interface IProps {
	vmax: number
	vmin: number
	top: number
	left: number
	transform: string
}

const CanvasDesktopUI: React.FunctionComponent<IProps> = ({
	vmax,
	vmin,
	top,
	left,
	transform,
}) => {
	const canvasDesktopClass = 'canvas-desktop w-full h-full absolute'
	const canvasDesktopStyle = {
		width: `${vmax}px`,
		height: `${vmin}px`,
		top: `${top}px`,
		left: `${left}px`,
		transform,
	}

	return (
		<div className={canvasDesktopClass} style={canvasDesktopStyle}>
			<div />
		</div>
	)
}

export default CanvasDesktopUI
