import React from 'react'

import { MainTemplate } from '../../templates'
import { ChallengeBanner, ChallengeDetails } from '../../components/molecules'

export function ChallengeDetailsPage() {
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur ratione alias obcaecati tempore nam repellendus quidem libero, praesentium doloremque fuga, nostrum enim. Quos enim inventore animi quaerat in itaque.'
  const tips = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  ]
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
      <ChallengeDetails description={description} tips={tips} />
    </MainTemplate>
  )
}
