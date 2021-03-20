import React, { Component } from "react"

class Subject extends Component {
    render() {
        return <header>
            <h1>
                <a href="/" onClick={this.props.onChangePage}>
                    {this.props.title}
                </a>
            </h1>
            <p>{this.props.sub}</p>
        </header>
    }
}

export default Subject