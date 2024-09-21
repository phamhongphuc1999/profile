import { SkillsType } from 'src/globals';
import {
  ApacheKafka,
  BlockchainSkill,
  Docker,
  DotNetApi,
  JavaSkill,
  Next,
  React,
  SubSkills,
} from './CoreSkills';

const {
  Ethers,
  Tailwind,
  AntDesign,
  MUI,
  MongoDb,
  MySqlDb,
  Maven,
  Graph,
  Redux,
  AccountAbstraction,
  SoliditySmartContract,
  ZKContract,
} = SubSkills;

export const SkillsLayoutConfig: {
  [key: string]: Array<Array<{ index: number; layoutIndex: number }>>;
} = {
  md: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 3, layoutIndex: 1 },
      { index: 6, layoutIndex: 2 },
    ],
    [
      { index: 1, layoutIndex: 3 },
      { index: 4, layoutIndex: 4 },
    ],
    [
      { index: 2, layoutIndex: 5 },
      { index: 5, layoutIndex: 6 },
    ],
  ],
  sm: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 2, layoutIndex: 1 },
      { index: 4, layoutIndex: 2 },
      { index: 6, layoutIndex: 3 },
    ],
    [
      { index: 1, layoutIndex: 4 },
      { index: 3, layoutIndex: 5 },
      { index: 5, layoutIndex: 6 },
    ],
  ],
  xs: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 1, layoutIndex: 1 },
      { index: 2, layoutIndex: 2 },
      { index: 3, layoutIndex: 3 },
      { index: 4, layoutIndex: 4 },
      { index: 5, layoutIndex: 5 },
      { index: 6, layoutIndex: 6 },
    ],
  ],
};

export const SkillsConfig: Array<SkillsType> = [
  {
    ...React,
    relevantSkills: [Next, Redux, Ethers, AntDesign, MUI, Tailwind],
    links: [
      {
        id: 'account-abstraction-app',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        mode: 'external',
        title: 'Recovery Account Abstraction Wallet that uses EDDSA signature',
      },
      {
        id: 'react-hook-utils',
        to: 'https://www.npmjs.com/package/@peter-present/react-hook-utils',
        mode: 'external',
        title: 'Simple package which provides some utility hooks.',
      },
      {
        id: 'led caro',
        to: 'https://www.npmjs.com/package/@peter-present/led-caro',
        mode: 'external',
        title: 'Simple package which draw caro.',
      },
    ],
  },
  {
    ...Next,
    relevantSkills: [React, Redux, Ethers, AntDesign, MUI, Tailwind],
    links: [
      {
        id: 'profile',
        to: 'https://github.com/phamhongphuc1999/profile',
        mode: 'external',
        title: 'My profile written by Next',
      },
    ],
  },
  {
    ...BlockchainSkill,
    relevantSkills: [AccountAbstraction, SoliditySmartContract, ZKContract],
    links: [
      {
        id: 'account-abstraction-app',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        mode: 'external',
        title: 'Recovery Account Abstraction Wallet that uses EDDSA signature',
      },
      {
        id: 'account-abstraction-contract',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-contract',
        mode: 'external',
        title: 'Account Abstraction Smart Contract',
      },
      {
        id: 'bundler',
        to: 'https://github.com/phamhongphuc1999/bundler',
        mode: 'external',
        title: 'ERC4337 Bundler',
      },
      {
        id: 'smart-contract-practice',
        to: 'https://github.com/phamhongphuc1999/smart-contract-practice',
        mode: 'external',
        title: 'Smart Contract Practice',
      },
    ],
  },
  {
    ...ApacheKafka,
    links: [
      {
        id: 'udemy-course',
        to: 'certification-apache-kafka',
        mode: 'scroll',
        title: 'Apache Kafka Series - Learn Apache Kafka for Beginners v3',
      },
    ],
  },
  {
    ...DotNetApi,
    relevantSkills: [MongoDb, MySqlDb],
    links: [
      {
        id: 'user-api',
        to: 'https://github.com/phamhongphuc1999/UserAPI',
        mode: 'external',
        title: 'Simple API written by C# interacts with mongodb and mysql',
      },
    ],
  },
  {
    ...JavaSkill,
    relevantSkills: [MongoDb, MySqlDb, Maven, Graph],
    links: [
      {
        id: 'java-practice',
        to: 'https://github.com/phamhongphuc1999/JavaPractice/tree/main/simple-api',
        mode: 'external',
        title: 'Simple API written by Java spring boot interacts with mysql',
      },
    ],
  },
  Docker,
];