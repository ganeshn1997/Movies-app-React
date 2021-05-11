import React from 'react';
import Header from './../../common/heder/Header';
import './Home.css';
import moviesData from '../../common/moviesData';
import SingleLineGridList from './Gridlist';
import TitlebarGridList from './GridNewMovies';

class Home extends React.Component {
    render() {
        return <div id = "Home" >
            <Header/>

            <div id="upcoming-movie">
            Upcoming Movies
            </div>

            <div id="GridList-1">
                <SingleLineGridList  />
            </div>

            <div id="right" style={{ height: '100px' }}>
                      
                </div>
            
            <div id="released-movie" className="flex-container">
            <div id="left">
                <TitlebarGridList/>
                </div>
            <div id="right">
                1
                </div>
        
            </div>





            < /div>;
    }
}
export default Home;