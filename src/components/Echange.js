import React, { useState } from 'react';
import DynamicSlider from './DynamicSlider/DynamicSlider';

const Echange = ({defaultAmount = 0, defaultPeriod = 0, unit}) => {
    const [amount, setAmount] = useState(defaultAmount);
    const [period, setPeriod] = useState(defaultPeriod);

    const goTo = () => {}

    return (
        <div className="inline-block w-2/4 m-10 p-10 bg-blue-700 text-white font-normal">
            <div className="w-full p-10 bg-blue-800">
                <h2 className="text-4xl font-extrabold pb-10">Simulá tu crédito</h2>
                <DynamicSlider 
                    title="Monto total"
                    min={5000}
                    max={50000}
                    unit={unit}
                    handleAmount={(data) => setAmount(data)}
                    defaultValue={amount}
                    step={500}
                />
                <DynamicSlider 
                    title="Plazo"
                    min={3}
                    max={24}
                    handleAmount={(data) => setPeriod(data)}
                    defaultValue={period}
                    step={1}
                />
                <div className="periods flex justify-between bg-blue-900 p-6">
                    <div className="field-label uppercase leading-10">Cuota fija por mes</div>
                    <div className="field-total uppercase text-4xl">${(amount / period).toFixed(2)}</div>
                </div>
                <div className="field-buttons  flex justify-between">
                    <button 
                        className="input-submit uppercase bg-green-800 p-6 uppercase text-xl"
                        onClick={() => goTo()}
                    >
                        Obtene credito
                    </button>
                    <button 
                        className="info-submit uppercase bg-blue-800 p-6 uppercase text-xl"
                        onClick={() => goTo()}
                    >
                        Ver detalle de cuotas
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Echange;