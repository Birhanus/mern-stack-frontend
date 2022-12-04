import React, { Component } from 'react'
// import ReactTable from 'react-table'
import api from '../api'
import styled from 'styled-components'
// import 'react-table/react-table.css'
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateEmployee extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/employees/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteEmployee extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want delete this Emoloyee ${this.props.id} permanently?`,
            )
        ) {
            api.deleteEmployeeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class EmployeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            columns: [],
            isLoading: false,
        }
    }


    componentDidMount = () => {
        this.setState({ isLoading: true })

        api.getAllEmployees().then(employees => {
                this.setState({
                    employees: employees.data.employees,
                    isLoading: false,
            })     
        })

    }

    render() {
          const { employees, isLoading } = this.state
          console.log(this.state)
          
          const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'date_of_birth',
                accessor: 'date_of_birth',
                filterable: true,
            },
            {
                Header: 'Gender',
                accessor: 'gender',
                filterable: true,
                // Cell: props => <span>{props.value.join(' / ')}</span>,
            },

            {
                Header: 'Salary',
                accessor: 'salary',
                filterable: true,
            },

            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteEmployee id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateEmployee id={props.original._id} />
                        </span>
                    )
                },
            },
        ]
          console.log(this.state)

        let showTable = true
        if (!employees) {
            showTable = false
       
        }

        if (showTable === true)
        return (

             <Wrapper>
                {showTable && (
                    <ReactTable
                       data={employees || []}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={4}
                    />

                )}
            </Wrapper>

            
        )
    else
        return(
            <div>
            <h1>500</h1>
            <h2>Sorry we can't find your employees</h2>
            </div>
            )
    }
}

export default EmployeesList
