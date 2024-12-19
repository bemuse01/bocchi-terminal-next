'use client'

import RootUI from './pageUI'
import useVideos from '@/hooks/data/useVideos'

const Root = () => {
	// data
	useVideos()

	return <RootUI />
}

export default Root
