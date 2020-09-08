import React from "react";
import firebase from "./config/Firebase";
import Form from "./Form";
import ThisMonth from "./ThisMonth";
import LastMonth from "./LastMonth";
import PreviousMonths from "./PreviousMonths";

// Currently supported categories
export const supportedCategories = [
  { pizza: "🍕" },
  { gas: "⛽️" },
  { utility: "⚙️" },
  { groceries: "🥑" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: {},
      isEditing: false,
      editId: null,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  componentDidMount() {
    // This sets the current state to the database
    let db = firebase.database().ref("expenses");
    db.on("value", (snap) => {
      this.setState({ database: snap.val() });
    });
  }

  toggleEditing(state, id) {
    if (state === true && id) {
      return this.setState({ isEditing: state, editId: id });
    }
    return this.setState({ isEditing: false, editId: null });
  }

  render() {
    let editEntry = this.state.editId
      ? this.state.database[this.state.editId]
      : null;

    return (
      <div className="App">
        <Form
          database={this.state.database}
          toggleEditing={this.toggleEditing}
          isEditing={this.state.isEditing}
          editEntry={editEntry}
          editId={this.state.editId}
        />
        <ThisMonth
          database={this.state.database}
          toggleEditing={this.toggleEditing}
        />
        <LastMonth
          database={this.state.database}
          toggleEditing={this.toggleEditing}
        />
        <PreviousMonths
          database={this.state.database}
          toggleEditing={this.toggleEditing}
        />
      </div>
    );
  }
}

export default App;