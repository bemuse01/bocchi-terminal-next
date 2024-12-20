import type { FunctionComponent } from 'react'

interface FileProps {
	text: string
	onPointerUp: () => void
}

const FileUI: FunctionComponent<FileProps> = ({ text, onPointerUp }) => {
	const FileClass = 'file w-full h-auto hover:bg-mainColorA20 cursor-pointer'

	return (
		<div className={FileClass} onPointerUp={() => onPointerUp()}>
			<span>{text}</span>
		</div>
	)
}

export default FileUI
