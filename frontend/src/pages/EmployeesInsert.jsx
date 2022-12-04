import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class EmployeesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date_of_birth:0 ,
            gender: '',
            salary: 0 
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputDateBirth = async event => {
        const date_of_birth = event.target.validity.valid
            ? event.target.value
            : this.state.date_of_birth

        this.setState({ date_of_birth })
    }

    handleChangeInputGender = async event => {
        const gender = event.target.value
        this.setState({ gender })
    }

    handleChangeInputSalary = async event => {
        const salary = event.target.value
        this.setState({ salary })
    }

    handleIncludeEmployee = async () => {
        const { name, date_of_birth, gender, salary } = this.state
        const payload = { name, date_of_birth, gender, salary }

        await api.insertEmployee(payload).then(res => {
            window.alert(`Employee inserted successfully`)
            this.setState({
                name: '',
                date_of_birth: 0,
                gender: '',
                salary: 0
            })
        })
    }

    render() {
        const { name, date_of_birth, gender, salary } = this.state
        return (
            <Wrapper>
                <Title>Add Employee</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>date_of_birth: </Label>
                <InputText
                    type="number"
                    value={date_of_birth}
                    onChange={this.handleChangeInputDateBirth}
                />

                <Label>gender: </Label>
                <InputText
                    type="text"
                    value={gender}
                    onChange={this.handleChangeInputGender}
                />
                 <Label>salary: </Label>
                <InputText
                    type="number"
                    value={salary}
                    onChange={this.handleChangeInputSalary}
                />
                <Button onClick={this.handleIncludeEmployee}>Add Employee</Button>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EmployeesInsert
