import { forwardRef } from 'react';
import { FRAME_HEIGHT, FRAME_WIDTH } from '../constants';

import './VideoPreview.css';

type VideoPreviewProps = {
  error?: string | null;
  isCapturing: boolean;
  progress: number;
};

const VideoPreview = forwardRef<HTMLVideoElement, VideoPreviewProps>(
  ({ error, isCapturing, progress }, ref) => (
    <section>
      <h2>Video Preview</h2>
      {error && <p className="error">{error}</p>}
      <video
        ref={ref}
        autoPlay
        playsInline
        muted
        height={FRAME_HEIGHT}
        width={FRAME_WIDTH}
      />
      {isCapturing && (
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
    </section>
  )
);

export default VideoPreview;
