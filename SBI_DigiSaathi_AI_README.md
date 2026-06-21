# SBI DigiSaathi AI

**SBI DigiSaathi AI** is an Agentic AI-powered digital banking adoption assistant designed for the SBI Hackathon theme: **Digital Adoption**. The solution helps customers understand, trust, and use digital banking services through simple conversations, personalized guidance, step-by-step onboarding, and safe banking awareness.

The prototype demonstrates how an intelligent banking assistant can guide users toward services such as mobile banking, UPI payments, recurring deposits, savings plans, insurance awareness, bill payments, and fraud-safe digital banking practices.

---

## Problem Statement

Many banking customers do not fully adopt digital banking services because of:

- Lack of awareness about available digital services
- Fear of online fraud and unsafe transactions
- Low digital confidence among first-time users
- Difficulty understanding banking products
- Lack of personalized financial guidance
- Dependence on branch visits for simple banking tasks

This creates a gap between banking services and customers who could benefit from digital banking but need proper support and trust-building.

---

## Proposed Solution

SBI DigiSaathi AI acts as a personalized digital banking coach. It understands the user's needs, financial goals, and digital comfort level, then recommends suitable digital banking services with simple explanations and guided steps.

The assistant supports users by:

- Understanding natural language queries
- Recommending relevant SBI digital services
- Explaining banking products in simple terms
- Guiding users through digital onboarding
- Providing safety and fraud-awareness tips
- Helping users build confidence in mobile and online banking

---

## Key Features

### 1. Conversational Banking Assistant
Users can ask questions in simple language and receive clear guidance about banking services.

### 2. Personalized Recommendations
The system suggests relevant services based on user goals such as saving money, paying bills, learning investments, or using mobile banking.

### 3. Savings Plan Guidance
Users can explore savings options such as recurring deposits or monthly saving plans based on their amount and goal.

### 4. Step-by-Step Digital Onboarding
The prototype provides guided flows for digital banking journeys so users can understand what action to take next.

### 5. Safety and Compliance Awareness
The platform educates users about safe banking practices and warns them not to share OTPs, PINs, passwords, or sensitive information.

### 6. Simple and Accessible UI
The interface is designed for clarity, ease of use, and accessibility for first-time digital banking users.

---

## Prototype Pages

| Page | Description |
|---|---|
| `index.html` | Landing page introducing SBI DigiSaathi AI |
| `chat.html` | AI chat-style banking assistant interface |
| `recommendation.html` | Personalized savings and product recommendation page |
| `guide.html` | Step-by-step digital banking guidance page |
| `safety.html` | Safe banking and fraud-awareness page |

---

## Process Flow / Architecture

```text
User Input
    ↓
AI Understanding Layer
    ↓
User Profiling
    ↓
Agentic Decision Engine
    ↓
Service Recommendation
    ↓
Step-by-Step Guidance
    ↓
Safety & Compliance Layer
    ↓
Feedback and Continuous Improvement
```

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| UI Design | Responsive static web interface |
| Logic | JavaScript-based user interaction |
| Deployment | GitHub Pages / Netlify / Vercel |
| Future AI Integration | LLM API, intent detection, recommendation engine |
| Future Database | Firebase / MongoDB / MySQL |

---

## Business Impact

SBI DigiSaathi AI can support digital adoption by:

- Increasing usage of mobile banking and digital services
- Reducing dependency on branch visits for basic guidance
- Improving user trust in digital banking
- Supporting cross-selling of deposits, investments, insurance, and loans
- Lowering customer support workload
- Enabling financial inclusion for elderly, rural, and first-time users

---

## Commercial Potential

The solution can create commercial value for banks by improving customer engagement and increasing adoption of digital financial products. Personalized recommendations can encourage customers to explore savings products, recurring deposits, insurance, loans, investments, and bill payment services.

With multilingual support and voice-based interaction in future versions, the solution can scale across diverse customer groups and regions.

---

## Folder Structure

```text
SBI_DigiSaathi_AI_Prototype_Final/
│
├── index.html
├── chat.html
├── recommendation.html
├── guide.html
├── safety.html
│
├── assets/
│   ├── styles.css
│   └── app.js
│
└── README.md
```

---

## How to Run Locally

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in any browser.
4. Navigate through the connected pages using the buttons and navbar.

No backend setup is required for the current prototype.

---

## Deployment on GitHub Pages

1. Create a new GitHub repository.
2. Upload all project files to the repository.
3. Go to **Settings**.
4. Open **Pages** from the sidebar.
5. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save the settings.
7. GitHub will generate a live project link.

---

## Future Scope

- Add real AI-powered intent detection
- Add multilingual support including Hindi
- Add voice input and text-to-speech output
- Integrate with mock banking APIs
- Add financial literacy modules
- Add user dashboard and progress tracking
- Add fraud detection and safety alerts
- Add personalized nudges for digital service adoption

---

## Author

**Aarya Soni**  
B.Tech Information Technology  
Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi

---

## Project Theme

**SBI Hackathon — Agentic AI & Emerging Tech**  
**Selected Problem Statement:** Digital Adoption
