locals {
    common = read_terragrunt_config(find_in_parent_folders("common.hcl"))
}

generate "provider" {
    path = "provider_azure.tf"
    if_exists = "overwrite"
    contents = <<EOF

terraform {
    required_providers {
        azapi = {
            source = "Azure/azapi"
        }
    }
}

provider "azurerm" {
    features {
        api_management {
            purge_soft_delete_on_destroy = true
            recover_soft_deleted         = true
        }
    }
    tenant_id = "${local.common.locals.primary_tenant_id}"
    subscription_id = "${local.common.locals.primary_subscription_id}"
    skip_provider_registration = true
}

provider "azapi" {}
EOF
}

inputs = {
    base_name = local.common.locals.base_name
    default_separator = local.common.locals.default_separator
    component = local.common.locals.component
    component_name = local.common.locals.component_name
    sub_components = local.common.locals.sub_components
    application = local.common.locals.application
    region = local.common.locals.region
    environment = local.common.locals.environment
    short_env = local.common.locals.short_env
    rg_tags = local.common.locals.resource_tags
    tags = local.common.locals.default_tags
}