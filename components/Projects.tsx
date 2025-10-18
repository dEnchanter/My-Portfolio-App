import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

function Projects({}: Props) {
  // const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

        {/* Enterprise Wallet System */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="https://www.fetslimited.com/app/login"><a>Enterprise Wallet System</a></Link>
              </span>{" "}
            </h4>
            <p className='text-lg text-center md:text-left'>
              Architected and implemented production-grade digital wallet solution handling <strong>$2M+ monthly transactions</strong>.
              Built with microservices architecture, event sourcing, and CQRS pattern for high throughput and data consistency.
              Achieved <strong>99.99% uptime</strong> with horizontal scalability. The platform enables users to perform money transfers,
              bill payments, airtime top-ups, and access to microloans seamlessly.
            </p>
          </div>
        </div>

        {/* Market Prediction ML Models */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Market Prediction ML Models</span>
            </h4>
            <p className='text-lg text-center md:text-left'>
              Developed ensemble machine learning models combining LSTM networks, XGBoost, and Random Forest for multi-asset
              price prediction. Implemented feature engineering pipeline processing <strong>50+ technical indicators</strong> and
              alternative data sources. Achieved <strong>65% directional accuracy</strong> on out-of-sample data with robust
              risk-adjusted returns, demonstrating the power of AI in quantitative finance.
            </p>
          </div>
        </div>

        {/* Algorithmic Trading Strategy Framework */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Algorithmic Trading Strategy Framework</span>
            </h4>
            <p className='text-lg text-center md:text-left'>
              Built comprehensive Python framework for developing, backtesting, and deploying quantitative trading strategies.
              Integrated machine learning models with traditional signal generation, risk management, and execution algorithms.
              Handles multi-asset portfolios with position sizing based on Kelly Criterion and volatility targeting. Includes
              robust walk-forward optimization to prevent overfitting across multiple market regimes.
            </p>
          </div>
        </div>

        {/* DAO Governance Platform */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>DAO Governance Platform (Web3)</span>
            </h4>
            <p className='text-lg text-center md:text-left'>
              Developed decentralized governance platform for DAO with on-chain voting, proposal management, and treasury
              operations. Implemented quadratic voting mechanism and time-locked execution for enhanced security. Smart
              contracts audited with <strong>zero vulnerabilities detected</strong>. Built with Solidity, Hardhat, and integrated
              with DeFi protocols for automated treasury management.
            </p>
          </div>
        </div>

        {/* Terminal Management System */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="http://tms.fetswallet.com:4004/login"><a>Terminal Management System</a></Link>
              </span>{" "}
            </h4>
            <p className='text-lg text-center md:text-left'>
              Enterprise TMS managing <strong>500+ POS terminals</strong> with ISO8583 communication protocols for secure
              financial messaging. Provides comprehensive solution for managing terminal networks, monitoring transaction flows,
              and facilitating settlement processes. Reduced operational costs by <strong>60%</strong> with automated remote
              terminal management and detailed reporting for financial oversight.
            </p>
          </div>
        </div>

        {/* AI-Powered Development Assistant */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>AI-Powered Development Assistant</span>
            </h4>
            <p className='text-lg text-center md:text-left'>
              Created internal tool leveraging GPT-4 API for automated code generation, refactoring, and documentation.
              Integrated with VS Code for real-time assistance during development. Reduced development time for routine
              tasks by <strong>40%</strong> while maintaining high code quality. Demonstrates practical application of
              LLMs in software engineering workflows.
            </p>
          </div>
        </div>

        {/* BeGreat Finance */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="https://begreat.finance"><a>BeGreat Finance</a></Link>
              </span>{" "}
            </h4>
            <p className='text-lg text-center md:text-left'>
              Investment SaaS platform serving <strong>5,000+ active users</strong> with advanced tools for navigating financial
              markets. Built responsive real-time trading dashboard with WebSocket integration for live market data. Features
              analytics on market trends, entry/exit signals, and news impact on prices. Enhanced user engagement by <strong>65%</strong>
              with intuitive, color-coded tools for understanding market sentiments and directional trends.
            </p>
          </div>
        </div>

        {/* Meta Africa Sports */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="https://metaafricasports.com"><a>Meta Africa Sports</a></Link>
              </span>{" "}
            </h4>
            <p className='text-lg text-center md:text-left'>
              Basketball agency platform revolutionizing scouting in Mali's league tournaments. Comprehensive digital solution
              enabling efficient player tracking, evaluation, and profiling with real-time updates. Features player profiles,
              performance analytics, video highlights, and direct communication tools. Cross-platform development with React
              Native ensuring consistent experience across web and mobile devices.
            </p>
          </div>
        </div>

      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects