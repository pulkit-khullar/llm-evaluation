from deepeval.metrics import FaithfulnessMetric
from deepeval.test_case import LLMTestCase

def Faithfulness(user_input, bot_output, llm_context, chat_history):

    metric = FaithfulnessMetric(
        threshold=0.5,
        model="gpt-4",
        include_reason=True
    )

    test_case = LLMTestCase(
        input=user_input, # User Question
        actual_output=bot_output, # Bot Answer
        context=llm_context, # LLM Initial Context
        retrieval_context=chat_history # Chat history
    )

    metric.measure(test_case)
    return metric
