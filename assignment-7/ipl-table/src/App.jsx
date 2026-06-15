import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {

    fetch(
      "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
    )
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
        console.log(data[0]);


        const sortedData = data.sort(
          (a, b) => a.NRR - b.NRR
        );

        setTeams(sortedData);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div className="container">

      <h1>IPL 2022 Points Table</h1>

      <table>

        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>

          {teams.map((team, index) => (

            <tr key={index}>

              <td>{team.Team}</td>
             <td>{team.Matches}</td>
<td>{team.Won}</td>
<td>{team.Lost}</td>
<td>{team.Tied}</td>
<td>{team.NRR}</td>
<td>{team.Points}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;