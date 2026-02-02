# Saltmarsh Timeline

[https://www.saltmarsh-timeline.com/](https://www.saltmarsh-timeline.com/)

This app helps you track Dungeons and Dragons events for campaigns. It uses a DnD calendar under the hood.

## Run locally

To run this locally, you'll need to create an Amplify sandbox that can feed the UI local data.

Clone the repo, run `npm install`, and then `npm run start` to get things going.

## Tech

- React
- Typescript
- AWS Amplify
- AWS Cognito
- Mantine
- File upload/download

## What's what

The events are automatically displayed on a timeline of fixed height. If they are too close to each other, the UI groups them together. You can filter the events based on tags and by restricting the timeline.
