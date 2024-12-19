class AsciiAnim {
	video: HTMLVideoElement

	canvas = document.createElement('canvas')
	ctx = this.canvas.getContext('2d', { willReadFrequently: true })
	step = 2
	chars = '@%#*+=-:. '
	threshold = ~~(255 * ((this.chars.length - 1) / this.chars.length))

	constructor(video: HTMLVideoElement) {
		this.video = video

		this.canvas.width = this.video.videoWidth
		this.canvas.height = this.video.videoHeight
	}

	// method
	getVideoData() {
		const { video, ctx } = this

		if (video === null) return
		if (ctx === null) return

		const { videoWidth, videoHeight } = video

		ctx.drawImage(video, 0, 0, videoWidth, videoHeight)
		const { data } = ctx.getImageData(0, 0, videoWidth, videoHeight)

		const step = this.step
		const rows = videoHeight / step
		const cols = videoWidth / step

		const arr: string[][] = []

		for (let i = 0; i < rows; i++) {
			const ii = i * step
			const temp = []

			for (let j = 0; j < cols; j++) {
				const jj = j * step

				let sum = 0

				for (let k = 0; k < step; k++)
					for (let l = 0; l < step; l++) {
						const p = data[((ii + k) * videoWidth + (jj + l)) * 4]
						sum += p
					}

				const avg = sum / (step * step)
				const avg2 = avg > this.threshold ? 255 : avg
				const character = this.chars[~~((avg2 / 255) * (this.chars.length - 1))]

				temp.push(character)
			}

			arr.push(temp)
		}

		return arr
	}
}

export default AsciiAnim
