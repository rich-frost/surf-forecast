class ObservationsRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.obs.time}</td>
        <td>{this.props.obs.direction}</td>
      </tr>
    );
  }
}

class ObservationsTable extends React.Component {
  render() {
    var rows = [];
    this.props.obs.forEach(obs => {
      rows.push(<ObservationsRow obs={obs} />);
    });
    return (
      <table className="table">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

var OBS = [
  { time: "18:00", direction: "W" },
  { time: "17:00", direction: "NW" },
  { time: "16:00", direction: "S" },
  { time: "15:00", direction: "E" }
];

ReactDOM.render(
  <ObservationsTable obs={OBS} />,
  document.getElementById("container")
);
