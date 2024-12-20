import { useMemo } from 'react'
import { VIDEOS } from '@/config/data'
import type { IFile } from '@/types/page'

const useFiles = () => {
	const files = useMemo<IFile[]>(() => {
		return VIDEOS.map((video, idx) => ({
			key: idx,
			name: video,
		}))
	}, [])

	return files
}

export default useFiles
