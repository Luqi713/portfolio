import React from 'react'

const progressBarClass = 'w-full bg-zinc-200 h-2 rounded'
const filledBarClass = 'bg-teal-600 h-2 rounded'

const SkillItem = ({ skill, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span className="text-teal-600">{percentage}%</span>
      </div>
      <div className={progressBarClass}>
        <div className={filledBarClass} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-teal-600 uppercase tracking-widest">Skills</h2>
        <h1 className="text-3xl font-bold">My Skills</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillItem skill="Node Js" percentage={90} />
        <SkillItem skill="Figma" percentage={95} />
        <SkillItem skill="React Js" percentage={90} />
        <SkillItem skill="JavaScript" percentage={85} />
        <SkillItem skill="HTML5" percentage={95} />
        <SkillItem skill="CSS3" percentage={90} />
        <SkillItem skill="WordPress" percentage={70} />
        <SkillItem skill="SEO" percentage={80} />
      </div>
    </div>
  )
}

export default Skills