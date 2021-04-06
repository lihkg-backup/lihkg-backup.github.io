
export const SITE_NAME: string = 'LIHKG❤️Github'

export const getRepoOwner = (lastDigit: number = -1): string => {
  if (lastDigit < 0) return 'lihkg-backup2' // index
  return lastDigit < 5 ? 'lihkg1' : 'lihkg2'
}
export const REPO_NAME: string = 'archive-program'
