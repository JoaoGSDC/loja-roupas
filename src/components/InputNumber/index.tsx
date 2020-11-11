import React from 'react';

import { InputNumberContainer } from './styles';

function InputNumber(props: any) {
    return (
        <InputNumberContainer>
            <button>-</button>
            <input type="number" min={1} max={500} />
            <button>+</button>
        </InputNumberContainer>
    )
}

export default InputNumber;