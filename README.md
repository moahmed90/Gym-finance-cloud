
Gym Finance Cloud

Gym Finance Cloud is a cloud-native finance management platform for gym studios, built to demonstrate production-ready DevOps and backend architecture.

The project combines a FastAPI backend, a modern admin UI, and an end-to-end container deployment pipeline to show how a real-world system is designed, deployed, and operated in the cloud.

⸻

Purpose

Many small gyms manage memberships, payments, and balances using spreadsheets or ad-hoc tools.

Gym Finance Cloud is designed to act as a single source of truth for core financial and membership data, while showcasing modern backend design, containerisation, CI/CD, and cloud infrastructure practices.

⸻

Architecture

<details>
<summary><strong>Backend</strong></summary>


	•	FastAPI REST API
	•	PostgreSQL database
	•	Alembic migrations
	•	/health endpoint for monitoring and orchestration

</details>


<details>
<summary><strong>Frontend</strong></summary>


	•	Next.js (App Router)
	•	Admin dashboard and management views
	•	Minimal, modern UI with glass-style components

</details>


<details>
<summary><strong>DevOps & Cloud</strong></summary>


	•	Dockerised local development
	•	GitHub Actions CI pipeline
	•	Amazon ECR for container image storage
	•	Amazon ECS (Fargate) for production runtime
	•	Terraform for infrastructure provisioning
	•	Local Kubernetes cluster for orchestration practice

</details>



⸻

Deployment Flow
	1.	Code is pushed to GitHub
	2.	GitHub Actions builds and tests the API container
	3.	Docker image is tagged with commit SHA
	4.	Image is pushed to Amazon ECR
	5.	ECS Fargate pulls and runs the latest image
	6.	Health checks verify service readiness

⸻

Repository Structure

.
├── src/                    # FastAPI application
├── alembic/                # Database migrations
├── gym-finance-ui/         # Next.js admin portal
├── infra/
│   ├── terraform/          # AWS infrastructure (VPC, ECS, IAM)
│   └── k8s-local/          # Local Kubernetes manifests
├── docker-compose.yml
├── Dockerfile
├── task-definition.json
└── README.md


⸻

Implemented Features
	•	FastAPI service with /health endpoint
	•	PostgreSQL integration with Alembic migrations
	•	Fully containerised local development environment
	•	GitHub Actions CI pipeline
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

Local Development

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
	•	Amazon ECS (Fargate)
	•	Amazon ECR
	•	IAM execution roles
	•	CloudWatch logging
	•	VPC provisioned with Terraform

Kubernetes (Local)
	•	Single-node cluster
	•	Deployment and Service manifests
	•	Readiness and liveness probes

⸻

Why This Project

This project was built to demonstrate:
	•	Production-style backend architecture
	•	Containerisation and CI/CD pipelines
	•	Cloud infrastructure provisioning with Terraform
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
