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

class EmoloyeesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            date_of_birth: 0,
            gender: '',
            salary: 0,
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputDateBirth= async event => {
        // const date_of_birth = event.target.validity.valid
        //     ? event.target.value
        //     : this.state.rating
        const date_of_birth = event.target.value

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

    handleUpdateEmoloyee = async () => {
        const { id, name, date_of_birth, gender, salary } = this.state
        const payload = { name, date_of_birth, gender, salary }

        await api.updateEmployeeById(id, payload).then(res => {
            window.alert(`Employee updated successfully`)
            this.setState({
                name: '',
                date_of_birth: 0,
                gender: '',
                salary: 0,
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const employee = await api.getEmployeeById(id)

        this.setState({
            name: employee.data.data.name,
            date_of_birth: employee.data.data.date_of_birth,
            gender: employee.data.data.gender,
            salary: employee.data.data.salary,
        })
    }

    render() {
        const { name, date_of_birth, gender, salary } = this.state
        return (
            <Wrapper>
                <Title>Update Employee</Title>

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
                
                <Label>salry: </Label>
                <InputText
                    type="text"
                    value={salary}
                    onChange={this.handleChangeInputSalary}
                />

                <Button onClick={this.handleUpdateEmoloyee}>Update Employee</Button>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EmoloyeesUpdate
