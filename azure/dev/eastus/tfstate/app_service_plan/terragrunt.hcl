include {
  path = find_in_parent_folders()
}

include "provider" {
    path = find_in_parent_folders("provider.hcl")
    expose = true
    merge_strategy = "deep"
}

include "common" {
    path = find_in_parent_folders("common.hcl")
    expose = true
    merge_strategy = "deep"
}

dependency "remote_state" {
  config_path = "../resource_group" 
}

terraform {
  source = "${get_repo_root()}/src/terraform/azure//app_service_plan"
}

# NOTE: Without this the root doesn't work.
generate = include.provider.generate

locals {
   name_base = join(
    "-",
    [
      "sp",
      include.common.locals.environment,
      include.common.locals.region_alias,
      include.common.locals.application,
    ]
   )
}

inputs = {
    sp_name = lower(local.name_base)
    resource_group_name = dependency.remote_state.outputs.rg_name
}