function Balance(){
  const ctx = React.useContext(UserContext);  
  return (
    <Card
    
    body={
      <>
        <table class="table">
          <thead>
            <tr>
              
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {ctx.users.map((user, index) => (
              <tr>
              <td>{user.balance}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </>
    }
    />
  )
}
