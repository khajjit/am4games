const userInfoToken = 'user-info'

export const setUserInfo = (userInfo) => localStorage.setItem(userInfoToken, JSON.stringify(userInfo))

export const removeUserInfo = () => localStorage.removeItem(userInfoToken)

export const getUserInfo = () => {
  let userInfo
  try {
    userInfo = JSON.parse(localStorage.getItem(userInfoToken))
  } catch {
    userInfo = false
  }
  return userInfo
}
