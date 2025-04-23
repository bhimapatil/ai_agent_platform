from master_agent import MasterAgent
from config import settings

class GenericChatbotAgent:
    def __init__(self):

        self.master_agent = MasterAgent(api_key=settings.GOOGLE_API_KEY)

    def chat(self, prompt: str) -> str:
        return self.master_agent.generate_content(model="gemini-2.0-flash", contents=prompt)

# Example usage
if __name__ == "__main__":
    chatbot = GenericChatbotAgent()
    print("Chatbot is ready! Type 'exit' to quit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        try:
            response = chatbot.chat(user_input)
            print("Chatbot:", response)
        except Exception as e:
            print("Error:", str(e))
