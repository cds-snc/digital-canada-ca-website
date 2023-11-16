resource "aws_acm_certificate" "cds_website_certificate" {
  for_each = toset(var.website_domains)

  provider                  = aws.us-east-1
  domain_name               = each.key
  subject_alternative_names = ["*.${each.key}"]
  validation_method         = "DNS"

  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }

  lifecycle {
    create_before_destroy = true
  }
}