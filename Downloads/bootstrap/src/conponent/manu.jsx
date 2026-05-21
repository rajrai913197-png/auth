import Carousel from 'react-bootstrap/Carousel';

import m1 from './imgs/im1.jpg'
import m2 from './imgs/im2.jpg'
import m3 from './imgs/im3.jpg'
let Mymenu =()=>{
    return(
     <>
      <Carousel>
      <Carousel.Item>
       <img src={m1} style={{height:"400px", width:"100%"}} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={m2}  style={{height:"400px", width:"100%"}} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={m3}  style={{height:"400px", width:"100%"}} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </>
    )
}
export default Mymenu