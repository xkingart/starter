function Home(){
  const ctx = React.useContext(UserContext);  
  return (
    <Card
    bgcolor="transparent" 
    txtcolor = "black"
    header = "BadBank Landing Page"
    title = "Welcome to the Bank"
    text = "You can use this bank"
    body={(<img src="bank.png" className="img-fluid"
    alt="Responsive image"/>)}
    />

    // <>
    // <h1>Home</h1>
    // <br/>
    // {JSON.stringify(ctx)}
    // </>
  );  
}
