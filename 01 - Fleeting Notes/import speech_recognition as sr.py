import speech_recognition as sr
import requests
from pydub import AudioSegment
import io
import os

def transcribe_online_video(url):
    # Stream the video content
    response = requests.get(url, stream=True)
    
    # Check if the request was successful
    if response.status_code != 200:
        return "Failed to fetch the video"

    # Save the streamed content to a temporary file
    with open("temp_video.mp4", "wb") as f:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)

    # Extract audio from the video
    video = AudioSegment.from_file("temp_video.mp4", format="mp4")
    audio = video.set_channels(1).set_frame_rate(16000).set_sample_width(2)
    audio.export("temp_audio.wav", format="wav")

    # Initialize recognizer
    r = sr.Recognizer()
    
    # Transcribe audio
    with sr.AudioFile("temp_audio.wav") as source:
        audio_text = r.record(source)
        
    try:
        # Use Google Speech Recognition
        text = r.recognize_google(audio_text)
        return text
    except sr.UnknownValueError:
        return "Speech Recognition could not understand the audio"
    except sr.RequestError as e:
        return f"Could not request results from Speech Recognition service; {e}"
    finally:
        # Clean up temporary files
        os.remove("temp_video.mp4")
        os.remove("temp_audio.wav")

# Example usage
url = "https://example.com/path/to/your/video.mp4"  # Replace with your video URL
transcript = transcribe_online_video(url)
print(transcript)