import React from 'react';
import Label from '../atoms/Label';

type Props = {
    value: number;
    max?: number;
    width?: string;
    height?: string;
    margin?: string;
    color?: string;
    trackColor?: string;
    borderRadius?: string;
    labelColor?: string;
    labelSize?: string;
    labelVisible?: boolean;
    transitionDuration?: string;
    transitionTimingFunction?: string;
    labelAlignment?: string;
};

const ProgressBar = ({
        value,
        max = 100,
        width,
        height,
        margin,
        color,
        trackColor,
        borderRadius,
        labelAlignment,
        labelSize,
        labelColor,
        labelVisible = true,
        transitionDuration,
        transitionTimingFunction = "ease-in-out",
     }: Props) => {

    const percentage = max > 0
        ? Math.round(Math.min(Math.max(0, (value / max) * 100), 100))
        : 0;

    const backgroundStyle: React.CSSProperties = {
        height: height || '15px',
        width: width,
        position: 'relative',
        background: color || '#E5E7E9',
        overflow: 'hidden',
        borderRadius: borderRadius || '3px'
    };

    const progressWrapStyle: React.CSSProperties = {
        width: `${percentage}%`,
        transition: `width ${transitionDuration || '1s'} ${transitionTimingFunction}`,
        display: 'block',
        height: '100%'
    };

    const progressStyle: React.CSSProperties = {
        backgroundColor: trackColor || '#706af3',
        display: 'block',
        height: '100%'
    };

    return (
        <div style={{ margin: margin, position: 'relative' }}>
            {
                labelVisible && labelAlignment === "top" ?
                    <Label
                        completed={percentage}
                        value={percentage}
                        labelSize={labelSize}
                        labelColor={labelColor}
                        transitionDuration={transitionDuration}
                        labelAlignment={labelAlignment}
                    />  : null
            }
            <div style={backgroundStyle}>
                <span style={progressWrapStyle}>
                    <span style={progressStyle}>
                        {
                            labelVisible && !labelAlignment ?
                                <Label
                                    completed={percentage}
                                    value={percentage}
                                    labelSize={labelSize}
                                    labelColor={labelColor}
                                    transitionDuration={transitionDuration}
                                /> : null
                        }
                    </span>
                </span>
            </div>
            {
                labelVisible && labelAlignment === "bottom" ?
                    <Label
                        completed={percentage}
                        value={percentage}
                        labelSize={labelSize}
                        labelColor={labelColor}
                        transitionDuration={transitionDuration}
                        labelAlignment={labelAlignment}
                    />  : null
            }
        </div>
    );
}

export default ProgressBar;
