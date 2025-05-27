function onOpen(e) {
  showGamesMenu();
}

function showGamesMenu() {
  const html = HtmlService.createHtmlOutputFromFile('Runner')
    .setWidth(1000)
    .setHeight(600)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SlidesApp.getUi().showModalDialog(html, 'Banana Client');
}

function resetClientState() {
  PropertiesService.getScriptProperties().deleteAllProperties();
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    ScriptApp.deleteTrigger(trigger);
  }
  return true;
}
