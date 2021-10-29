import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"

export const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript
  } = useSpeechRecognition()

  function handleStart() {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'pt-BR'
    })
  }

  return (
    <Flex direction="column" width={900}>
      <Text>Microphone: {listening ? 'on' : 'off'}</Text>
      <Flex justifyContent="space-between" marginX="6" m="4">
        <Button background="green" onClick={handleStart}>Start</Button>
        <Button background="red" onClick={SpeechRecognition.stopListening}>Stop</Button>
        <Button onClick={resetTranscript}>Reset</Button>
      </Flex>
      <Text>{transcript}</Text>
    </Flex>
  )
}