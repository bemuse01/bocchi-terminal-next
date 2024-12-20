import type { IFile } from '@/types/page'
import type { FunctionComponent } from 'react'
import File from '../directory/File'

interface FileProps {
	files: IFile[]
}

const ExplorerUI: FunctionComponent<FileProps> = ({ files }) => {
	const explorerClass = 'explorer w-full h-full'

	return (
		<div className={explorerClass}>
			{files.map((file) => (
				<File key={file.key} idx={file.key} text={file.name} />
			))}
		</div>
	)
}

export default ExplorerUI
