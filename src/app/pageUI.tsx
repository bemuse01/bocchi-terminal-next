import type { FunctionComponent } from 'react'
import Canvas from './components/canvas/Canvas'
import type { PageUIProps } from '@/types/page'

const RootUI: FunctionComponent<PageUIProps> = ({
	vmax,
	vmin,
	top,
	left,
	transform,
}) => {
	const rootClass = 'root w-full h-full absolute'
	const rootStyle = {
		width: `${vmax}px`,
		height: `${vmin}px`,
		top: `${top}px`,
		left: `${left}px`,
		transform,
	}

	return (
		<div className={rootClass} style={rootStyle}>
			<Canvas />
		</div>
	)
}

export default RootUI
