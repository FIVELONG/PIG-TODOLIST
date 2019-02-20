const host = 'https://www.imaginepig.com' // https://www.imaginepig.com http://127.0.0.1:7003

const conf = {
  host,
  login: `${host}/todo/api/weappLogin`,
  getUserInfo: `${host}/todo/api/getUserInfo`,
  getBacklogList: `${host}/todo/api/getBacklogList`,
  getMemoList: `${host}/todo/api/getMemoList`,
  addMemo: `${host}/todo/api/addMemo`,
  addBacklog: `${host}/todo/api/addBacklog`,
  updateBacklog: `${host}/todo/api/updateBacklog`,
  getTabList: `${host}/todo/api/getTabList`,
}

export default conf
