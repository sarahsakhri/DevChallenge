import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBListGroupItem, MDBListGroup, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from
    "mdbreact";
import uuid from "uuid";

class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal1: false,
            modal2: false,
            edit: false,
            list: [{ id: uuid(), title: "Prepare dinner", desc: "cut onions, peel potato, season chicken", due: "2019-12-10", status: false },
            { id: uuid(), title: "Laundry", desc: "take clothes downstairs, dont forget coins", due: "2019-12-25", status: true },
            { id: uuid(), title: "Groceries", desc: "buy juice, celery, carrots, lettuce, pomegranates", due: "2020-01-19", status: false },
            { id: uuid(), title: "Homework", desc: "submit study sheet, work on group project, create todo list", due: "2020-01-20", status: true }]
        }
    }

    // toggle for  adding and editing task
    toggleEdit = () => {
        this.setState({
            modal1: !this.state.modal1
        })
    }
    toggleAdd = () => {
        this.setState({
            modal2: !this.state.modal2
        })
    }

    // Add new item 
    addHandle = (e) => {
        const target = e.target;
        let value = target.value;
        let name = target.name;
        console.log(e.target.value);
        this.setState({
            [name]: value,
        })
    }
    submitNewTask = (e) => {
        e.preventDefault();
        console.log(this.state)
        const newTodo = { id: uuid(), title: this.state.title, desc: this.state.desc, due: this.state.due, status: false }
        this.state.list.push(newTodo);
        console.log(newTodo);
        this.setState({
            list: this.state.list
        })
        this.toggleAdd();
    }
    // Modal: Add new task form
    addForm() {
        return <MDBModal isOpen={this.state.modal2} toggleAdd={this.toggleAdd} position="modal-dialog-centered">
            <MDBModalHeader >New Task</MDBModalHeader>
            <MDBModalBody>
                <MDBContainer>
                    <form onSubmit={this.submitNewTask}>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text"> Title </label>
                        <input onChange={this.addHandle.bind(this)} value={this.state.title} type="text" name="title" id="title" className="form-control" required />
                        <br />
                        <label htmlFor="defaultFormContactMessageEx" className="grey-text" > Task in detail </label>
                        <textarea onChange={this.addHandle.bind(this)} value={this.state.desc} type="text" name="desc" id="desc" className="form-control" required />
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">Due Date</label>
                        <input onChange={this.addHandle.bind(this)} value={this.state.due} type="date" name="due" id="due" className="form-control" required />
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggleAdd}>Close</MDBBtn>
                            <MDBBtn color="primary" type="submit" >Save changes</MDBBtn>
                        </MDBModalFooter>
                    </form>
                </MDBContainer>
            </MDBModalBody>

        </MDBModal>
    }

    // Delete item based on id
    deleteTask(id) {
        this.setState(state => ({
            list: state.list.filter(task => task.id !== id)
        }))
    }

    // Modal: Edit task form
    editForm() {
        if (this.state.edit) {
            return <MDBModal isOpen={this.state.modal1} toggle={this.toggleEdit} position="modal-dialog-centered">
                <MDBModalHeader>Edit Task</MDBModalHeader>
                <MDBModalBody>
                    <MDBContainer>
                        <h2>What is the updated status of your task</h2>
                        <form onSubmit={this.updateEdit.bind(this)}>
                            <label className="grey-text">Title </label>
                            <input defaultValue={this.state.title} type="text" name="newTitle" className="form-control" />
                            <br />
                            <label className="grey-text" > Task in detail </label>
                            <textarea defaultValue={this.state.desc} type="text" name="newDesc" className="form-control" />
                            <br />
                            <label className="grey-text">Due Date</label>
                            <input defaultValue={this.state.due} type="date" name="newDue" className="form-control" />
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggleEdit}>Close</MDBBtn>
                                <MDBBtn className="update-add-item" type="submit" color="primary">Save changes</MDBBtn>
                            </MDBModalFooter>
                        </form>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>
        }
    }

    editHandle(id, title, desc, due) {
        this.toggleEdit();
        console.log(title + desc + due + id);
        this.setState({
            edit: true, id, title, desc, due
        });
    }

    // update the task 
    updateEdit(e) {
        this.toggleEdit();
        console.log(e.target)
        e.preventDefault();
        this.setState({
            list: this.state.list.map(task => {
                if (task.id === this.state.id) {
                    task.title = e.target.newTitle.value;
                    task.desc = e.target.newDesc.value;
                    task.due = e.target.newDue.value;
                }
                console.log(task)
                return task;
            })
        })
    }

    // change the status of the task, true = DONE & false = PENDING
    statusHandle(id) {
        this.setState({
            list: this.state.list.map(task => {
                if (task.id === id) {
                    task.status = !task.status;
                }
                console.log(task)
                return task;
            })
        })
    }


    render() {
        const list = this.state.list
        return (
            <MDBContainer>
                <MDBRow className="col-sm-12">
                    <MDBCol md="12" sm="12" className="ml-auto">
                        <div className=" text-center"><MDBBtn color="warning" onClick={this.toggleAdd}>Add New Task</MDBBtn></div>
                        {this.addForm()}
                    </MDBCol>
                </MDBRow>
                <MDBListGroup>
                    {list.map(({ id, title, desc, due, status }) => (
                        <MDBListGroupItem key={id}>
                            <MDBRow className="align-items-center">
                                <MDBCol md="8" sm="12" className="ml-auto">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1"><b> {title} </b></h5>
                                    </div>
                                    <p className="mb-1">{desc}</p>
                                    <small><b>Due Date : </b> {due}</small>
                                    <br></br>
                                    <small className={(status) ? 'done' : 'pending'}><b>Status of this task :</b> {(status ? "DONE" : "PENDING")}</small>
                                </MDBCol>
                                <MDBCol md="4" className="ml-auto">
                                    <MDBBtn color="secondary" size="sm" onClick={this.editHandle.bind(this, id, title, desc, due)} ><MDBIcon icon="edit" /></MDBBtn>
                                    {this.editForm()}
                                    <MDBBtn color="light-green" size="sm" onClick={this.statusHandle.bind(this, id)} ><MDBIcon icon="check" /></MDBBtn>
                                    <MDBBtn color="danger" size="sm" onClick={this.deleteTask.bind(this, id)}><MDBIcon icon="times" /></MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBListGroupItem>
                    ))
                    }
                </MDBListGroup>
            </MDBContainer >
        );
    }
}


export default ToDo;