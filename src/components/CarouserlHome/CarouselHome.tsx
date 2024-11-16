import { Carousel } from "react-bootstrap"

const CarouselHome = ()=>{
    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100' style={{maxHeight: "500px"}} src="src/assets/images/escocia.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Primer slide</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' style={{maxHeight: "500px"}} src="src/assets/images/finlandia.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Segundo slide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' style={{maxHeight: "500px"}} src="src/assets/images/mendoza.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Tercer slide</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default CarouselHome