import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import gallery from '../assets/json/portfolio-preview.json';
import Project from './Project';

const Portfolio = () => {
    const [portfolio] = useState(gallery);

    return (
        <section>
            <h1>Portfolio</h1>
            <div className="slide-container">
                    <Slide easing="ease">
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url('https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg')`, 'backgroundSize': '200px 200px' }}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                    </Slide>
            </div>
        </section >
    )
}

// {portfolio.map(item => (
//     // <Project item={item}/>
//     <div key={`${item.name}`} className="each-slide">
//         <div style={{ backgroundImage: `url('${process.env.PUBLIC_URL + "/images/portfolio-small/" + item.file}')` }}                        >
//             <span>{`${item.description}`}</span>
//         </div>
//     </div>
// ))}

// <div key={item.name} className="portfolio-item">
//     <img src={require(`../assets/images/portfolio-small/${item.file}`).default} alt={`${item.description}`} />
// </div>

export default Portfolio;