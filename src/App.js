import { Component } from "react";
import Subject from "./component/Subject"
import List from "./component/List"
import Content from "./component/Content"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "welcome",
      welcome: { title: "Welcom", desc: "Hello React!!" },
      subject: {
        title: "React",
        sub: "Study React with Egoing"
      },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for infomation" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" }
      ]
    }
  }
  render() {
    let _title, _desc = null
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title
      _desc = this.state.contents[0].desc
    }
    return <div>
      <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
      <List data={this.state.contents} />
      <Content title={_title} desc={_desc} />
    </div>
  }
}

export default App;
