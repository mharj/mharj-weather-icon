import React from 'react';

interface IProps {
	hide: boolean;
}

interface IState {
	isHidden: boolean;
}

export class MoonLayer extends React.Component<IProps, IState> {
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
		const weatherMoonClass = isHidden ? '' : 'weather-moon';
		const weatherMoonShadowClass = isHidden ? '' : 'weather-moon-shadow';
		return (
			<g id="moongroup" transform="translate(64, 64)">
				<path
					className={hide ? 'weather-hide-layer ' + weatherMoonShadowClass : 'weather-show-layer ' + weatherMoonShadowClass}
					d="m 9 -40c-22.09 0-40 17.91-40 40 0 22.09 17.91 40 40 40 6.07 0 11.82-1.36 16.97-3.78-13.6-6.39-23.03-20.2-23.03-36.22 0-16.02 9.43-29.83 23.03-36.22-5.15-2.42-10.9-3.78-16.97-3.78z"
				/>
				<path
					className={hide ? 'weather-hide-layer ' + weatherMoonClass : 'weather-show-layer ' + weatherMoonClass}
					d="m 9 -40c-22.09 0-40 17.91-40 40 0 22.09 17.91 40 40 40 6.07 0 11.82-1.36 16.97-3.78-13.6-6.39-23.03-20.2-23.03-36.22 0-16.02 9.43-29.83 23.03-36.22-5.15-2.42-10.9-3.78-16.97-3.78z"
				/>
			</g>
		);
	}
}
