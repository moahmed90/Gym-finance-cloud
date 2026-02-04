provider "aws" {
    region = "eu-west-2"
}

module "vpc" {
    source = "terraform-aws-modules/vpc/aws"
    version = "5.5.1"
    name = "gym-finance-vpc"
    cidr = "10.0.0.0/16"

    azs = ["eu-west-2a", "eu-west-2b"]
    public_subnets = ["10.0.1.0/24", "10.0.2.0/24"]

    enable_nat_gateway = false
    enable_vpn_gateway = false
    
    tags = {
        Project = "gym-finance"
    }
}