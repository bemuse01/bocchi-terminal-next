'use client'

import RootUI from './pageUI'
import useVideos from '@/hooks/data/useVideos'
import useScreenRotate from '@/hooks/util/useScreenRotate'

const Root = () => {
	// hooks
	const { vmax, vmin, top, left, transform } = useScreenRotate()

	// data
	useVideos()

	return (
		<RootUI
			vmax={vmax}
			vmin={vmin}
			top={top}
			left={left}
			transform={transform}
		/>
	)
}

export default Root
