import Image from 'next/image'
import Pic1 from './Pics/Pic1.png'
import Pic2 from './Pics/Pic2.png'
import Pic3 from './Pics/Pic3.png'
import logo from './Pics/no-bgLogo.png'
import Navbar from './Components/Navbar/Navbar'
import Car from './Components/Car'
import FB from './Pics/Icons/FB.png' 
import IG from './Pics/Icons/IG.png' 
import WA from './Pics/Icons/WA.png' 
import x from './Pics/Icons/x.png' 
import Phone from './Pics/Icons/Phone.png'
import "./global.scss"
 



export default function Home() {
  return (
    <div className="Homepage">
      <div className="third dashboard">
        <Navbar />
        <div className="title">
        <h1 className="header">BEAUTY, GRACE & ELEGANCE</h1>
        <p className="title-p">Traverse the MAVERICK collection</p>
        <button className='btn'>Explore the Catalogue</button>
        </div>
          <div className='title-reel'>
          <div className='card'>
            <p>
             Discover the latest trends, timeless pieces, and exclusive collections tailored to elevate your wardrobe.  
            </p>  
          </div>  
          <Image src={Pic1} alt='pic1' className='img ing3'/>
          <Image src={Pic2} alt='pic2' className='img ing2'/>
          <Image src={Pic3} alt='pic3' className='img ing'/>
          </div>
      </div>
      <div className="third half thirds">
        <div className='write-up pat'>
          <p className='para'>
            Embrace your unique style and let <br/> your personality shine through <br/> every outfit.
          </p>
          </div>
        <div className='write-up'>
        <div className='carousel'>
        <Car />
        </div>
        </div>
      </div>
      <div className='footer'>
       <div className='foot-container'>
       <div className='foot-details'>
        <Image src={logo} className='logo1'/>
        <div className='foot-icons'>
         <div className='bigCircle'>
          <div className='smallCircle'>
           <Image src={x} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <Image src={IG} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <Image src={FB} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <Image src={WA} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <Image src={Phone} />
          </div>
         </div>
        </div>
       </div>
      <div className="foot-links">
        <ul>
          <li>
           <a>New-in</a>
          </li>
          <li>
           <a>Shirts</a>
          </li>
          <li>
           <a>Hoodies</a>
          </li>
          <li>
           <a>About</a>
          </li>
        </ul>
        <ul>
        <li>
         <a>Customer Care</a>
        </li>
        <li>
         <a>Order Tracking</a>
        </li>
        <li>
        <a>Shopping Cart</a>
        </li>
        <li>
        <a>Wishlist</a>
        </li>
        <li>
        <a>Login</a>
        </li>
        </ul>
      </div>
      </div> 
      </div>
    </div>
  )
}
