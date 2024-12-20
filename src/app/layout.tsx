import type { Metadata } from 'next'
// import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'

// const ubuntu_mono = Ubuntu_Mono({
// 	weight: '400',
// 	variable: '--font-ubuntu_mono',
// 	subsets: ['latin'],
// 	display: 'swap',
// })

export const metadata: Metadata = {
	title: 'Bocchi Terminal',
	description: 'Bocchi terminal next',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={'antialiased'}>{children}</body>
		</html>
	)
}
