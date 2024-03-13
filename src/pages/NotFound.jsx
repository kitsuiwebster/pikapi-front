import '../assets/scss/pages/NotFound.scss';

function NotFound() {
    return(
        <div id="error">
            <div className='error'>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    )
}

export default NotFound