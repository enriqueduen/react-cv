import React from 'react'
import Skill from './Skill'

export default function SkillsList({skills}) {
    return (
      skills.map(skill => {
         return <Skill key={skill.id} skill={skill} /> 
      })
    )
  }