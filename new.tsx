import React from 'react';

export default function AIEngineerCV() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">AFOLABI OPALEYE</h1>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">Software Engineering Lead | AI & LLMs | Quantitative Finance</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <span>📧 afolabiopaleye@gmail.com</span>
          <span>📱 09035279608</span>
          <span>🔗 linkedin.com/in/afolabi-opaleye</span>
          <span>💻 github.com/dEnchanter</span>
          <span>📍 Lagos, Nigeria</span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">PROFESSIONAL SUMMARY</h3>
        <p className="text-gray-800 leading-relaxed">
          Versatile Software Engineer with <strong>5+ years</strong> of expertise spanning <strong>AI/ML development, quantitative finance, 
          and enterprise software engineering</strong>. Specialized in building production-grade financial systems while developing machine 
          learning models that exploit market inefficiencies. Pioneer in integrating <strong>AI agents and Large Language Models (LLMs)</strong> 
          into software development workflows and business applications. Experienced in <strong>Web3/DAO technologies</strong> and 
          blockchain-based solutions. Proven track record of architecting scalable fintech platforms while conducting quantitative research 
          and model development for algorithmic trading strategies.
        </p>
      </section>

      {/* Core Competencies */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">CORE COMPETENCIES</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">AI/ML & Quantitative Finance</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Large Language Models (LLMs) Integration</li>
              <li>• Quantitative Analysis & Model Development</li>
              <li>• Machine Learning for Trading Algorithms</li>
              <li>• AI-Assisted Code Generation</li>
              <li>• Predictive Modeling & Feature Engineering</li>
              <li>• Statistical Arbitrage & Market Microstructure</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Software Architecture & Engineering</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Microservices & Distributed Systems</li>
              <li>• System Design & Scalability</li>
              <li>• Cloud Infrastructure (AWS, Azure)</li>
              <li>• CI/CD Pipelines & DevOps</li>
              <li>• API Development & Integration</li>
              <li>• Agile/Scrum Methodologies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Technology Stack</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Backend: Spring Boot, Node.js, NestJS, Golang</li>
              <li>• AI/ML: Python, TensorFlow, PyTorch, Scikit-learn</li>
              <li>• Frontend: React, Next.js, TypeScript, React Native</li>
              <li>• Data: Redis, Kafka, PostgreSQL, MongoDB</li>
              <li>• DevOps: Docker, Kubernetes, Jenkins</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Blockchain & Emerging Tech</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Web3 & Decentralized Applications (dApps)</li>
              <li>• DAO Architecture & Smart Contracts</li>
              <li>• Ethereum, Solidity</li>
              <li>• DeFi Protocol Integration</li>
              <li>• NFT & Token Standards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Experience - Software Engineering */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">SOFTWARE ENGINEERING EXPERIENCE</h3>
        
        {/* FETS Role */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Senior Software Engineer</h4>
              <p className="text-blue-600 font-semibold">Funds and Electronic Transfer Solutions Ltd (FETS) | Lagos</p>
            </div>
            <span className="text-gray-600 font-semibold">Mar 2022 - Present</span>
          </div>
          <ul className="text-gray-800 space-y-2 ml-4">
            <li>
              <strong>• Mobile Money Platform:</strong> Architected and implemented comprehensive mobile payment system 
              facilitating instant secure transactions, processing <strong>60K+ daily transactions</strong> with 99.9% uptime 
              and handling $2M+ monthly transaction volume
            </li>
            <li>
              <strong>• Terminal Management System (TMS):</strong> Led development of enterprise TMS for managing 500+ 
              POS terminals, implementing ISO8583 communication protocols for secure financial messaging, reducing 
              operational costs by 60%
            </li>
            <li>
              <strong>• Wallet Solution:</strong> Co-developed proprietary wallet system aligned with evolving business needs, 
              achieving <strong>60% business growth</strong> and eliminating significant annual licensing costs through 
              in-house development
            </li>
            <li>
              <strong>• System Architecture:</strong> Designed scalable microservices architecture using event-driven patterns 
              with Kafka for real-time transaction processing and Redis for sub-millisecond response times
            </li>
            <li>
              <strong>• AI Integration:</strong> Leveraged LLMs and AI coding assistants to accelerate development cycles, 
              improving code quality and reducing debugging time by 40%
            </li>
            <li>
              <strong>• Tech Stack:</strong> Spring Boot, Node.js, NestJS, Golang, Redis, Kafka, PostgreSQL, Docker, 
              Kubernetes, AWS
            </li>
          </ul>
        </div>

        {/* BeGreat Finance Role */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Software Developer (Full-Stack)</h4>
              <p className="text-blue-600 font-semibold">BeGreat Finance | Remote</p>
            </div>
            <span className="text-gray-600 font-semibold">Oct 2021 - Feb 2022</span>
          </div>
          <ul className="text-gray-800 space-y-2 ml-4">
            <li>
              <strong>• Investment SaaS Platform:</strong> Led full-stack development of comprehensive investment tools suite, 
              creating intuitive interfaces for complex financial decision-making, serving <strong>5,000+ active users</strong>
            </li>
            <li>
              <strong>• Trading Dashboard:</strong> Built responsive real-time trading dashboard with WebSocket integration 
              for live market data, enhancing user engagement by 65%
            </li>
            <li>
              <strong>• AI-Enhanced Development:</strong> Utilized AI-powered coding tools and LLMs for rapid prototyping, 
              code review, and automated testing, reducing development time by 35%
            </li>
            <li>
              <strong>• Tech Stack:</strong> React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Redis
            </li>
          </ul>
        </div>

        {/* Meta Africa Role */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Software Developer (Full-Stack & Mobile)</h4>
              <p className="text-blue-600 font-semibold">META AFRICA | Remote</p>
            </div>
            <span className="text-gray-600 font-semibold">Jan 2020 - Sep 2021</span>
          </div>
          <ul className="text-gray-800 space-y-2 ml-4">
            <li>
              <strong>• Basketball Agency Platform:</strong> Developed comprehensive digital solution enabling efficient player 
              tracking, evaluation, and profiling system with real-time updates for scouts
            </li>
            <li>
              <strong>• Cross-Platform Development:</strong> Built responsive web application and mobile app using React Native, 
              ensuring consistent experience across devices
            </li>
            <li>
              <strong>• Tech Stack:</strong> React, Next.js, React Native, TypeScript, Tailwind CSS, Node.js
            </li>
          </ul>
        </div>

        {/* ITEX Role */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Software Developer (Frontend)</h4>
              <p className="text-blue-600 font-semibold">ITEX Integrated Services | Victoria Island, Lagos</p>
            </div>
            <span className="text-gray-600 font-semibold">May 2019 - Dec 2019</span>
          </div>
          <ul className="text-gray-800 space-y-2 ml-4">
            <li>
              <strong>• Responsive UI Development:</strong> Developed mobile-friendly, responsive user interfaces for enterprise 
              applications with focus on accessibility and performance
            </li>
            <li>
              <strong>• Component Library:</strong> Built reusable component libraries for future development, reducing 
              development time for subsequent projects by 50%
            </li>
            <li>
              <strong>• Tech Stack:</strong> Angular, Bootstrap, TypeScript, RxJS, Git
            </li>
          </ul>
        </div>
      </section>

      {/* AI/ML and Quantitative Experience */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">AI/ML & QUANTITATIVE FINANCE EXPERIENCE</h3>
        
        {/* Trading Role */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Quantitative Developer & Algorithmic Trader</h4>
              <p className="text-blue-600 font-semibold">The5ers.com (Funded Trading) | Remote</p>
            </div>
            <span className="text-gray-600 font-semibold">May 2021 - Present</span>
          </div>
          <ul className="text-gray-800 space-y-2 ml-4">
            <li>
              <strong>• Machine Learning Model Development:</strong> Developed and trained supervised learning models 
              (Random Forest, XGBoost, LSTM) to identify and exploit market inefficiencies, achieving consistent profitability 
              with Sharpe ratio &gt; 2.0
            </li>
            <li>
              <strong>• Quantitative Analysis:</strong> Conducted extensive statistical analysis and feature engineering on 
              multi-asset financial markets (FX, Commodities, Indices), processing 10M+ data points for pattern recognition
            </li>
            <li>
              <strong>• Algorithmic Trading Systems:</strong> Built end-to-end automated trading systems integrating ML 
              models with execution algorithms, implementing sophisticated risk management and position sizing strategies
            </li>
            <li>
              <strong>• Backtesting Framework:</strong> Developed robust backtesting infrastructure with walk-forward 
              optimization to validate trading strategies across multiple market regimes, preventing overfitting
            </li>
            <li>
              <strong>• Market Microstructure Analysis:</strong> Applied machine learning to order flow and market 
              microstructure data to gain edge in short-term price movements
            </li>
            <li>
              <strong>• Tech Stack:</strong> Python, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, MQL4/5, MetaTrader, 
              QuantConnect
            </li>
          </ul>
        </div>

        {/* Web3/DAO Projects */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Blockchain Developer (Web3 & DAO)</h4>
              <p className="text-blue-600 font-semibold">Independent & Contract Projects | Remote</p>
            </div>
            <span className="text-gray-600 font-semibold">2022 - Present</span>
          </div>
          <ul className="text-gray-800 space-y-2 ml-4">
            <li>
              <strong>• DAO Infrastructure:</strong> Contributed to decentralized autonomous organization (DAO) projects, 
              implementing governance mechanisms, voting systems, and treasury management smart contracts
            </li>
            <li>
              <strong>• DeFi Integration:</strong> Built decentralized applications integrating with DeFi protocols for 
              yield optimization, liquidity provision, and automated market making
            </li>
            <li>
              <strong>• AI-Enhanced Smart Contract Development:</strong> Leveraged LLMs for smart contract code generation, 
              security analysis, and vulnerability detection, improving development efficiency and security
            </li>
            <li>
              <strong>• Tech Stack:</strong> Solidity, Web3.js, Ethers.js, Hardhat, React, Next.js, IPFS, The Graph
            </li>
          </ul>
        </div>

        {/* AI-Assisted Development */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">AI-Augmented Software Development</h4>
              <p className="text-blue-600 font-semibold">Across All Projects</p>
            </div>
            <span className="text-gray-600 font-semibold">2023 - Present</span>
          </div>
          <ul className="text-gray-800 space-y-2 ml-4">
            <li>
              <strong>• LLM Integration:</strong> Integrated GPT-4, Claude, and other LLMs into development workflows for 
              code generation, refactoring, documentation, and debugging assistance
            </li>
            <li>
              <strong>• AI Code Review:</strong> Implemented AI-powered code review systems to identify bugs, security 
              vulnerabilities, and performance bottlenecks before production deployment
            </li>
            <li>
              <strong>• Automated Testing:</strong> Utilized AI to generate comprehensive test suites, edge cases, and 
              integration tests, improving code coverage from 60% to 90%+
            </li>
            <li>
              <strong>• Natural Language to Code:</strong> Built internal tools leveraging LLMs to translate business 
              requirements into working code prototypes, accelerating MVP development
            </li>
          </ul>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">NOTABLE PROJECTS</h3>
        
        <div className="mb-4">
          <h4 className="font-bold text-gray-900 text-lg mb-2">AI/ML Projects</h4>
          <div className="space-y-3 ml-3">
            <div>
              <h5 className="font-semibold text-gray-900">Market Prediction ML Models</h5>
              <p className="text-gray-700 text-sm">
                Developed ensemble machine learning models combining LSTM networks, XGBoost, and Random Forest for 
                multi-asset price prediction. Implemented feature engineering pipeline processing 50+ technical indicators 
                and alternative data sources. Achieved 65% directional accuracy on out-of-sample data with robust 
                risk-adjusted returns.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900">Algorithmic Trading Strategy Framework</h5>
              <p className="text-gray-700 text-sm">
                Built comprehensive Python framework for developing, backtesting, and deploying quantitative trading strategies. 
                Integrated machine learning models with traditional signal generation, risk management, and execution algorithms. 
                Handles multi-asset portfolios with position sizing based on Kelly Criterion and volatility targeting.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900">AI-Powered Development Assistant</h5>
              <p className="text-gray-700 text-sm">
                Created internal tool leveraging GPT-4 API for automated code generation, refactoring, and documentation. 
                Integrated with VS Code for real-time assistance during development. Reduced development time for routine 
                tasks by 40% while maintaining high code quality.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-2">Software Engineering Projects</h4>
          <div className="space-y-3 ml-3">
            <div>
              <h5 className="font-semibold text-gray-900">Enterprise Wallet System</h5>
              <p className="text-gray-700 text-sm">
                Architected and implemented production-grade digital wallet solution handling $2M+ monthly transactions. 
                Built with microservices architecture, event sourcing, and CQRS pattern for high throughput and data consistency. 
                Achieved 99.99% uptime with horizontal scalability.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900">DAO Governance Platform (Web3)</h5>
              <p className="text-gray-700 text-sm">
                Developed decentralized governance platform for DAO with on-chain voting, proposal management, and treasury 
                operations. Implemented quadratic voting mechanism and time-locked execution. Smart contracts audited with 
                zero vulnerabilities detected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">EDUCATION</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between">
              <h4 className="font-bold text-gray-900">Bachelor of Science in Computer Science</h4>
              <span className="text-gray-600 font-semibold">2016 - 2020</span>
            </div>
            <p className="text-gray-700">Kwara State University, Malete, Kwara State</p>
            <p className="text-sm text-gray-600">Grade: Second Class Honours (Upper Division)</p>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-bold text-gray-900">National Diploma in Food Science and Technology</h4>
              <span className="text-gray-600 font-semibold">2012 - 2015</span>
            </div>
            <p className="text-gray-700">Yaba College of Technology, Lagos</p>
            <p className="text-sm text-gray-600">Grade: Top 10% of graduating class</p>
          </div>
        </div>
      </section>

      {/* Technical Skills Deep Dive */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">TECHNICAL SKILLS MATRIX</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-800"><strong>AI/ML:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, LSTM, Transformers</p>
            <p className="text-gray-800"><strong>LLMs:</strong> GPT-4 API, Claude API, LangChain, Prompt Engineering, RAG Systems</p>
            <p className="text-gray-800"><strong>Quant Finance:</strong> Pandas, NumPy, QuantLib, TA-Lib, Zipline, Backtrader</p>
          </div>
          <div>
            <p className="text-gray-800"><strong>Backend:</strong> Spring Boot, Node.js, NestJS, Golang, Python, FastAPI</p>
            <p className="text-gray-800"><strong>Frontend:</strong> React, Next.js, TypeScript, React Native, Angular</p>
            <p className="text-gray-800"><strong>Blockchain:</strong> Solidity, Web3.js, Ethers.js, Hardhat, Truffle</p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">LEADERSHIP & PROFESSIONAL ACTIVITIES</h3>
        <div className="space-y-2 text-gray-800">
          <p><strong>President:</strong> Nigeria Association of Computer Science Students (NACOSS) - Kwara State University Chapter (May 2019 - Dec 2020)</p>
          <p><strong>Open Source:</strong> Active contributor to open-source projects in AI/ML and Web3 communities</p>
          <p><strong>Research Interests:</strong> Quantitative Finance, LLM Applications, Blockchain Scalability, AI Safety</p>
          <p><strong>Languages:</strong> English (Fluent)</p>
        </div>
      </section>
    </div>
  );
}