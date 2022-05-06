import React, { useState } from 'react';
import DynamicSlider from './DynamicSlider/DynamicSlider';
import "./echange.scss";

const Echange = ({defaultAmount = 0, defaultPeriod = 0, unit}) => {
    const [amount, setAmount] = useState(defaultAmount);
    const [period, setPeriod] = useState(defaultPeriod);

    const goTo = () => {}

    return (
        <div className="echange text-white">
            <div className="echange-container">
                <h2>Simulá tu crédito</h2>
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
                <div className="periods flex justify-between">
                    <div className="field-label">Cuota fija por mes</div>
                    <div className="field-total">$ {(amount / period).toFixed(2)}</div>
                </div>
                <div className="buttons flex">
                    <button 
                        className="get-credit"
                        onClick={() => goTo()}
                    >
                        Obtene credito
                    </button>
                    <button 
                        className="detail"
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