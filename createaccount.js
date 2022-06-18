function CreateAccount(){
  
  const [show,setShow]                = React.useState(true);
  const [status,setStatus]            = React.useState('');
  const [name,setName]                = React.useState('');
  const [email,setEmail]              = React.useState('');
  const [password,setPassword]        = React.useState('');
  const ctx = React.useContext(UserContext); 


function validate(field,label){
// This way of concatenating strings does not work: `${label} is not correct`
  if(!field){
    setStatus(label + 'cannot be empty');
    setTimeout(() => setStatus(''),3000);

    return false;
  }

  if (label === 'password' && field.length < 8) {
    setStatus(label + 'should be at least 8 characters');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
   return true;
  }


function handleCreate(){
  //it seein the handle create
  console.log('test')
  console.log(name,email,password);
  if(!validate(name, 'name')) return;
  if(!validate(email, 'email')) return;
  if(!validate(password, 'password')) return;
  ctx.users.push({name,email,password,balance:100});
  setShow(false);
}


function clearForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
}

  return (
    <Card
    bgcolor="transparent" 
    txtcolor = "black"
    header = "BadBank Landing Page"
    title = "welcome to the bank"
    text = "You can use this bank"
    body={show? (

          <>
          Name<br/>
          <input type="input" className="form-control" id="name"
          placeholder="Enter name" value={name} onChange={e => setName(e.
          target.value)}/><br/>
          Email address<br/>
          <input type="input" className="form-control" id="email"
          placeholder="Enter email" value={email} onChange={e => setEmail(e.
          target.value)}/><br/>
          password<br/>
          <input type="password" className="form-control" id="password"
          placeholder="Enter password" value={password} onChange={e => setPassword(e.
          target.value)}/><br/>
          <button
          disabled={!email || !name || !password}
           type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
          {status && <div>{status}</div>}
          </>
          
    ):(
          <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another Account</button>
          </>
    )}
    />
  )
}