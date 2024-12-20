import Scroll from './scroll/Scroll'
import Explorer from './explorer/Explorer'
import type { FunctionComponent } from 'react'

interface SideProps {
	width: number
}

const SideMobileUI: FunctionComponent<SideProps> = ({ width }) => {
	const sideMobileClass = 'side-mobile h-full text-[18px]'
	const sideMobileStyle = {
		width: `${width}px`,
	}

	return (
		<div className={sideMobileClass} style={sideMobileStyle}>
			<Scroll>
				<Explorer />
			</Scroll>
		</div>
	)
}

export default SideMobileUI
