import React, { Component } from 'react';
import { Container, ListGroupItem, ListGroup, Button } from 'reactstrap';


class ToDo extends Component {
    state = {
        list: []
    }

    deleteToDo = () => {

    }
    editToDo = () => {

    }

    render() {
        const task = this.state.list
        return (
            <Container>
                <ListGroup>
                    <ListGroupItem>
                        TORJlkdsjfklasdjflaks;
                    </ListGroupItem>
                    {task.map(({ id, name }) => (
                        <ListGroupItem>

                            {name}
                            <Button onClick={this.deleteToDo}>Remove</Button>
                            <Button onClick={this.editTodo}>Edit</Button>
                        </ListGroupItem>
                    ))}

                </ListGroup>
            </Container>

        )
    }

}


export default ToDo;
