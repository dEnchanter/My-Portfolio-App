import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <div className='flex space-x-5'>

      {/* FETS - Senior Software Engineer */}
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Senior Software Engineer</h4>
          <p className='font-bold text-2xl mt-1'>FETS (Funds and Electronic Transfer Solutions)</p>

          <p className="uppercase py-5 text-gray-300">Mar 2022 - Present</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              <strong>Mobile Money Platform:</strong> Architected comprehensive mobile payment system processing <strong>60K+ daily transactions</strong>
              with 99.9% uptime and handling <strong>$2M+ monthly transaction volume</strong>
            </li>
            <li>
              <strong>Terminal Management System (TMS):</strong> Led development of enterprise TMS managing 500+ POS terminals with ISO8583
              protocols, reducing operational costs by 60%
            </li>
            <li>
              <strong>Wallet Solution:</strong> Co-developed proprietary wallet system achieving <strong>60% business growth</strong> and
              eliminating significant annual licensing costs
            </li>
            <li>
              <strong>System Architecture:</strong> Designed scalable microservices architecture using event-driven patterns with Kafka
              and Redis for sub-millisecond response times
            </li>
            <li>
              <strong>AI Integration:</strong> Leveraged LLMs and AI coding assistants to accelerate development cycles, improving code
              quality and reducing debugging time by 40%
            </li>
            <li>
              <strong>Tech Stack:</strong> Spring Boot, Node.js, NestJS, Golang, Redis, Kafka, PostgreSQL, Docker, Kubernetes, AWS
            </li>
          </ul>
        </div>
      </article>

      {/* Quantitative Developer & Algorithmic Trader */}
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Quantitative Developer & Algorithmic Trader</h4>
          <p className='font-bold text-2xl mt-1'>The5ers.com (Funded Trading)</p>

          <p className="uppercase py-5 text-gray-300">May 2021 - Present</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              <strong>ML Model Development:</strong> Developed supervised learning models (Random Forest, XGBoost, LSTM) achieving
              consistent profitability with Sharpe ratio &gt; 2.0
            </li>
            <li>
              <strong>Quantitative Analysis:</strong> Conducted statistical analysis and feature engineering on multi-asset markets
              (FX, Commodities, Indices), processing 10M+ data points
            </li>
            <li>
              <strong>Algorithmic Trading Systems:</strong> Built end-to-end automated trading systems integrating ML models with
              execution algorithms and sophisticated risk management
            </li>
            <li>
              <strong>Backtesting Framework:</strong> Developed robust backtesting infrastructure with walk-forward optimization
              across multiple market regimes
            </li>
            <li>
              <strong>Tech Stack:</strong> Python, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, MQL4/5, MetaTrader, QuantConnect
            </li>
          </ul>
        </div>
      </article>

      {/* BeGreat Finance */}
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Software Developer (Full-Stack)</h4>
          <p className='font-bold text-2xl mt-1'>BeGreat Finance</p>

          <p className="uppercase py-5 text-gray-300">Oct 2021 - Feb 2022</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              <strong>Investment SaaS Platform:</strong> Led full-stack development of comprehensive investment tools suite serving
              <strong>5,000+ active users</strong>
            </li>
            <li>
              <strong>Trading Dashboard:</strong> Built responsive real-time dashboard with WebSocket integration for live market data,
              enhancing user engagement by 65%
            </li>
            <li>
              <strong>AI-Enhanced Development:</strong> Utilized AI-powered tools and LLMs for rapid prototyping, code review, and
              automated testing, reducing development time by 35%
            </li>
            <li>
              <strong>Tech Stack:</strong> React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Redis
            </li>
          </ul>
        </div>
      </article>

      {/* Blockchain Developer (Web3 & DAO) */}
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Blockchain Developer (Web3 & DAO)</h4>
          <p className='font-bold text-2xl mt-1'>Independent & Contract Projects</p>

          <p className="uppercase py-5 text-gray-300">2022 - Present</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              <strong>DAO Infrastructure:</strong> Contributed to DAO projects implementing governance mechanisms, voting systems,
              and treasury management smart contracts
            </li>
            <li>
              <strong>DeFi Integration:</strong> Built decentralized applications integrating with DeFi protocols for yield optimization,
              liquidity provision, and automated market making
            </li>
            <li>
              <strong>AI-Enhanced Smart Contract Development:</strong> Leveraged LLMs for smart contract code generation, security
              analysis, and vulnerability detection
            </li>
            <li>
              <strong>Tech Stack:</strong> Solidity, Web3.js, Ethers.js, Hardhat, React, Next.js, IPFS, The Graph
            </li>
          </ul>
        </div>
      </article>

      {/* META AFRICA */}
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Software Developer (Full-Stack & Mobile)</h4>
          <p className='font-bold text-2xl mt-1'>META AFRICA</p>

          <p className="uppercase py-5 text-gray-300">Jan 2020 - Sep 2021</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              <strong>Basketball Agency Platform:</strong> Developed comprehensive digital solution enabling efficient player tracking,
              evaluation, and profiling system with real-time updates for scouts
            </li>
            <li>
              <strong>Cross-Platform Development:</strong> Built responsive web application and mobile app using React Native, ensuring
              consistent experience across devices
            </li>
            <li>
              <strong>Tech Stack:</strong> React, Next.js, React Native, TypeScript, Tailwind CSS, Node.js
            </li>
          </ul>
        </div>
      </article>

      {/* ITEX */}
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Software Developer (Frontend)</h4>
          <p className='font-bold text-2xl mt-1'>ITEX Integrated Services</p>

          <p className="uppercase py-5 text-gray-300">May 2019 - Dec 2019</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              <strong>Responsive UI Development:</strong> Developed mobile-friendly, responsive user interfaces for enterprise applications
              with focus on accessibility and performance
            </li>
            <li>
              <strong>Component Library:</strong> Built reusable component libraries reducing development time for subsequent projects by 50%
            </li>
            <li>
              <strong>Tech Stack:</strong> Angular, Bootstrap, TypeScript, RxJS, Git
            </li>
          </ul>
        </div>
      </article>

    </div>
  )
}