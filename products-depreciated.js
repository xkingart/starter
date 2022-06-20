function Products(){
    const ctx = React.useContext(UserContext);
    ctx.users.push(Math.random().toString(36).substr(2,5));

    return (
    <>
    <h1>Products</h1>
    <br/>
    {JSON.stringify(ctx)}
    </>
    )  
  }
  