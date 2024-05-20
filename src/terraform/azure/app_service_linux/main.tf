resource "azurerm_linux_web_app" "linux" {
  name                = local.wa_name
  resource_group_name = var.resource_group_name
  location            = var.region
  service_plan_id     = var.service_plan_id

  site_config {}
}