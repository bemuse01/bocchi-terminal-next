import type { FunctionComponent } from 'react'
import Scroll from './scroll/Scroll'
import Explorer from './explorer/Explorer'

interface SideProps {
	width: number
}

const SideDesktopUI: FunctionComponent<SideProps> = ({ width }) => {
	const sideDesktopClass = 'side-desktop h-full p-[10px] text-[16px]'
	const sideDesktopStyle = {
		width: `${width}px`,
	}

	return (
		<div className={sideDesktopClass} style={sideDesktopStyle}>
			<Scroll>
				{/* {Array.from({ length: 20 }, (_, i: number) => (
					<div key={i} className="w-full h-[50px] bg-white"></div>
				))} */}

				<Explorer />
			</Scroll>
		</div>
	)
}

export default SideDesktopUI
