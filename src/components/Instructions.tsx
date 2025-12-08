type InstructionsProps = {
  onStartClick: () => void;
};

const Instructions: React.FC<InstructionsProps> = ({ onStartClick }) => {
  return (
    <section>
      <h1>Video Capture</h1>
      <p>Click the button to allow camera access. A photo will be taken automatically after a few seconds.</p>
      <button onClick={onStartClick}>
        Start
      </button>
    </section>
  );
}

export default Instructions;

