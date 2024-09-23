from deepeval import evaluate
from deepeval.metrics import AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase

def AnswerRelevancy(user_input, bot_output, llm_context, chat_history):

    metric = AnswerRelevancyMetric(
        threshold=0.7,
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
    # print(metric.score)
    # print(metric.reason)
    return metric
    # return {
    #     'score': metric.score,
    #     'reason': metric.reason
    # }
