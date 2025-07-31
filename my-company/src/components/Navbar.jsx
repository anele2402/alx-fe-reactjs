import { Link } from 'react-router-dom';

const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '22px',
    fontWeight: 'bold',
    color: 'pink',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    padding: '8px',
    margin: '0'



}
const linkStyle ={
    color:'#FF2DD1',
    marginLeft: '12px',
    fontsize: '32px'

}
 
 function Navbar() {
     
 return (
    <nav style={navStyle} >
      <Link style={linkStyle} to="/" >Home</Link>
      <Link style={linkStyle} to="/about" >About</Link>
      <Link style={linkStyle} to="/services" >Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
       
    
   }

   export default Navbar;