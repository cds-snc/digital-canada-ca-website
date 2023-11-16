resource "aws_route53_zone" "cds_website_en" {
  name = var.website_domains[0]
  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
}

resource "aws_route53_zone" "cds_website_fr" {
  name = var.website_domains[1]
  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
}