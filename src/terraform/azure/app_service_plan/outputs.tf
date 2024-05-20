output "sp_name" {
  description = "The name of the service plan."
  value       = azurerm_service_plan.serviceplan.name
}

output "sp_id" {
  description = "The ID of the service plan."
  value       = azurerm_service_plan.serviceplan.id
}

output "sp_location" {
  description = "The location of the service plan."
  value       = azurerm_service_plan.serviceplan.location
}

output "sp_sku" {
  description = "The sku of the service plan."
  value       = azurerm_service_plan.serviceplan.sku_name
}

output "sp_os_type" {
  description = "The OS type of the service plan."
  value       = azurerm_service_plan.serviceplan.os_type
}