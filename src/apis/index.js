import axios from 'axios'

const KEY = 'AIzaSyBWfDbWYw0m5CxpOaTKzl5IrfIAVlfNowA'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/'
})

export const fetchPopularData = async () => {
  return await youtube.get('videos', {
    params: {
      part: 'snippet',
      maxResuls: 40,
      key:KEY,
      reginCode: 'JP',
      type: 'video',
      chart: 'mostPopular'
    }
  })
}