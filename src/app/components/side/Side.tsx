import useDevice from '@/hooks/util/useDevice'
import SideMobileUI from './SideMobileUI'
import SideDesktopUI from './SideDesktopUI'

import { SIDE_DESKTOP_WIDTH } from '@/config/style'

const Side = () => {
	// hooks
	const isMobile = useDevice()

	// desktop
	const desktopWidth = SIDE_DESKTOP_WIDTH

	return isMobile ? <SideMobileUI /> : <SideDesktopUI width={desktopWidth} />
}

export default Side
