from dotenv import dotenv_values, load_dotenv

#example 1
environment_variables = dotenv_values()
print(environment_variables["SOMETHING"])

#example 2
import os

load_dotenv()
print(os.getenv("SOMETHING"))


