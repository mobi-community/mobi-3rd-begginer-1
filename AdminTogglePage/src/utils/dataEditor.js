/**
 * @param userData - Array : 받아올 data
 * @param page - page : 시작지점
 * @param perPage - page : 시작지점
 */
export const editUserDataByPerPage = (userData, page, perPage) => {
  const editedData = userData.slice((page - 1) * perPage, perPage * page)
  return editedData
}