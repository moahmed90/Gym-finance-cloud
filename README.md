Gym Finance Cloud

Gym Finance Cloud is a cloud-native finance management platform for gym studios, built with a strong focus on production-ready DevOps practices.

It combines a FastAPI backend, a modern admin UI, and an end-to-end container deployment pipeline to demonstrate how a real-world system is designed, deployed, and operated.

⸻

Purpose

Many small gyms manage memberships, payments, and balances using spreadsheets or ad-hoc tools.
Gym Finance Cloud is designed to act as a single source of truth for core financial and membership data, while showcasing modern backend and cloud architecture.

⸻

Architecture

Backend
	•	FastAPI REST API
	•	PostgreSQL database
	•	Alembic database migrations
	•	Health check endpoint for monitoring and orchestration

Frontend
	•	Next.js (App Router)
	•	Admin dashboard and management views
	•	Minimal, modern UI with glass-style components

DevOps & Cloud
	•	Dockerised local development
	•	GitHub Actions CI pipeline
	•	Amazon ECR for container image storage
	•	Amazon ECS (Fargate) for production runtime
	•	Terraform for infrastructure provisioning
	•	Local Kubernetes cluster for orchestration practice

⸻

Deployment flow
	1.	Code is pushed to GitHub
	2.	GitHub Actions builds and tests the API container
	3.	Docker image is published to Amazon ECR
	4.	ECS Fargate pulls and runs the latest image
	5.	Health checks verify service readiness

⸻

Repository structure

.
├── src/                    # FastAPI application
├── alembic/                # Database migrations
├── gym-finance-ui/         # Next.js admin portal
├── infra/
│   ├── terraform/          # AWS infrastructure
│   └── k8s-local/          # Local Kubernetes manifests
├── docker-compose.yml
├── Dockerfile
├── task-definition.json
└── README.md


⸻

Implemented features
	•	FastAPI service with /health endpoint
	•	PostgreSQL integration with Alembic migrations
	•	Fully containerised local environment
	•	CI pipeline using GitHub Actions
	•	Automated image publishing to Amazon ECR
	•	ECS Fargate service running in AWS
	•	Admin dashboard UI
	•	Local Kubernetes deployment with readiness and liveness probes

⸻

CI/CD
	•	Automated builds on push to main
	•	Docker images tagged with commit SHA
	•	Images pushed to Amazon ECR
	•	ECS service updated to run new images
	•	CloudWatch logging enabled

⸻

Local development

Backend

docker compose up --build

API available at:

http://localhost:8000/health

Frontend

cd gym-finance-ui
npm install
npm run dev


⸻

Infrastructure

AWS
	•	ECS (Fargate)
	•	ECR
	•	IAM execution roles
	•	CloudWatch logging
	•	VPC provisioned with Terraform

Kubernetes (local)
	•	Single-node cluster
	•	Deployment and Service manifests
	•	Readiness and liveness probes

⸻

Why this project

This project was built to demonstrate:
	•	Production-style backend architecture
	•	Containerisation and CI/CD pipelines
	•	Cloud infrastructure provisioning
	•	Practical DevOps workflows alongside application code

The structure and deployment approach are intentionally designed to be client-ready, even as application features continue to evolve.

⸻

Roadmap
	•	Authentication and role-based access
	•	Memberships, plans, invoices, and payments CRUD
	•	Financial reporting endpoints
	•	Fully Terraform-managed ECS stack
	•	Optional EKS deployment

⸻
