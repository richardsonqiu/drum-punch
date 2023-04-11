const drumKits = [
  {
    kitName: 'Original',
    kitPads: [
      {
        padName: 'hihat',
        padKey: ['j', 'f'],
        padAudioSrc: '/audio/hihat6.wav'
      },
      {
        padName: 'snare',
        padKey: ['k', 'd'],
        padAudioSrc: '/audio/snare8.wav'
      },
      {
        padName: 'kick',
        padKey: [' '],
        padAudioSrc: '/audio/kick12.wav'
      }
    ]
  },
  {
    kitName: 'Classic',
    kitPads: [
      {
        padName: 'hihat',
        padKey: ['j', 'f'],
        padAudioSrc: '/audio/hihat6.wav'
      },
      {
        padName: 'snare',
        padKey: ['k', 'd'],
        padAudioSrc: '/audio/snare-classic.wav'
      },
      {
        padName: 'kick',
        padKey: [' '],
        padAudioSrc: '/audio/kick12.wav'
      }
    ]
  }
]

export default drumKits;