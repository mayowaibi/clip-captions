# Clip Captions

## Description
An application that can create automated, customizable captions for user-uploaded videos using Amazon's transcribe service.

<img width="700" alt="clip-captions-homepage" src="https://github.com/hmlm2001/Media-Vault-EECS2311/assets/66337024/b6cfae75-aa37-4342-a741-468ad9ac6a0a">

## How It Works
The application accepts user-uploaded videos and uploads them to a secure [AWS S3 bucket](https://aws.amazon.com/s3/).

The video is then transcribed using [Amazon Transcribe](https://aws.amazon.com/transcribe/) and a preview of the captions is shown with corresponding time stamps according to the video.

The user can choose to manually edit the captions and customize the primary and outline colours of the captions before applying them to the video.

After the captions are applied, a new video is generated and stored in the S3 bucket before being available for the user to download on the site.

<img width="700" alt="clip-captions-transcription-page" src="https://github.com/hmlm2001/Media-Vault-EECS2311/assets/66337024/d1233f52-0034-4d93-8242-55176eb6cdf6">

## Frameworks and Libraries Used
- Next.js
- React.js
- TailwindCSS
- FFmpeg + WebAssembly
- Uniqid
