import { forwardRef } from 'react';
import { FRAME_HEIGHT, FRAME_WIDTH } from '../constants';

type VideoPreviewProps = {
  error?: string | null;
};

const VideoPreview = forwardRef<HTMLVideoElement, VideoPreviewProps>(
  ({ error }, ref) => (
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
    </section>
  )
);

export default VideoPreview;
