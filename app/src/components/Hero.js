import Carousel from 'react-bootstrap/Carousel';

function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <a href='https://9anime.vc/watch/dragon-ball-super-1692?ep=22219' target="_blank">
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/Hero1.jpg"} 
          alt="First slide"
        />
        </a>
        <Carousel.Caption>
          <h3>Watch DragonBall Super Online Free</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='https://mangaplus.shueisha.co.jp/titles/100012' target="_blank">
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/SuperManga.jpg"} 
          alt="Second slide"
        />
        </a>

        <Carousel.Caption>
          <h3>Read DragonBall Super Mnaga Online Free</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/DBKakumei.jpg"} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Read DragonBall Kakumei Manga Latest Chapters</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;