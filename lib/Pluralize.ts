const Pluralize = (phrase: string): string => {
  return `${phrase}${phrase?.endsWith('s') ? '\'' : '\'s'}`
}

export default Pluralize
