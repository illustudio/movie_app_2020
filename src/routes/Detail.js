import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        console.log(location)
        if(location.state) {
            return (
                <div className="detail__container">
                    <div className="detail__data">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                        <h2 className="detail__title">{location.state.title}</h2>
                        <p>{location.state.year}</p>
                        <ul className="detail__genres">
                            {location.state.genres.map((genre, index) => {
                                return <li key={index} className="detail__genre">{genre}</li>
                            })}
                        </ul>
                        <p>{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;