import CanvasDesktopUI from './CanvasDesktopUI'
import CanvasMobileUI from './CanvasMobileUI'
import useDevice from '@/hooks/util/useDevice'

const Canvas = () => {
	// hooks
	const isMobile = useDevice()

	// desktop

	// mobile

	return isMobile ? <CanvasMobileUI /> : <CanvasDesktopUI />
}

export default Canvas
