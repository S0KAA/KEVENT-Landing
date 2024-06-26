async function fetchLatestRelease() {
  const response = await fetch(
    'https://api.github.com/repos/S0KAA/KEVENT-Launcher/releases/latest'
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export default fetchLatestRelease
