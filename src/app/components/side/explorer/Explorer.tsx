import useFiles from '@/hooks/data/useFiles'
import ExplorerUI from './ExplorerUI'

const Explorer = () => {
	const files = useFiles()

	return <ExplorerUI files={files} />
}

export default Explorer
