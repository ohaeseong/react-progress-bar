import React from 'react';

type Props = {
    labelColor?: string;
    labelSize?: string;
    labelAlignment?: string;
    value: number;
    completed: number;
    transitionDuration?: string;
};

const Label = ({
    labelAlignment,
    transitionDuration,
    labelSize,
    labelColor,
    value,
    completed,
}: Props) => {
    let resolvedLabelColor = labelColor;
    let left = `calc((${value}%) - ${value === 0 ? '-3px' : value < 10 ? '5px' : '35px'})`;

    if (labelAlignment && !resolvedLabelColor) {
        resolvedLabelColor = "#707070";
    }

    if (labelAlignment === "top") {
        left = `calc((${value}%) - ${value < 10 ? '-3px' : value === 100 ? '35px' : '25px'})`;
    }

    if (labelAlignment === "bottom") {
        left = `calc((${value}%) - ${value < 10 ? '0px' : value === 100 ? '35px' :  '25px'})`;
    }

    const labelStyle: React.CSSProperties = {
        display: 'flex',
        position: 'absolute',
        left: left,
        transition: `left ${transitionDuration || "1s"} ease-in-out`,
        fontSize: labelSize || "0.8rem",
        color: resolvedLabelColor || '#f9f9f9',
        bottom: labelAlignment === 'top' ? '13px' : undefined,
        alignItems: 'center'
    };

    return (
        <span style={labelStyle}>
            {completed}%
        </span>
    );
}

export default Label;
