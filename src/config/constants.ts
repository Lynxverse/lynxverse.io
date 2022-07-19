export const NETWORK = "testnet";
export const WEFUND_ID = 1;
export const REQUEST_ENDPOINT =
  "https://wefund-nodejs-gwb6v.ondigitalocean.app";

export const WEFUND_WALLET = "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu";

export const WFD_TOKEN =
  "juno17tk7s9mg2a6uupfljrhf492e7hzhkd89cvzerglyj8xguvzukksq9d75ts";

export const WEFUND_CONTRACT =
  "juno17w6elnyngj0w7j9yqeqqctvnsmadg3zcxgguuzpjxyx8arzqa50qveg2x5";
export const VESTING_CONTRACT =
  "juno18x8vkjxhae9msjf9eg52yt4wzty0p4vvyv90wuhpx2lmcf2vqetqjzq0qh";
export const STAKING_CONTRACT =
  "juno1a3t5zwqa87dg6z487gfjw9ag84qy5qtq0adgyputkv73t4q9x66sf8he7s";

export const WEFUND_JUNO_ADDRESS =
  "juno1gc3lpde7nx8khqfafw3st7j4ptd6qfccu6y04a";
export const WEFUND_BSC_ADDRESS = "0x0dc488021475739820271d595a624892264ca641";
export const WEFUND_TRON_WALLET = "TJ512gBWfie4ett3u8nmyYeuZHQXDamcuQ";
export const WEFUND_POLYGON_WALLET =
  "0x10411e941395301eecea63bc068383b801e01e0a";
export const WEFUND_TRUST_BNB_WALLET =
  "bnb1na0j6fvjwgxrd4g6stu32wquwgce54msly0tth";
export const WEFUND_NEAR_WALLET = "staking_treasury.testnet";
export const WEFUND_ELROND_WALLET =
  "erd1whmvknyspkqzhk20m2k3n7q9cypm69l0ezthefnqll9curk8ug5q0lwsn2";

export const SUCCESS_OPTION: any = {
  position: "bottom-right",
  type: "success",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const ERROR_OPTION: any = {
  position: "bottom-right",
  type: "error",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount)",
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

export const WEFUND: any = {
  project_status: "WefundVote",
  backerbacked_amount: "180000000000",

  cofounder_name: "",
  country: "",
  creator_wallet: "terra1qvyj7tqs35hckd395rglc7lsyf2acuhgdcmj77",
  project_collected: "600000",
  project_company: "A.I WeFund",
  project_createddate: "28/3/2022",
  project_description:
    "WeFund is a community crowdfunding incubator for blockchain and real-world projects. WeFund's mission is to host high-quality projects that align with WeFund's investor community. Community-driven decisions on the platform for 100% transparency. Project funds managed exclusively on Terra's Anchor protocol using smart contracts and following project milestones.\n\n",
  project_ecosystem: "Terra",
  project_email: "",
  project_id: "1",
  project_logo: "",
  project_milestones: [
    {
      milestone_amount: "600000",
      milestone_description: "",
      milestone_enddate: "2022-03-31",
      milestone_name: "1",
      milestone_startdate: "2022-03-01",
      milestone_status: "0",
      milestone_step: "0",
      milestone_type: "1",
      milestone_votes: [],
    },
  ],
  project_saft: "WeFund_SAFT.docx",
  project_teammembers: [
    {
      teammember_description:
        "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the hackathon organized by Terraform Labs. He has a wealth of experience in coding, with a deep understanding of C, C++, Javascript, VBA, Java, Python, Rust language (to name a few). In 2018 he moved his focus into Solidity, PHP, & HTML 5, to follow his vision of creating advanced Web 3.0 applications integrated with the blockchain. His role is to ensure delivery of smart contracts, web app, and technical infrastructure, as well as managing the business side of the project. From the business side, he had several businesses before such as a Natural Mosquito Solution based on Bali, hotel & restaurant (Ristorante-Bar Lanca) in Switzerland, and a smart-home startup to reduce electricity consumption. Most of the businesses he founded had an ROI within less than 1 year.\n\n",
      teammember_linkedin: "",
      teammember_name: "Andrea Bello ",
      teammember_role: "Co-Founder & CEO & Co-CTO",
    },
    {
      teammember_description:
        "A dynamic individual who worked at Tencent as an operation specialist, in the partnership division. Before Tencent, she was senior partnership manager at Bigo. She previously held a senior account executive position at one of the digital marketing agencies under Jet Group and was a manager at Waves, who successfully helped founders to raise $1.2M in pre-seed funding, before turning her attention to crypto. She is one of the founding partners and driving forces behind the concept of WeFund. She was on the core team behind the hackathon project of Fan$quad together with the other ex co-founder.\n\n",
      teammember_linkedin: "",
      teammember_name: "Ika Afifah ",
      teammember_role: "Co-Founder & CMO",
    },
    {
      teammember_description:
        "World explorer, entrepreneur, and blockchain technology enthusiast. Came from a career in Silicon Valley building web applications during the dot-com boom. Wanting to do it all over again, this time helping to build Web 3.0.\n\n",
      teammember_linkedin: "",
      teammember_name: "Jason Galvin ",
      teammember_role: "Co-CTO",
    },
    {
      teammember_description:
        "Comes from a background in investment and corporate finance. After completing his education, he worked as a Business Analyst for a large tech company in Seattle, Washington USA building AI applications to identify high-risk sale transactions. He now is an Investment Manager for a prestigious silicon valley venture capital firm located in Jakarta, Indonesia managing investment deals in the Southeast Asia region.\n\n",
      teammember_linkedin: "",
      teammember_name: "Austin Taylor ",
      teammember_role: "COO",
    },
  ],
  project_title: "WeFund",
  project_website: "",
  project_whitepaper: "",
  service_charity: "0",
  service_wefund: "5",
  professional_link: "",
  token_addr: "",
  vesting: [
    {
      stage_after: "0",
      stage_amount: "0",
      stage_period: "0",
      stage_price: "0",
      stage_soon: "0",
      stage_title: "Seed",
    },
  ],
};
