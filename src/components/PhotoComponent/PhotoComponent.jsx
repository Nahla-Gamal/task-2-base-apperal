import './PhotoComponent.css'
import hero from '../../assets/hero.jpg'
import hero2 from '../../assets/hero2.jpg'

function PhotoComponent() {
    return(
        <picture id='imgDiv'>
            <source media="(min-width:750px)" srcSet={hero} />
            <img src={hero2} />
        </picture>
    )
}
export default PhotoComponent