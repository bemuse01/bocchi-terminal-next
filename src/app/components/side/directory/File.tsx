import type { FunctionComponent } from 'react'
import useDataStore from '@/stores/dataStore'
import FileUI from './FileUI'

interface FileProps {
	idx: number
	text: string
}

const File: FunctionComponent<FileProps> = ({ idx, text }) => {
	const { setVideoIdx } = useDataStore()

	const onPointerUp = () => {
		setVideoIdx(idx)
	}

	return <FileUI text={text} onPointerUp={onPointerUp} />
}

export default File
