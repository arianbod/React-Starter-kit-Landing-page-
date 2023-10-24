import React from 'react'
import Title from './Title'
import data from '../data/en.json'
import tourImage1 from '../assets/images/tour-1.jpeg';
import tourImage2 from '../assets/images/tour-2.jpeg';
import tourImage3 from '../assets/images/tour-3.jpeg';
import tourImage4 from '../assets/images/tour-4.jpeg';


const Tours = () => {
    const { tours } = data
    const images = [tourImage1, tourImage2, tourImage3, tourImage4];
    return (
        <section classNameName="section" id="tours">
            <Title titlePart1="featured" titlePart2="tours" />
            <section className="section" id="tours">
                <div className="section-center featured-center">

                    {tours.map((tour, index) => {
                        const { id, date, title, description, location, duration, price } = tour
                        console.log(id, date, title, description, location, duration, price, images[id])
                        return (

                            < article className="tour-card" key={id} >
                                <div className="tour-img-container">
                                    <img src={images[id - 1]} className="tour-img" alt={title} />

                                    <p className="tour-date">{date}</p>
                                </div>
                                <div className="tour-info">
                                    <div className="tour-title">
                                        <h4>{title}</h4>
                                    </div>
                                    <p>
                                        {description}
                                    </p>
                                    <div className="tour-footer">
                                        <p>
                                            <span><i className="fas fa-map"></i></span> {location}
                                        </p>
                                        <p>{duration}</p>
                                        <p>{price}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}


                </div>
            </section>

        </section >
    )
}

export default Tours