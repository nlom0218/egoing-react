import React, { Component } from "react";

class List extends Component {
    render() {
        const { data } = this.props
        return <div>
            <h3>List of Study</h3>
            <ul id="jsList">
                {data.map(item => {
                    return <li key={item.id}>
                        <a id={item.id} href={item.id} onClick={this.props.onChangePage}>{item.title}</a>
                    </li>
                })}
            </ul>
        </div>
    }
}

export default List