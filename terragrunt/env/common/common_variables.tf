variable "account_id" {
  description = "(Required) The account ID to perform actions on."
  type        = string
}
variable "env" {
  description = "The current running environment"
  type        = string
}
variable "product_name" {
  description = "(Required) The name of the product you are deploying."
  type        = string
}
variable "region" {
  description = "The current AWS region"
  type        = string
}
variable "billing_code" {
  description = "The billing code to tag our resources with"
  type        = string
}
variable "website_domains" {
  description = "Website domains used by the English and French site"
  type        = list(string)
}
variable "cbs_satellite_bucket_name" {
  description = "(Required) Name of the Cloud Based Sensor S3 satellite bucket"
  type        = string
}