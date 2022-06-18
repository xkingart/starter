function AllData(){
  const ctx = React.useContext(UserContext);  
  return (
    <>
    <h1>AllData</h1>
    <br/>
    {/* {JSON.stringify(ctx)} */}

    <Card
    bgcolor="transparent" 
    txtcolor = "black"
    header = "All Users"
    title = "Here you see all users data"
    body={
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {ctx.users.map((user, index) => (
              <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.balance}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </>
    }
    />
    </>
  );
}
