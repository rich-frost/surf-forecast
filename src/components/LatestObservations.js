class ObservationsRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.obs.time}</td>
        <td>{this.props.obs.D}</td>
        <td>{this.props.obs.S}</td>
      </tr>
    );
  }
}

class ObservationsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/3808?res=hourly&key=')
      .then(response => response.json())
      .then(data => {
        let observations = data.SiteRep.DV.Location.Period.reverse()[0].Rep.reverse();

        this.setState({ obs: observations, isLoading: false });
      });
  }

  render() {
    var rows = [];

    let { isLoading, obs } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    obs.forEach(ob => {
      ob.time = ob.$/60;
      rows.push(<ObservationsRow obs={ob} />);
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
