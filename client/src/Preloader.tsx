import preloader from "./assets/preloader.svg"

const Preloader = () => {
    return ( 
        <div className="preloader">
            <img id="preloader" src={preloader} alt="preloader" />
            <p>Converting...</p>
        </div>
     );
}
 
export default Preloader;