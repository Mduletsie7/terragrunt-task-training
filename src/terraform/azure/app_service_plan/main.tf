resource "azurerm_service_plan" "serviceplan" {
  name                = local.sp_name
  resource_group_name = var.resource_group_name
  location            = var.region
  os_type             = var.os_type
  sku_name            = var.sku
}
