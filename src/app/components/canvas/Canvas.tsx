import CanvasDesktopUI from './CanvasDesktopUI'
import CanvasMobileUI from './CanvasMobileUI'
import useDevice from '@/hooks/util/useDevice'
import useMobileHeight from '@/hooks/util/useMobileHeight'

const Canvas = () => {
	// hooks
	const isMobile = useDevice()
	const height = useMobileHeight()

	// desktop

	// mobile

	return isMobile ? <CanvasMobileUI height={height} /> : <CanvasDesktopUI />
}

export default Canvas
