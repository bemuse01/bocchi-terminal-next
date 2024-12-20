import type { FunctionComponent } from 'react'

interface SideProps {
	width: number
}

const SideDesktopUI: FunctionComponent<SideProps> = ({ width }) => {
	const sideDesktopClass = 'side-desktop h-full absolute'
	const sideDesktopStyle = {
		width: `${width}px`,
	}

	return (
		<div className={sideDesktopClass} style={sideDesktopStyle}>
			<div />
		</div>
	)
}

export default SideDesktopUI
