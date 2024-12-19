import type { RefObject, FunctionComponent } from 'react'

interface IProps {
	canvasRef: RefObject<HTMLCanvasElement>
}

const AsciiUI: FunctionComponent<IProps> = ({ canvasRef }) => {
	return (
		<div>
			<canvas ref={canvasRef} />
		</div>
	)
}

export default AsciiUI
