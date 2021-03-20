import { Component } from "react";
import Subject from "./component/Subject"
import List from "./component/List"
import ReadContent from "./component/ReadContent"
import Control from "./component/Control";
import CreateContent from "./component/CreateContent";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "read",
      welcome: { title: "Welcome", desc: "Hello React!!" },
      subject: {
        title: "React",
        sub: "Study React with Egoing"
      },
      content_id: 1,
      contents: [
        { id: 0, title: "HTML", desc: "HTML is for infomation" },
        { id: 1, title: "CSS", desc: "CSS is for design" },
        { id: 2, title: "JavaScript", desc: "JavaScript is for interactive" }
      ]
    }
  }
  render() {
    let _title, _desc, _content = null
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _content = <ReadContent title={_title} desc={_desc} />
    } else if (this.state.mode === "read") {
      const content = this.state.contents.find(element => element.id === this.state.content_id)
      _title = content.title
      _desc = content.desc
      _content = <ReadContent title={_title} desc={_desc} />
    } else if (this.state.mode === "create") {
      _content = <CreateContent onSubmit={(_title, _desc) => {
        this.setState({
          contents: [...this.state.contents, { id: Date.now(), title: _title, desc: _desc }]
        })
      }} />
    }
    return <div>
      <Subject
        title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={(e) => {
          e.preventDefault()
          this.setState({ mode: "welcome" })
        }} />
      <Control
        onChangeMode={(e) => {
          e.preventDefault()
          const { value: mode } = e.target
          this.setState({ mode })
        }} />
      < List
        data={this.state.contents}
        onChangePage={(e) => {
          e.preventDefault()
          let { id: content_id } = e.target
          content_id = parseInt(content_id)
          this.setState({ mode: "read", content_id })
        }} />
      {_content}
    </div >
  }
}

export default App;
