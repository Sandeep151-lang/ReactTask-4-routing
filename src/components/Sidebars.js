
import { Link, NavLink } from 'react-router-dom';
import web from './images/undraw_rocket.svg';


const Sidebars = () => {

    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <li className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </li>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <NavLink to="/ReactTask-4-routing" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></NavLink>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <NavLink to="" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </NavLink>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <NavLink to="/ReactTask-4-routing/buttons" className="collapse-item">Buttons</NavLink>
                            <NavLink to="/ReactTask-4-routing/cards" className="collapse-item" >Cards</NavLink>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </Link>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link to="/ReactTask-4-routing/colors" className="collapse-item" >Colors</Link>
                            <Link to="/ReactTask-4-routing/border" className="collapse-item">Borders</Link>
                            <Link to="/ReactTask-4-routing/animation" className="collapse-item" >Animations</Link>
                            <Link to="/ReactTask-4-routing/others" className="collapse-item" >Other</Link>
                        </div>
                    </div>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Addons
                </div>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link className="collapse-item" >Login</Link>
                            <Link className="collapse-item">Register</Link>
                            <Link className="collapse-item" >Forgot Password</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link className="collapse-item" >404 Page</Link>
                            <Link className="collapse-item" >Blank Page</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="chart" className="nav-link" >
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/table" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src={web} alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <Link className="btn btn-success btn-sm">Upgrade to Pro!</Link>
                </div>
            </ul>
        </>
    );
};

export default Sidebars;
