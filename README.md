Gym Finance Cloud

Gym Finance Cloud is a backend service for managing core financial data for gym studios, such as memberships, invoices, and balances.

The project is designed with a strong focus on deployment, automation, and cloud infrastructure, and is intended to be suitable for real client use in a small to medium gym environment.

Architecture
- FastAPI service exposing a REST API
- PostgreSQL database
- Local development using Docker and Docker Compose
- Continuous Integration using GitHub Actions
- Deployed to AWS ECS Fargate with container images stored in Amazon ECR

 Current Features
- Health check endpoint for service monitoring
- Database schema management using Alembic migrations
- Fully containerised application and database
- Automated tests executed as part of CI

Infrastructure
- Amazon ECS (Fargate) for running application containers
- Amazon ECR for container image storage
- IAM task execution roles for secure service access
- CloudWatch logging for runtime visibility

Production Deployment
The service is deployed as an Amazon ECS Service running on AWS Fargate.
The service maintains the desired task count and pulls container images from Amazon ECR.