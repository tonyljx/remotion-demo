// ZoomFadePresentation.tsx
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

	// 放大缩小效果的总持续时间
	const scaleDurationInFrames = fps;

	// 放大效果：从1.5倍缩小到0.8倍，一开始快速然后逐渐变慢
	const scale = interpolate(frame, [0, scaleDurationInFrames], [1.6, 1.3], {
		easing: Easing.out(Easing.cubic), // 使用二次方的减速缓动函数
		extrapolateRight: 'clamp',
	});

	// 假设音频持续时间为2秒
	const totalAudioDurationInFrames = 2.7 * fps;

	// 淡出效果的开始帧：音频结束前的某个时间点开始
	const fadeOutStartFrame = totalAudioDurationInFrames - 0.1 * fps; // 比如音频的最后0.1秒

	const scaleEnd = interpolate(
		frame,
		[fadeOutStartFrame, totalAudioDurationInFrames],
		[1.3, 1],
		{
			easing: Easing.out(Easing.cubic), // 使用二次方的减速缓动函数
			extrapolateRight: 'clamp',
		}
	);
	// const opacity = interpolate(
	// 	frame,
	// 	[fadeOutStartFrame, totalAudioDurationInFrames],
	// 	[1, 0.9], // 透明度从1降低到0.5
	// 	{extrapolateRight: 'clamp'}
	// );

	// opacity
	return (
		<AbsoluteFill style={{transform: `scale(${scale}`, width, height}}>
			{children}
		</AbsoluteFill>
	);
};

export default ZoomFadePresentation;
