// import type AsciiAnim from '@/utils/ascii/AsciiAnim'
import { create } from 'zustand'

// interface CanvasState {
// 	canvas
// 	canvas: HTMLCanvasElement | null
// 	setCanvas: (canvas: HTMLCanvasElement) => void

// 	ascii
// 	asciiAnim: AsciiAnim | null
// 	setAsciiAnim: (asciiAnim: AsciiAnim) => void
// }

const useCanvasStore = create((set, get) => ({
	// canvas
	// canvas: null,
	// setCanvas: (newCanvas: HTMLCanvasElement) =>
	// 	set(() => ({ canvas: newCanvas })),
	// asciiAnim
	// asciiAnim: null,
	// setAsciiAnim: (newAsciiAnim: AsciiAnim) =>
	// 	set(() => ({ asciiAnim: newAsciiAnim })),
}))

export default useCanvasStore
