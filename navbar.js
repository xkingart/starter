import './navbar.js'

const [ currentPage, setCurrentPage] = React.useState('home');

function Navbar() {

    return (
        <div className={"h-100 d-flex align-items-center justify-content-center"}>
        <ul className="nav">

            <li className="nav-item">
            <Link className="nav-link" to="/"

            >BadBank
            </Link>
            <div className="texthoverinfo">The Home Page</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/CreateAccount/"
            >CreateAccount</Link>
            <div className="texthoverinfo">Create an Account</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/Login/" 
            >Login</Link>
            <div className="texthoverinfo">Login Page</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/deposit/"
            >Deposit</Link>
            <div className="texthoverinfo">Deposit Money</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/withdraw/"
            >Withdraw</Link>
            <div className="texthoverinfo">Withdraw Money</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/balance/"
            >Balance</Link>
            <div className="texthoverinfo">Check Your Balance</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/alldata/"
            >AllData</Link>
            <div className="texthoverinfo">All Data Info</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/products/"
            >Products</Link>
            <div className="texthoverinfo">Product Info</div>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/about/"
            >About</Link>
            <div className="texthoverinfo">About Page</div>
            </li>
        </ul>
        </div>
    );
}