import { forwardRef } from 'react';
import { FRAME_HEIGHT, FRAME_WIDTH } from '../constants';

const PhotoCapture = forwardRef<HTMLCanvasElement>((_, ref) => (
  <section>
    <h2>Photo Capture</h2>
    <canvas ref={ref} height={FRAME_HEIGHT} width={FRAME_WIDTH} />
  </section>
));

export default PhotoCapture;
