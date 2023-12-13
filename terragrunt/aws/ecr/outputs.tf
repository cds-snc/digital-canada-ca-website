output "aws_ecr_repository_arn" {
  description = "Full ARN of the repository containing the image"
  value       = aws_ecr_repository.website_staging_container.arn
}

output "aws_ecr_repository_url" {
  description = "The URL of the repository"
  value       = aws_ecr_repository.website_staging_container.repository_url
}