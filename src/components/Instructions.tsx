type InstructionsProps = {
  onStartClick: () => void;
  isCapturing: boolean;
};

const Instructions: React.FC<InstructionsProps> = ({ onStartClick, isCapturing }) => {
  return (
    <section>
      <h1>Video Capture</h1>
      <p>
        Click the button to allow camera access.
        A photo will be taken automatically after a few seconds.
      </p>
      <button onClick={onStartClick} disabled={isCapturing}>
        {isCapturing ? 'Capturing...' : 'Start'}
      </button>
    </section>
  );
}

export default Instructions;

