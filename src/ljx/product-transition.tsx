import {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	linearTiming,
	springTiming,
	TransitionSeries,
} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {Img, Loop, staticFile, useVideoConfig} from 'remotion';
import {addSound} from './add-sound';
import {customPresentation} from './custom-presentation';

export const BasicTransition = () => {
	const {width, height} = useVideoConfig();
	const presentation = slide();
	// 大头
	const myPresentation = customPresentation({width, height});
	const withSoundMyPres = addSound(
		myPresentation,
		staticFile('transition.mp3')
	);

	return (
		<Loop durationInFrames={270}>
			<TransitionSeries>
				<TransitionSeries.Transition
					presentation={withSoundMyPres}
					// eslint-disable-next-line capitalized-comments
					// timing={linearTiming({durationInFrames: 30})}
					timing={springTiming({
						config: {
							damping: 100,
						},
						durationInFrames: 30 * 2,
						durationRestThreshold: 0.001,
					})}
				/>

				<TransitionSeries.Sequence durationInFrames={150}>
					<Img src="https://image.chatrepo.top/6377119369150433502465296.jpg" />
				</TransitionSeries.Sequence>

				<TransitionSeries.Transition
					presentation={withSoundMyPres}
					// eslint-disable-next-line capitalized-comments
					// timing={linearTiming({durationInFrames: 30})}
					timing={springTiming({
						config: {
							damping: 200,
						},
						durationInFrames: 30 * 2,
						durationRestThreshold: 0.001,
					})}
				/>

				<TransitionSeries.Sequence durationInFrames={150}>
					<Img src="https://image.chatrepo.top/6377119369175948846239215.png" />
				</TransitionSeries.Sequence>

				<TransitionSeries.Transition
					presentation={withSoundMyPres}
					// eslint-disable-next-line capitalized-comments
					// timing={linearTiming({durationInFrames: 30})}
					timing={springTiming({
						config: {
							damping: 200,
						},
						durationInFrames: 30 * 2,
						durationRestThreshold: 0.001,
					})}
				/>

				<TransitionSeries.Sequence durationInFrames={150}>
					<Img src="https://image.chatrepo.top/6377119369074910076276491.png" />
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</Loop>
	);
};
