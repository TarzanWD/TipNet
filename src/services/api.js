import axios from 'axios'

export default async ({ request, startCb = null, successCb, errorCb }) => {
  if (startCb) {
    startCb()
  }

  try {
    const response = await request()
    successCb(response)
  } catch (error) {
    errorCb(error)
  }
}
