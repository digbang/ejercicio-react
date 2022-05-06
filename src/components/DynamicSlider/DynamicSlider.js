import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DynamicSlider = ({title, handleAmount, min, max, unit, defaultValue, step}) => {
    const [amount, setAmount] = useState(defaultValue);

    useEffect(() => {
        handleAmount(amount);
    }, [amount, handleAmount])

    return (
        <div className="pb-8">
            <div className="fields flex justify-between pb-4">
                <div className="field-title uppercase">{title}</div>
                <div className="field-input">
                    <input
                        className="p-1 text-white text-center center bg-transparent border border-white"
                        value={amount}
                        name="name"
                        type="text"
                        onChange={(e) => setAmount(+e.target.value || 0)}
                    />
                </div>
            </div>
            <div className="field-slider px-10">
                <Slider
                    onChange={(nextValues) => {
                        setAmount(nextValues)
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