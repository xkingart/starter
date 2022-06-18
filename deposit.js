function Deposit(){

  const [amount,setAmount] = React.useState('');
  const [selectedAccountEmail, setSelectedAccountEmail] = React.useState('');

  const ctx = React.useContext(UserContext);
  //ctx.users.push(Math.random().toString(36).substr(2,5));

  function handleCreate(){
    //it seein the handle create
   
    const currentUserIndex = ctx.users.findIndex((user) => user.email === selectedAccountEmail)
    console.log(currentUserIndex, amount, selectedAccountEmail)
    if (currentUserIndex >= 0 && amount > 0) {
      console.log('Current balance:' + ctx.users[currentUserIndex].balance)
      ctx.users[currentUserIndex].balance += ctx.users[currentUserIndex].balance + amount;
      console.log('New balance:' + ctx.users[currentUserIndex].balance)
    }
    // console.log(name,email,password);
    // if(!validate(name, 'name')) return;
    // if(!validate(email, 'email')) return;
    // if(!validate(password, 'password')) return;
    // ctx.users.push({name,email,password,balance:100});
    // setShow(false);
  }
  

  return (
    <>
    <h1>Deposit</h1>
    <br/>
    {JSON.stringify(ctx)}

    <Card
    bgcolor="transparent" 
    txtcolor = "black"
    header = "BadBank Landing Page"
    title = "welcome to the bank"
    text = "You can use this bank"
    body={
          <>
          Deposit<br/>
          <input type="number" className="form-control" id="amount"
          placeholder="Enter Amount" value={amount} onChange={e => setAmount(Number(e.
          target.value) || 0)}/><br/>
          <label>Select Account</label><br></br>
          <select onChange={(e) => setSelectedAccountEmail(e.target.value)}>
            <option>Select an option</option>
            {ctx.users.map(function(user){
              return <option value={user.email}>{user.name}</option>
          })}
          </select><br></br>
          <br></br>
          <button
          disabled={!amount || !selectedAccountEmail}
           type="submit" className="btn btn-light" onClick={handleCreate}>Submit Deposit</button>
          </>
    }
    />





    </>
  );
}
