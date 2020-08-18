import React from 'react';

interface IProps {
	hide: boolean;
}

interface IState {
	isHidden: boolean;
}

export class SunLayer extends React.Component<IProps, IState> {
	private timer: ReturnType<typeof setTimeout> | undefined;
	constructor(props: IProps) {
		super(props);
		this.state = {
			isHidden: props.hide,
		};
	}
	public componentDidUpdate() {
		if (this.props.hide && !this.state.isHidden) {
            if (this.timer) {
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(() => {
				this.setState({isHidden: true});
			}, 10000);
		} else if (!this.props.hide) {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			if (this.state.isHidden) {
				this.setState({isHidden: false});
			}
		}
	}
	public render(): JSX.Element {
		const {hide} = this.props;
		const {isHidden} = this.state;
		const weatherSunClass = isHidden ? '' : 'weather-sun';
		const weatherSunShadowClass = isHidden ? '' : 'weather-sun-shadow';
		return (
			<g id="sungroup" transform="translate(64,64)">
				<path
					className={hide ? 'weather-hide-layer ' + weatherSunShadowClass : 'weather-show-layer ' + weatherSunShadowClass}
					d="m-10 -40c-1.2 9.9-6.9 12.23-14.72 6.06 2.68 9.6-1.7 13.92-11.28 11.22 6.15 7.84 3.76 13.49-6.12 14.66 8.69 4.89 8.66 11.05-0.03 15.91 9.9 1.2 12.23 6.9 6.06 14.72 9.6-2.68 13.92 1.7 11.22 11.28 7.84-6.15 13.49-3.76 14.66 6.13 4.89-8.69 11.05-8.66 15.91 0.03 1.2-9.9 6.9-12.23 14.72-6.06-2.68-9.6 1.7-13.92 11.28-11.22-6.15-7.84-3.76-13.49 6.13-14.66-8.69-4.89-8.66-11.05 0.03-15.91-9.9-1.2-12.23-6.9-6.06-14.72-9.6 2.68-13.92-1.7-11.22-11.28-7.84 6.15-13.49 3.76-14.66-6.12-4.89 8.69-11.05 8.66-15.91-0.03z"
				/>
				<path
					className={hide ? 'weather-hide-layer ' + weatherSunClass : 'weather-show-layer ' + weatherSunClass}
					d="m-10 -40c-1.2 9.9-6.9 12.23-14.72 6.06 2.68 9.6-1.7 13.92-11.28 11.22 6.15 7.84 3.76 13.49-6.12 14.66 8.69 4.89 8.66 11.05-0.03 15.91 9.9 1.2 12.23 6.9 6.06 14.72 9.6-2.68 13.92 1.7 11.22 11.28 7.84-6.15 13.49-3.76 14.66 6.13 4.89-8.69 11.05-8.66 15.91 0.03 1.2-9.9 6.9-12.23 14.72-6.06-2.68-9.6 1.7-13.92 11.28-11.22-6.15-7.84-3.76-13.49 6.13-14.66-8.69-4.89-8.66-11.05 0.03-15.91-9.9-1.2-12.23-6.9-6.06-14.72-9.6 2.68-13.92-1.7-11.22-11.28-7.84 6.15-13.49 3.76-14.66-6.12-4.89 8.69-11.05 8.66-15.91-0.03z"
				/>
			</g>
		);
	}
}
