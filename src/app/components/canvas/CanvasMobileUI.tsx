import type React from 'react'

interface IProps {
	vmax: number
	vmin: number
	top: number
	left: number
	transform: string
}

const CanvasMobileUI: React.FunctionComponent<IProps> = ({
	vmax,
	vmin,
	top,
	left,
	transform,
}) => {
	const canvasMobileClass = 'canvas-mobile w-full h-full absolute'
	const canvasMobileStyle = {
		width: `${vmax}px`,
		height: `${vmin}px`,
		top: `${top}px`,
		left: `${left}px`,
		transform,
	}

	return (
		<div className={canvasMobileClass} style={canvasMobileStyle}>
			<div />
		</div>
	)
}

export default CanvasMobileUI
