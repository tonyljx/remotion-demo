import {
	AbsoluteFill,
	Audio,
	Composition,
	OffthreadVideo,
	Sequence,
	staticFile,
	useVideoConfig,
	Video,
} from 'remotion';
import {Transcription} from '../types/transcription';
import Subtitle from './Subtitle';
import data from '../../public/caption.json';
import {BasicTransition} from './product-transition';

function SubtitleTemplateV1() {
	// 参数 mp3url
	// const [subtitles, setSubstitles] = useState<Transcription | null>(null);
	const {fps} = useVideoConfig();
	const subtitles = data as Transcription;

	console.log(subtitles);

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			{/* video */}
			<BasicTransition />

			{/* subtitle audio */}
			<AbsoluteFill>
				{/* <OffthreadVideo
					style={{
						objectFit: 'cover',
					}}
					// src={staticFile('caption.mp3')}
					src="https://logomakers.s3.ap-southeast-1.amazonaws.com/caption.mp3"
				/> */}
				{/* <Video src={staticFile('caption.mp3')} /> */}
				<Audio src="https://logomakers.s3.ap-southeast-1.amazonaws.com/caption.mp3" />
			</AbsoluteFill>

			{/* subtitle */}
			{subtitles &&
				subtitles.segments.map((subtitle, index) => {
					const subtitleStartFrame = subtitle.start * fps;
					const subtitleEndFrame = subtitle.end * fps;
					console.log(
						`idx: ${index} start ${subtitle.start} end ${subtitle.end} ${subtitleStartFrame} ${subtitleEndFrame} `
					);

					return (
						<Sequence
							key={index}
							from={subtitleStartFrame}
							durationInFrames={subtitleEndFrame - subtitleStartFrame + 1}
						>
							<Subtitle key={index} text={subtitle.text} />;
						</Sequence>
					);
				})}
		</AbsoluteFill>
	);
}

export default function ProductVideoV1() {
	return (
		<Composition
			id="template1"
			component={SubtitleTemplateV1}
			width={1080}
			height={1920}
			fps={30}
			durationInFrames={1800}
		/>
	);
}
