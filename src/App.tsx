import { useRef, useState } from 'react'
import './App.css'
import Instructions from './components/Instructions'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 },
        audio: false
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      setTimeout(() => {
        takePhoto();
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error?.message);
      } else {
        setError('Unable to start the camera');
      }
    }
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);

      stopCamera();
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach(track => track.stop());
  }

  return (
    <>
      <Instructions onStartClick={startCamera} />
        <section className="capture-area">
          {error && <p>{error}</p>}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
          />
        </section>
      <section>
        <canvas ref={canvasRef} />
      </section>
 
    </>
  )
};

export default App;
