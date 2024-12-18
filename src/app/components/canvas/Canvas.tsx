import useScreenRotate from '@/hooks/util/useScreenRotate'
import CanvasDesktopUI from './CanvasDesktopUI'
import CanvasMobileUI from './CanvasMobileUI'
import useDevice from '@/hooks/util/useDevice'

const Canvas = () => {
	// hooks
	const { vmax, vmin, top, left, transform } = useScreenRotate()
	const isMobile = useDevice()

	// desktop

	// mobile

	return isMobile ? (
		<CanvasMobileUI
			vmax={vmax}
			vmin={vmin}
			top={top}
			left={left}
			transform={transform}
		/>
	) : (
		<CanvasDesktopUI
			vmax={vmax}
			vmin={vmin}
			top={top}
			left={left}
			transform={transform}
		/>
	)
}

export default Canvas
