import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

type CustomPresentationProps = {
	width: number;
	height: number;
};

const ZoomFadePresentation: React.FC<CustomPresentationProps> = ({
	children,
	width,
	height,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// 总持续时间
	const totalDurationInFrames = fps * 2.7; // 假设总持续时间为5秒

	// 定义关键帧
	const fastScaleEndFrame = 0.5 * fps; // 快速缩小结束帧
	const linearScaleEndFrame = totalDurationInFrames - 0.5 * fps; // 线性变化结束帧

	// 缩放值计算
	let scale;
	if (frame <= fastScaleEndFrame) {
		// 初期快速缩小
		scale = interpolate(frame, [0, fastScaleEndFrame], [1.7, 1.4], {
			easing: Easing.out(Easing.cubic),
			extrapolateRight: 'clamp',
		});
	} else if (frame <= linearScaleEndFrame) {
		// 中间线性变化
		scale = interpolate(
			frame,
			[fastScaleEndFrame, linearScaleEndFrame],
			[1.4, 1.2],
			{
				easing: Easing.linear,
				extrapolateRight: 'clamp',
			}
		);
	} else {
		// 最后快速缩小
		// console.log('快速缩小');

		scale = interpolate(
			frame,
			[linearScaleEndFrame, totalDurationInFrames],
			[1.2, 1],
			{
				easing: Easing.in(Easing.cubic),
				extrapolateRight: 'clamp',
			}
		);
	}

	return (
		<AbsoluteFill style={{transform: `scale(${scale})`, width, height}}>
			{children}
		</AbsoluteFill>
	);
};

export default ZoomFadePresentation;
