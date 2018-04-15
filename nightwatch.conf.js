module.exports = {
  src_folders: ['specs'],
  custom_assertions_path: 'assertions',

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      launch_url: 'https://www.lansing.codes'
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        acceptSslCerts: true
      }
    }
  }
}
