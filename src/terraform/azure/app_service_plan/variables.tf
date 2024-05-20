variable "base_name" {
    description = "the base name for the resource"
    type = string
}

variable "default_separator" {
  description = "The default seperator to use for naming resources."
  type = string
}

variable "sp_name" {
  description = "The name of the storage account to override the default."
  type = string
}

variable "resource_group_name" {
  description = "The name of the resource group the storage account is in."
  type = string
}

variable "region" {
  description = "The region in which to work."
  type = string
}

variable "os_type" {
  description = "The os type of the app service plan"
  type = string
  default = "Linux"
}

variable "sku" {
  description = "The sku (Pricing plan) of the app service plan"
  type = string
  default = "F1"
}

variable "tags" {
  description = "The tags to apply to the resources"
  type = map(any)
}

locals {
  sp_name = var.sp_name == "" ? "${var.base_name}sp" : var.sp_name
}