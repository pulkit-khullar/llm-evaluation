from deepeval.metrics import SummarizationMetric
from deepeval.test_case import LLMTestCase

def Summarization(user_input, bot_output, llm_context, chat_history):

    metric = SummarizationMetric(
        threshold=0.7,
        model="gpt-4",
        include_reason=True,
        assessment_questions=[
            "Is the coverage score based on a percentage of 'yes' answers?",
            "Does the score ensure the summary's accuracy with the source?",
            "Does a higher score mean a more comprehensive summary?"
        ]
    )

    test_case = LLMTestCase(
        input=user_input, # User Question
        actual_output=bot_output, # Bot Answer
        context=llm_context, # LLM Initial Context
        retrieval_context=chat_history # Chat history
    )

    metric.measure(test_case)
    return metric
