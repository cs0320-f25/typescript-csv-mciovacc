# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

1. In my testing, I found that the csvParser does not properly handle additional quotation marks, it incorrectly parses so that if someone has quotation marks in there name, such as a nickname, it will not run properly

2. I also found that commas are incorrectly parsed if they are also a part of a name, such as someone giving their first and last name or using a comma to denote they are half a year older.

3. It does not make sense for the age number to be formatted as a string, should be changed to a number type.

4. Fields are not type based, so they just appear as strings but they could be labeled properly.

- #### Step 2: Use an LLM to help expand your perspective.

Result I was given after asking some of the most common issues with parsing CSV files in Typescript:

1.  Quoted fields with commas or newlines
Example: "Smith, John","123 Main St\nApt 4"
A parser must keep this as one field, not split it.

2.	Escaped quotes inside quoted fields
Example: "He said ""hello""" should parse as He said "hello".
	
3.	Inconsistent line endings and final row
Handle \n, \r\n, and files with or without a trailing newline.

4.	Ragged rows (too many or too few columns)
Some rows might have missing fields or extra delimiters; you need a clear policy (error, pad, or truncate).

In my initial thoughts and tests, I tested the impact of having commas placed within the fields, as well as how extra quotation marks would affect the parsing function. This was clear overlap between my thoughts and the LLM's response. The second two points were new for me, and I needed to clarifiy what they meant. 

The point regarding new lines is challenging because I was unsure if that was something necessary to work on in this sprint or in this challenge as a whole, because that issue would be in the csv file setup. I am saving this aspect for the next sprint.


- #### Step 3: use an LLM to help expand your perspective.


Based on my conversation and testing, the four enhancements that I believe are most important for next weeks sprint are:

1. Additional improperly placed quotation marks (From me, LLM noted it as well). This is a functionality edge case because the parser is incorrectly breaking the input. User story: As a user, I can parse rows if extra quotation marks occur so that I can account for nicknames or errors without losing functionality.

2. Additional improperly placed commas (I had this thought initially, LLM noted it as well). This is also a functionality edge case because the incorrect parsing is occuring. User story: As a user, I can parse rows with extra commas so that I keep my fields together correctly.

3. Misplaced blank spaces (From me). This is extensibility because the caller may have issues with extra blank space in the future but it does not necessarily cause improper parsing. User story: As a user, I can parse without manually removing blank spaces so that my output is properly formatted.

4. Newline issue (From LLM). I believe this is also functionality because improper parsing on a newline occurs, which means the csvParse functionality is not intact. User story: As a user, I can parse with line break errors so that I do not have output with extra spaces or fields.

I felt that my initial ideas were easy to test and had valid overlap with the results from the conversation with the LLM. I also felt I benefitted from the LLM input in terms of adjustments that need to be made to the parser. I felt that the edge cases I highlighted all resonated well with me and I am looking forward to implementing fixes in future sprints.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI): bowen2
#### Total estimated time it took to complete project: 8 hrs-> 4 for typescrpit documentation review, 3 for testing and parseCSV changes
#### Link to GitHub Repo: https://github.com/cs0320-f25/typescript-csv-mciovacc.git
