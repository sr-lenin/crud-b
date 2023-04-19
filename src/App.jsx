import React from "react";
import UserTable from "./components/userTable";

function App() {

  const userData = [
    {id: 1, name: 'Tania', username:}
  ]
  return (
    <div className="container">
      <h1>CRUD APP whit hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add users</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
