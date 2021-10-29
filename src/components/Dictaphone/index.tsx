import SpeechReognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript
  } = useSpeechRecognition()

  function handleStart() {
    SpeechReognition.startListening({
      continuous: true,
      language: 'pt-BR'
    })
  }

  return (
    <div className="App-header">
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={SpeechReognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}