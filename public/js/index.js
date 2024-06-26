import fetchLatestRelease from './fetchLatestRelease.js'
import displayDownloadButtons from './displayDownloadButtons.js'
import displayDownloadError from './displayDownloadError.js'

async function main() {
  try {
    const latestRelease = await fetchLatestRelease()
    const latestReleaseVersion = latestRelease.tag_name.replace('v', '')

    if (!latestReleaseVersion) throw 'Unknown version'

    displayDownloadButtons(latestReleaseVersion)
  } catch (error) {
    console.error('Error fetching the latest release:', error)
    displayDownloadError()
  }
}

main()
