# 🌤️ Weather App with CI/CD Pipeline

I created a simple static weather application using HTML, CSS and Javascript

![screenshot of the app](public/WeatherApp_Screenshot.png)

___

## 🚀 Project Overview

This project demonstrates how to:
- Build basic static web app
- Use GitHub for version control
- Set up a CI/CD pipeline with GitHub Actions
- Deploy automatically to Netlify on every push to 'main'

___

## 🌍 Live Demo
[View the app on Netlify](https://preeminent-cheesecake-5edc01.netlify.app/)

## What I learned
- How CI/CD works in modern web development
- Setting up GitHub Actions from scratch
- Connecting Netlify deploy hooks to GitHub workflows
- Benefits of automating deployments

___

## 📁 Tech Stack

| Tool / Tech               | Purpose               |
|---------------------------| ----------------------|
| HTML/CSS/Javascript       | Frontend              |
| Git and GitHub            | Version Control       |
| GitHub Actions            | CI/CD auotomation     |
| Netlify                   | Deployment platform   |

___

## 🛠️ Features

- Shows real-time weather info (via `https://openweathermap.org` API)
- Clean and responseive UI
- Fully automated deployment on push
- Netlify Deploy Hook integrated with GitHub actions

____

## 🧪 CI/CD Pipeline Flow

1. **Code changes** are commited and pushed to `main`
2. **GitHub actions** triggers a workflow in `.github/workflows/main.yml`
3. The workflow triggers a **Netlify Deploy Hook**
4. Netlify builds and deploys the latest version automatically

