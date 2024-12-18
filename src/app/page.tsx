'use client'

import Canvas from './components/canvas/Canvas'

const Root = () => {
	const rootClass = 'root w-full h-full absolute'

	return (
		<div className={rootClass}>
			<Canvas />
		</div>
	)
}

export default Root
