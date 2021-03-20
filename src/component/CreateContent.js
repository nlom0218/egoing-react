import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        return <div>
            <h2>Create</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const { title: { value: _title }, desc: { value: _desc } } = e.target
                    this.props.onSubmit(_title, _desc)
                }}>
                <input type="text" placeholder="title" name="title"></input>
                <textarea placeholder="desc" name="desc"></textarea>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    }
}

export default CreateContent