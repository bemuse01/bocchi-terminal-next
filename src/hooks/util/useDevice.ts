import { useEffect, useState } from 'react'
import { SM } from '@/config/viewport'

const useDevice = () => {
	const [isMobile, setIsMobile] = useState(true)

	useEffect(() => {
		const onResize = () => {
			const width = window.innerWidth

			if (width < SM) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		}

		onResize()
		window.addEventListener('resize', onResize)

		return window.removeEventListener('resize', onResize)
	}, [])

	return isMobile
}

export default useDevice
