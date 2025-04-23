from google import genai
from config import settings

class MasterAgent:
    def __init__(self, api_key: str):
        self.client = genai.Client(api_key=api_key)

    def generate_content(self, model: str, contents: str) -> str:
        response = self.client.models.generate_content(model=model, contents=contents)
        return response.text

# Example usage
# if __name__ == "__main__":
#     master_agent = MasterAgent(api_key=settings.GOOGLE_API_KEY)
#     response = master_agent.generate_content(
#         model="gemini-2.0-flash", contents="Explain how AI works in a few words"
#     )
#     print(response)