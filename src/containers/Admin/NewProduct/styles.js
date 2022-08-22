import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background: #565656;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`

export const Label = styled.p`
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 3px;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: none;
    padding-left: 10px;
    min-width: 280px;
`

export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 25px;
`
export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #ffffff;
    border-radius: 5px;
    padding: 10px;
    gap: 10px;

    input {
        opacity: 0;
        width: 1px;
    }
`
