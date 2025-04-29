import { AgentCard } from '../components/agent-card'

const agents = [
  {
    id: "1",
    name: "Research Assistant",
    description: "Helps with academic research and paper summaries",
    imageUrl: "/research_ai_white.png", // Fix the path to use URL path, not file system path
    capabilities: ["Research", "Summarization", "Citation"]
  },
  {
    id: "2",
    name: "Code Helper",
    description: "Assists with programming and debugging code",
    imageUrl: "/code_helper_black.png", // Fix the path to use URL path, not file system path
    capabilities: ["Code Generation", "Debugging", "Code Review"]
  },
  {
    id: "3",
    name: "Data Analyst",
    description: "Analyzes data and generates insights",
    imageUrl: "/ds_white.png", // Fix the path to use URL path, not file system path
    capabilities: ["Data Analysis", "Visualization", "Statistics"]
  },
  {
    id: "4",
    name: "Writing Assistant",
    description: "Helps with content creation and editing",
    imageUrl: "/wa_ai_black.png", // Fix the path to use URL path, not file system path
    capabilities: ["Content Creation", "Editing", "Proofreading"]
  },
  {
    id: "5",
    name: "Document Processor",
    description: "Extracts information from documents",
    imageUrl: "/doc_processor_ai_black.png",
    capabilities: ["Text Extraction", "Document Analysis", "Information Retrieval"]
  },
  {
    id: "6",
    name: "General Assistant",
    description: "General-purpose conversational AI",
    imageUrl: "/genral_ai_black.png", // Ensure the image is optimized for size
    capabilities: ["Conversation", "Q&A", "Information"]
  
  }
]

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <header className="mb-16 text-center">
        <div className="relative">
          <h1 className="relative text-5xl font-extrabold mb-6 tracking-tight text-gray-100">
            Welcome to AI Agent Platform
          </h1>
          <div className="w-24 h-1 mx-auto bg-gray-200 rounded-full mb-6"></div>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose an AI agent to assist you with your tasks and unlock new possibilities
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 direction-rtl">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            id={agent.id}
            name={agent.name}
            description={agent.description}
            imageUrl={agent.imageUrl}
            capabilities={agent.capabilities}
          />
        ))}
      </div>
    </div>
  )
}
