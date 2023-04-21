import React, { useState } from "react";
import UserTable from "./components/userTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";

function App() {

  const userData = [
    {id: uuidv4(), name: 'Tania', username: 'floppydiskete'},
    {id: uuidv4(), name: 'Craig', username: 'siliconeidolon'},
    {id: uuidv4(), name: 'ben', username: 'benisphere'},
  ]

  const [users, setUsers] = useState(userData)

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }
//eliminar usuario
const deleteUser = (id) => {
 console.log(id);
}

  return (
    <div className="container">
      <h1>CRUD APP with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add users</h2>
          <AddUserForm addUser={addUser}></AddUserForm>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
