import React from 'react'

export default function Skill({ skill }) {
  return (
    <div>
        <h5 className="m-2">{skill.name} - proficiency: {skill.proficiency}</h5>
    </div>
  )
}
