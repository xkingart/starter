function Deposit(){

  const [show,setShow] = React.useState(true);
  const [amount,setAmount] = React.useState('');
  const [selectedAccountEmail, setSelectedAccountEmail] = React.useState('');

  const ctx = React.useContext(UserContext);
  //ctx.users.push(Math.random().toString(36).substr(2,5));

  const currentSelectedAccountBalance = React.useMemo(() => {
    if (selectedAccountEmail) {
      return ctx.users.find(user => user.email === selectedAccountEmail)?.balance
    }
  }, [ctx, selectedAccountEmail])

  function handleAddBalance(){
    //it seein the handle create
    if (isNaN(amount)) {
      alert('Amount should be a valid number')
      return;
    }
    if (amount < 0) {
      alert('Amount should be a positive number')
      return;
    }
   
    const newusers = ctx.users.map(user => {
      if (user.email === selectedAccountEmail) {
        user.balance = user.balance + amount
      }
      return user
    })

    ctx.setUsers(newusers)
    setShow(false)
  }

  function handleReset() {
    setAmount('')
    setSelectedAccountEmail('')
    setShow(true)
  }
  

  return (
    <>
    <h1>Deposit</h1>
    <br/>
    {/* {JSON.stringify(ctx)} */}
    <Card
    bgcolor="transparent" 
    txtcolor = "black"
    header = "Deposit"
    title = "welcome to deposits"
    body={show ? (
          <>
          <label>Select Account</label><br></br>
          <select value={selectedAccountEmail} onChange={(e) => setSelectedAccountEmail(e.target.value)}>
            <option>Select an option</option>
            {ctx.users.map(function(user){
              return <option value={user.email}>{user.name}</option>
          })}
          </select><br></br>
          {selectedAccountEmail && <label>Balance: {currentSelectedAccountBalance}</label>}
          <br/><br/>
          <input type="number" className="form-control" id="amount"
          placeholder="Enter Amount" value={amount} onChange={e => setAmount(Number(e.
          target.value))}/><br/>
          
          <br></br>
          <button
          disabled={!amount || !selectedAccountEmail}
           type="submit" className="btn btn-light" onClick={handleAddBalance}>Submit Deposit</button>
           <Balance/>
          </>
  ): (
      <>
      <h5>Success</h5>
      <p>The deposit has been received</p>
      <button onClick={handleReset} className="btn btn-light">Add deposit</button>
      <Balance/>
      </>
  )}
    />





    </>
  );
}
