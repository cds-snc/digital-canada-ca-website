module "s3_buckets" {
  source      = "github.com/cds-snc/terraform-modules?ref=v9.6.0"
  for_each    = var.buckets
  bucket_name = each.key

  logging = {
    target_bucket = module.log_bucket.s3_bucket_id
  }

  billing_tag_value = var.billing_code
}

module "log_bucket" {
  source            = "github.com/cds-snc/terraform-modules?ref=v9.6.0"
  bucket_name       = "cds-website-s3-bucket-logs"
  billing_tag_value = var.billing_code
}