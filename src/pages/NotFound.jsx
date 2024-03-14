import '../assets/scss/pages/NotFound.scss';
import pikachu404 from '../assets/images/404.png';

function NotFound() {
    return(
        <div id="error">
            <div className='error'>
                <img src={pikachu404} alt="Pikachu" className='error-img'/>
                <h2 className='error-page'>Page Not Found</h2>
                <p className='error-sorry'>Sorry, the page you are looking for does not exist 😵‍💫</p>
            </div>
        </div>
    )
}

export default NotFound