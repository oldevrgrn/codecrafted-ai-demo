export type CaseStudySection = {
  text: string;
  stat: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  oneLiner: string;
  category: string;
  problem: CaseStudySection;
  solution: CaseStudySection;
  results: CaseStudySection;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "legal-insights-and-doc-generation",
    title: "Legal Insights And Doc Generation",
    oneLiner:
      "The company leveraged Code Crafted's generative AI capabilities to automate and streamline its legal document generation process",
    category: "GEN AI",
    problem: {
      text: "The company's legal team spent significant time manually drafting repetitive legal documents and position statements, which reduced efficiency and increased operational costs",
      stat: "document creation time went down by 70%",
    },
    solution: {
      text: "Implemented Code Crafted's LLM solution, trained on the company's legal templates and historical documents to automatically generate high-quality legal correspondence and position statements",
      stat: "generated an average document size of 50 pages",
    },
    results: {
      text: "Document generation time was reduced significantly",
      stat: "queries resolved with 95% accuracy",
    },
  },
  {
    slug: "complex-doc-generation",
    title: "Complex Doc Generation",
    oneLiner:
      "The law firm utilized Code Crafted's generative AI capabilities to automate the creation of demand letters",
    category: "GEN AI",
    problem: {
      text: "Manual creation of demand letters was time-consuming and resource-intensive, requiring significant attorney and paralegal time",
      stat: "improved productivity by 20%",
    },
    solution: {
      text: "Implemented Code Crafted's LLM solution and trained on legal templates to generate customized demand letters automatically",
      stat: "consistent legal language and formatting",
    },
    results: {
      text: "Successfully demonstrated the ability to generate accurate and legally compliant demand letters",
      stat: "reduced draft creation time by 80%",
    },
  },
  {
    slug: "complex-insights-and-ai-decision-making",
    title: "Complex Insights And AI Decision Making",
    oneLiner:
      "The company used Code Crafted to process court decisions and self-enabled the ability to aggregate findings from court decisions",
    category: "GEN AI",
    problem: {
      text: "The company's legal team was spending significant time manually drafting repetitive legal documents and position statements, leading to reduced efficiency and increased operational costs",
      stat: "reduced document creation time 70%",
    },
    solution: {
      text: "Implemented Code Crafted's LLM solution trained on the company's legal templates and historical documents to generate high-quality legal correspondence and position statements automatically",
      stat: "reduced operational costs by 35%",
    },
    results: {
      text: "Achieved significant time savings on document creation",
      stat: "improved employee productivity by 20%",
    },
  },
  {
    slug: "financial-business-intelligence",
    title: "Financial Business Intelligence",
    oneLiner:
      "Code Crafted helped the company improve employee productivity through chat-based solutions for financial and usability queries",
    category: "GEN AI",
    problem: {
      text: "The employees in the company struggled to access and get financial information from portfolio and transactional data",
      stat: "95% accuracy in query response",
    },
    solution: {
      text: "Code Crafted helped the company with a chat-based solution that differentiated usability queries from financial queries and provided query responses from Zendesk and Portfolio, transactional data, respectively",
      stat: "35% reduction in query resolution time",
    },
    results: {
      text: "Implemented the Code Crafted AI solution and achieved 95% accuracy in response rate",
      stat: "reduced operational expenses by 20%",
    },
  },
  {
    slug: "document-analysis-and-information-extraction",
    title: "Document Analysis And Information Extraction",
    oneLiner: "The company used Code Crafted to minimize labor-intensive, repetitive work",
    category: "GEN AI",
    problem: {
      text: "The company wanted to minimize the labor-intensive tasks of extracting information from large volumes of documents",
      stat: "improved employee productivity by 20%",
    },
    solution: {
      text: "Code Crafted provided a chat-based GenAI solution that helped the employees extract information efficiently",
      stat: "90% accuracy in responses",
    },
    results: {
      text: "The company automated its labor-intensive tasks and improved efficiency",
      stat: "more than 10K documents processed",
    },
  },
  {
    slug: "ai-brain-for-hr",
    title: "AI Brain For HR",
    oneLiner: "The company wanted to enable AI solutions to improve HR efficiency",
    category: "GEN AI",
    problem: {
      text: "The company struggled to efficiently provide access to the correct policy-related documents and queries to its employees",
      stat: "automated response to 90% of queries",
    },
    solution: {
      text: "Code Crafted provided a chatbot to retrieve relevant HR documents and policies efficiently and answer queries accurately",
      stat: "reduced operational expenses by 15%",
    },
    results: {
      text: "Successfully automated the HR query responses and provided relevant policy documents",
      stat: "reduced query resolution time by 30%",
    },
  },
  {
    slug: "customer-call-analysis",
    title: "Customer Call Analysis",
    oneLiner:
      "The company used Code Crafted to identify key pieces of information from customer call transcripts and classify them",
    category: "GEN AI",
    problem: {
      text: "The company wanted to reduce costs by automating the categorization of calls based on the transcripts",
      stat: "classified call records into 15 classes",
    },
    solution: {
      text: "Used Code Crafted's named entity recognition model to automate this process",
      stat: "achieved an accuracy of 99%",
    },
    results: {
      text: "Achieved 99% accuracy in classifying calls, saving multiple hours of human effort",
      stat: "aggregated over 100 datasets",
    },
  },
  {
    slug: "customer-support-bot",
    title: "Customer Support Bot",
    oneLiner: "Used Code Crafted to create DataLLM for all customer insurance policies",
    category: "GEN AI",
    problem: {
      text: "The company wanted to be able to search all insurance policies based on various data fields",
      stat: "30% decrease in daily support time",
    },
    solution: {
      text: "Used Code Crafted's data LLM to index and enable search on all policies",
      stat: "20+ searchable fields",
    },
    results: {
      text: "Saved millions of dollars in support agent time and improved customer satisfaction scores",
      stat: "millions of documents processed",
    },
  },
  {
    slug: "transcription-analysis",
    title: "Transcription Analysis",
    oneLiner:
      "The company used Code Crafted to streamline customer service operations by automating the analysis of call transcripts",
    category: "GEN AI",
    problem: {
      text: "The company spent too much time and resources manually categorising call transcripts to improve customer service",
      stat: "improved productivity by 30%",
    },
    solution: {
      text: "Used text classification and extraction solutions to build a model that could analyse the call transcripts",
      stat: "automated transcript reviews with 99% accuracy",
    },
    results: {
      text: "Increased workplace efficiency, nearly eliminating manual reviews",
      stat: "aggregated data from 100+ datasets",
    },
  },
  {
    slug: "financial-analysis",
    title: "Financial Analysis",
    oneLiner:
      "The company leveraged Code Crafted's AI Workflows and GenAI solutions to answer complex financial queries",
    category: "GEN AI",
    problem: {
      text: "The company struggled to manage and provide efficient access to data and the ability to derive insights from the large and complex data that existed",
      stat: "20% increase in operational efficiency",
    },
    solution: {
      text: "Code Crafted helped the company convert natural language queries to SQL queries to get accurate results with APIs as complex as that of with 30k endpoints",
      stat: "achieved 80% accuracy in data extraction",
    },
    results: {
      text: "The company used Code Crafted's AI Workflows to work with their complex APIs",
      stat: "works with APIs with more than 30k endpoints",
    },
  },
  {
    slug: "shopping-recommendation-engine",
    title: "Shopping Recommendation Engine",
    oneLiner:
      "The company implemented Code Crafted's AI Workflows to enhance customer service and offload general tasks from employees",
    category: "GEN AI",
    problem: {
      text: "The company faced challenges in providing efficient and personalized customer service experiences",
      stat: "20% decrease in customer fall-offs",
    },
    solution: {
      text: "Code Crafted implemented an AI-driven web application for in-store customers, which provides personalized product recommendations and a chatbot to answer queries",
      stat: "automated 80% of Customer support",
    },
    results: {
      text: "Improved customer experience",
      stat: "reduced operational costs by 10%",
    },
  },
  {
    slug: "ai-applied-to-biotech",
    title: "AI Applied To BioTech",
    oneLiner: "Code Crafted helped the company manage and analyze large data from thousands of lab experiments",
    category: "GEN AI",
    problem: {
      text: "The company struggled to find an efficient system to track multiple concurrent experiments and query historical results, causing reduced productivity and knowledge gaps",
      stat: "55% improvement in overall productivity",
    },
    solution: {
      text: "Implemented a specialized ChatLLM-style interface that processes tabular experiment data, enabling users to query historical experiment results and generate aggregated insights across multiple experiments through simple natural language prompts",
      stat: "50% reduction in time spent in retrieving data",
    },
    results: {
      text: "Improved productivity and access to data to derive meaningful insights for the users in the company",
      stat: "60% reduction in time spent on data analysis",
    },
  },
  {
    slug: "complex-classifier",
    title: "Complex Classifier",
    oneLiner:
      "The company leveraged Code Crafted to automate classifying small and medium-sized businesses (SMBs) into appropriate Standard Industrial Classification (SIC) codes",
    category: "STRUCTURED ML",
    problem: {
      text: "Manual assignment of SIC codes for SMBs was time-consuming and error-prone, creating bottlenecks in the lending process and requiring significant human resources",
      stat: "reduced manual processing time by 80%",
    },
    solution: {
      text: "Implemented Code Crafted's integrated AI solution combining conversational AI, generative AI, and machine learning capabilities to automatically determine accurate SIC codes based on business information from various sources",
      stat: "achieved over 85% accuracy in SIC code classification",
    },
    results: {
      text: "Achieved industry-leading accuracy in SIC code mapping while significantly reducing processing time",
      stat: "supports batch processing capabilities",
    },
  },
  {
    slug: "predictive-models-in-sales-and-marketing",
    title: "Predictive Models In Sales And Marketing",
    oneLiner:
      "The company used Code Crafted to score and prioritize leads to efficiently allocate its sales and marketing resources",
    category: "STRUCTURED ML",
    problem: {
      text: "The company wanted to optimize marketing and sales resources by prioritizing the leads to target",
      stat: "7X improvement in conversions",
    },
    solution: {
      text: "Trained and deployed a Code Crafted lead scoring model that helps the company determine the top leads to target",
      stat: "trained on ~10M leads",
    },
    results: {
      text: "Lead scoring helped the company optimize its sales & marketing resources and achieve higher growth",
      stat: "handled 2Bn+ events",
    },
  },
  {
    slug: "anomaly-detection",
    title: "Anomaly Detection",
    oneLiner: "The company used Code Crafted to build an anomaly model to detect quality of service issues",
    category: "STRUCTURED ML",
    problem: {
      text: "Reduce churn by proactively reaching out to customers experiencing quality of service issues",
      stat: "processed user session data from 2.5M customers in real-time",
    },
    solution: {
      text: "Used Code Crafted's anomaly detection model to identify abnormalities in user session data",
      stat: "calibrated on 2+ TB of data and over 1Bn events",
    },
    results: {
      text: "Identified 12 types of service issues that could cause a customer to churn using three different methods",
      stat: "identified 12 types of service issues",
    },
  },
  {
    slug: "smart-solar-panel-placement-with-computer-vision",
    title: "Smart Solar Panel Placement With Computer Vision",
    oneLiner:
      "The company utilised Code Crafted's computer vision capabilities to automate the detection of home roofs, angles, and obstructions, streamlining the solar panel placement process",
    category: "STRUCTURED ML",
    problem: {
      text: "The manual process of assessing home roofs for solar panel placement was time-consuming, prone to errors, and required significant human effort, leading to inefficiencies in project timelines",
      stat: "reduced roof assessment time by 60%",
    },
    solution: {
      text: "Implemented Code Crafted's computer vision solution to analyse visual data of home roofs, automatically detecting roof angles, obstructions, and other relevant features to optimise solar panel placement",
      stat: "5X improvement in operational efficiency",
    },
    results: {
      text: "The process of roof assessment and solar panel placement planning was significantly streamlined, improving operational efficiency",
      stat: "enhanced project completion timelines by 40%",
    },
  },
  {
    slug: "marketing-spend-optimization",
    title: "Marketing Spend Optimization",
    oneLiner:
      "The company used Code Crafted's traffic forecasting model to find the optimal distribution of the marketing budget across different media channels",
    category: "OPTIMIZATION",
    problem: {
      text: "The company needed help optimizing for maximum footfall in their retail stores for a fixed marketing budget",
      stat: "96% accuracy in traffic predictions",
    },
    solution: {
      text: "Code Crafted provided a traffic forecasting model and an optimization tool to optimize the distribution of the marketing budget across different media channels",
      stat: "forecasts up to 13 weeks in advance",
    },
    results: {
      text: "Accurate traffic predictions and efficient allocation of marketing spends",
      stat: "15% increase in footfall",
    },
  },
  {
    slug: "price-optimization",
    title: "Price Optimization",
    oneLiner: "Code Crafted helped the company discover the ideal price point for its products, optimizing for the highest revenue/profits",
    category: "OPTIMIZATION",
    problem: {
      text: "The company struggled with figuring out the ideal price points for its product",
      stat: "improved net profits per guest by 10%",
    },
    solution: {
      text: "Code Crafted provided a regression model to deduce the products' price sensitivity and ideal price point",
      stat: "90% accuracy in price sensitivity deductions",
    },
    results: {
      text: "The company improved profits and revenue",
      stat: "ease of price experimentation without losing customers",
    },
  },
];
