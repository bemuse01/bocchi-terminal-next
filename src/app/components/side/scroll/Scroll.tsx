import type { FunctionComponent, ReactNode } from 'react'
import ScrollUI from './ScrollUI'

interface ScrollProps {
	children?: ReactNode
}

const Scroll: FunctionComponent<ScrollProps> = ({ children }) => {
	return <ScrollUI>{children}</ScrollUI>
}

export default Scroll
