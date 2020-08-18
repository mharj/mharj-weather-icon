import React from 'react';
import './WeatherIcon.css';
import {SunLayer} from './SunLayer';
import {MoonLayer} from './MoonLayer';

// https://openweathermap.org/weather-conditions

// check oldIcons
// old icon states
const dayIconState = ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '50d'] as const;
export type DayIconState = typeof dayIconState[number];
const nightIconState = ['01n', '02n', '03n', '04n', '09n', '10n', '11n', '13n', '50n'] as const;
export type NightIconState = typeof nightIconState[number];

interface IProps {
	isDay?: boolean;
	snow?: undefined | 'light' | 'medium' | 'heavy' | 'storm';
	rain?: undefined | 'light' | 'medium' | 'heavy' | 'storm';
	clouds?: undefined | 'few' | 'scattered' | 'broken' | 'overcast';
	thunderstorm?: boolean;
	width?: React.SVGAttributes<SVGSVGElement>['width'];
	height?: React.SVGAttributes<SVGSVGElement>['height'];
}

export class WeatherIcon extends React.Component<IProps> {
	public render(): JSX.Element {
		const {width, height} = this.props;
		const isDay = this.props.isDay !== undefined ? this.props.isDay : true;

		return (
			<svg width={width} height={height} viewBox="0 0 128 128" style={{backgroundColor: 'white'}}>
				<defs>
					<filter id="weather-blur-filter" x="-0.14" width="1.28" y="-0.14" height="1.28" color-interpolation-filters="sRGB">
						<feGaussianBlur stdDeviation="5" />
					</filter>
				</defs>
				<SunLayer hide={!isDay} />
				<MoonLayer hide={isDay} />
			</svg>
		);
	}
}
