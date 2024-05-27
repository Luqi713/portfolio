import React from 'react';

const sharedClasses = {
    container: 'container mx-auto p-12',
    card: 'bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md text-center',
    title: 'text-3xl font-bold text-center mb-8',
    subtitle: 'text-zinc-700 dark:text-zinc-300',
    highlight: 'text-4xl font-bold text-teal-500',
    button: 'bg-teal-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600',
};

const AboutUs = () => {
    const downloadCV = () => {
        const cvUrl = '../assets/portfolio.txt'; 
        
        const anchor = document.createElement('a');
        anchor.href = cvUrl;
        anchor.download = 'CV.txt';
        anchor.click();
      };
    return (
        <div className={sharedClasses.container}>
            <h1 className={sharedClasses.title}>About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <InfoCard number="5,000" description="Happy Clients" />
                <InfoCard number="1,200" description="Projects Done" />
                <InfoCard number="500" description="Cups of Coffee" />
                <InfoCard number="587" description="Working Hours" />
            </div>
            <div className={sharedClasses.card}>
                <h2 className="text-teal-500 font-bold mb-4">ABOUT ME</h2>
                <h3 className="text-2xl font-bold mb-4">A UI/UX Designer & Web Developer Based in Philippines</h3>
                <p className={sharedClasses.subtitle + ' mb-4'}>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoDetail label="Name" value="Clyde Nowitzki" />
                    <InfoDetail label="Date of birth" value="January 01, 1990" />
                    <InfoDetail label="Address" value="San Francisco CA 97987 USA" />
                    <InfoDetail label="Zip code" value="1000" />
                    <InfoDetail label="Email" value="cydenowitzki@gmail.com" />
                    <InfoDetail label="Phone" value="+1-2234-5678-9-0" />
                </div>
                <div className="text-center">
                    <button onClick={downloadCV} className={sharedClasses.button}>DOWNLOAD CV</button>
                </div> 
            </div>
        </div>
    );
};

const InfoCard = ({ number, description }) => {
    return (
        <div className={sharedClasses.card}>
            <p className={sharedClasses.highlight}>{number}</p>
            <p className={sharedClasses.subtitle}>{description}</p>
        </div>
    );
};

const InfoDetail = ({ label, value }) => {
    return (
        <div>
            <p className={sharedClasses.subtitle}><span className="font-bold">{label}:</span> <span className="text-teal-500">{value}</span></p>
        </div>
    );
};

export default AboutUs;
