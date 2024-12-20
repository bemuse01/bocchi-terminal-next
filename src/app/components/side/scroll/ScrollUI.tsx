import type { FunctionComponent, ReactNode } from 'react'

interface ScrollProps {
	children?: ReactNode
}

const ScrollUI: FunctionComponent<ScrollProps> = ({ children }) => {
	const scrollClass = 'scroll w-full h-full overflow-y-scroll pr-[6px]'

	return <div className={scrollClass}>{children}</div>
}

export default ScrollUI
