import type {TransitionPresentation} from '@remotion/transitions';
import ZoomFadePresentation from './zoom-fade-quick';

type CustomPresentationProps = {
	width: number;
	height: number;
};
export const customPresentation = (
	props: CustomPresentationProps
): TransitionPresentation<CustomPresentationProps> => {
	return {component: ZoomFadePresentation, props};
};
