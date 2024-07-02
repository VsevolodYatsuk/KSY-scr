import React from 'react';
import Header from '../components/Header/Header';
import DirectorMessage from '../components/DirectorMessage/DirectorMessage';
import VideoScroller from '../components/VideoScroller/VideoScroller';
import PhotoCarousel from '../components/PhotoCarousel/PhotoCarousel';
import '../App.css';
import './HomePage.css';

const videos = [
  '/wwwroot/videos/video1.mp4',
  '/wwwroot/videos/video2.mp4',
  '/wwwroot/videos/video3.mp4',
  '/wwwroot/videos/video3.mp4',
  '/wwwroot/videos/video3.mp4',
];

const photos = [
  '/wwwroot/photos/photo1.jpg',
  '/wwwroot/photos/photo2.jpg',
  '/wwwroot/photos/photo3.jpg',
  '/wwwroot/photos/photo1.jpg',
  '/wwwroot/photos/photo2.jpg',
  '/wwwroot/photos/photo3.jpg',
  '/wwwroot/photos/photo1.jpg',
  '/wwwroot/photos/photo2.jpg',
  '/wwwroot/photos/photo3.jpg',
  '/wwwroot/photos/photo1.jpg',
  '/wwwroot/photos/photo2.jpg',
  '/wwwroot/photos/photo3.jpg',
];

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <h2>Поздравление директора</h2>
      <DirectorMessage />
      <div className="section-divider"></div>
      <h2>Поздравление учителей</h2>
      <VideoScroller videos={videos} />
      <div className="section-divider"></div>
      <h2>Фотки</h2>
      <PhotoCarousel photos={photos} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
    </div>
  );
};

export default HomePage;