import gradientImage from '../Assets/gradient.png';
export default function Home() {
    return (
        <>
            <img className='image-gradient' src={gradientImage} alt="gradient image" />
            <div className='layer-blur'></div>
            <div className="container">
                <header>
                    <h1 className="logo">Kairo</h1>
                    <nav>
                        <a href="#">Company</a>
                        <a href="#">Features</a>
                        <a href="#">Resources</a>
                        <a href="#">Docs</a>
                    </nav>
                </header>
                <main>
                    <div className="content">
                        <div className="tag-box">
                            <div className="tag">Introducing &wedbar; </div>
                        </div>
                        <h1>EMAIL FOR <br /> DEVELOPERS</h1>
                        <p className='description'>
                            The best way to reach out instead of spam folders,deliver transactional and marketing emails with ease.
                        </p>
                        <div className="buttons">
                            <a href="#" className="btn-get-started">Documentation</a>
                            <a href="#" className="btn-signin-main">Get Started</a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}