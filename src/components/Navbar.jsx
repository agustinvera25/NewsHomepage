import logo from '../../assets/images/logo.svg'

export default function Navbar(){
    return <nav>
        <ul>
            <li><a href="/"><img src={logo} alt="" /></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/new">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
        </ul>
    </nav>
}