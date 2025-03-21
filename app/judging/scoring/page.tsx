import React from 'react'



const AccessDenied = () => {
  return (
    <div>Access Denied</div>
  )
}

const ScoringPage = async() => {
  // check if judge

  const checkIfJudge = async() => {

    // check if user is judge
    return true;
  }

  const isJudge = await checkIfJudge();


  if (!isJudge) {
    return <AccessDenied />
  }

  // check if user is judge and set it to a variable isJudge


  return (
    <div>Judging is here</div>
  )
}

export default ScoringPage