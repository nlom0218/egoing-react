import React, { Component } from "react"

class UpdateContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            desc: this.props.desc
        }
    }
    onChangeValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return <div>
            <h2>Update</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                const { title: { value: modifyTitle }, desc: { value: modifyTdesc } } = e.target
                const id = this.props.id
                this.props.onSubmit(id, modifyTitle, modifyTdesc);
            }}>
                <input type="hidden" value={this.props.id} name="id"></input>
                <input type=")text" value={this.state.title} name="title" onChange={this.onChangeValue} ></input>
                <textarea value={this.state.desc} name="desc" onChange={this.onChangeValue}></textarea>
                <input type="submit" value="submit"></input>
            </form>
        </div >
    }
}

export default UpdateContent