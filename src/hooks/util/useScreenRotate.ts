import { useEffect, useMemo, useState } from 'react'

const useScreenRotate = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const vmax = useMemo(() => Math.max(width, height), [width, height])
	const vmin = useMemo(() => Math.min(width, height), [width, height])
	const top = useMemo(() => (vmax - width) / 2, [vmax, width])
	const left = useMemo(() => (vmin - height) / 2, [vmin, height])
	const transform = useMemo(
		() => (width > height ? 'none' : 'rotate(90deg)'),
		[width, height]
	)

	useEffect(() => {
		const onResize = () => {
			const w = window.innerWidth
			const h = window.innerHeight

			setWidth(w)
			setHeight(h)
		}

		onResize()
		window.addEventListener('resize', onResize)

		return () => window.removeEventListener('resize', onResize)
	}, [])

	return { vmax, vmin, top, left, transform }
}

export default useScreenRotate
