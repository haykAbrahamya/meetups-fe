const makeClassnames = (classNames) => {
  const classNamesArr = Object.keys(classNames).map(key => {
    return !!classNames[key] ? key : ''
  })

  return classNamesArr
}

export default makeClassnames