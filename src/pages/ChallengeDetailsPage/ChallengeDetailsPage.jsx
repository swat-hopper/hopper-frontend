import React from 'react'

import { MainTemplate } from '../../templates'
import { ChallengeBanner, ChallengeDetails } from '../../components/molecules'

export function ChallengeDetailsPage() {
  function handleAcceptClick(event) {
    event.preventDefault()
    console.log('Challenge accepted')
  }
  return (
    <MainTemplate>
      <ChallengeBanner
        title="Awesome Title"
        level="Intermediate"
        technologies={['HTML', 'CSS', 'JS']}
        imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/jve24exh4iwonznfndfc.jpg"
        onAcceptClick={handleAcceptClick}
      />
      <ChallengeDetails />
    </MainTemplate>
  )
}
