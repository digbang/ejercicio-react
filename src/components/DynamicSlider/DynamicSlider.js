import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./DynamicSlider.scss";

const DynamicSlider = ({title, onChange, min, max, unit, defaultValue, step}) => {
    const [amount, setAmount] = useState(defaultValue);
    const [error, setError] = useState(false);

    const handleAmount = (value) => {
        if (value >= min && value <= max) {
            onChange(value);
            setAmount(value);
            error && setError(false);
        } else {
            setAmount(value);
            !error && setError(true);
        }
    }

    return (
        <div className="pb-8 dynamic-slider">
            <div className="fields flex justify-between">
                <div className="field-title uppercase">{title}</div>
                <div className="field-input">
                    <input
                        value={amount}
                        name={title}
                        type="text"
                        onChange={(e) => handleAmount(+e.target.value || 0)}
                    /><br />
                    {error && <span>Ingrese un monto valido</span>}
                </div>
            </div>
            <div className="field-slider">
                <Slider
                    onChange={(nextValues) => {
                        handleAmount(nextValues)
                    }}
                    value={amount}
                    min={min}
                    max={max}
                    defaultValue={amount}
                    step={step}
                    trackStyle={{ backgroundColor: 'white', height: 8 }}
                    railStyle={{ backgroundColor: 'white', height: 8 }}
                    handleStyle={{
                        borderColor: 'white',
                        height: 18,
                        width: 18,
                        backgroundColor: 'white',
                    }}
                />
            </div>
            <div className="field-range flex justify-between">
                <div>{unit && unit} {unit ? (min/1000).toFixed(3) : min}</div>
                <div>{unit && unit} {unit ? (max/1000).toFixed(3) : max}</div>
            </div>
        </div>
    )
}

export default DynamicSlider;