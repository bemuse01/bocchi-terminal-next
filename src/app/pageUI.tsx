import type { FunctionComponent } from 'react'
import type { PageUIProps } from '@/types/page'
import Canvas from './components/canvas/Canvas'
import Side from './components/side/Side'

const RootUI: FunctionComponent<PageUIProps> = ({
	vmax,
	vmin,
	top,
	left,
	transform,
}) => {
	const rootClass = 'root w-full h-full absolute flex'
	const rootStyle = {
		width: `${vmax}px`,
		height: `${vmin}px`,
		top: `${top}px`,
		left: `${left}px`,
		transform,
	}

	return (
		<div className={rootClass} style={rootStyle}>
			<Side />
			<Canvas />
		</div>
	)
}

export default RootUI
