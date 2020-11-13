import qs from 'qs'

export const getQueryString = (params = {}, { questionMark = true } = {}) => {
  return qs.stringify(params, { arrayFormat: 'repeat', addQueryPrefix: questionMark })
}
