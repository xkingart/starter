function AllData(){
  const ctx = React.useContext(UserContext);  
  return (
    <>
    <h1>AllData</h1>
    <br/>
    {JSON.stringify(ctx)}
    </>
  );
}
