import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {fitText} from '@remotion/layout-utils';
import {makeTransform, scale, translateY} from '@remotion/animation-utils';

export const Word: React.FC<{
	enterProgress: number;
	text: string;
	stroke: boolean;
}> = ({enterProgress, text, stroke}) => {
	/**
	 *
	 */

	// const boxWidth = 600;
	// Must be loaded before calling fitText()
	const fontFamily = 'Helvetica';
	const fontWeight = 'bold';

	const {width} = useVideoConfig();
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const desiredFontSize = 120;

	const fittedText = fitText({
		fontFamily,
		text,
		withinWidth: width * 0.9,
	});

	const fontSize = Math.min(desiredFontSize, fittedText.fontSize);

	const words = text.split(' ');

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				top: undefined,
				bottom: '50%',
				height: 150,
				fontWeight,
			}}
		>
			<div
				style={{
					fontSize,
					color: 'white',
					WebkitTextStroke: stroke ? '20px black' : undefined,
					fontFamily,
					textTransform: 'uppercase',
					transform: makeTransform([
						scale(interpolate(enterProgress, [0, 1], [0.8, 1])),
						translateY(interpolate(enterProgress, [0, 1], [50, 0])),
					]),
					textAlign: 'center',
				}}
			>
				{/* {text} */}
				{words.map((t, i) => {
					const delay = i * 5;
					const scale = spring({
						fps: videoConfig.fps,
						frame: frame - delay,
						config: {
							damping: 200,
						},
					});
					return (
						<span
							key={t}
							style={{
								color: 'white',
								transform: `scale(${scale})`,
							}}
						>
							{t}
						</span>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
