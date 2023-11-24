locals {
  pr_review_env = "pr-review-env-manage"
}

module "pr_review_env" {
  source            = "github.com/cds-snc/terraform-modules//gh_oidc_role?ref=v7.3.2"
  billing_tag_value = var.billing_code
  roles = [
    {
      name      = local.pr_review_env
      repo_name = "digital-canada-ca-website"
      claim     = "pull_request"
    }
  ]
}

resource "aws_iam_role_policy_attachment" "pr_review_env" {
  role       = local.pr_review_env
  policy_arn = aws_iam_policy.pr_review_env.arn
  depends_on = [
    module.pr_review_env
  ]
}

resource "aws_iam_policy" "pr_review_env" {
  name   = local.pr_review_env
  path   = "/"
  policy = data.aws_iam_policy_document.pr_review_env.json
}

data "aws_iam_policy_document" "pr_review_env" {
  source_policy_documents = [
    data.aws_iam_policy_document.lambda_function_manage.json,
    data.aws_iam_policy_document.ecr_image_manage.json,
  ]
}

data "aws_iam_policy_document" "lambda_function_manage" {
  statement {
    effect = "Allow"
    actions = [
      "lambda:CreateFunction",
      "lambda:CreateFunctionUrlConfig",
      "lambda:DeleteFunction",
      "lambda:DeleteFunctionUrlConfig",
      "lambda:DeleteFunctionConcurrency",
      "lambda:GetFunction",
      "lambda:GetFunctionConfiguration",
      "lambda:GetFunctionUrlConfig",
      "lambda:ListFunctionUrlConfigs",
      "lambda:PutFunctionConcurrency",
      "lambda:UpdateFunctionCode",
      "lambda:UpdateFunctionConfiguration",
      "lambda:UpdateFunctionUrlConfig"
    ]
    resources = [
      "arn:aws:lambda:${var.region}:${var.account_id}:function:pr-review-env-*"
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "iam:PassRole"
    ]
    resources = [
      "arn:aws:iam::${var.account_id}:role/pr-review-env"
    ]
  }
}

data "aws_iam_policy_document" "ecr_image_manage" {
  statement {
    effect = "Allow"
    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:BatchDeleteImage",
      "ecr:BatchGetImage",
      "ecr:CompleteLayerUpload",
      "ecr:DescribeImages",
      "ecr:DescribeRepositories",
      "ecr:GetDownloadUrlForLayer",
      "ecr:GetRepositoryPolicy",
      "ecr:InitiateLayerUpload",
      "ecr:ListImages",
      "ecr:PutImage",
      "ecr:UploadLayerPart"
    ]
    resources = [
      aws_ecr_repository.website_staging_container.arn
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "ecr:GetAuthorizationToken"
    ]
    resources = ["*"]
  }
}