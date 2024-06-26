import { fetchLatestRelease } from './fetchLatestRelease.js';

function displayDownloadButtons (latestReleaseVersion) {
    const windowsDownloadElement = document.getElementById('windows-download')
    const linuxDownloadElement = document.getElementById('linux-download')
    const macDownloadElement = document.getElementById('mac-download')

    const latestReleaseUrl = "https://github.com/S0KAA/KEVENT-Launcher/releases/latest/download"
    const appName = "KEVENT-Launcher-setup"

    windowsDownloadElement.innerHTML = `<a id="download-button-main" href="${latestReleaseUrl}/${appName}-${latestReleaseVersion}.exe"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z"></path>
</svg> Windows x64 - ${latestReleaseVersion}</a>`

    linuxDownloadElement.innerHTML = `<a href="${latestReleaseUrl}/${appName}-${latestReleaseVersion}.AppImage">Linux - ${latestReleaseVersion}</a>`
    macDownloadElement.innerHTML = `<a href="${latestReleaseUrl}/${appName}-${latestReleaseVersion}-x64.dmg">MacOS x64 - ${latestReleaseVersion}</a>
    <a href="${latestReleaseUrl}/${appName}-${latestReleaseVersion}-arm64.dmg">MacOS arm64 - ${latestReleaseVersion}</a>`
}

async function displayLatestRelease() {
  try {

    const latestRelease = await fetchLatestRelease();
    const latestReleaseVersion = latestRelease.tag_name.replace("v", "")

    displayDownloadButtons(latestReleaseVersion)

  } catch (error) {
    console.error('Error fetching the latest release:', error);
  }
}

displayLatestRelease();