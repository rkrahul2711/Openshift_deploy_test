# MQIT_GBRAI_Frontend

This repository hosts the **GBR AI frontend and backend services**, built using **React** and **Node.js**.  
The application is containerized with **Docker** and deployed on **OpenShift**.  

It provides UI visualization, API integration, and interaction with backend agents for **batch review** and **exception reporting**.

---

## 🚀 Features
- **Frontend (React.js)**  
  - Modern UI for batch review and exception reporting  
  - Interactive dashboards and data visualizations  
  - Responsive design for seamless experience  

- **Backend (Node.js / Express.js)**  
  - RESTful API integration with backend agents  
  - Data aggregation and exception handling logic  
  - Authentication and session management  

- **DevOps & Deployment**  
  - Dockerized for containerized deployments  
  - CI/CD ready for OpenShift pipelines  
  - Configurable environment variables for flexible deployments  

---

## 📂 Step to Get Started
- Clone the code from repo
   git clone https://github.com/Sushma-jogi-lilly/MQIT_GBRAI_Frontend.git
- install dependencies
   npm install
- run the application
   npm run dev

## Running with Docker

- Build and run using Docker Compose:
docker-compose up --build


## Deployment on OpenShift

- Login to your OpenShift cluster:

oc login <your-cluster>


## Deploy application:

oc apply -f manifests/