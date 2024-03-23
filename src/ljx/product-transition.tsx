import {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	linearTiming,
	springTiming,
	TransitionSeries,
} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {Img, Loop} from 'remotion';

export const BasicTransition = () => {
	return (
		<Loop durationInFrames={250}>
			<TransitionSeries>
				<TransitionSeries.Sequence durationInFrames={90}>
					<Img src="https://image.chatrepo.top/6377119369150433502465296.jpg" />
				</TransitionSeries.Sequence>

				<TransitionSeries.Transition
					presentation={slide()}
					// eslint-disable-next-line capitalized-comments
					// timing={linearTiming({durationInFrames: 30})}
					timing={springTiming({
						config: {
							damping: 200,
						},
						durationInFrames: 30 * 1,
						durationRestThreshold: 0.001,
					})}
				/>

				<TransitionSeries.Sequence durationInFrames={90 + 30 * 1}>
					<Img src="https://image.chatrepo.top/6377119369175948846239215.png" />
				</TransitionSeries.Sequence>

				<TransitionSeries.Transition
					presentation={slide()}
					// eslint-disable-next-line capitalized-comments
					// timing={linearTiming({durationInFrames: 30})}
					timing={springTiming({
						config: {
							damping: 200,
						},
						durationInFrames: 30,
						durationRestThreshold: 0.001,
					})}
				/>

				<TransitionSeries.Sequence durationInFrames={90 + 30 * 2}>
					<Img src="https://image.chatrepo.top/6377119369074910076276491.png" />
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</Loop>
	);
};
