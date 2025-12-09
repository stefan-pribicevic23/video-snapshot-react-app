import { useRef, useState, useEffect, useCallback } from 'react';
import { CAPTURE_DURATION, PROGRESS_INTERVAL } from '../constants';

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [progress, setProgress] = useState(0);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setError(null);
      
      // Wait for the camera to start
      setTimeout(() => {
        setIsCapturing(true);
        setProgress(0);
      }, 1000);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unable to start camera');
    }
  };

  const stopCamera = useCallback(() => {
    const stream = videoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach(track => track.stop());
    setIsCapturing(false);
    setProgress(0);
  }, []);

  const takePhoto = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0);
      stopCamera();
    }
  }, [stopCamera]);

  useEffect(() => {
    if (!isCapturing) return;

    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / CAPTURE_DURATION) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= CAPTURE_DURATION) {
        clearInterval(interval);
        takePhoto();
      }
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [isCapturing, takePhoto]);

  return { videoRef, canvasRef, error, isCapturing, progress, startCamera, stopCamera };
}
