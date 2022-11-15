import './Navbar.css'
const Navbar = () => {
    return (
        <>
        <div className='container-xxl'>
            <div className="row align-items-center">
                <div className=" col-lg-2 ">
                    <a href="/" className="Logo-Ref">
                        <h2 className="margin-zero heading">
                            <img src="assets/buyhire.webp" alt="Company Logo" height="90" />
                        </h2>
                    </a>
                </div>

                <div className="col-md-10">
                    <nav className="navbar navbar-expand">
                        <div className="navbar-collapse justify-content-between">
                            <div className="col-md-8">
                            <div className="navbar-nav">
                                <a href="index.html" className="nav-link mx-2">Buy</a>
                                <a href="shop.html" className="nav-link mx-2">Expert Sourcing</a>
                                <a href="shop.html" className="nav-link mx-2">Turnkey Sourcing Solution</a>
                                <a href="detail.html" className="nav-link  mx-2">Financing</a>
                                <li className="dropdown mx-3">
                                    <a className="nav-link  dropdown-toggle active" href="/" data-bs-toggle="dropdown">About Us</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown text-left" href="/">Our Story</a></li>
                                        <li><a className="dropdown text-left" href="/">How to Buy</a></li>
                                    </ul>
                                </li>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="btn-right">
                                <button className="button1">Register</button>
                                <button className="button2 m-1"><i className="fa-solid fa-user m-1"></i>Sign in</button>
                                <i className="fa-solid fa-cart-shopping mx-3"></i>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
      </>
    );
}

export default Navbar;
