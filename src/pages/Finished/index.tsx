import React from 'react';
import { Link } from 'react-router-dom';
import { FinishedContainer, FieldContainer, Title, PersonalField } from './styles';

function Finished() {
    return (
        <>
            <FinishedContainer>
                <PersonalField>
                    <Title>Dados Pessoais</Title>
                    <div>
                        <FieldContainer>
                            <label>CPF</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Nome Completo</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Email</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Idade</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>CEP</label>
                            <input type="number" max={999} />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Rua</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Número</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Bairro</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Complemento</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Cidade</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>UF</label>
                            <input type="text" />
                        </FieldContainer>
                    </div>
                </PersonalField>
                <div>
                    <Title>Dados Bancários</Title>
                    <div>
                        <label>Total:</label>
                        <label>R$ 135,00</label>
                    </div>
                    <FieldContainer>
                        <label>Forma de Pagamento</label>
                        <select>
                            <option>Boleto</option>
                            <option>Cartão de crédito</option>
                        </select>
                    </FieldContainer>
                    <div>
                        <FieldContainer>
                            <label>Parcelas</label>
                            <select>
                                <option>1x</option>
                                <option>2x</option>
                                <option>3x</option>
                            </select>
                        </FieldContainer>
                        <FieldContainer>
                            <label>Nome (escrito no cartão)</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Número do cartão</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Validade (mm/aaaa)</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>CPF/CNPJ do proprietário do cartão</label>
                            <input type="text" />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Código de Segurança</label>
                            <input type="number" max={999} />
                        </FieldContainer>
                        <FieldContainer>
                            <label>Data de nascimento</label>
                            <input type="text" />
                        </FieldContainer>
                    </div>
                    <Link to={'/'}><button>Finalizar</button></Link>
                </div>
            </FinishedContainer>
        </>
    );
}

export default Finished;