import type { RefObject, FunctionComponent } from 'react'

interface AsciiProps {
	asciiRef: RefObject<HTMLDivElement>
	canvasRef: RefObject<HTMLCanvasElement>
}

const AsciiUI: FunctionComponent<AsciiProps> = ({ asciiRef, canvasRef }) => {
	const acsiiClass = 'ascii w-full h-full absolute'

	return (
		<div ref={asciiRef} className={acsiiClass}>
			<canvas ref={canvasRef} />
		</div>
	)
}

export default AsciiUI
