terraform {
    source = "../../../aws//cloudfront"
}

dependencies {
    paths = ["../s3"]
}

dependency "s3" {
    config_path = "../s3"
    mock_outputs_allowed_terraform_commands = ["init", "fmt", "validate", "plan", "show"]
    mock_outputs_merge_strategy_with_state  = "shallow"
    mock_outputs = {
        s3_bucket_regional_domain_name = []
        s3_buckets = []
    }
}

inputs = {
    s3_bucket_regional_domain_name = dependency.s3.outputs.s3_bucket_regional_domain_name
    s3_buckets                     = dependency.s3.outputs.s3_buckets
}

include {
    path = find_in_parent_folders()
}