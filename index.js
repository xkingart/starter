

function Spa() {
  const ctx = React.useContext(UserContext);  
  return (
    <HashRouter>
      <h1 className={"h-100 d-flex align-items-center justify-content-center"}>Welcome to Bad Bank</h1>
      <Navbar/>
      <UserContext.Provider value={{users:[{name:'Xavier King',email:'xking@canisbite.com',password:'secret',balance:100}]}}>              
        <Route path="/" exact         component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/"         component={Login} />
        <Route path="/deposit/"       component={Deposit} />
        <Route path="/withdraw/"      component={Withdraw} />
        <Route path="/balance/"       component={Balance} />
        <Route path="/alldata/"       component={AllData} />
        <Route path="/products/"      component={Products} />
        <Route path="/about/"         component={About} />
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
