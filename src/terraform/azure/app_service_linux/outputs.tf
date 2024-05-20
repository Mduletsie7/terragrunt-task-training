output "wa_name" {
  description = "The name of the service plan."
  value       = azurerm_linux_web_app.linux.name
}

output "wa_id" {
  description = "The ID of the linux web app."
  value       = azurerm_linux_web_app.linux.id
}

output "wa_location" {
  description = "The location of the service plan."
  value       = azurerm_linux_web_app.linux.location
}
