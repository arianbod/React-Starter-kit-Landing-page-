import React from 'react'
import Title from './Title'
import data from '../data/en.json'
import tourImage1 from '../assets/images/tour-1.jpeg';
import tourImage2 from '../assets/images/tour-2.jpeg';
import tourImage3 from '../assets/images/tour-3.jpeg';
import tourImage4 from '../assets/images/tour-4.jpeg';
import Tour from './Tour';


const Tours = () => {
    const { tours } = data
    const images = [tourImage1, tourImage2, tourImage3, tourImage4];
    return (
        <section className="section" id="tours">
            <Title titlePart1="featured" titlePart2="tours" />
            <section className="section" id="tours">
                <div className="section-center featured-center">

                    {tours.map((tour, index) => <Tour key={tour.id} image={images[tour.id - 1]} {...tour} />)

                    }


                </div>
            </section>

        </section >
    )
}

export default Tours