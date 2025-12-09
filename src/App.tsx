import { useCamera } from './hooks/useCamera';
import Instructions from './components/Instructions';
import VideoPreview from './components/VideoPreview';
import PhotoCapture from './components/PhotoCapture';
import './App.css';

function App() {
  const { videoRef, canvasRef, error, isCapturing, progress, startCamera } = useCamera();

  return (
    <>
      <Instructions onStartClick={startCamera} isCapturing={isCapturing} />
      <VideoPreview ref={videoRef} error={error} isCapturing={isCapturing} progress={progress} />
      <PhotoCapture ref={canvasRef} />
    </>
  );
}

export default App;
