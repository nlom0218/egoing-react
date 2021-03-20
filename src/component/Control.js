import React, { Component } from "react"

class Control extends Component {
    render() {
        return (
            <div>
                <input type="button" value="create" onClick={this.props.onChangeMode}></input>
                <input type="button" value="update" onClick={this.props.onChangeMode}></input>
                <input type="button" value="delete" onClick={this.props.onChangeMode}></input>
            </div>
        )
    }
}

export default Control